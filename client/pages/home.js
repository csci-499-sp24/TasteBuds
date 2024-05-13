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
  /*Uncomment const [] = useState for timer */
  // const [nextUpdateTimer, setNextUpdateTimer] = useState(5); 
  /* Value set to 60 seconds for demo
  const [nextUpdateTimer, setNextUpdateTimer] = useState(86400); // Initial 24 hours in seconds
  */
  const [loading, setLoading] = useState(false);

  const fetchMultipleRecipes = async (count) => {
    setLoading(true);
    try {
      const recipesArray = [];
      for (let i = 0; i < count; i++)
      {
        const response = await fetch(process.env.NEXT_PUBLIC_SERVER_URL + '/getRandomRecipe');
        if (!response.ok) 
        {
          throw new Error('Failed to fetch random recipe ${i + 1}');
        }
        const data = await response.json();
        recipesArray.push(data);
      }
      //localStorage.setItem('randomRecipe', JSON.stringify(data));
      //localStorage.setItem('lastFetchTime', Date.now().toString());
      /*Uncomment setNextUpdateTimer for timer function */
      //setNextUpdateTimer(5); // Reset the timer to 60 seconds
      // setNextUpdateTimer(86400); // Reset the timer to 24 hours
      setRandomRecipe(recipesArray);
      setLoading(false); // Set loading state to false after fetching
    } catch (error) 
    {
      console.error(error);
      setLoading(false); // If there is an error loading state set to false
    }
  };

  // useEffect hook fetches a random recipe when component mounts
  useEffect(() => {
    fetchMultipleRecipes(4);
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
    fetchMultipleRecipes(4); // New recipe is fetched when button clicked
  };

  return (
    <div>
      <div>
        <Sidebar/>
      </div>
      <section className='bg'>
        <div id="div-center" className="head">
          <span style={{color: '#F57C00', textShadow: '1px 1px 1px #757575'}}>Discover Recipes</span>
          <div className="recipe-box-container" style={{ display: 'flex'}}>
          {/* RecipeBox component*/}
            {randomRecipe.map((recipe, index) => (
              <div key={index} className="recipe-box-item">
                <RecipeBox recipe={recipe} />
              </div>
            ))}
          {/* Displays the ciuntdown, remove comment for timer */}
          {/*
          <div style={{fontWeight: "bolder", color: "white", textShadow: "black 2px 2px"}}>Next update in: {nextUpdateTimer} seconds</div>
          */}
          </div>
          {/* Fetches a new recipe  after clicking on button*/}
          <Button onClick={handleGetNewRecipe} loading={loading}
          className={loading ? 'default' : 'bg-[#f57c00] text-[#212121] border-[#ff5252]'} variant="solid" size="lg" >
            {loading ? 'Fetching New Recipes...' : 'Get New Recipes'}
          </Button>
        </div>
      </section>
      <style jsx>{`
      .bg-home {
        background: url('home.jpg') no-repeat;
        background-position: center;
        background-size: cover;
        height: 100vh;
        overflow-y: auto;
      }        
      `}</style>
    </div>
  );
}

export default Homepage;