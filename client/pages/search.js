import { useState, useEffect } from "react"; // React Hooks - for managing states of components
import Link from "next/link";

function Search() {
  const [searchQuery, setSearchQuery] = useState(""); 
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [filters, setFilters] = useState({
    cuisine: "",
    diet: "",
    cooking_time: "",
    price: "",
    // more filter criterias, look into doc
  }); // filter criteria state

  useEffect(() => {
    const handleEnterKeyPress = (event) => {
      if (event.key === "Enter") {
        fetchRecipes(searchQuery, filters); // Call fetchRecipes when Enter key is pressed
      }
    };

    document.addEventListener("keydown", handleEnterKeyPress);

    return () => {
      document.removeEventListener("keydown", handleEnterKeyPress);
    };
  }, [searchQuery, filters]);

  const fetchRecipes = async (searchQuery, filters) => { // passes filter to fetchrecipes
    setIsLoading(true);
    try {
      const queryParams = Object.entries(filters)
        .filter(([key, value]) => value !== "") // Exclude empty filters
        .map(([key, value]) => `${key}=${value}`)
        .join("&");

      const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/searchV2?query=${searchQuery}&${queryParams}`);
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
  };

  const handleFilterChange = (event, filterType) => { 
    const filterVal = event.target.value; //event is triggered when dropdown param is pressed, changes type of filter
    setFilters(prevFilters => ({ //filter state is updated, which returns a new state obj
      ...prevFilters, // spreadOperator(...), copies prev state, updates to new filter
      [filterType]: filterVal
    }));
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
            placeholder="Search recipes..."
          />
          <div className="filter-wrapper">
            <select value={filters.cuisine} onChange={(e) => handleFilterChange(e, 'cuisine')}>
              <option value="">All Cuisines</option>
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



