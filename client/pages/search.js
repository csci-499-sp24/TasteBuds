import { useState, useEffect } from "react"; // React Hooks - for managing states of components
import Link from "next/link";

function Search() {
  const [searchQuery, setSearchQuery] = useState("");  // State variable to hold the search query
  const [searchResults, setSearchResults] = useState([]); // State variable to hold the search results
  const [isLoading, setIsLoading] = useState(false);  // State variable to indicate if data is loading
  const [filters, setFilters] = useState({  // State variable to hold filter criteria
    cuisine: "",
    diet: "",
    // more filter criterias, look into doc
  }); 

  // useEffect hook to handle key press events (specifically Enter key) and trigger search
  useEffect(() => {
    // Event handler function to handle Enter key press
    const handleEnterKeyPress = (event) => {
      if (event.key === "Enter") { // Check if the pressed key is Enter
        fetchRecipes(searchQuery, filters); // Call fetchRecipes when Enter key is pressed
      }
    };


    document.addEventListener("keydown", handleEnterKeyPress);  // When any key is pressed, the handleEnterKeyPress function will be called.n

    return () => {
      document.removeEventListener("keydown", handleEnterKeyPress); //  cleanup function for the effect. it removes the event listener added in the useEffect hook to prevent memory leaks and ensure proper cleanup.
    };
  }, [searchQuery, filters]); // Dependencies: searchQuery and filters, The effect function will run if any of the dependencies change.


  // Function to fetch recipes based on search query and filters
  const fetchRecipes = async (searchQuery, filters) => { // passes search query and filter to fetchrecipes
    setIsLoading(true); // Set loading state to true
    try {
      // Construct query parameters from filters
      const queryParams = Object.entries(filters) //  converts the filters object into an array of key-value pairs,
      .filter(([key, value]) => value !== "") // filters out any key-value pairs where the value is an empty string. 
      .map(([key, value]) => `${key}=${value}`) // maps each key-value pair to a string in the format "key=value",This prepares the key-value pairs to be part of the query parameters in the URL.
      .join("&");

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

  return (
    
    <div>
       {/* Sidebar navigation */}
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
          <li><Link href="/discover"><i className="fas fa-search"></i>Discover</Link></li> 
          <li><Link href="/searchByIngredient"><i className="fas fa-search"></i>Ingredient Search</Link></li> 
          <li><a href="#"><i className="fas fa-star"></i>Saved Recipes</a></li>
          <li><a href="#"><i className="fas fa-cog"></i>User Settings</a></li>
          <li><Link href="/login"><i className="fas fa-sign-in-alt"></i>Login</Link></li>
        </ul>
      </div>

      {/* Main content section */}
      <section>
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
              <option value="mexican">Mexican</option>
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
              <option value="Low Fodmap">Low FODMAP</option>
              <option value="whole 30">Whole30</option>
              <option value="GAPS_FULL">GAPs</option>
              <option value="fodmap friendly">Fodmap Friendly</option>
              <option value="pescatarian">pescatarian</option>
              <option value="dairy free">dairy free</option>
              <option value="lacto ovo vegetarian">Lacto-Ovo Vegetarian</option>
              <option value="paleolithic">paleolithic</option>
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
        </div>
      </section>
    </div>
  );
}

export default Search;
