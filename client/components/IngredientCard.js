import React from 'react';
import { Image, Card } from '@nextui-org/react';

const IngredientCard = ({ ingredients }) => {
  return (
    <>
      <h2>Ingredients</h2>
      <ul style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
        {ingredients && ingredients.length > 0 ? (
          ingredients.map((ingredient, index) => (
            <IngredientCardItem key={index} ingredient={ingredient} />
          ))
        ) : (
          <p>No ingredients available</p>
        )}
      </ul>
    </>
  );
};

const IngredientCardItem = ({ ingredient }) => {
  return (
    <li style={{ width: '100px', height: '120px' }}>
      <Card>
        <div style={{ position: 'relative', width: '100px', height: '100px' }}>
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
            <Image
              src={
                ingredient.image.startsWith('http')
                  ? ingredient.image
                  : `https://spoonacular.com/cdn/ingredients_100x100/${ingredient.image}`
              }
              alt={ingredient.standard_name}
              width={150}
              height={150}
              objectFit={'cover'}
            />
          </div>
          <h4 style={{
            position: 'absolute',
            bottom: 0,
            fontWeight: 'bolder',
            color: 'white',
            textShadow: 'black 2px 2px',
            margin: 0,
            fontSize: '14px',
            textAlign: 'center',
            width: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          }}>
            {ingredient.standard_name}
          </h4>
        </div>
      </Card>
    </li>
  );
};

export default IngredientCard;