import { useState, useEffect } from "react"; // React Hooks - for managing states of components
import Link from "next/link";

function Search() {
  const [searchQuery, setSearchQuery] = useState(""); 
  const [searchResults, setSearchResults] = useState([]);
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // Fetch recipes data from the server when the component mounts
    fetchRecipes(); // runs once when the component mounts
  }, []);

  const fetchRecipes = async () => {
    try {
      const response = await fetch("http://localhost:8080/mytest"); // fetch from servor 
      const data = await response.json(); //  converted to JSON 
      setRecipes(data.recipeData); // stored in the recipes state 
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };

  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);

    // Perform search logic here based on the recipes array
    const filteredResults = recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(query)
    );

    setSearchResults(filteredResults);
  };

  return (
    <div>
      <input type="checkbox" id="check" />
      <label For="check">
        <i class="fas fa-bars" id="btn"></i>
        <i class="fas fa-times" id="cancel"></i>
      </label>
      <div class="sidebar">
        <header>TasteBuds</header>
        <ul>
          <li><Link href="/"><i class="fas fa-home"></i>Home</Link></li>  
          <li><a href="#"><i class="fas fa-star"></i>Saved Recipes</a></li>
          <li><a href="#"><i class="fas fa-cog"></i>User Settings</a></li>
          <li><Link href="/login"><i class="fas fa-sign-in-alt"></i>Login</Link></li>
        </ul>
      </div>
      <section>
        <div id="div-center" class="search-wrapper">

          <label for="search">Search Recipes</label>
          <input
            type="search"
            id="search"
            value={searchQuery}
            onChange={handleSearch} // onChange event listener that calls handleSearch whenever the user types something into the input field. 
            placeholder="Search recipes..."
          />
        </div>
        <div id="div-center" class="user-recipes" data-user-cards-container>
          {searchResults.map(recipe => (
            <div key={recipe.id} class="card">
              <div class="header" data-header>{recipe.title}</div>
              <div class="body" data-body>{/* Add more details here */}</div>
            </div>
          ))}
          {searchResults.length === 0 && <p>No results found.</p>}
        </div>
      </section>
    </div>
  );
}

export default Search;