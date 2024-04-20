import { useState, useEffect } from "react"; // React Hooks - for managing states of components
import Link from "next/link";
import Sidebar from "../components/sidebar";
import {Input} from "@nextui-org/react";
import {ListboxWrapper} from "../components/ListboxWrapper";
import CuisineTab from "../components/cuisineTab";
import DietTab from "../components/dietTab";
function Search() {
  const [searchQuery, setSearchQuery] = useState("");  // State variable to hold the search query
  const [searchResults, setSearchResults] = useState([]); // State variable to hold the search results
  const [isLoading, setIsLoading] = useState(false);  // State variable to indicate if data is loading
  const [filters, setFilters] = useState({  // State variable to hold filter criteria
    cuisine: "",
    diet: "",
    dishType: "",
    servings: "",
    includeTips: undefined ,

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
      .filter(([key, value]) => value !== "" && value !==undefined) // filters out any key-value pairs where the value is an empty string. 
      .map(([key, value]) => `${key}=${value}`) // maps each key-value pair to a string in the format "key=value",This prepares the key-value pairs to be part of the query parameters in the URL.
      .join("&");
      console.log(`Query: ${process.env.NEXT_PUBLIC_SERVER_URL}/searchV2?query=${searchQuery}&${queryParams}`);
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

  
 

// Event handler to update filter criteria when user selects an option from Listbox
const handleListboxChange = (selectedItems, filterType) => {
  console.log("Selected Items:", selectedItems); // Log selectedItems to the console
  setFilters((prevFilters) => { // //filter state is updated, which returns a new state obj
    let filterVal = []; // Extract values of selected items
    if(Object.keys(selectedItems).length > 0 ){
      console.log("(Object.keys(selectedItems).length > 0:, true"); 
      filterVal = Array.from(selectedItems);
    }
    console.log("filterVal:", filterVal); 
    console.log("prevFilters:", prevFilters);
    console.log("Filters:", filters);
    return {
      ...prevFilters, // // spread operator (...) copies all key-value pairs from the previous state of the filters object.
      [filterType]: filterVal.join(","), // updates the specific filter type (filterType) with the new value (filterVal), separated by commas
    };
  });
}

// Function to handle changes in the servings input
const handleServingsInputChange = (event) => {
  const servingsValue = event.target.value;
  setFilters((prevFilters) => ({
    ...prevFilters,
    servings: servingsValue,
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

      {/* Sidebar component */}
      <Sidebar />

      {/* Main content section */}
      <section> 
        <div id="div-center" className="search-wrapper">
          <Input type="search" label="Search" onChange={handleSearch} />
        </div>
        <div className="container" >

          <div className="listbox-container">
            <ListboxWrapper>
            <CuisineTab handleListboxChange={handleListboxChange} />              
            <hr className="my-4 border-gray-300" />              
            <DietTab handleListboxChange={handleListboxChange} />
            </ListboxWrapper> 
          </div>

          <div className="recipe-container">   
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
          </div>
        </div>  
      </section>

    </div>
  );
}
export default Search;