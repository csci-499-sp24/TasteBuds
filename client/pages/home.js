import React, { useState, useEffect } from 'react';
import RecipeBox from '../components/RecipeBox';
import Sidebar from "../components/sidebar";
import { Button } from "@nextui-org/react";
import { useAuth } from "@/firebase/userAuthContext";

function Homepage() {
  const {currentUser} = useAuth();
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchRecommendations = async (userId) => {
    const serverURL = process.env.NEXT_PUBLIC_SERVER_URL;
    console.log('Server URL:', serverURL);
    if (!currentUser) {
      console.error("User ID is undefined");
      return;
    }
  
    const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;
    console.log('Server URL:', serverUrl); 
  
    const url = `${serverURL}/recommend?userId=${currentUser.uid}`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Failed to fetch recommendations: ${response.statusText}`);
      }
      const data = await response.json();
      console.log('Recommendations:', data);
      setRecipes(data); // Update state with fetched data
    } catch (error) {
      console.error('Error fetching recommendations:', error.message);
    }
  }  

  useEffect(() => {
    if (currentUser) {
      fetchRecommendations();
    }
  }, [currentUser]);

  return (
    <div>
       {/* Sidebar navigation */}
      <input type="checkbox" id="check" />
      <label htmlFor="check">
        <i className="fas fa-bars" id="btn"></i>
        <i className="fas fa-times" id="cancel"></i>
      </label>
        {/* Sidebar component */}
        <Sidebar />
      <section className='bg'>
        <div id="div-center" className="head">
          Discover Recipes
          <div className="recipe-box-container">
            {recipes.map((recipe, index) => (
              <RecipeBox key={index} recipe={recipe} />
            ))}
          </div>
          <Button onClick={fetchRecommendations} loading={loading}
            color={loading ? 'default' : 'warning'} variant="solid" size="lg">
            {loading ? 'Fetching Recommendations...' : 'Refresh'}
          </Button>
        </div>
      </section>
    </div>
  );
}

export default Homepage;
