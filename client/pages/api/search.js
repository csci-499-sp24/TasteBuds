import { useState, useEffect } from "react"; // React Hooks - for managing states of components
import Link from "next/link";

function Search() {
  const [searchQuery, setSearchQuery] = useState(""); 
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchRecipes = async (searchQuery) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(process.env.NEXT_PUBLIC_SERVER_URL + `/search?query=${searchQuery}`);
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      setSearchResults(data);
    } catch (error) {
      console.error("Error fetching recipes:", error);
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);
  };

  const handleEnterKeyPress = (event) => {
    if (event.key === "Enter") {
      fetchRecipes(searchQuery); // Call fetchRecipes when Enter key is pressed
    }
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
        </div>
        <div id="div-center" className="user-recipes" data-user-cards-container>
          {isLoading && <p>Loading...</p>}
          {error && <p>Error: {error}</p>}
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