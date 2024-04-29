import { useEffect, useState } from 'react';
import { useAuth } from '../firebase/userAuthContext';
import { firestore } from '../firebase/firebaseConfig';

export default function SavedRecipes() {
  const { currentUser } = useAuth();
  const [savedRecipes, setSavedRecipes] = useState([]);

  useEffect(() => {
    const testRef = firestore.collection('testCollection');
    testRef.get().then((querySnapshot) => {
        const recipes = [];
        querySnapshot.forEach((doc) => {
            recipes.push({
                id: doc.id,
                ...doc.data()
            });
            console.log(doc.id, '=>', doc.data());
        });
        setSavedRecipes(recipes);
    }).catch((error) => {
        console.error('Test collection fetch error:', error);
    });
  }, []);

  return (
    <div>
      <h1>Saved Recipes</h1>
      <ul>
        {savedRecipes.length > 0 ? (
          savedRecipes.map((recipe, index) => (
            <li key={index}>{recipe.name || 'No Name Provided'}</li>
          ))
        ) : (
          <li>No recipes found</li>
        )}
      </ul>
    </div>
  );
}
