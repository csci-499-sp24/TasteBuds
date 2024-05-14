import React, {useState, useEffect} from "react";
import { Card, CardHeader, CardBody, CardFooter, Button } from "@nextui-org/react";
import { useRouter } from "next/router";
import { useAuth } from "@/firebase/userAuthContext";
import { auth } from '../firebase/firebaseConfig';
import axios from "axios";

const SavedRecipeBox = ({recipe, onDelete}) => {
  const [isClicked, setIsClicked] = useState(false);
  const router = useRouter();
  const { currentUser } = useAuth();

  const handleClick = async () => 
  {
    setIsClicked(!isClicked);

    onDelete();
  }

  useEffect(() => 
  {
    setIsClicked(false);
  }, [recipe]); 

  const viewRecipe = () => {
    router.push(`/recipe/${recipe.recipeId}`);
  };

  return (
    <Card className="recipe-card" style={{width: '350px', height: '250px',  margin: '10px' }}>
      <CardBody className="overflow-visible py-2 bg-white">
        <div style={{position: 'relative', width: '100%', height: '100%', overflow: 'hidden'}}>
          <div style={{position: 'absolute', top: 0, right: 10, zIndex: 1 }}>
          <i 
            className="fas fa-trash" id="trash-btn" 
            style={{cursor: "pointer", color: 'red'}}
            onClick={handleClick}
            ></i>
            </div>
          <img src={recipe.imageUrl} alt={recipe.recipeTitle} 
          style={{width: '100%', height: '100%', objectFit: 'cover', maxHeight: '200px'}} />
          <div style={{position: 'absolute', bottom: 0, left: 0, right: 0, 
          background: 'rgba(255, 224, 178, 0.5)', padding: '10px'}}>
          <CardHeader>
              <h4 style={{fontWeight: "bolder", color: "#212121", 
              textShadow: "white 2px 2px", margin: 0, 
              fontSize: '14px', textAlign: 'center'}}>{recipe.recipeTitle}
              </h4>
            </CardHeader>
          </div>
        </div>
        </CardBody>
        <Button onClick={viewRecipe}   className="bg-[#f57c00] text-[#212121] border-[#ff5252]" >View Recipe</Button>
  
      </Card>
    );
  }
  
  export default SavedRecipeBox;