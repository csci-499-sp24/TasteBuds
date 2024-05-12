import { useEffect, useState } from 'react';
import { useAuth } from '../firebase/userAuthContext';
import { firestore } from '../firebase/firebaseConfig';
import { getFirestore, collection, query, getDocs } from 'firebase/firestore';
import Sidebar from "../components/sidebar.js";
import { auth } from '../firebase/firebaseConfig';
import SavedRecipeBox from '@/components/savedRecipeBox';
import axios from 'axios';
import Sidebar from '../components/sidebar.js';

export default function SavedRecipes() {
  const { currentUser } = useAuth();
  const [savedRecipes, setSavedRecipes] = useState([]);
  const [loading, setLoading] = useState(false);

  //display all saved recipes
  const fetchSavedRecipes = async()=>{
    // const testRef = collection(firestore, "testCollection");
    // const queryDb = query(testRef);
    // const querySnapshot = await getDocs(queryDb);
    // const recipes = querySnapshot.docs.map(doc => doc.data());
    // setSavedRecipes(recipes);
    // console.log(recipes);

    setLoading(true);

    try {
      const token = await auth.currentUser.getIdToken();

      const response = await fetch(process.env.NEXT_PUBLIC_SERVER_URL + '/savedRecipes/' + currentUser.uid,{
        headers: {
          Authorization: `Bearer ${token}`, 
        },
      });
      
      if (!response.ok)
      {
        throw new Error('Failed to fetch saved recipes');
      }

      const data = await response.json();
      setSavedRecipes(data);
      console.log("Fetched data:", data);
      console.log("Saved recipes:", savedRecipes);
      setLoading(false); 
    } catch (error) 
    {
      console.error(error);
      setLoading(false); 
    }
  }

  //delete recipe from current user's saved recipes
  const deleteRecipe = async(recipeId)=>{
    if(currentUser){
      try{
        const token = await auth.currentUser.getIdToken();
  
        const response = await axios.delete(`${process.env.NEXT_PUBLIC_SERVER_URL}/deleteRecipe/${currentUser.uid}/${recipeId}`, {
          headers: {
            Authorization: `Bearer ${token}`, 
          },
        });
        console.log(response);
        console.log("Recipe deleted successfully!");
        setSavedRecipes(savedRecipes.filter(recipe => recipe.recipeId !== recipeId));
      }catch(error){
        console.error("Error deleting recipe:", error);
      }
    }
  }


  useEffect(() => {
    if (!currentUser) {
      setLoading(false); 
      return;
    }

    fetchSavedRecipes();

    // testRef.get().then((querySnapshot) => {
    //     const recipes = querySnapshot.docs.map(doc => ({
    //       id: doc.id,
    //       ...doc.data()  
    //     }));
    //     setSavedRecipes(recipes);  
    //     console.log('Fetched recipes:', recipes);  
    // }).catch((error) => {
    //     console.error('Test collection fetch error:', error);
    // });
  }, [currentUser]);  

  useEffect(() => {
    console.log("Saved recipes updated:", savedRecipes);
  }, [savedRecipes]);

  return (
    <div>
      <div>
        <Sidebar />
      </div>
      <section className='bg'>
      <div className="head">
      <h1>Saved Recipes</h1>
      <div style={{display: "flex"}}>
        {savedRecipes ? (
          savedRecipes.map((recipe, index) => (
            <SavedRecipeBox 
              key={index} 
              recipe={recipe}
              onDelete={() => deleteRecipe(recipe.recipeId)}
            />
          ))
        ) : (
          <li>No recipes found</li>  
        )}
      </div>
      </div>
      </section>
    </div>
  );
}
