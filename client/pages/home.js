import React, { useState, useEffect } from 'react';
import Link from 'next/link';

function Homepage() {
  const [randomRecipe, setRandomRecipe] = useState(null);
  // const [nextUpdateTimer, setNextUpdateTimer] = useState(86400); // Initial 24 hours in seconds
  const [nextUpdateTimer, setNextUpdateTimer] = useState(60); // Value set to 60 seconds for demo

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
        // Reset the timer for the next update
        // setNextUpdateTimer(86400); // Reset the timer to 24 hours
        setNextUpdateTimer(60); // Reset the timer to 60 seconds
      };

      const lastFetchTime = localStorage.getItem('lastFetchTime');
      if (!lastFetchTime || Date.now() - parseInt(lastFetchTime) >= 60 * 1000) { //60sec
      // if (!lastFetchTime || Date.now() - parseInt(lastFetchTime) >= 24 * 60 * 60 * 1000) { //24hr
        await getRandomRecipeFromServer();
      } else {
        const recipeFromStorage = localStorage.getItem('randomRecipe');
        setRandomRecipe(JSON.parse(recipeFromStorage));
        // Calculate remaining time for the timer
        const remainingTime = 60 * 1000 - (Date.now() - parseInt(lastFetchTime)); //60sec
        // const remainingTime = 24 * 60 * 60 * 1000 - (Date.now() - parseInt(lastFetchTime)); //24hr
        // Update the timer value
        setNextUpdateTimer(Math.ceil(remainingTime / 1000));
        // Set a timeout to fetch a new recipe after the remaining time
        const timer = setTimeout(getRandomRecipeFromServer, remainingTime);
        // Clean up the timers when the component unmounts or when a new recipe is fetched
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
    // Set up a countdown timer for the next update
    const countdownTimer = setInterval(() => {
      setNextUpdateTimer((prev) => {
        if (prev === 0) {
          // Reset the timer and fetch a new random recipe
          fetchRandomRecipe();
          return 60; // Reset the timer to 60 sec
          // return 86400; // Reset the timer to 24 hours
        } else {
          return prev - 1;
        }
      });
    }, 1000);

    // Clean up the countdown timer when the component unmounts
    return () => clearInterval(countdownTimer);
  }, []);

  const recipeCard = (recipe) => {
    return (
      <div className="flex justify-center items-center">
        <div key={recipe.recipe_id} className="card flex-none w-[1000px] h-[750px] justify-center items-center rounded">
          <div className="header" style={{ maxWidth: '650px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', color: 'black', textAlign: 'center' }}>
            {recipe.title}
          </div>
          <img src={recipe.image} alt={recipe.title} className="recipe-image rounded" style={{ width: '100%', height: 'auto' }} />
        </div>
      </div>
    );
  };

  return (
    <div>
      <input type="checkbox" id="check" />
      <label htmlFor="check">
        <i className="fas fa-bars" id="btn"></i>
        <i className="fas fa-times" id="cancel"></i>
      </label>
      <div className="sidebar">
        <header>TasteBuds</header>
        <ul>
          <li><Link href="/home"><i className="fas fa-home"></i>Home</Link></li>  
          <li><Link href="/search"><i className="fas fa-search"></i>Search</Link></li> 
          <li><Link href="/discover"><i className="fas fa-search"></i>Discover</Link></li> 
          <li><Link href="/searchByIngredient"><i className="fas fa-search"></i>Ingredient Search</Link></li> 
          <li><a href="#"><i className="fas fa-star"></i>Saved Recipes</a></li>
          <li><a href="#"><i className="fas fa-cog"></i>User Settings</a></li>
          <li><Link href="/login"><i className="fas fa-sign-in-alt"></i>Login</Link></li>
        </ul>
      </div>
      <section className='bg'>
        <div id="div-center" className="head">
          Recipe of the Day:
          {randomRecipe && recipeCard(randomRecipe)}
          <div>Next update in: {nextUpdateTimer} seconds</div>
        </div>
      </section>
    </div>
  );
}

export default Homepage;
