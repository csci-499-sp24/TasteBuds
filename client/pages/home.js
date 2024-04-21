import React, { useState, useEffect } from 'react';
import Sidebar from "./sidebar";
import RecipeBox from './RecipeBox';

function Homepage() {
  const [randomRecipe, setRandomRecipe] = useState(null);
  const [nextUpdateTimer, setNextUpdateTimer] = useState(5); // Value set to 60 seconds for demo
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
      setNextUpdateTimer(5); // Reset the timer to 60 seconds
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
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

  const handleGetNewRecipe = () => {
    fetchRandomRecipe();
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
          {randomRecipe && <RecipeBox recipe={randomRecipe} />}
          <div style={{fontWeight: "bolder", color: "white", textShadow: "black 2px 2px"}}>Next update in: {nextUpdateTimer} seconds</div>
          <button onClick={handleGetNewRecipe} disabled={loading} style={{ padding: '8px', marginTop: '10px', borderRadius: '5px', background: 'transparent', color: 'white', border: '1px solid white', cursor: 'pointer' }}>
            {loading ? 'Fetching New Recipe...' : 'Get New Recipe'}
          </button>
        </div>
      </section>
    </div>
  );
}

export default Homepage;