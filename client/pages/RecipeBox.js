import React from "react";
import {Card, CardHeader, CardBody} from "@nextui-org/react";

const RecipeBox = ({recipe}) => {
  return (
    <Card className="recipe-card" style={{width: '350px', height: '250px'}}>
      <CardBody className="overflow-visible py-2 bg-white">
        <div style={{position: 'relative', width: '100%', height: '100%', overflow: 'hidden'}}>
          <div style={{position: 'absolute', top: 0, right: 10, zIndex: 1 }}>
            <i className="fas fa-heart" id="heart-btn" style={{color: 'white'}}></i>
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
    </Card>
  );
}

export default RecipeBox;