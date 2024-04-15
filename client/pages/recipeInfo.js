"use client";

import Link from "next/link";
import { useSearchParams, useState, useEffect } from "react-router-dom"; // React Hooks - for managing states of components
require('dotenv').config();

function recipeInfo(){
    // https://stackoverflow.com/questions/35352638/how-to-get-parameter-value-from-query-string
    // doesn't work for now since it requires this whole thing to be a Router and I can't figure out how that works
    const [searchParams, setSearchParams] = useSearchParams();

    const getOneRecipe = async (req, res) => { // passes search query and filter to fetchrecipes
            
        const id = searchParams.get("id")


        //const id = req.query
        if (typeof id !== "number") {
            console.error("Given id value is not a number")
        }
        if (typeof id === 0) {
            console.error("Id check failed")
        }
        setIsLoading(true); // Set loading state to true
        try {
            // Construct query parameters from filters
    
            const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/search_by_id?id=${id}`);
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const recipe_data = await response.json(); // Parse response JSON data
            //console.log(recipe_data)
            return recipe_data
            //setSearchResults(data); // Set search results with fetched data
        } catch (error) {
            console.error("Error fetching one recipe:", error);
        } finally {
            setIsLoading(false); // Set loading state to false after fetching completes
        }
    };
    recipe_data = getOneRecipe()
    return(
        <div>
        <input type="checkbox" id="check" />
        <label for="check">
        <i class="fas fa-bars" id="btn"></i>
        <i class="fas fa-times" id="cancel"></i>
        </label>
        <div class="sidebar">
        <header>TasteBuds</header>
        <ul>
            <li><Link href="/"><i class="fas fa-home"></i>Home</Link></li> 
            <li><Link href="/search"><i className="fas fa-search"></i>Search</Link></li>
            <li><Link href="/recipeprofile"><i class="fal fa-apple-alt"></i>Recipe Profiles</Link></li>  
            <li><a href="#"><i class="fas fa-star"></i>Saved Recipes</a></li>
            <li><a href="#"><i class="fas fa-cog"></i>User Settings</a></li>
            <li><Link href="/login"><i class="fas fa-sign-in-alt"></i>Login</Link></li>
        </ul>
        </div>
        <div>
            <title>TasteBuds - Recipe Info</title>
            <section style="background: white;">
                <div>
                <h1 className='text-3xl font-bold text-center mx-4 text-black'>{recipe_data.name}</h1>
                </div>
                <div className="favorite-button">
                    <button><i className="far fa-bookmark">Save to favorites</i></button>
                </div>
                <div className="image-container">
                    <img src="https://img.spoonacular.com/recipes/1096053-556x370.jpg"></img>
                </div>
                <div className="stats">
                    <ul><i class="far fa-dollar-sign">Price per serving: ${recipe_data.price_per_serving}</i></ul>
                    <ul><i class="fas fa-star"></i>Rating(out of 10): PLACEHOLDER</ul>
                    <ul><i class="far fa-meh"></i>Difficulty: PLACEHOLDER </ul>
                    <ul><i class="far fa-clock"></i>Time needed: {recipe_data.ready_in_minutes} mins</ul>
                </div>
                <div className="description">
                    <details>
                    <summary>Description:</summary>
                    <p>{recipe_data.summary}</p>
                    </details>
                </div>
                <div className="review">
                    <details>
                    <summary>Review:</summary>
                    <p>PLACEHOLDER</p>
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
}
export default recipeInfo;