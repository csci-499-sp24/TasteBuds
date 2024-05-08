import React, { useState, useEffect } from 'react';
import RecipeBox from '../components/RecipeBox';
import Link from 'next/link';
import Sidebar from "../components/sidebar";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Button,
} from "@nextui-org/react";

function Homepage() {
  const [randomRecipe, setRandomRecipe] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchMultipleRecipes = async (userId) => {
    try {
      setLoading(true);
      const response = await fetch(`http://127.0.0.1:5000/recommend?userId=${userId}`);
      if (!response.ok) {
        throw new Error('Failed to fetch recommended recipes');
      }
      const data = await response.json();
      console.log('Recommendations received:', data);
  
      // Fetch recipe details for each recommended recipe
      const recipes = await Promise.all(data.map(async (recipe) => {
        console.log('Fetching details for recipe:', recipe.recipeId);
        const recipeDetailsResponse = await fetch(`http://localhost:8080/recipe/${recipe.recipeId}`);
        if (!recipeDetailsResponse.ok) {
          throw new Error('Failed to fetch recipe details');
        }
        const recipeDetails = await recipeDetailsResponse.json();
        return { ...recipe, ...recipeDetails };
      }));
      console.log('Full recipe details:', recipes);
  
      setRandomRecipe(recipes);
      console.log('Updated state with recipes:', recipes);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching recommended recipes:', error);
      setLoading(false);
    }
  };
  
  
  

  // useEffect hook fetches a random recipe when component mounts
  useEffect(() => {
    const userId = '9EAat6G5saSMNwoirskvKdXPLI13';
    fetchMultipleRecipes(userId);
  }, []);

  // This func handles click event of getting a new recipe
  const handleGetNewRecipe = () => {
    fetchMultipleRecipes(4); // New recipe is fetched when button clicked
  };

  return (
    <div>
      <input type="checkbox" id="check" />
      <label htmlFor="check">
        <i className="fas fa-bars" id="btn"></i>
        <i className="fas fa-times" id="cancel"></i>
      </label>
      <Sidebar />
      <section className='bg'>
        <div id="div-center" className="head">
          Discover Recipes
          <div className="recipe-box-container">
          {/* RecipeBox component*/}
          {randomRecipe.map((recipe, index) => {
            console.log(`Rendering recipe box for recipeId: ${recipe.recipeId}`);
            return (
              <div key={index} className="recipe-box-item">
                <RecipeBox recipe={recipe} />
              </div>
            );
          })}

          {/* Displays the ciuntdown, remove comment for timer */}
          {/*
          <div style={{fontWeight: "bolder", color: "white", textShadow: "black 2px 2px"}}>Next update in: {nextUpdateTimer} seconds</div>
          */}
          </div>
          {/* Fetches a new recipe  after clicking on button*/}
          <Button onClick={() => fetchMultipleRecipes('9EAat6G5saSMNwoirskvKdXPLI13')} loading={loading} 
          color={loading ? 'default' : 'warning'} variant="solid" size="lg">
            {loading ? 'Fetching Recommendations...' : 'Refresh'}
          </Button>
        </div>
      </section>
    </div>
  );
}

export default Homepage;