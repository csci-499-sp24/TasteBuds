import React, { useState, useEffect } from 'react';
import RecipeBox from '../components/RecipeBox';
import Sidebar from "../components/sidebar";
import { Button } from "@nextui-org/react";

function Homepage({ userId }) {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchRecommendations = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/recommend?userId=${userId}`);
      if (!response.ok) {
        throw new Error('Failed to fetch recommendations');
      }
      const data = await response.json();
      setRecipes(data);
    } catch (error) {
      console.error('Error fetching recommendations:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (userId) {
      fetchRecommendations();
    }
  }, [userId]);

  return (
    <div>
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
