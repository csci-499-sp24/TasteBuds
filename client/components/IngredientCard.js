import React from 'react';

const IngredientCard = ({ ingredients }) => {
  return (
    <>
      <h2>Ingredients</h2>
      <ul>
        {ingredients && ingredients.length > 0 ? (
          ingredients.map((ingredient, index) => (
            <li key={index}>
              <img
                src={
                  ingredient.image.startsWith('http')
                    ? ingredient.image
                    : `https://spoonacular.com/cdn/ingredients_100x100/${ingredient.image}`
                }
                alt={ingredient.standard_name}
              />
              {ingredient.standard_name}
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