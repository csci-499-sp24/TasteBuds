import Link from "next/link";

function recipeInfo2(){
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
            <section>
                <div>
                    <h1 className='text-3xl font-bold text-center mx-4 text-black'>GF Vegan Creamy Broccoli Pasta</h1>
                    </div>
                    <div className="favorite-button">
                        <button><i className="far fa-bookmark">Save to favorites</i></button>
                    </div>
                    <div className="image-container">
                        <img src="https://img.spoonacular.com/recipes/1096053-556x370.jpg"></img>
                    </div>
                <div className="instructions">
                    <details>
                    <summary>Instructions:</summary>
                    <p>
                        Step 1:Make the sauce: Add the coconut milk, 1 cup of water, nutritional yeast and plant-based buttery spread to a medium saucepan and bring to a boil. 
                        Then, reduce the heat to medium-low and simmer for 6-7 minutes.
                    </p>
                    <p>
                        Step 2: Meanwhile, create a slurry by whisking together the potato starch and 1/2 cup of cold water in a small bowl.
                    </p>
                    <p>
                        Step 3: Slowly add the potato starch slurry to the simmering mixture in the saucepan on the stovetop. 
                        Whisk them together, and then let the sauce thicken over medium-low heat for another 3-4 minutes, stirring often.
                    </p>
                    <p>
                        Step 4: Once the sauce has reached the desired thickness, then remove it from the heat and stir in the dried parsley. 
                        Season to taste with salt and white pepper. Cover and set aside.
                    </p>
                    <p>
                        Step 5: Follow package instructions for cooking your pasta noodles until they are al dente.
                    </p>
                    <p>
                        Step 6: While the pasta is boiling, place the chopped broccoli in a steamer basket. 
                    Add an inch of water to a large pot. Place the filled basket inside the pot and bring to a boil on the stove.
                    </p>
                    <p>
                        Step 7: Reduce heat to medium, and steam the broccoli covered for ~5 minutes, or until just tender. Then, remove the pot from heat and uncover.
                    </p>
                    <p>
                        Step 8: To serve, divide the pasta noodles between 4 bowls. Top each with 1/4 of the steamed broccoli and 1/4 of the warm sauce. Enjoy!
                    </p>
                    </details>
                </div>
                <div className="previous-page">
                    <button><Link href='/recipeInfo'>Previous Page</Link></button>
                </div>
            </section>
        </div>    
    )
}
export default recipeInfo2;