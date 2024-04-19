import React, { useState, useEffect } from 'react';
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
  const [randomRecipe, setRandomRecipe] = useState(null);
  const [nextUpdateTimer, setNextUpdateTimer] = useState(60); // Value set to 60 seconds for demo
  // const [nextUpdateTimer, setNextUpdateTimer] = useState(86400); // Initial 24 hours in seconds

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
        setNextUpdateTimer(60); // Reset the timer to 60 seconds
        // setNextUpdateTimer(86400); // Reset the timer to 24 hours
      };

      const lastFetchTime = localStorage.getItem('lastFetchTime');
      if (!lastFetchTime || Date.now() - parseInt(lastFetchTime) >= 60 * 1000) {
      // if (!lastFetchTime || Date.now() - parseInt(lastFetchTime) >= 24 * 60 * 60 * 1000) { //24hr
        await getRandomRecipeFromServer();
      } else {
        const recipeFromStorage = localStorage.getItem('randomRecipe');
        setRandomRecipe(JSON.parse(recipeFromStorage));
        const remainingTime = 60 * 1000 - (Date.now() - parseInt(lastFetchTime));
        // const remainingTime = 24 * 60 * 60 * 1000 - (Date.now() - parseInt(lastFetchTime)); //24hr
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
          return 60; // Reset the timer to 60 sec
          // return 86400; // Reset the timer to 24 hours
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
          {randomRecipe && (
            <Card className="recipe-card" style={{ height: '500px', width: '700px' }}>
              <div style={{ height: '100%', width: '100%', backgroundImage: `url(${randomRecipe.image})`, backgroundSize: 'cover', backgroundPosition: 'center', padding: '20px' }}>
                 <CardHeader>
                  <h4 style={{ fontWeight: "bolder", color: "white", textShadow: "black 2px 2px" }}>{randomRecipe.title}</h4>
                </CardHeader>
              </div>
            </Card>
          )}
          <div style={{fontWeight: "bolder", color: "white", textShadow: "black 2px 2px"}}>Next update in: {nextUpdateTimer} seconds</div>
        </div>
      </section>
    </div>
  );
}

export default Homepage;