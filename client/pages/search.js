import { useState } from "react"; // React Hooks - for managing states of components
import Link from "next/link";

function Search() {
  const [searchQuery, setSearchQuery] = useState(""); 
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [filters, setFilters] = useState({
    cuisine: "",
    difficulty: "",
    cooking_time: "",
    diet: "",
    price: "",
    // more filter criterias, look into doc
  }); // filter criteria state

  const fetchRecipes = async (searchQuery, filters) => { // passes filter to fetchrecipes
    setIsLoading(true);
    try {
      // Construct query parameters from filters object, right now does not fetch filter data
      //const queryParams = Object.entries(filters) //would use queryParams instead of filters at endpoint for const response
      //  .filter(([key, value]) => value !== "") // Exclude empty filters
      //  .map(([key, value]) => `${key}=${value}`)
      //  .join("&");

      const response = await fetch(process.env.NEXT_PUBLIC_SERVER_URL + `/searchV2?query=${searchQuery}`);
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

  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);
    fetchRecipes(query, filters); // Call fetchRecipes with updated searchQuery and filter
  };

  const handleEnterKeyPress = (event) => {
    if (event.key === "Enter") {
      fetchRecipes(searchQuery,filters); // Call fetchRecipes when Enter key is pressed
    }
  };

  const handleFilterChange = (event, filterType) => { 
    const filterVal = event.target.value; //event is triggered when dropdown param is pressed, changes type of filter
    setFilters(prevFilters => ({ //filter state is updated, which returns a new state obj
      ...prevFilters, // spreadOperator(...), copies prev state, updates to new filter
      [filterType]: filterVal
    }));
    fetchRecipes(searchQuery, { ...filters, 
      [filterType]: filterVal})// Call fetchRecipes with updated filter
  };

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
          <li><Link href="/discover"><i className="fas fa-search"></i>Discover</Link></li> 
          <li><Link href="/searchByIngredient"><i className="fas fa-search"></i>Ingredient Search</Link></li> 
          <li><a href="#"><i className="fas fa-star"></i>Saved Recipes</a></li>
          <li><a href="#"><i className="fas fa-cog"></i>User Settings</a></li>
          <li><Link href="/login"><i className="fas fa-sign-in-alt"></i>Login</Link></li>
        </ul>
      </div>
      <section>
        <div id="div-center" className="search-wrapper">
          <label htmlFor="search">Search Recipes</label>
          <input
            type="search" 
            id="search"
            value={searchQuery}
            onChange={handleSearch} 
            onKeyDown={handleEnterKeyPress} // Call handleEnterKeyPress on key down event
            placeholder="Search recipes..."
          />
          <div className="filter-wrapper">
            <select value={filters.cuisine} onChange={(e) => handleFilterChange(e, 'cuisine')}>
              <option value="">All Cuisines</option>
              <option value="mexican">Mexican</option>
              <option value="italian">Italian</option>
              <option value="vietnamese">Vietnamese</option>
              {/* Look into more cuisine options from doc or data*/}
            </select>
            <select value={filters.difficulty} onChange={(e) => handleFilterChange(e, 'difficulty')}>
              <option value="">All Difficulties</option>
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
            <select value={filters.cooking_time} onChange={(e) => handleFilterChange(e, 'cooking_time')}>
              <option value="">Cooking Time</option>
              <option value="short_time">Short</option>
              <option value="average_time">Average</option>
              <option value="long_time">Long</option>
            </select>
            <select value={filters.diet} onChange={(e) => handleFilterChange(e, 'diet')}>
              <option value="">Diet Type</option>
              <option value="low_carb">Low Carb</option>
              <option value="keto">Keto</option>
              <option value="fasting">Fasting</option>
              <option value="mediterranean">Mediterranean</option>
            </select>
            <select value={filters.price} onChange={(e) => handleFilterChange(e, 'price')}>
              <option value="">Price</option>
              <option value="below_ten">Under $10</option>
              <option value="ten_twenty">$10-$20</option>
              <option value="20_50">$20-$50</option>
              <option value="above_fifty">Above $50</option>
            </select>
            {/* Add more filter options */}
          </div>
        </div>
        <div id="div-center" className="user-recipes" data-user-cards-container>
          {isLoading && <p>Loading...</p>}
          {!isLoading && Array.isArray(searchResults) && searchResults.map(recipe => (
            <div key={recipe.recipe_id} className="card">
              <div className="header" data-header>{recipe.title}</div>
              <img src={recipe.image} alt={recipe.title} className="recipe-image" />
              {/* Add more details here */}
              <div className="body" data-body>{/* Add more details here */}</div>
            </div>
          ))}
          {!isLoading && !Array.isArray(searchResults) && <p>No results found.</p>}
        </div>
      </section>
    </div>
  );
}

export default Search;