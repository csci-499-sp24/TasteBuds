// color palette: #F57C00(Dark Primary color) #FFE0B2(Light Primary color) #FF9800(Primary color) #212121(Text/Icon) #FF5252(Accent Color) #212121(Primary Text) #757575(Secondary Text) #BDBDBD(Divider Color)
import { useState, useEffect } from "react";
import Link from "next/link";
import RecipeBox from "../components/RecipeBox";
import Sidebar from "../components/sidebar";
import { Button } from "@nextui-org/button";
import {Input, Select, SelectItem} from "@nextui-org/react";
import {ListboxWrapper} from "../components/ListboxWrapper";
import CuisineTab from "../components/cuisineTab";
import DietTab from "../components/dietTab";
import OccasionTab from "../components/occasionTab";
import DishTypeTab from "../components/dishTypeTab";
import EquipmentTab from "../components/excludeEquipment";

function Search() {
  const [searchQuery, setSearchQuery] = useState(""); 
  const [searchResults, setSearchResults] = useState([]); 
  const [isLoading, setIsLoading] = useState(false);
  const [filters, setFilters] = useState({ 
    cuisine: "", diet: "", occasion: "", dishType: "",
    servings: "", minServing: "", maxServing: "",
    smartPoints: "", smartPointsMin: "", smartPointsMax:"",
    readyInMinutes: "", readyInMinutesMin:"", readyInMinutesMax: "",
    includeTips: "" , cheap: "" , healthy: "" , sustainable: "" ,
    minTotalPrice: "", maxTotalPrice: "",  totalPrice: "",
    calories: "", minCalories: "", maxCalories: "",
  }); 

  useEffect(() => {
    // Event handler for Enter 
    const handleEnterKeyPress = (event) => {
      console.log(`document.activeElement.tagName: ${document.activeElement.tagName}`)
      console.log("Key pressed:", event.key);
      console.log("Event target:", event.target);
      if (event.key === "Enter") { 
        fetchRecipes(searchQuery, filters); // Call fetchRecipes 
      }
    };
  
    document.addEventListener("keydown", handleEnterKeyPress); // when enter is hit the handleEnterKeyPress called. 
  
    return () => {
      document.removeEventListener("keydown", handleEnterKeyPress);  //  cleanup 
    };
  }, [searchQuery, filters]); 

  
  // Function to fetch recipes based on search query and filters
  const fetchRecipes = async (searchQuery, filters) => { 
    setIsLoading(true);
    
    try {
      // Construct serach endpt parameters from filters
      const queryParams = Object.entries(filters) //  converts to array of key-value pairs,
      .filter(([key, value]) => value !== "" && value !==undefined) // out empty string. 
      .map(([key, value]) => `${key}=${value}`) // maps each key-value pair to "key=value",
      .join("&");      
      console.log(`Query: ${process.env.NEXT_PUBLIC_SERVER_URL}/searchV2?query=${searchQuery}&${queryParams}`);
      const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/searchV2?query=${searchQuery}&${queryParams}`);
      
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json(); 
      setSearchResults(data); // Set search results 
    } catch (error) {
      console.error("Error fetching recipes:", error);
    } finally {
      setIsLoading(false); // Set loading state to false after fetching is completes
    }
  };

  const handleTriggerFetch = () => {
    fetchRecipes(searchQuery, filters);
  };


  // Event handler to update search query as user types in the search input
  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase(); // convert to lowercase
    setSearchQuery(query); 
  };

  // Event handler to update filter criteria when user selects an option from Listbox
  const handleListboxChange = (selectedItems, filterType) => {
    console.log("Selected Items:", selectedItems); 
    setFilters((prevFilters) => { // filter state is updated, which returns a new state obj
      let filterVal = []; 
      if(Object.keys(selectedItems).length > 0 ){
        filterVal = Array.from(selectedItems);
      }
      console.log("filterVal:", filterVal); 
      console.log("prevFilters:", prevFilters);
      console.log("Filters:", filters);
      return {
        ...prevFilters,
        [filterType]: filterVal.join(","),
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
      {/* Main content section */}
      <section className='main-content'>
      <div class="relative h-5 w-5 ...">
        <div class="absolute left-0 top-0 h-16 w-16 ...">
          <Sidebar />
        </div>
      </div>
        <div id="div-center" className="search-wrapper">
          <br/>    
          <Input
            classNames={{
              label: "text-[#212121] dark:text-[#212121]",
              input: [
                "bg-[#f57c00]",
                "border-[#ff5252]",
                "text-[#212121] dark:text-[#212121]",
                "placeholder:text-[#212121] dark:placeholder:text-[#212121]",
              ],
              innerWrapper: ["bg-[#f57c00]", "border-[#ff5252]",],
              inputWrapper: [
                "shadow-xl",
                "bg-[#f57c00]",
                "border-[#ff5252]",
                "focus-within-[focus=true]:bg-[#f57c00]", 
                "group-data-[focus=true]:bg-[#f57c00]",              
                "group-data-[hover=true]:bg-[#f57c00]",              
              ],
            }}
            type="search"
            label="Search"
            onChange={handleSearch}
          />
          <Button className="bg-[#f57c00] text-[#212121] border-[#ff5252]" onClick={handleTriggerFetch}>Search</Button>       
        
        
        </div>

        <div className="container" >
          <div className="filters">
            <ListboxWrapper>
            <CuisineTab
                  handleListboxChange={handleListboxChange}
                  triggerFetch={handleTriggerFetch}
            />  
              <hr className="my-4 border-[#FF5252]" />              
              <DietTab 
                handleListboxChange={handleListboxChange}
                triggerFetch={handleTriggerFetch} 
              />
              <hr className="my-4 border-[#FF5252]" />             
              <OccasionTab
                handleListboxChange={handleListboxChange}
                triggerFetch={handleTriggerFetch}
              /> 
              <hr className="my-4 border-[#FF5252]" />                 
              <DishTypeTab
                handleListboxChange={handleListboxChange}
                triggerFetch={handleTriggerFetch}
              /> 
              <hr className="my-4 border-[#FF5252]" />     

              <Input
                type="number"
                label="Serving Size"
                variant="bordered"
                classNames={{
                  label: "text-[#212121] dark:text-[#212121]",
                  input: [
                    "bg-[#FFE0B2]",
                    "border-[#FF5252]",
                    "text-[#212121] dark:text-[#212121]",
                    "placeholder:text-[#212121] dark:placeholder:text-[#212121]",
                  ],
                  innerWrapper: ["bg-[#FFE0B2]", "border-[#FFE0B2]",],
                  inputWrapper: [
                    "shadow-xl",
                    "bg-[#FFE0B2]",
                    "border-[#FF5252]",
                    "focus-within-[focus=true]:bg-[#FFE0B2]", 
                    "group-data-[focus=true]:bg-[#FFE0B2]",              
                    "group-data-[hover=true]:bg-[#FFE0B2]",              
                  ],
                }}
                value={filters.servings}
                onChange={(event) => handleServingsInputChange(event, 'servings')}
              />
              <div className="mb-1"></div>
              <Input
                type="number"
                variant="bordered"
                classNames={{
                  label: "text-[#212121] dark:text-[#212121]",
                  input: [
                    "bg-[#FFE0B2]",
                    "border-[#FF5252]",
                    "text-[#212121] dark:text-[#212121]",
                    "placeholder:text-[#212121] dark:placeholder:text-[#212121]",
                  ],
                  innerWrapper: ["bg-[#FFE0B2]", "border-[#FFE0B2]",],
                  inputWrapper: [
                    "shadow-xl",
                    "bg-[#FFE0B2]",
                    "border-[#FF5252]",
                    "focus-within-[focus=true]:bg-[#FFE0B2]", 
                    "group-data-[focus=true]:bg-[#FFE0B2]",              
                    "group-data-[hover=true]:bg-[#FFE0B2]",              
                  ],
                }}
                label="Minimum Serving"
                value={filters.minServing}
                onChange={(event) => handleServingsInputChange(event, 'minServing')}
              />
              <div className="mb-1"></div>
              <Input
                type="number"
                variant="bordered"
                classNames={{
                  label: "text-[#212121] dark:text-[#212121]",
                  input: [
                    "bg-[#FFE0B2]",
                    "border-[#FF5252]",
                    "text-[#212121] dark:text-[#212121]",
                    "placeholder:text-[#212121] dark:placeholder:text-[#212121]",
                  ],
                  innerWrapper: ["bg-[#FFE0B2]", "border-[#FFE0B2]",],
                  inputWrapper: [
                    "shadow-xl",
                    "bg-[#FFE0B2]",
                    "border-[#FF5252]",
                    "focus-within-[focus=true]:bg-[#FFE0B2]", 
                    "group-data-[focus=true]:bg-[#FFE0B2]",              
                    "group-data-[hover=true]:bg-[#FFE0B2]",              
                  ],
                }}
                label="Maximum Serving"
                value={filters.maxServing}
                onChange={(event) => handleServingsInputChange(event, 'maxServing')}
              />
              <hr className="my-4 border-[#FF5252]" />           
              <Input
                type="number"
                variant="bordered"
                classNames={{
                  label: "text-[#212121] dark:text-[#212121]",
                  input: [
                    "bg-[#FFE0B2]",
                    "border-[#FF5252]",
                    "text-[#212121] dark:text-[#212121]",
                    "placeholder:text-[#212121] dark:placeholder:text-[#212121]",
                  ],
                  innerWrapper: ["bg-[#FFE0B2]", "border-[#FFE0B2]",],
                  inputWrapper: [
                    "shadow-xl",
                    "bg-[#FFE0B2]",
                    "border-[#FF5252]",
                    "focus-within-[focus=true]:bg-[#FFE0B2]", 
                    "group-data-[focus=true]:bg-[#FFE0B2]",              
                    "group-data-[hover=true]:bg-[#FFE0B2]",              
                  ],
                }}
                label="Weight Watcher Pts"
                value={filters.smartPoints}
                onChange={(event) => handleServingsInputChange(event, 'smartPoints')}
              />
              <div className="mb-1"></div>
              <Input
                type="number"
                variant="bordered"
                classNames={{
                  label: "text-[#212121] dark:text-[#212121]",
                  input: [
                    "bg-[#FFE0B2]",
                    "border-[#FF5252]",
                    "text-[#212121] dark:text-[#212121]",
                    "placeholder:text-[#212121] dark:placeholder:text-[#212121]",
                  ],
                  innerWrapper: ["bg-[#FFE0B2]", "border-[#FFE0B2]",],
                  inputWrapper: [
                    "shadow-xl",
                    "bg-[#FFE0B2]",
                    "border-[#FF5252]",
                    "focus-within-[focus=true]:bg-[#FFE0B2]", 
                    "group-data-[focus=true]:bg-[#FFE0B2]",              
                    "group-data-[hover=true]:bg-[#FFE0B2]",              
                  ],
                }}
                label="Min Weight Watcher Pts"
                value={filters.smartPointsMin}
                onChange={(event) => handleServingsInputChange(event, 'smartPointsMin')}
              />
              <div className="mb-1"></div>
              <Input
                type="number"
                variant="bordered"
                classNames={{
                  label: "text-[#212121] dark:text-[#212121]",
                  input: [
                    "bg-[#FFE0B2]",
                    "border-[#FF5252]",
                    "text-[#212121] dark:text-[#212121]",
                    "placeholder:text-[#212121] dark:placeholder:text-[#212121]",
                  ],
                  innerWrapper: ["bg-[#FFE0B2]", "border-[#FFE0B2]",],
                  inputWrapper: [
                    "shadow-xl",
                    "bg-[#FFE0B2]",
                    "border-[#FF5252]",
                    "focus-within-[focus=true]:bg-[#FFE0B2]", 
                    "group-data-[focus=true]:bg-[#FFE0B2]",              
                    "group-data-[hover=true]:bg-[#FFE0B2]",              
                  ],
                }}
                label="Max Weight Watcher Pts"
                value={filters.smartPointsMax}
                onChange={(event) => handleServingsInputChange(event, 'smartPointsMax')}
              />
            <hr className="my-4 border-[#FF5252]" />           
              <Input
                type="number"
                variant="bordered"
                classNames={{
                  label: "text-[#212121] dark:text-[#212121]",
                  input: [
                    "bg-[#FFE0B2]",
                    "border-[#FF5252]",
                    "text-[#212121] dark:text-[#212121]",
                    "placeholder:text-[#212121] dark:placeholder:text-[#212121]",
                  ],
                  innerWrapper: ["bg-[#FFE0B2]", "border-[#FFE0B2]",],
                  inputWrapper: [
                    "shadow-xl",
                    "bg-[#FFE0B2]",
                    "border-[#FF5252]",
                    "focus-within-[focus=true]:bg-[#FFE0B2]", 
                    "group-data-[focus=true]:bg-[#FFE0B2]",              
                    "group-data-[hover=true]:bg-[#FFE0B2]",              
                  ],
                }}
                label="Total Time in Minutes"
                value={filters.readyInMinutes}
                onChange={(event) => handleServingsInputChange(event, 'readyInMinutes')}
              />
              <div className="mb-1"></div>
              <Input
                type="number"
                variant="bordered"
                classNames={{
                  label: "text-[#212121] dark:text-[#212121]",
                  input: [
                    "bg-[#FFE0B2]",
                    "border-[#FF5252]",
                    "text-[#212121] dark:text-[#212121]",
                    "placeholder:text-[#212121] dark:placeholder:text-[#212121]",
                  ],
                  innerWrapper: ["bg-[#FFE0B2]", "border-[#FFE0B2]",],
                  inputWrapper: [
                    "shadow-xl",
                    "bg-[#FFE0B2]",
                    "border-[#FF5252]",
                    "focus-within-[focus=true]:bg-[#FFE0B2]", 
                    "group-data-[focus=true]:bg-[#FFE0B2]",              
                    "group-data-[hover=true]:bg-[#FFE0B2]",              
                  ],
                }}
                label="Min Total Time in Minutes"
                value={filters.readyInMinutesMin}
                onChange={(event) => handleServingsInputChange(event, 'readyInMinutesMin')}
              />
              <div className="mb-1"></div>
              <Input
                type="number"
                variant="bordered"
                classNames={{
                  label: "text-[#212121] dark:text-[#212121]",
                  input: [
                    "bg-[#FFE0B2]",
                    "border-[#FF5252]",
                    "text-[#212121] dark:text-[#212121]",
                    "placeholder:text-[#212121] dark:placeholder:text-[#212121]",
                  ],
                  innerWrapper: ["bg-[#FFE0B2]", "border-[#FFE0B2]",],
                  inputWrapper: [
                    "shadow-xl",
                    "bg-[#FFE0B2]",
                    "border-[#FF5252]",
                    "focus-within-[focus=true]:bg-[#FFE0B2]", 
                    "group-data-[focus=true]:bg-[#FFE0B2]",              
                    "group-data-[hover=true]:bg-[#FFE0B2]",              
                  ],
                }}
                label="Max Total Time in Minutes"
                value={filters.readyInMinutesMax}
                onChange={(event) => handleServingsInputChange(event, 'readyInMinutesMax')}
              />
              <hr className="my-4 border-[#FF5252]" />           
              <Input
                type="number"
                variant="bordered"
                classNames={{
                  label: "text-[#212121] dark:text-[#212121]",
                  input: [
                    "bg-[#FFE0B2]",
                    "border-[#FF5252]",
                    "text-[#212121] dark:text-[#212121]",
                    "placeholder:text-[#212121] dark:placeholder:text-[#212121]",
                  ],
                  innerWrapper: ["bg-[#FFE0B2]", "border-[#FFE0B2]",],
                  inputWrapper: [
                    "shadow-xl",
                    "bg-[#FFE0B2]",
                    "border-[#FF5252]",
                    "focus-within-[focus=true]:bg-[#FFE0B2]", 
                    "group-data-[focus=true]:bg-[#FFE0B2]",              
                    "group-data-[hover=true]:bg-[#FFE0B2]",              
                  ],
                }}
                label="Min Price in Dollars"
                value={filters.minTotalPrice}
                onChange={(event) => handleServingsInputChange(event, 'minTotalPrice')}
              />
              <div className="mb-1"></div>
              <Input
                type="number"
                variant="bordered"
                classNames={{
                  label: "text-[#212121] dark:text-[#212121]",
                  input: [
                    "bg-[#FFE0B2]",
                    "border-[#FF5252]",
                    "text-[#212121] dark:text-[#212121]",
                    "placeholder:text-[#212121] dark:placeholder:text-[#212121]",
                  ],
                  innerWrapper: ["bg-[#FFE0B2]", "border-[#FFE0B2]",],
                  inputWrapper: [
                    "shadow-xl",
                    "bg-[#FFE0B2]",
                    "border-[#FF5252]",
                    "focus-within-[focus=true]:bg-[#FFE0B2]", 
                    "group-data-[focus=true]:bg-[#FFE0B2]",              
                    "group-data-[hover=true]:bg-[#FFE0B2]",              
                  ],
                }}
                label="Max Price in Dollars"
                value={filters.maxTotalPrice}
                onChange={(event) => handleServingsInputChange(event, 'maxTotalPrice')}
              />
              <div className="mb-1"></div>
              <Input
                type="number"
                variant="bordered"
                classNames={{
                  label: "text-[#212121] dark:text-[#212121]",
                  input: [
                    "bg-[#FFE0B2]",
                    "border-[#FF5252]",
                    "text-[#212121] dark:text-[#212121]",
                    "placeholder:text-[#212121] dark:placeholder:text-[#212121]",
                  ],
                  innerWrapper: ["bg-[#FFE0B2]", "border-[#FFE0B2]",],
                  inputWrapper: [
                    "shadow-xl",
                    "bg-[#FFE0B2]",
                    "border-[#FF5252]",
                    "focus-within-[focus=true]:bg-[#FFE0B2]", 
                    "group-data-[focus=true]:bg-[#FFE0B2]",              
                    "group-data-[hover=true]:bg-[#FFE0B2]",              
                  ],
                }}
                label="Total Price Dollars"
                value={filters.totalPrice}
                onChange={(event) => handleServingsInputChange(event, 'totalPrice')}
              />
              <hr className="my-4 border-[#FF5252]" />           
                 <Select
                  label="Want a Healthy Recipe?"
                  selectionMode="multiple"
                  className="max-w-xs"
                  variant="bordered"
                  style={{ backgroundColor: '#FFE0B2', color: '#212121', borderColor: '#FF5252' }}
                  listboxProps={{
                    itemClasses: {
                      base: [
                        "rounded-md",
                        "text-[#FF9800]",
                        "transition-opacity",
                        "data-[hover=true]:text-foreground",
                        "data-[hover=true]:bg-[#FF9800]",
                        "dark:data-[hover=true]:bg-[#FF9800]",
                        "data-[selectable=true]:focus:bg-[#FF9800]",
                        "data-[pressed=true]:opacity-70",
                        "data-[focus-visible=true]:ring-[#FF9800]",
                      ],
                    },
                  }}
                  popoverProps={{
                    classNames: {
                      base: "before:bg-[#FF5252]",
                      content: "p-0 border-small border-divider bg-background",
                    },
                  }}
                  isMultiline="true"
                  // placeholder="A Healthy Recipe?"
                  onChange={(event) => handleServingsInputChange(event, 'healthy')}
                >
                  <SelectItem  key= "" value="">Both</SelectItem>
                  <SelectItem  key="true" value="true">Yes</SelectItem>
                  <SelectItem  key="false" value="false"> No</SelectItem>
                </Select>
              <hr className="my-4 border-[#FF5252]" />           
                <Select
                  label="Want a Cheap Recipe?"
                  selectionMode="multiple"
                  className="max-w-xs"
                  variant="bordered"
                  style={{ backgroundColor: '#FFE0B2', color: '#212121', borderColor: '#FF5252' }}
                  listboxProps={{
                    itemClasses: {
                      base: [
                        "rounded-md",
                        "text-[#FF9800]",
                        "transition-opacity",
                        "data-[hover=true]:text-foreground",
                        "data-[hover=true]:bg-[#FF9800]",
                        "dark:data-[hover=true]:bg-[#FF9800]",
                        "data-[selectable=true]:focus:bg-[#FF9800]",
                        "data-[pressed=true]:opacity-70",
                        "data-[focus-visible=true]:ring-[#FF9800]",
                      ],
                    },
                  }}
                  popoverProps={{
                    classNames: {
                      base: "before:bg-[#FF5252]",
                      content: "p-0 border-small border-divider bg-background",
                    },
                  }}
                  isMultiline="true"
                  // placeholder="Want a Cheap Recipe?"
                  onChange={(event) => handleServingsInputChange(event, 'cheap')}
                >
                  <SelectItem  key= "" value="">Both</SelectItem>
                  <SelectItem  key="true" value="true">Yes</SelectItem>
                  <SelectItem  key="false" value="false"> No</SelectItem>
                </Select>
                <hr className="my-4 border-[#FF5252]" />           
                 <Select
                  label="Want a Sustainable Recipe?"
                  selectionMode="multiple"
                  className="max-w-xs"
                  variant="bordered"
                  style={{ backgroundColor: '#FFE0B2', color: '#212121', borderColor: '#FF5252' }}
                  listboxProps={{
                    itemClasses: {
                      base: [
                        "rounded-md",
                        "text-[#FF9800]",
                        "transition-opacity",
                        "data-[hover=true]:text-foreground",
                        "data-[hover=true]:bg-[#FF9800]",
                        "dark:data-[hover=true]:bg-[#FF9800]",
                        "data-[selectable=true]:focus:bg-[#FF9800]",
                        "data-[pressed=true]:opacity-70",
                        "data-[focus-visible=true]:ring-[#FF9800]",
                      ],
                    },
                  }}
                  popoverProps={{
                    classNames: {
                      base: "before:bg-[#FF5252]",
                      content: "p-0 border-small border-divider bg-background",
                    },
                  }}
                  isMultiline="true"
                  // placeholder="Want a Sustainable Recipe?"
                  onChange={(event) => handleServingsInputChange(event, 'sustainable')}
                >
                  <SelectItem  key= "" value="">Both</SelectItem>
                  <SelectItem  key="true" value="true">Yes</SelectItem>
                  <SelectItem  key="false" value="false"> No</SelectItem>
                </Select>
              <hr className="my-4 border-[#FF5252]" />           
                 <Select
                  label="Want Recipes with Tips?"
                  selectionMode="multiple"
                  className="max-w-xs"
                  variant="bordered"
                  style={{ backgroundColor: '#FFE0B2', color: '#212121', borderColor: '#FF5252' }}
                  listboxProps={{
                    itemClasses: {
                      base: [
                        "rounded-md",
                        "text-[#FF9800]",
                        "transition-opacity",
                        "data-[hover=true]:text-foreground",
                        "data-[hover=true]:bg-[#FF9800]",
                        "dark:data-[hover=true]:bg-[#FF9800]",
                        "data-[selectable=true]:focus:bg-[#FF9800]",
                        "data-[pressed=true]:opacity-70",
                        "data-[focus-visible=true]:ring-[#FF9800]",
                      ],
                    },
                  }}
                  popoverProps={{
                    classNames: {
                      base: "before:bg-[#FF5252]",
                      content: "p-0 border-small border-divider bg-background",
                    },
                  }}
                  isMultiline="true"
                  // placeholder="Want Recipes with Tips?"
                  onChange={(event) => handleServingsInputChange(event, 'includeTips')}
                >
                  <SelectItem  key= "" value="">Both</SelectItem>
                  <SelectItem  key="true" value="true">Yes</SelectItem>
                  <SelectItem  key="false" value="false"> No</SelectItem>
                </Select>
              <hr className="my-4 border-[#FF5252]" />           
                <Input
                  type="number"
                  variant="bordered"
                classNames={{
                  label: "text-[#212121] dark:text-[#212121]",
                  input: [
                    "bg-[#FFE0B2]",
                    "border-[#FF5252]",
                    "text-[#212121] dark:text-[#212121]",
                    "placeholder:text-[#212121] dark:placeholder:text-[#212121]",
                  ],
                  innerWrapper: ["bg-[#FFE0B2]", "border-[#FFE0B2]",],
                  inputWrapper: [
                    "shadow-xl",
                    "bg-[#FFE0B2]",
                    "border-[#FF5252]",
                    "focus-within-[focus=true]:bg-[#FFE0B2]", 
                    "group-data-[focus=true]:bg-[#FFE0B2]",              
                    "group-data-[hover=true]:bg-[#FFE0B2]",              
                  ],
                }}
                  label="Calories (Kcal)"
                  value={filters.calories}
                  onChange={(event) => handleServingsInputChange(event, 'calories')}
                />
                <div className="mb-1"></div>
                <Input
                  type="number"
                  variant="bordered"
                classNames={{
                  label: "text-[#212121] dark:text-[#212121]",
                  input: [
                    "bg-[#FFE0B2]",
                    "border-[#FF5252]",
                    "text-[#212121] dark:text-[#212121]",
                    "placeholder:text-[#212121] dark:placeholder:text-[#212121]",
                  ],
                  innerWrapper: ["bg-[#FFE0B2]", "border-[#FFE0B2]",],
                  inputWrapper: [
                    "shadow-xl",
                    "bg-[#FFE0B2]",
                    "border-[#FF5252]",
                    "focus-within-[focus=true]:bg-[#FFE0B2]", 
                    "group-data-[focus=true]:bg-[#FFE0B2]",              
                    "group-data-[hover=true]:bg-[#FFE0B2]",              
                  ],
                }}
                  label="Min Calories (Kcal)"
                  value={filters.minCalories}
                  onChange={(event) => handleServingsInputChange(event, 'minCalories')}
                />
                <div className="mb-1"></div>
                <Input
                  type="number"
                  variant="bordered"
                classNames={{
                  label: "text-[#212121] dark:text-[#212121]",
                  input: [
                    "bg-[#FFE0B2]",
                    "border-[#FF5252]",
                    "text-[#212121] dark:text-[#212121]",
                    "placeholder:text-[#212121] dark:placeholder:text-[#212121]",
                  ],
                  innerWrapper: ["bg-[#FFE0B2]", "border-[#FFE0B2]",],
                  inputWrapper: [
                    "shadow-xl",
                    "bg-[#FFE0B2]",
                    "border-[#FF5252]",
                    "focus-within-[focus=true]:bg-[#FFE0B2]", 
                    "group-data-[focus=true]:bg-[#FFE0B2]",              
                    "group-data-[hover=true]:bg-[#FFE0B2]",              
                  ],
                }}
                  label="Max Calories (Kcal)"
                  value={filters.maxCalories}
                  onChange={(event) => handleServingsInputChange(event, 'maxCalories')}
                />
              <hr className="my-4 border-[#FF5252]" />           
            </ListboxWrapper> 
          </div>

          <div className="recipe-container">   
            {/* Display search results */}
            <div className="recipe-row">
              {isLoading && <p>Loading...</p>}
              {!isLoading && Array.isArray(searchResults) && (
                searchResults.map(recipe => (
                  <RecipeBox               
                  key={recipe.recipe_id} 
                  recipe={recipe}
                  className="recipe-boxs" // Add className here
                  style={{ paddingRight: '10px', paddingBottom: '10px' }}
                  />
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