import React from 'react';
import { Image, Card } from '@nextui-org/react';

const IngredientCard = ({ ingredients }) => {
  return (
    <>
      <h2>Ingredients</h2>
      <ul>
        {ingredients && ingredients.length > 0 ? (
          ingredients.map((ingredient, index) => (
            <li key={index} style={{ width: '100px', height: '120px', marginBottom: '10px' }}>
              <Card shadow>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', 
                flexDirection: 'column', width: '100px', height: '100px' }}>
                  <Image
                    src={
                      ingredient.image.startsWith('http')
                        ? ingredient.image
                        : `https://spoonacular.com/cdn/ingredients_100x100/${ingredient.image}`
                    }
                    alt={ingredient.standard_name}
                    width={50}
                    height={50}
                  />
                  <span style={{ textAlign: 'center' }}>{ingredient.standard_name}</span>
                </div>
              </Card>
            </li>
          ))
        ) : (
          <p>No ingredients available</p>
        )}
      </ul>
    </>
  );
};

export default IngredientCard;