import { useRouter } from 'next/router';
import { useState, useEffect } from "react"; 
import Sidebar from "../../components/sidebar"; 
import ErrorPage from 'next/error';
import IngredientCard from "../../components/IngredientCard";
import {Image} from "@nextui-org/react";
import styles from './RecipeProfile.module.css'
import CommentForm from '../../components/CommentForm';
import StarsPopup from '@/components/starpopup';
import RecipeSummary from '../../components/RecipeSummary';
//import { useAuth } from '../firebase/userAuthContext';
//import { auth } from '../firebase/firebaseConfig';

const Recipe = () => {
  const [recipe, setRecipe] = useState(null); // recipe data 
  const [ingredients, setIngredients] = useState([]); // ingredient data
  const [instructions, setInstructions] = useState([]); // instruction data
  const [loading, setLoading] = useState(true); // state tracks load or not
  const router = useRouter(); // Initialize useRouter hook to access router object
  const { id } = router.query; // Get the id from the router query
  //const firebaseUserId = auth.currentUser ? auth.currentUser.uid : null;
  

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/search_by_id?id=${id}`);
        if (response.ok) {
          const data = await response.json(); 
          console.log(data); // Logging data from api 
          setRecipe(data["recipe_data"]); // data of recipe in array 0
          const ingredientsData = data["recipe_data"]?.Ingredients || []; // access ingredients array from data[0]
          setIngredients(ingredientsData); // set ingredients in state
          setInstructions(data["instruction_data"]); // in the data instructions are array 1
          setLoading(false); 
        } else {
          throw new Error("Failed to fetch recipe"); // Throw an error if fetching the recipe data fails
        }
      } catch (error) {
        console.error("Error fetching recipe:", error); // Logging any errors that occur during data fetching
        setLoading(false); // Update loading state to indicate data has been loaded to false
      }
    };

    if (id) {
      fetchRecipe(); // Call fetchRecipe function when id parameter is available
    }
  }, [id]); // Effect runs only if 'id' changes

  if (loading) {
    return <div>Loading...</div>; // Render a loading message while data is fetched
  }

  if (!recipe) {
    return <ErrorPage statusCode={404} />; // When no data is fetched, render a 404 error page
  }

  return (
    <div className = {styles.mainContainer}>
      <div className= {styles.backgroundImage}>
      <div class="relative h-5 w-5 ...">
        <div class="absolute left-0 top-0 h-16 w-16 ...">
          <Sidebar />
        </div>
      </div>
        <div className={styles.recipeSummaryContainer}>
          <RecipeSummary recipe={recipe} id={id} />
        </div> 
        {/* {(firebaseUserId == null) => {

        }} */}
        {/*
        {recipe.totalPrice !== undefined && (
            <p>Total Price: {recipe.totalPrice}</p> 
          )}
        */}
        
        <div className={styles.regularTextCenter}>Ingredients</div>
        <div className = {styles.ingredientContainer} >
          <IngredientCard ingredients={ingredients} />
        </div>
        {/* Display the ingredientCard component with ingredients data */}
        <div className={styles.regularTextCenter}>Instructions</div> {/* Recipe Instructions are rendered when the condition is met/available */}
        <div className={styles.recipeSummary}>
        {instructions.length > 0 ? (
          <ol>
            {instructions.map((instruction, index) => (
              <li key={index}>{instruction.step}</li> // Map over instructions and render each one as a list item
            ))}
          </ol>
        ) : (
          <p>No instructions available</p> // Else this render when ther are no instructions
        )}
        </div>
        <CommentForm recipeId={id} />
      </div>
    </div>
  );
};
//exporting the recipe id value so that stars can get it
//is that how it works?
// const router = useRouter();
// export const id = router.query;
export default Recipe;
