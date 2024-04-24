import { useEffect, useState } from 'react';
import { useAuth } from '../firebase/userAuthContext';
import { firestore } from '../firebase/firebaseConfig';
import { getFirestore, collection, query, getDocs } from 'firebase/firestore';
import Sidebar from './sidebar';

export default function SavedRecipes() {
  const { currentUser } = useAuth();
  const [savedRecipes, setSavedRecipes] = useState([]);

  useEffect(() => {
    const fetchSavedRecipes = async()=>{
      const testRef = collection(firestore, "testCollection");
      const queryDb = query(testRef);
      const querySnapshot = await getDocs(queryDb);
      const recipes = querySnapshot.docs.map(doc => doc.data());
      setSavedRecipes(recipes);
      console.log(recipes);
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
  }, []);  

  return (
    <div>
    <input type="checkbox" id="check" />
      <label htmlFor="check">
        <i className="fas fa-bars" id="btn"></i>
        <i className="fas fa-times" id="cancel"></i>
      </label>
        {/* Sidebar component */}
        <Sidebar />
      <section className='bg'>
      <div className="head">
      <h1>Saved Recipes</h1>
      <ul>
        {savedRecipes && savedRecipes.length > 0 ? (
          savedRecipes.map((recipe, index) => (
            <li style={{color: "white"}} key={index}>{recipe.Name}</li>  
          ))
        ) : (
          <li>No recipes found</li>  
        )}
      </ul>
      </div>
      </section>
    </div>
  );
}
