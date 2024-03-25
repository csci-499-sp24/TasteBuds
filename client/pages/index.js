import React, {useEffect, useState} from 'react'
import Link from 'next/link'

import {kebabCase} from "lodash"

function Index() {
  
  const [message, setMessage] = useState("Loading")

  console.log(process.env.NEXT_PUBLIC_SERVER_URL + "/api/home")
  useEffect(() => {
    fetch(process.env.NEXT_PUBLIC_SERVER_URL + "/api/home").then(
      response => response.json()
    ).then(
      data => {
        console.log(data)
        setMessage(data.message)
      }
    )
  }, [])

  return (
    <div>
        <div className="navbar">
      <Link href="/">Home</Link>
      <div className="dropdown">
        <button className="dropbtn">More
          <i className="dropdownnav"></i>
        </button>
        <div className="dropdown-content">
          <Link href="#">Saved Recipes</Link>
          <Link href="#">User Profile</Link>
          <Link href="/search">Search</Link>
          <Link href="#">User Profile</Link>
        </div>
      </div>
    </div> 
    <div className="homePage">
      <div className="container">
        <h1>Welcome to TasteBuds</h1>
      </div>
  </div>

      <nav>
        <Link className="header" href={"/"}>Home</Link>
      </nav>
      <p className="featured">Featured Recipes</p>
      <div className="recipes">
        <div className="recipe-card">
        <img className="recipe-img" src={recipes[0].image}></img>
          <p className="recipe-title">{kebabCase(recipes[0].title)}</p>
          {/* <p>{recipes[0].summary}</p> */}
          <Link className="recipe-link" href={`/recipe/${recipes[0].title}`}>Read more...</Link>
        </div>
        <div className="recipe-card">
        <img className="recipe-img" src={recipes[3].image}></img>
          <p className="recipe-title">{kebabCase(recipes[3].title)}</p>
          {/* <p>{recipes[3].summary}</p> */}
          <Link className="recipe-link" href={`/recipe/${recipes[3].title}`}>Read more...</Link>
        </div>
        <div className="recipe-card">
        <img className="recipe-img" src={recipes[2].image}></img>
          <p className="recipe-title">{kebabCase(recipes[2].title)}</p>
          {/* <p>{recipes[2].summary}</p> */}
          <Link className="recipe-link" href={`/recipe/${recipes[2].title}`}>Read more...</Link>
        </div>
      </div>
    </div> 
    <div className="homePage">
      <div className="container">
        <h1>Welcome to TasteBuds</h1>
      </div>
  </div>
    </div>
  )
}

export default Index