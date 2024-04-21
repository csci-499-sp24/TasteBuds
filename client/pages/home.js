import React, { useState, useEffect } from 'react';
import Sidebar from "./sidebar";
import RecipeBox from './RecipeBox';

function Homepage() {
  const [randomRecipe, setRandomRecipe] = useState(null);
  /*Uncomment const [] = useState for timer */
  // const [nextUpdateTimer, setNextUpdateTimer] = useState(5); 
  /* Value set to 60 seconds for demo
  const [nextUpdateTimer, setNextUpdateTimer] = useState(86400); // Initial 24 hours in seconds
  */
  const [loading, setLoading] = useState(false);

  const fetchRandomRecipe = async () => {
    setLoading(true);
    try {
      const response = await fetch(process.env.NEXT_PUBLIC_SERVER_URL + '/getRandomRecipe');
      if (!response.ok) {
        throw new Error('Failed to fetch random recipe');
      }
      const data = await response.json();
      setRandomRecipe(data);
      localStorage.setItem('randomRecipe', JSON.stringify(data));
      localStorage.setItem('lastFetchTime', Date.now().toString());
      /*Uncomment setNextUpdateTimer for timer function */
      //setNextUpdateTimer(5); // Reset the timer to 60 seconds
      // setNextUpdateTimer(86400); // Reset the timer to 24 hours
      setLoading(false); // Set loading state to false after fetching
    } catch (error) {
      console.error(error);
      setLoading(false); // If there is an error loading state set to false
    }
  };

  // useEffect hook fetches a random recipe when component mounts
  useEffect(() => {
    fetchRandomRecipe();
  }, []);

  // useEffect updates the countdown timer every second, remove comments to enable timer
  /*
  useEffect(() => {
    const countdownTimer = setInterval(() => {
      setNextUpdateTimer((prev) => {
        if (prev === 0) {
          fetchRandomRecipe();
          return 5; // Reset the timer to 60 sec
          // return 86400; // Reset the timer to 24 hours
        } else {
          return prev - 1; // constantly removes 1 sec
        }
      });
    }, 1000);

    // Cleanup function clea=rs timer when the component unmounts
    return () => clearInterval(countdownTimer);
  }, []);
  */

  // This func handles click event of getting a new recipe
  const handleGetNewRecipe = () => {
    fetchRandomRecipe(); // New recipe is fetched when button clicked
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
          Recipe of the Day:
          {/* RecipeBox component*/}
          {randomRecipe && <RecipeBox recipe={randomRecipe} />}
          {/* Displays the ciuntdown, remove comment for timer */}
          {/*
          <div style={{fontWeight: "bolder", color: "white", textShadow: "black 2px 2px"}}>Next update in: {nextUpdateTimer} seconds</div>
          */}
          {/* Fetches a new recipe  after clicking on button*/}
          <button onClick={handleGetNewRecipe} disabled={loading} 
          style={{ padding: '8px', marginTop: '10px', borderRadius: '5px', background: 'transparent', 
          color: 'white', border: '1px solid white', cursor: 'pointer' }}>
            {loading ? 'Fetching New Recipe...' : 'Get New Recipe'}
          </button>
        </div>
      </section>
    </div>
  );
}

export default Homepage;