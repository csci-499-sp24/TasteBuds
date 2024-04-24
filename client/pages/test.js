import RecipeInfoBox from "../components/RecipeCard";
import Sidebar from "./sidebar";
import { useState, useEffect } from "react";

function getRecipes() {
    const [Recipes, setRecipes] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/searchV2`)
        const json = await response.json();
        setRecipes(json);
        console.log(json)
      };
      fetchData();
    }, []);
  
    return (
      <div>
        <Sidebar/>
        {Recipes.map(item =>{
            <RecipeInfoBox props = {item}/>
        })}
      </div>
    );
}

export default getRecipes;