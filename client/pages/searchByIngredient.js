import { useEffect, useState } from "react"; // React Hooks - for managing states of components
import Link from "next/link";
import { Autocomplete, AutocompleteItem, Chip, Divider } from "@nextui-org/react";

function SearchByIngredient() {
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [ingredientList, setIngredientList] = useState([]);
  const [fetchedIngredients, setFetchedIngredients ] = useState([]);

  useEffect(() => {
    fetchIngredients();
  },[]);

  useEffect(() => {
    fetchRecipes();
  }, [ingredientList]);

  const fetchRecipes = async () => { // passes filter to fetchrecipes
    setIsLoading(true);
    try {
      const ingredientIds = ingredientList.map(ingredient => ingredient.ingredient_id);
      const response = await fetch(process.env.NEXT_PUBLIC_SERVER_URL + `/searchByIngredients`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ingredientIds})
        });

      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      setSearchResults(data);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchIngredients = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(process.env.NEXT_PUBLIC_SERVER_URL + `/getAllIngredients`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
        });
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      console.log(data);
      setFetchedIngredients(data);
    } catch (error) {
      console.error("Error fetching ingredients:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleRemoveIngredient = (index) => {
    console.log("REMOVE");
    if(ingredientList.length === 1){
      setIngredientList([]);
      return;
    }
    console.log(ingredientList[index]);
    const newList = [...ingredientList.slice(0, index), ...ingredientList.slice(index + 1)];
    setIngredientList(newList);
    return;
  }

  const handleIngredientSelect = async (ingredientId) => {
    const ingredient = fetchedIngredients.find(ingredient => ingredient.ingredient_id === parseInt(ingredientId));
    if (ingredient){
      setIngredientList([...ingredientList, ingredient]);
    } else {
      return;
    }
  };

  //temporary card component
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
          <li><Link href="/home"><i className="fas fa-home"></i>Home</Link></li>  
          <li><Link href="/search"><i className="fas fa-search"></i>Search</Link></li> 
          <li><Link href="/discover"><i className="fas fa-search"></i>Discover</Link></li> 
          <li><Link href="/searchByIngredient"><i className="fas fa-search"></i>Ingredient Search</Link></li> 
          <li><a href="#"><i className="fas fa-star"></i>Saved Recipes</a></li>
          <li><a href="#"><i className="fas fa-cog"></i>User Settings</a></li>
          <li><Link href="/login"><i className="fas fa-sign-in-alt"></i>Login</Link></li>
        </ul>
      </div>
      <section>
          <div id="div-center" className="">
            <label htmlFor="search">Search Recipes</label>
            <Autocomplete 
              label="Select an Ingredient"
              onSelectionChange={handleIngredientSelect}
            >
              {fetchedIngredients.map((ingredient) => (<AutocompleteItem key={ingredient.ingredient_id}>{ingredient.standard_name}</AutocompleteItem>))}
            </Autocomplete>
            <div className="flex gap-4 h-[20px]">
              {ingredientList &&
                ingredientList.map((ingredient, index) => (
                  <Chip key={index} onClose={() => handleRemoveIngredient(index)}>{ingredient.standard_name}</Chip>
              ))}
            </div>
            <Divider className="my-4"/>
            <div>
              <div id="div-center" className="bg-orange-200 rounded p-2 text-center font-bold text-lg border border-white">Recipes that include all ingredients</div>
              <div className="flex flex-nowrap overflow-x-auto gap-5 h-[220px]">
                {!isLoading && Array.isArray(searchResults) && searchResults.map(recipe => (
                  recipe.ingredients.length === ingredientList.length && (
                    recipeCard(recipe)
                  )
                ))}
              </div>
              <div id="div-center" className="bg-orange-200 rounded p-2 text-center font-bold text-lg border border-white">Recipes that include most ingredients</div>
              <div className="flex flex-nowrap overflow-x-auto gap-5 h-[220px]">
                {!isLoading && Array.isArray(searchResults) && searchResults.map(recipe => (
                  (recipe.ingredients.length < ingredientList.length && recipe.ingredients.length >= ingredientList.length/2) && (
                    recipeCard(recipe)
                  )
                ))}
              </div>
              <div id="div-center" className="bg-orange-200 rounded p-2 text-center font-bold text-lg border border-white">Recipes that include some ingredients</div>
              <div className="flex flex-nowrap overflow-x-auto gap-5 h-[220px]">
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