import { useState } from "react"; // React Hooks - for managing states of components
import Link from "next/link";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Button,
} from "@nextui-org/react";

function Discover() {
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

  const fetchRecipes = async (searchQuery, filters) => {
    // passes filter to fetchrecipes
    setIsLoading(true);
    try {
      // Construct query parameters from filters object, right now does not fetch filter data
      //const queryParams = Object.entries(filters) //would use queryParams instead of filters at endpoint for const response
      //  .filter(([key, value]) => value !== "") // Exclude empty filters
      //  .map(([key, value]) => `${key}=${value}`)
      //  .join("&");

      const response = await fetch(
        process.env.NEXT_PUBLIC_SERVER_URL + `/searchV2?query=${searchQuery}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
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
      fetchRecipes(searchQuery, filters); // Call fetchRecipes when Enter key is pressed
    }
  };

  const handleFilterChange = (event, filterType) => {
    const filterVal = event.target.value; //event is triggered when dropdown param is pressed, changes type of filter
    setFilters((prevFilters) => ({
      //filter state is updated, which returns a new state obj
      ...prevFilters, // spreadOperator(...), copies prev state, updates to new filter
      [filterType]: filterVal,
    }));
    fetchRecipes(searchQuery, { ...filters, [filterType]: filterVal }); // Call fetchRecipes with updated filter
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
          <li>
            <Link href="/">
              <i className="fas fa-home"></i>Home
            </Link>
          </li>
          <li>
            <Link href="/search">
              <i className="fas fa-search"></i>Search
            </Link>
          </li>
          <li>
            <a href="#">
              <i className="fas fa-star"></i>Saved Recipes
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fas fa-cog"></i>User Settings
            </a>
          </li>
          <li>
            <Link href="/login">
              <i className="fas fa-sign-in-alt"></i>Login
            </Link>
          </li>
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

          <div>

            
            <div className="max-w-[900px] gap-2 grid grid-cols-3 grid-rows-2 px-8">
              <Card className="col-span-12 sm:col-span-4 h-[300px]">
                <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                  <p className="text-tiny text-white/60 uppercase font-bold">
                    What to watch
                  </p>
                  <h4 className="text-white font-medium text-large">
                    Stream the Acme event
                  </h4>
                </CardHeader>
                <Image
                  removeWrapper
                  alt="Card background"
                  className="z-0 w-full h-full object-cover"
                  src="/images/card-example-4.jpeg"
                />
              </Card>
            </div>
            <div className="max-w-[900px] gap-2 grid grid-cols-3 grid-rows-2 px-8">
              <Card className="col-span-12 sm:col-span-4 h-[300px]">
                <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                  <p className="text-tiny text-white/60 uppercase font-bold">
                    What to watch
                  </p>
                  <h4 className="text-white font-medium text-large">
                    Stream the Acme event
                  </h4>
                </CardHeader>
                <Image
                  removeWrapper
                  alt="Card background"
                  className="z-0 w-full h-full object-cover"
                  src="/images/card-example-4.jpeg"
                />
              </Card>
            </div>


          </div>
        </div>
      </section>
    </div>
  );
}

export default Discover;
