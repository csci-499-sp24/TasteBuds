import { useState, useEffect } from "react"; // React Hooks - for managing states of components

import Link from "next/link";
<<<<<<< HEAD
import Sidebar from "./sidebar";

function Search() {
  const [searchQuery, setSearchQuery] = useState("");  // State variable to hold the search query
  const [searchResults, setSearchResults] = useState([]); // State variable to hold the search results
  const [isLoading, setIsLoading] = useState(false);  // State variable to indicate if data is loading
  const [filters, setFilters] = useState({  // State variable to hold filter criteria
    cuisine: "",
    diet: "",
    // more filter criterias, look into doc
  }); 
=======
import { Autocomplete, AutocompleteItem, Chip, Divider, Card, CardHeader, CardBody, CardFooter, Image, Button } from "@nextui-org/react";
import Sidebar from "./sidebar";

function SearchByIngredient() {
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [ingredientList, setIngredientList] = useState([]);
  const [fetchedIngredients, setFetchedIngredients] = useState([]);
>>>>>>> 4ef6c7947043a941a213f6c7b8d2d492b80aa849

  // useEffect hook to handle key press events (specifically Enter key) and trigger search
  useEffect(() => {
<<<<<<< HEAD
    // Event handler function to handle Enter key press
    const handleEnterKeyPress = (event) => {
      if (event.key === "Enter") { // Check if the pressed key is Enter
        fetchRecipes(searchQuery, filters); // Call fetchRecipes when Enter key is pressed
      }
    };
=======
    fetchIngredients();
  }, []);
>>>>>>> 4ef6c7947043a941a213f6c7b8d2d492b80aa849


    document.addEventListener("keydown", handleEnterKeyPress);  // When any key is pressed, the handleEnterKeyPress function will be called.n

    return () => {
      document.removeEventListener("keydown", handleEnterKeyPress); //  cleanup function for the effect. it removes the event listener added in the useEffect hook to prevent memory leaks and ensure proper cleanup.
    };
  }, [searchQuery, filters]); // Dependencies: searchQuery and filters, The effect function will run if any of the dependencies change.


  // Function to fetch recipes based on search query and filters
  const fetchRecipes = async (searchQuery, filters) => { // passes search query and filter to fetchrecipes
    setIsLoading(true); // Set loading state to true
    try {
<<<<<<< HEAD
      // Construct query parameters from filters
      const queryParams = Object.entries(filters) //  converts the filters object into an array of key-value pairs,
      .filter(([key, value]) => value !== "") // filters out any key-value pairs where the value is an empty string. 
      .map(([key, value]) => `${key}=${value}`) // maps each key-value pair to a string in the format "key=value",This prepares the key-value pairs to be part of the query parameters in the URL.
      .join("&");
=======
      const ingredientIds = ingredientList.map(ingredient => ingredient.ingredient_id);
      const response = await fetch(process.env.NEXT_PUBLIC_SERVER_URL + `/searchByIngredients`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ ingredientIds })
      });
>>>>>>> 4ef6c7947043a941a213f6c7b8d2d492b80aa849

      const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/searchV2?query=${searchQuery}&${queryParams}`);
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json(); // Parse response JSON data
      setSearchResults(data); // Set search results with fetched data
    } catch (error) {
      console.error("Error fetching recipes:", error);
    } finally {
      setIsLoading(false); // Set loading state to false after fetching completes
    }
  };

<<<<<<< HEAD
  // Event handler to update search query as user types in the search input
  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase(); // Get search query from input and convert to lowercase
    setSearchQuery(query); // Update search query state
  };

  // Event handler to update filter criteria when user selects an option from dropdown
  const handleFilterChange = (event, filterType) => { 
    const filterVal = event.target.value; //event is triggered when dropdown param is pressed, changes type of filter
    setFilters(prevFilters => ({ //filter state is updated, which returns a new state obj
      ...prevFilters, // spread operator (...) copies all key-value pairs from the previous state of the filters object.
      [filterType]: filterVal // updates the specific filter type (filterType) with the new value (filterVal).
    }));
  };

=======
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
    if (ingredientList.length === 1) {
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
    if (ingredient) {
      setIngredientList([...ingredientList, ingredient]);
    } else {
      return;
    }
  };

  //temporary card component
  const recipeCard = (recipe) => {
    console.log(recipe)
    return (
      <Card className="col-span-12 sm:col-span-4 h-[300px] ">
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
          <h4 className="text-white font-medium text-large absolute z-10" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}> {recipe.Recipe.title}</h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-cover"
          src={recipe.Recipe.image}
        />
      </Card>
    );
  }

>>>>>>> 4ef6c7947043a941a213f6c7b8d2d492b80aa849
  return (
    
    <div>
       {/* Sidebar navigation */}
      <input type="checkbox" id="check" />
      <label htmlFor="check">
        <i className="fas fa-bars" id="btn"></i>
        <i className="fas fa-times" id="cancel"></i>
      </label>
<<<<<<< HEAD

      {/* Sidebar component */}
=======
>>>>>>> 4ef6c7947043a941a213f6c7b8d2d492b80aa849
      <Sidebar />

      {/* Main content section */}
      <section>
<<<<<<< HEAD
        <div id="div-center" className="search-wrapper">
          <label htmlFor="search">Search Recipes</label>
          <input
            type="search" 
            id="search"
            value={searchQuery}
            onChange={handleSearch} 
            placeholder="Search recipes..."
            className="input"
          />
           {/* Cuisine filter dropdown */}
          <div className="filter-wrapper">
            <select value={filters.cuisine} onChange={(e) => handleFilterChange(e, 'cuisine')}>
              <option value="">Cuisines</option>
              <option value="Mexican">Mexican</option>
              <option value="italian">Italian</option>
              <option value="vietnamese">Vietnamese</option>
              <option value="african">African</option>
              <option value="asian">Asian</option>
              <option value="american">American</option>
              <option value="british">British</option>
              <option value="cajun">Cajun</option>
              <option value="caribbean">Caribbean</option>
              <option value="chinese">Chinese</option>
              <option value="european">European</option>
              <option value="eastern European">Eastern European</option>
              <option value="french">French</option>
              <option value="german">German</option>
              <option value="greek">Greek</option>
              <option value="indian">Indian</option>
              <option value="irish">Irish</option>
              <option value="japanese">Japanese</option>
              <option value="jewish">Jewish</option>
              <option value="korean">Korean</option>
              <option value="latin american">Latin American</option>
              <option value="mediterranean">Mediterranean</option>
              <option value="middle eastern">Middle Eastern</option>
              <option value="nordic">Nordic</option>
              <option value="spanish">Spanish</option>
              <option value="thai">Thai</option>
            </select>
            {/* Diet filter dropdown */}
            <select value={filters.diet} onChange={(e) => handleFilterChange(e, 'diet')}>
              <option value="">Diets</option>
              <option value="gluten free">Gluten Free</option>
              <option value="vegetarian">Vegetarian</option>
              <option value="lacto vegetarian">Lacto-Vegetarian</option>
              <option value="ovo vegetarian">Ovo-Vegetarian</option>
              <option value="ketogenic">Ketogenic</option>
              <option value="vegan">Vegan</option>
              <option value="paleo">Paleo</option>
              <option value="primal">Primal</option>
              <option value="Low Fodmap">LOW FODMAP</option>
              <option value="whole 30">Whole30</option>
              <option value="GAPS_FULL">GAP FULL</option>
              <option value="fodmap friendly">Fodmap Friendly</option>
              <option value="pescatarian">Pescatarian</option>
              <option value="dairy free">Dairy free</option>
              <option value="lacto ovo vegetarian">Lacto-Ovo Vegetarian</option>
              <option value="paleolithic">Paleolithic</option>
            </select>
            {/* Add more filter dropdowns for other criteria*/}
          </div>
        </div>
        {/* Display search results */}
        <div id="div-center" className="user-recipes" data-user-cards-container>
          {isLoading && <p>Loading...</p>}
          {!isLoading && Array.isArray(searchResults) && searchResults.map(recipe => (
            <div key={recipe.recipe_id} className="card">
              <div className="header" data-header>{recipe.title}</div>
              <img src={recipe.image} alt={recipe.title} className="recipe-image" />
            </div>
          ))}
          {/* Too results */}
          {!isLoading && !Array.isArray(searchResults) && <p>No results found.</p>}
=======
        <div className="flex justify-center mx-atuo">
          <div id="" className=" mt-20">
            <label htmlFor="search">Search Recipes</label>
            <Autocomplete
              label="Select an Ingredient"
              onSelectionChange={handleIngredientSelect}
            >
              {fetchedIngredients.map((ingredient) => (<AutocompleteItem key={ingredient.ingredient_id}>{ingredient.standard_name}</AutocompleteItem>))}
            </Autocomplete>
            <div className="flex gap-4 h-[20px] mt-3">
              {ingredientList &&
                ingredientList.map((ingredient, index) => (
                  <Chip key={index} onClose={() => handleRemoveIngredient(index)}>{ingredient.standard_name}</Chip>
                ))}
            </div>
            <Divider className="my-4" />
            <div className="justify-center flex mx-atuo" id="">
              <div className="mx-atuo">
                {searchResults.some(recipe => recipe.ingredients.length === ingredientList.length) && (
                  <div>
                    <div id="" className="bg-orange-200 rounded p-2 text-center font-bold text-lg border border-white">Recipes that include all ingredients</div>
                    <div style={{ maxHeight: '600px', overflowY: 'auto' }} className=" ">
                      <div className="grid lg:grid-cols-3 gap-5 h-auto ">
                        {!isLoading && Array.isArray(searchResults) && searchResults.map(recipe => (
                          recipe.ingredients.length === ingredientList.length && (
                            <div key={recipe.id} className="col-span-1">
                              {recipeCard(recipe)}
                            </div>
                          )
                        ))}
                      </div>
                    </div>

                  </div>
                )}
              </div>



              {searchResults.some(recipe => recipe.ingredients.length < ingredientList.length && recipe.ingredients.length >= ingredientList.length / 2) && (
                <div className="">
                  <div id="" className="bg-orange-200 rounded p-2 text-center font-bold text-lg border border-white">Recipes that include Most ingredients</div>
                  <div style={{ maxHeight: '600px', overflowY: 'auto' }} className="">
                    <div className="grid lg:grid-cols-3 gap-5 h-auto ">
                      {!isLoading && Array.isArray(searchResults) && searchResults.map(recipe => (
                        (recipe.ingredients.length < ingredientList.length && recipe.ingredients.length >= ingredientList.length / 2) && (
                          <div key={recipe.id} className="col-span-1">
                            {recipeCard(recipe)}
                          </div>
                        )
                      ))}
                    </div>
                  </div>
                </div>
              )}
              <div className="">
                {searchResults.some(recipe => recipe.ingredients.length < ingredientList.length / 2) && (
                  <div>
                    <div id="" className="bg-orange-200 rounded p-2 text-center font-bold text-lg border border-white ">Recipes that include Some ingredients</div>
                    <div style={{ maxHeight: '600px', overflowY: 'auto' }} className="">
                      <div className="grid lg:grid-cols-3 gap-5 h-auto ">
                        {!isLoading && Array.isArray(searchResults) && searchResults.map(recipe => (
                          (recipe.ingredients.length < ingredientList.length / 2) && (
                            <div key={recipe.id} className="col-span-1">
                              {recipeCard(recipe)}
                            </div>
                          )
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
>>>>>>> 4ef6c7947043a941a213f6c7b8d2d492b80aa849
        </div>
      </section>
    </div>
  );
}

export default Search;