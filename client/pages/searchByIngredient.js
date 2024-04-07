import { useEffect, useState } from "react"; // React Hooks - for managing states of components
import Link from "next/link";

function SearchByIngredient() {
  const [searchQuery, setSearchQuery] = useState(""); 
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [ingredientList, setIngredientList] = useState([]);

  useEffect(() => {
    fetchRecipes();
  }, [ingredientList])

  const fetchRecipes = async () => { // passes filter to fetchrecipes
    setIsLoading(true);
    try {
      // Construct query parameters from filters object, right now does not fetch filter data
      //const queryParams = Object.entries(filters) //would use queryParams instead of filters at endpoint for const response
      //  .filter(([key, value]) => value !== "") // Exclude empty filters
      //  .map(([key, value]) => `${key}=${value}`)
      //  .join("&");

      const response = await fetch(process.env.NEXT_PUBLIC_SERVER_URL + `/searchByIngredients`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ingredientList})
        });

      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      console.log(data);
      setSearchResults(data);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchIngredients = async () => { // passes filter to fetchrecipes
    setIsLoading(true);
    try {
      // Construct query parameters from filters object, right now does not fetch filter data
      //const queryParams = Object.entries(filters) //would use queryParams instead of filters at endpoint for const response
      //  .filter(([key, value]) => value !== "") // Exclude empty filters
      //  .map(([key, value]) => `${key}=${value}`)
      //  .join("&");

      const response = await fetch(process.env.NEXT_PUBLIC_SERVER_URL + `/searchByIngredients`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ingredientList})
        });

      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      console.log(data);
      setSearchResults(data);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();

    setSearchQuery(query);
    //fetchRecipes(query); // Call fetchRecipes with updated searchQuery and filter
  };

  const handleRemoveIngredient = (index) => {
    if(ingredientList.length === 1){
      setIngredientList([]);
      return;
    }
    const newList = ingredientList.splice(index, 1);
    setIngredientList([...newList]);
    return;
  }

  const handleEnterKeyPress = (event) => {
    //Check if ingredient exist in database, if not, inform the user
    if (event.key === "Enter") {
      setIngredientList([...ingredientList, searchQuery]);
    }
  };

  //This is meant to be a temporary card component
  const recipeCard = (recipe) => {
    return (
    <div key={recipe.Recipe.recipe_id} className="card flex-none w-[200px] h-[200px] justify-center items-center rounded">
      <div className="header" data-header style={{ maxWidth: '200px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
        {recipe.Recipe.title}
      </div>
        <img src={recipe.Recipe.image} alt={recipe.Recipe.title} className="recipe-image rounded" />
    </div>
  );
  }

  const ingredientTag = (ingredient, index) => {
    return (
      <div className="max-w-xs mx-auto bg-white shadow-md rounded min-w-32 my-4 flex justify-between items-center">
        <div className="text-lg font-semibold flex-grow text-center">{ingredient}</div>
        <button className="flex items-center justify-center hover:bg-red-700 h-6 w-6" onClick={() => handleRemoveIngredient(index)}>X</button>
      </div>
    );
  }

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
          <li><Link href="/searchByIngredients"><i className="fas fa-search"></i>Search By Ingredients</Link></li>
          <li><a href="#"><i className="fas fa-star"></i>Saved Recipes</a></li>
          <li><a href="#"><i className="fas fa-cog"></i>User Settings</a></li>
          <li><Link href="/login"><i className="fas fa-sign-in-alt"></i>Login</Link></li>
        </ul>
      </div>

      <section>
      <div className="w-1/3 relative">
          <div className="absolute top-28 right-16">
            <div className="center">
              {ingredientList &&
                ingredientList.map((ingredient, index) => (
                  ingredientTag(ingredient, index-1)
                ))}
            </div>
          </div>
        </div>
          <div id="div-center" className="center search-wrapper">
            <label htmlFor="search">Search Recipes</label>
            <input
              type="search" 
              id="search"
              value={searchQuery}
              onChange={(e) => handleSearch(e)} 
              onKeyDown={handleEnterKeyPress} // Call handleEnterKeyPress on key down event
              placeholder="Add Ingredients"
            />
          
            <div>
              <div id="div-center" className="bg-white rounded p-2">Recipes that include all ingredients</div>
              <div className="flex flex-nowrap overflow-x-auto gap-5">
                {!isLoading && Array.isArray(searchResults) && searchResults.map(recipe => (
                  recipe.ingredients.length === ingredientList.length && (
                    recipeCard(recipe)
                  )
                ))}
              </div>
              <div id="div-center" className="bg-white rounded p-2">Recipes that include most ingredients</div>
              <div className="flex flex-nowrap overflow-x-auto gap-5">
                {!isLoading && Array.isArray(searchResults) && searchResults.map(recipe => (
                  (recipe.ingredients.length < ingredientList.length && recipe.ingredients.length >= ingredientList.length/2) && (
                    recipeCard(recipe)
                  )
                ))}
              </div>
              <div id="div-center" className="bg-white rounded p-2">Recipes that include some ingredients</div>
              <div className="flex flex-nowrap overflow-x-auto gap-5">
                {!isLoading && Array.isArray(searchResults) && searchResults.map(recipe => (
                  (recipe.ingredients.length < ingredientList.length/2) && (
                      recipeCard(recipe)
                  )
                ))}
              </div>
            </div>
        </div>
      
      </section>
    </div>
  );
}



export default SearchByIngredient;