import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Sidebar from "./sidebar";
import RecipeBox from './RecipeBox'; // Import the RecipeCard component

function Homepage() {
  const [randomRecipe, setRandomRecipe] = useState(null);
  const [nextUpdateTimer, setNextUpdateTimer] = useState(5); // Value set to 60 seconds for demo

  const fetchRandomRecipe = async () => {
    try {
      const getRandomRecipeFromServer = async () => {
        const response = await fetch(process.env.NEXT_PUBLIC_SERVER_URL + '/getRandomRecipe');
        if (!response.ok) {
          throw new Error('Failed to fetch random recipe');
        }
        const data = await response.json();
        setRandomRecipe(data);
        localStorage.setItem('randomRecipe', JSON.stringify(data));
        localStorage.setItem('lastFetchTime', Date.now().toString());
        setNextUpdateTimer(5); // Reset the timer to 60 seconds
      };

      const lastFetchTime = localStorage.getItem('lastFetchTime');
      if (!lastFetchTime || Date.now() - parseInt(lastFetchTime) >= 5 * 1000) {
        await getRandomRecipeFromServer();
      } else {
        const recipeFromStorage = localStorage.getItem('randomRecipe');
        setRandomRecipe(JSON.parse(recipeFromStorage));
        const remainingTime = 5 * 1000 - (Date.now() - parseInt(lastFetchTime));
        setNextUpdateTimer(Math.ceil(remainingTime / 1000));
        const timer = setTimeout(getRandomRecipeFromServer, remainingTime);
        return () => clearTimeout(timer);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchRandomRecipe();
  }, []);

  useEffect(() => {
    const countdownTimer = setInterval(() => {
      setNextUpdateTimer((prev) => {
        if (prev === 0) {
          fetchRandomRecipe();
          return 5; // Reset the timer to 60 sec
        } else {
          return prev - 1;
        }
      });
    }, 1000);

    return () => clearInterval(countdownTimer);
  }, []);

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
          Recipe of the Day:
          {randomRecipe && <RecipeBox recipe={randomRecipe} />} {/* Use the RecipeCard component */}
          <div style={{fontWeight: "bolder", color: "white", textShadow: "black 2px 2px"}}>Next update in: {nextUpdateTimer} seconds</div>
        </div>
      </section>
    </div>
  );
}

export default Homepage;
