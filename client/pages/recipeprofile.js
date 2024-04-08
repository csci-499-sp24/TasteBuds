import Link from "next/link";

function RecipeProfiles(){
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
        <div class="searchbar">
          <input class ="input-field"
            type="text" 
            placeholder="Search..."
        />
        </div>
        <section>
          <div class="grid-container">
            <div><a href="/recipeInfo" target="_blank" rel="noopener noreferrer"><img src="https://img.spoonacular.com/recipes/1096053-556x370.jpg"/></a>GF Vegan Creamy Broccoli Pasta</div>
            <div><a href="https://spoonacular.com/recipes/cajun-lobster-pasta-1614055"><img src="https://img.spoonacular.com/recipes/636732-556x370.jpg"/></a>Cajun Lobster Pasta</div>
            <div><a href="https://spoonacular.com/recipes/pasta-casserole-with-zucchini-and-chicken-1210669"><img src="https://img.spoonacular.com/recipes/686582-556x370.jpg"/></a>Pasta casserole with zucchini and chicken</div>  
            <div><a href="https://spoonacular.com/recipes/pasta-with-yogurt-pesto-138803"><img src="https://img.spoonacular.com/recipes/655806-556x370.jpg"/></a>Pesto & Yogurt Pasta</div>
            <div><a href="https://spoonacular.com/recipes/ratatouille-pasta-760844"><img src="https://img.spoonacular.com/recipes/657933-556x370.jpg"/></a>Ratatouille Pasta</div>
            <div><a href="https://spoonacular.com/recipes/broccoli-sausage-and-fresh-basil-pasta-1596615"><img src="https://img.spoonacular.com/recipes/636238-556x370.jpg"/></a>Broccoli, Sausage and Fresh Basil Pasta</div>
          </div>
        </section>
      </div>
    )
}
export default RecipeProfiles;