import Link from "next/link";
import { useState, useEffect, } from "react"; // React Hooks - for managing states of components
// import {useParams, useSearchParams} from "react-router-dom"
require('dotenv').config();
//import { useLocation } from 'react-router-dom';
import { useRouter } from "next/router";
// import Sidebar from "./sidebar";

//https://www.joshwcomeau.com/react/the-perils-of-rehydration/
function useHasMounted() {
    const [hasMounted, setHasMounted] = useState(false);
    useEffect(() => {
        setHasMounted(true);
    }, []);
    return hasMounted;
}

/* 
READ ME!

This is an ongoing and failed attempt to implemenet recipe profiles.

The planned idea goes like this
- recipe profile link is in the format [tastebuds link]/recipeInfo?id=[num]
- page reads the numerical value assigned to id, using router.query.id
- page fetches a recipe's information from a Sequelize backend connection
- page fills in the HTML using said info
- page returns the HTML to be shown

Problems encountered:
- useEffect block gets completely bypassed for some reason, causing all of the update calls to be missed
- even when the block gets called, the router.query.id value updates after the block runs
- Several other simpler solutions doesn't work because this isn't a Router thing
- attempts to do everything on the backend failed; returning HTML broke everything
*/

function recipeInfo(){
    const [isLoading, setIsLoading] = useState(false);  // State variable to indicate if data is loading
    const [id, updateId] = useState(-1);
    const [recipeData, setRecipeData] = useState(JSON.parse(`{
        "title": "UNDEFINED NAME",
        "price_per_serving": 69420,
        "ready_in_minutes": -1,
        "summary": "UNDEFINED SUMMARY"
    }`));
    //const [searchParams, setSearchParams] = useSearchParams();
    //const [hasMounted, setHasMounted] = React.useState(false);
    const router = useRouter();
    console.log("starting router, beginning work")
    
    //https://stackoverflow.com/questions/61040790/userouter-withrouter-receive-undefined-on-query-in-first-render
    // router needs time to load or something
    const mounted = useHasMounted()
    console.log(`value of mounted: ${mounted}`)
    if (!mounted) {return null}
    useEffect(()=>{
        console.log("Entered useEffect")
        //setHasMounted(true);
        if(!router.isReady) {
            console.log("router is not yet ready");
            return;
        }
        else if(router.query.id == -1) {
            console.log("id value remains broken for now");
            return;
        }
        else {
            const getOneRecipe = async (id) => { // passes search query and filter to fetchrecipes
                console.log(`getting one recipe with id ${id}`)
                    
                //const id = req.query
                // if (id == null) {
                //     throw new Error("id is undefined")
                // }
                // if (typeof id !== "number") {
                //     throw new Error("Given id value is not a number")
                // }
                // if (typeof id === 0) {
                //     throw new Error("Id check failed")
                // }
                setIsLoading(true); // Set loading state to true
                try {
                    // Construct query parameters from filters
            
                    const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/search_by_id?id=${id}`);
                    if (!response.ok) {
                        throw new Error('Failed to fetch data');
                    }
                    const recipe_data = await response.json(); // Parse response JSON data
                    console.log("Printing recipe data in getOneRecipe:")
                    console.log(recipe_data)
        
                    setRecipeData(recipe_data)
        
                    //setTestData(recipe_data)
                    //setSearchResults(data); // Set search results with fetched data
                } catch (error) {
                    console.error("Error fetching one recipe:", error);
                } finally {
                    setIsLoading(false); // Set loading state to false after fetching completes
                }
            };
            console.log("declared get1recipe")

            // codes using router.query
            console.log("Attempt to return query")
            console.log(router.query)
            console.log(router.query.id)
            const oldId = router.query.id
            updateId(oldId);
            console.log(`updated Id value is: ${id}`)
            getOneRecipe(id)
        }
     
    }, [router.isReady, router.query.id]);
    console.log("passed useEffect")

    // if (id == -1 || recipeData == null) {
    //     console.log(`returning null, id == ${id} or recipeData is undef (${recipeData == null})`);
    //     return null;
    // }

    

    console.log("returning HTML")

    return ( 
        <div>
        <input type="checkbox" id="check" />
        <label htmlFor="check">
            <i className="fas fa-bars" id="btn"></i>
            <i className="fas fa-times" id="cancel"></i>
        </label>
        <div className="sidebar">
        <header>TasteBuds</header>
        <ul>
            <li><Link href="/"><i className="fas fa-home"></i>Home</Link></li> 
            <li><Link href="/search"><i className="fas fa-search"></i>Search</Link></li>
            <li><Link href="/recipeprofile"><i className="fal fa-apple-alt"></i>Recipe Profiles</Link></li>  
            <li><a href="#"><i className="fas fa-star"></i>Saved Recipes</a></li>
            <li><a href="#"><i className="fas fa-cog"></i>User Settings</a></li>
            <li><Link href="/login"><i className="fas fa-sign-in-alt"></i>Login</Link></li>
        </ul>
        </div>
        <div>
            <title>TasteBuds - Recipe Info</title>
            <section style={{background: "white"}}>
                <div>
                <h1 className='text-3xl font-bold text-center mx-4 text-black'>{recipeData.title}</h1>
                </div>
                <div className="favorite-button">
                    <button><i className="far fa-bookmark">Save to favorites</i></button>
                </div>
                <div className="image-container">
                    <img src="https://img.spoonacular.com/recipes/1096053-556x370.jpg"></img>
                </div>
                <div className="stats">
                    <ul><i className="far fa-dollar-sign">Price per serving: ${recipeData.price_per_serving}</i></ul>
                    <ul><i className="fas fa-star"></i>Rating(out of 10): PLACEHOLDER</ul>
                    <ul><i className="far fa-meh"></i>Difficulty: PLACEHOLDER </ul>
                    <ul><i className="far fa-clock"></i>Time needed: {recipeData.ready_in_minutes} mins</ul>
                </div>
                <div className="description">
                    <details>
                    <summary>Description:</summary>
                    <p>{recipeData.summary}</p>
                    </details>
                </div>
                <div className="review">
                    <details>
                    <summary>Review:</summary>
                    <p>PLACEHOLDER</p>
                    </details>
                </div>
                <div className="debug">
                    <details>
                    <summary>Debug return values:</summary>
                    <p>Full JSON values:{JSON.stringify(recipeData)}</p>
                    <p>id recovered: {id}</p>
                    <p>Router query full values: {router.query.id}</p>
                    {/*<p>Testing values: {testData}</p>*/}
                    </details>
                </div>
                <div className="ingredients">
                    <ul>Ingredients needed: PLACEHOLDER</ul>
                    <li>-13.5 oz canned full-fat coconut milk</li>
                    <li>-1 cup water</li>
                    <li>-1/3 cup nutritional yeast</li>
                    <li>-2 Tbps plant-based buttery spread</li>
                    <li>-4 tsps potato starch</li>
                    <li>-1/2 cup water</li>
                    <li>-1 tsp dried parsley</li>
                    <li>-sea salt</li>
                    <li>-white pepper</li>
                    <li>-3 cups gluten-free fusilli</li>
                    <li>-2 heads broccoli</li>
                </div>
                <div className="equipment">
                    <ul>Equipment needed: PLACEHOLDER</ul>
                    <li>-Steamer basket</li>
                    <li>-Whisk</li>
                    <li>-Sauce pan</li>
                    <li>-Stove</li>
                    <li>-Bowl</li>
                    <li>-Pot</li>
                </div>
                {/* <div className="next-page">
                    <button><Link href='/recipeInfo2'>Next Page</Link></button>
                </div> */}
            </section>
        </div>
    </div>
    )
    //const id = queryParams.get('key'); // Retrieve the value of a specific query parameter
    //return output
    //return(<div>Hello world</div>)
}
export default recipeInfo;