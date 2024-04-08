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
  const [searchResults, setSearchResults] = useState([
    {
      id: 1,
      title: "Spaghetti Carbonara",
      description: "A classic Italian pasta dish with a creamy egg sauce, pancetta, and Parmesan.",
      image: "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg",
    },
    {
      id: 2,
      title: "Chicken Tikka Masala",
      description: "Juicy grilled chicken pieces in a creamy tomato sauce.",
      image: "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 3,
      title: "Beef Tacos",
      description: "Tacos filled with seasoned ground beef, cheese, and lettuce.",
      image: "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
        id: 4,
        title: "Beef Tacos",
        description: "Tacos filled with seasoned ground beef, cheese, and lettuce.",
        image: "https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
        id: 5,
        title: "Salmon",
        description: "Tacos filled with seasoned ground beef, cheese, and lettuce.",
        image: "https://images.pexels.com/photos/262959/pexels-photo-262959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
        id: 6,
        title: "Bread w/ Blueberries?",
        description: "Tacos filled with seasoned ground beef, cheese, and lettuce.",
        image: "https://images.pexels.com/photos/708488/pexels-photo-708488.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
        id: 7,
        title: "Acai Bowl?",
        description: "Tacos filled with seasoned ground beef, cheese, and lettuce.",
        image: "https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
        id: 8,
        title: "Chocholate Slice",
        description: "Tacos filled with seasoned ground beef, cheese, and lettuce.",
        image: "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    
    // Add more entries as needed
  ]);

  

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
        <label htmlFor="search">Discovery</label>
          <div className="scrollable-content">
          <div className="posts-container max-w-[900px] gap-2 grid grid-cols-3 grid-rows-2 px-8">
            {/* Map through your searchResults to render posts */}
            {searchResults.map((result, index) => (
              <Card key={index} className="post-card col-span-12 sm:col-span-4 h-[300px]">
                <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                <p className="text-tiny text-white/60 uppercase font-bold">
                    {result.description}
                  </p>
                  <h4 className="text-white font-medium text-large">
                    {result.title}
                  </h4>
                </CardHeader>
                <Image className="z-0 w-full h-full object-cover"src={result.image} alt="Post image" />
                {/* Additional content */}
              </Card>
            ))}
          </div>
          </div>


        </div>
      </section>
    </div>
  );
}

export default Discover;
