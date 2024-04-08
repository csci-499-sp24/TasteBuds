import { useState } from "react"; // React Hooks - for managing states of components
import Link from "next/link";

function Search() {
  const [searchQuery, setSearchQuery] = useState(""); 
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [filters, setFilters] = useState({
    cuisine: [], // contain arrays for each filter category
    difficulty: [],
    cooking_time: [],
    diet: [],
    price: [],
    // more filter criterias, look into doc
  }); // filter criteria state

  const CheckboxDrop = ({ label, items }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedItems, setSelectedItems] = useState([]);

    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };

    const handleCheckboxChange = (item) => {
      if (selectedItems.includes(item)) {
        setSelectedItems(selectedItems.filter((selectedItem) => selectedItem !== item));
      } else {
        setSelectedItems([...selectedItems, item]);
      }
    };

    return (
      <div className="dropdown">
        <button className="dropdown-toggle" onClick={toggleDropdown}>
          {label}
        </button>
        {isOpen && (
          <div className="dropdown-menu">
            {items.map((item) => (
              <label key={item} className="dropdown-item">
                <input
                  type="checkbox"
                  checked={selectedItems.includes(item)}
                  onChange={() => handleCheckboxChange(item)}
                />
                {item}
              </label>
            ))}
          </div>
        )}
      </div>
    );
  };
  

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
    const { value, checked } = event.target;
    setFilters(prevFilters => ({ 
      ...prevFilters, 
      [filterType]: checked ? [...prevFilters[filterType], value] : prevFilters[filterType].filter(val => val !== value)
    }));
    fetchRecipes(searchQuery, { ...filters, [filterType]: checked ? [...filters[filterType], value] : filters[filterType].filter(val => val !== value) });
  };

  //const handleFilterChange = (event, filterType) => { 
  //  const filterVal = event.target.value; //event is triggered when dropdown param is pressed, changes type of filter
  //  setFilters(prevFilters => ({ //filter state is updated, which returns a new state obj
  //    ...prevFilters, // spreadOperator(...), copies prev state, updates to new filter
  //    [filterType]: filterVal
  //  }));
  //  fetchRecipes(searchQuery, { ...filters, 
  //    [filterType]: filterVal})// Call fetchRecipes with updated filter
  //};

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
        <div id= "filter1" style={{ marginLeft: '20px' }}>
          <CheckboxDrop label="Cuisine" items={['Mexican', 'Italian', 'Vietnamese', 'African', 'Asian', 'American',
        'British', 'Cajun', 'Carribean', 'Chinese', 'European', 'Eaastern European', 'French'
        , 'German', 'Greek', 'Indian', 'Irish', 'Japanese', 'Jewish', 'Korean', 'Latin American',
        'Mediterreanean', 'Middle Eastern', 'Nordic', 'Thai' ,'Spanish']} />  
        </div>
        <div id= "filter2" style={{ marginLeft: '20px' }}>
          <CheckboxDrop label="Diet" items={['Gluten Free', 'Vegetarian', 'Lacto-Vegetarian', 'Ovo-Vegetarian',
        'Ketogenic', 'Vegan', 'Paleo', 'Primal', 'Low RODMAP', 'Whole30', 'GAPs', 'Fodmap Friendly', 'Pescatarian',
        'Dairy Free', 'Lacto-Ovo Vegetarian', 'Paleolithic']} />  
        </div>
        <div id="div-center" className="search-wrapper">
        <label htmlFor="search" className="search-label">Search Recipes</label>
        <input
          type="search" 
          id="search"
          value={searchQuery}
          onChange={handleSearch} 
          onKeyDown={handleEnterKeyPress} // Call handleEnterKeyPress on key down event
          placeholder="Search recipes..."
          className="search-input" // Added class for styling
        />
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