// color palette: #F57C00(Dark Primary color) #FFE0B2(Light Primary color) #FF9800(Primary color) #212121(Text/Icon) #FF5252(Accent Color) #212121(Primary Text) #757575(Secondary Text) #BDBDBD(Divider Color)
import { useState, useEffect } from "react"; // React Hooks - for managing states of components
import Link from "next/link";
import RecipeBox from "../components/RecipeBox";
import Sidebar from "../components/sidebar";
import {Input, Select, SelectItem, Button} from "@nextui-org/react";
import {ListboxWrapper} from "../components/ListboxWrapper";
import CuisineTab from "../components/cuisineTab";
import DietTab from "../components/dietTab";
import OccasionTab from "../components/occasionTab";
import DishTypeTab from "../components/dishTypeTab";


function Search() {
  const [searchQuery, setSearchQuery] = useState("");  // State variable to hold the search query
  const [searchResults, setSearchResults] = useState([]); // State variable to hold the search results
  const [isLoading, setIsLoading] = useState(false);  // State variable to indicate if data is loading
  const [filters, setFilters] = useState({  // State variable to hold filter criteria
    cuisine: "", diet: "", occasion: "", dishType: "",
    servings: "", minServing: "", maxServing: "",
    smartPoints: "", smartPointsMin: "", smartPointsMax:"",
    readyInMinutes: "", readyInMinutesMin:"", readyInMinutesMax: "",
    includeTips: "" , cheap: "" , healthy: "" , sustainable: "" ,
    minTotalPrice: "", maxTotalPrice: "",  totalPrice: "",
    calories: "", minCalories: "", maxCalories: "",
  }); 

  useEffect(() => {
    // Event handler function to handle Enter key press
    const handleEnterKeyPress = (event) => {
      console.log(`document.activeElement.tagName: ${document.activeElement.tagName}`)
      console.log("Key pressed:", event.key);
      console.log("Event target:", event.target);
      if (event.key === "Enter") {  // Check if the pressed key is Enter
        fetchRecipes(searchQuery, filters); // Call fetchRecipes when Enter key is pressed
      }
    };
  
    document.addEventListener("keydown", handleEnterKeyPress); // When any key is pressed, the handleEnterKeyPress function will be called.n
  
    return () => {
      document.removeEventListener("keydown", handleEnterKeyPress);  //  cleanup function for the effect. it removes the event listener added in the useEffect hook to prevent memory leaks and ensure proper cleanup.
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

  const handleTriggerFetch = () => {
    fetchRecipes(searchQuery, filters);
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
  const handleServingsInputChange = (event, inputType) => {
    const value = event.target.value;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [inputType]: value,
    }));
  };

  
  return (
    <div>
      <div>
       {/* Sidebar navigation */}
        <input type="checkbox" id="check" />
        <label htmlFor="check">
          <i className="fas fa-bars" id="btn"></i>
          <i className="fas fa-times" id="cancel"></i>
        </label>
            
        {/* Sidebar component */}
        <Sidebar />
      </div>

      {/* Main content section */}
      <section className='main-content'>
        <div id="div-center" className="search-wrapper">
          <br/>    
          <Input
            classNames={{
              label: "text-texts-primary",
              input: [
                "bg-primary-dark",
                "text-texts-primary text-texts-primary",
                "placeholder:text-texts-primary  placeholder:text-texts-primary",
              ],
              innerWrapper: ["relative w-full-[filled-within=true]: bg-primary-dark"],
              inputWrapper: [
                "bg-primary-dark",
                "border-primary-dark",
                "focus-within:!bg-primary-dark",
                "group-data-[focused=true]:bg-primary-dark",
              ],
            }}
            type="search"
            label="Search"
            onChange={handleSearch}
          />
          <Button color="primary" onClick={handleTriggerFetch}>Search</Button> 
        </div>

        <div className="container" >
          <div className="filters">
            <ListboxWrapper>
            <CuisineTab
                  handleListboxChange={handleListboxChange}
                  triggerFetch={handleTriggerFetch}
            />  
              <hr className="my-4 border-gray-300" />              
              <DietTab 
                handleListboxChange={handleListboxChange}
                triggerFetch={handleTriggerFetch} 
              />
              <hr className="my-4 border-gray-300" />              
              <DishTypeTab
                handleListboxChange={handleListboxChange}
                triggerFetch={handleTriggerFetch}
              /> 
              <hr className="my-4 border-gray-300" />              
              <OccasionTab
                handleListboxChange={handleListboxChange}
                triggerFetch={handleTriggerFetch}
              /> 
              <hr className="my-4 border-gray-300" />        
              <Input
                type="number"
                color="warning"
                label="Serving Size"
                value={filters.servings}
                onChange={(event) => handleServingsInputChange(event, 'servings')}
              />
              <div className="mb-1"></div>
              <Input
                type="number"
                color="warning"
                label="Minimum Serving"
                value={filters.minServing}
                onChange={(event) => handleServingsInputChange(event, 'minServing')}
              />
              <div className="mb-1"></div>
              <Input
                type="number"
                color="warning"
                label="Maximum Serving"
                value={filters.maxServing}
                onChange={(event) => handleServingsInputChange(event, 'maxServing')}
              />
              <hr className="my-4 border-gray-300" /> 
              <Input
                type="number"
                color="warning"
                label="Weight Watcher Smart Points"
                value={filters.smartPoints}
                onChange={(event) => handleServingsInputChange(event, 'smartPoints')}
              />
              <div className="mb-1"></div>
              <Input
                type="number"
                color="warning"
                label="Minimum Weight Watcher Smart Points"
                value={filters.smartPointsMin}
                onChange={(event) => handleServingsInputChange(event, 'smartPointsMin')}
              />
              <div className="mb-1"></div>
              <Input
                type="number"
                color="warning"
                label="Maximum Weight Watcher Smart Points"
                value={filters.smartPointsMax}
                onChange={(event) => handleServingsInputChange(event, 'smartPointsMax')}
              />

              <hr className="my-4 border-gray-300" /> 
              <Input
                type="number"
                color="warning"
                label="Total Time in Minutes"
                value={filters.readyInMinutes}
                onChange={(event) => handleServingsInputChange(event, 'readyInMinutes')}
              />
              <div className="mb-1"></div>
              <Input
                type="number"
                color="warning"
                label="Min Total Time in Minutes"
                value={filters.readyInMinutesMin}
                onChange={(event) => handleServingsInputChange(event, 'readyInMinutesMin')}
              />
              <div className="mb-1"></div>
              <Input
                type="number"
                color="warning"
                label="Max Total Time in Minutes"
                value={filters.readyInMinutesMax}
                onChange={(event) => handleServingsInputChange(event, 'readyInMinutesMax')}
              />
              <hr className="my-4 border-gray-300" /> 
              <Input
                type="number"
                color="warning"
                label="Min Price in Dollars"
                value={filters.minTotalPrice}
                onChange={(event) => handleServingsInputChange(event, 'minTotalPrice')}
              />
              <div className="mb-1"></div>
              <Input
                type="number"
                color="warning"
                label="Max Price in Dollars"
                value={filters.maxTotalPrice}
                onChange={(event) => handleServingsInputChange(event, 'maxTotalPrice')}
              />
              <div className="mb-1"></div>
              <Input
                type="number"
                color="warning"
                label="Total Price Dollars"
                value={filters.totalPrice}
                onChange={(event) => handleServingsInputChange(event, 'totalPrice')}
              />
               <hr className="my-4 border-gray-300" /> 
                 <Select
                  label="healthy"
                  color="warning"
                  placeholder="Want a Healthy Recipe?"
                  onChange={(event) => handleServingsInputChange(event, 'healthy')}
                >
                  <SelectItem  key= "" value="">Both</SelectItem>
                  <SelectItem  key="true" value="true">Yes</SelectItem>
                  <SelectItem  key="false" value="false"> No</SelectItem>
                </Select>
              <hr className="my-4 border-gray-300" /> 
                <Select
                  label="Cheap"
                  color="warning"
                  placeholder="Want a Cheap Recipe?"
                  onChange={(event) => handleServingsInputChange(event, 'cheap')}
                >
                  <SelectItem  key= "" value="">Both</SelectItem>
                  <SelectItem  key="true" value="true">Yes</SelectItem>
                  <SelectItem  key="false" value="false"> No</SelectItem>
                </Select>
               <hr className="my-4 border-gray-300" /> 
                 <Select
                  label="Sustainable"
                  color="warning"
                  placeholder="Want a Sustainable Recipe?"
                  onChange={(event) => handleServingsInputChange(event, 'sustainable')}
                >
                  <SelectItem  key= "" value="">Both</SelectItem>
                  <SelectItem  key="true" value="true">Yes</SelectItem>
                  <SelectItem  key="false" value="false"> No</SelectItem>
                </Select>
              <hr className="my-4 border-gray-300" /> 
                 <Select
                  label="Tips"
                  color="warning"
                  placeholder="Want Recipes with Tips?"
                  onChange={(event) => handleServingsInputChange(event, 'includeTips')}
                >
                  <SelectItem  key= "" value="">Both</SelectItem>
                  <SelectItem  key="true" value="true">Yes</SelectItem>
                  <SelectItem  key="false" value="false"> No</SelectItem>
                </Select>
              <hr className="my-4 border-gray-300" /> 
                <Input
                  type="number"
                  color="warning"
                  label="Calories (Kcal)"
                  value={filters.calories}
                  onChange={(event) => handleServingsInputChange(event, 'calories')}
                />
                <div className="mb-1"></div>
                <Input
                  type="number"
                  color="warning"
                  label="Min Calories (Kcal)"
                  value={filters.minCalories}
                  onChange={(event) => handleServingsInputChange(event, 'minCalories')}
                />
                <div className="mb-1"></div>
                <Input
                  type="number"
                  color="warning"
                  label="Max Calories (Kcal)"
                  value={filters.maxCalories}
                  onChange={(event) => handleServingsInputChange(event, 'maxCalories')}
                />
                <hr className="my-4 border-gray-300" /> 
            </ListboxWrapper> 
          </div>

          <div className="recipe-container">   
            {/* Display search results */}
            <div className="recipe-row">
              {isLoading && <p>Loading...</p>}
              {!isLoading && Array.isArray(searchResults) && (
                searchResults.map(recipe => (
                  <RecipeBox key={recipe.recipe_id} recipe={recipe} />
                ))
              )}
              {!isLoading && !Array.isArray(searchResults) && <p>No results found.</p>}
            </div>
          </div>
          
        </div>  
      </section>

    </div>
  );
}
export default Search;