import Link from "next/link";

function recipeInfo(){
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
                <div className="stats">
                    <ul><i class="far fa-dollar-sign">Price per serving: $2.01</i></ul>
                    <ul><i class="fas fa-star"></i>Rating(out of 10): 1/10</ul>
                    <ul><i class="far fa-meh"></i>Difficulty: 5/10 </ul>
                    <ul><i class="far fa-clock"></i>Time needed: 35 mins</ul>
                </div>
                <div className="description">
                    <details>
                    <summary>Description:</summary>
                    <p> GF Vegan Creamy Broccoli Pasta might be just the main course you are searching for. 
                        This recipe serves 4 and costs $2.01 per serving. 
                        One portion of this dish contains approximately 17g of protein, 27g of fat, and a total of 515 calories. 
                        1 person found this recipe to be tasty and satisfying. 
                        If you have water, water, sea salt, and a few other ingredients on hand, you can make it. 
                        From preparation to the plate, this recipe takes approximately 35 minutes. It is brought to you by Foodista. 
                        It is a good option if you're following a gluten free, dairy free, lacto ovo vegetarian, and vegan diet. 
                        Similar recipes include Creamy Vegan Broccoli and Tempeh Bacon Pasta, Vegan Pasta : Creamy Pasta Pomodoro, and Vegan Creamy Broccoli Soup. </p>
                    </details>
                </div>
                <div className="review">
                    <details>
                    <summary>Review:</summary>
                    <p>No one wine will suit every pasta dish. 
                        Pasta in a tomato-based sauce will usually work well with a medium-bodied red, such as a montepulciano or chianti. 
                        Pasta with seafood or pesto will fare better with a light-bodied white, such as a pinot grigio. 
                        Cheese-heavy pasta can pair well with red or white - you might try a sangiovese wine for hard cheeses and a chardonnay for soft cheeses. 
                        We may be able to make a better recommendation if you ask again with a specific pasta dish.</p>
                    </details>
                </div>
                <div className="ingredients">
                    <ul>Ingredients needed:</ul>
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
                    <ul>Equipment needed:</ul>
                    <li>-Steamer basket</li>
                    <li>-Whisk</li>
                    <li>-Sauce pan</li>
                    <li>-Stove</li>
                    <li>-Bowl</li>
                    <li>-Pot</li>
                </div>
                <div className="next-page">
                    <button><Link href='/recipeInfo2'>Next Page</Link></button>
                </div>
            </section>
        </div>
    </div>
    )
}
export default recipeInfo;