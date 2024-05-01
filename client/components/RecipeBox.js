import React, {useState, useEffect} from "react";
import { useRouter } from "next/router";
import {Card, CardHeader, CardBody, Button} from "@nextui-org/react";
import { useAuth } from "@/firebase/userAuthContext";
import { auth } from '../firebase/firebaseConfig';
import axios from "axios";

const RecipeBox = ({recipe}) => {
  const [isClicked, setIsClicked] = useState(false);
  const router = useRouter();
  const { currentUser } = useAuth();

  const handleClick = async () => 
  {
    setIsClicked(!isClicked);

    //add recipe to current user's saved recipes
    if(currentUser && !isClicked){
      try{
        const token = await auth.currentUser.getIdToken();

        const response = await axios.post(`${process.env.NEXT_PUBLIC_SERVER_URL}/saveRecipe`, {
          userId: currentUser.uid,
          recipeTitle: recipe.title,
          recipeId: recipe.recipe_id,
          imageUrl: recipe.image,
          
        }, {
          headers: {
            Authorization: `Bearer ${token}`, // Include the JWT token in the request headers
          },
        });
        console.log(response);
        console.log("Recipe saved successfully!");
      }catch(error){
        console.error("Error saving recipe:", error);
      }
    }
    if(currentUser && isClicked){
      try{
        const token = await auth.currentUser.getIdToken();
  
        const response = await axios.delete(`${process.env.NEXT_PUBLIC_SERVER_URL}/deleteRecipe/${currentUser.uid}/${recipe.recipe_id}`, {
          headers: {
            Authorization: `Bearer ${token}`, 
          },
        });
        console.log(response);
        console.log("Recipe deleted successfully!");
      }catch(error){
        console.error("Error deleting recipe:", error);
      }
    }
  }

  useEffect(() => 
  {
    // Reset heart when recipes fetched
    setIsClicked(false);
  }, [recipe]); // This is triggered when props are changed

  const viewRecipe = () => {
    router.push(`/recipe/${recipe.recipe_id}`);
  };

  return (
    <Card className="recipe-card" style={{width: '350px', height: '250px'}}>
      <CardBody className="overflow-visible py-2 bg-white">
        <div style={{position: 'relative', width: '100%', height: '100%', overflow: 'hidden'}}>
          <div style={{position: 'absolute', top: 0, right: 10, zIndex: 1 }}>
          <i 
            className="fas fa-heart" id="heart-btn" 
            style={{cursor: "pointer", color: isClicked ? 'red' : 'black', transition: 'color 0.3s'
            }}
            onClick={handleClick}
          ></i>
          </div>
        <img src={recipe.image} alt={recipe.title} 
        style={{width: '100%', height: '100%', objectFit: 'cover'}} />
        <div style={{position: 'absolute', bottom: 0, left: 0, right: 0, 
        background: 'rgba(0, 0, 0, 0.5)', padding: '10px'}}>
          <CardHeader>
            <h4 style={{fontWeight: "bolder", color: "white", 
            textShadow: "black 2px 2px", margin: 0, 
            fontSize: '14px', textAlign: 'center'}}>{recipe.title}
            </h4>
          </CardHeader>
        </div>
      </div>
      </CardBody>
      <Button onClick={viewRecipe}
          color={'warning'} >View Recipe</Button>
    </Card>
  );
}

export default RecipeBox;