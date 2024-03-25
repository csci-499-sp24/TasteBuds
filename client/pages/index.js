import React, {useEffect, useState} from 'react'
import Link from 'next/link'

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
    </div>
  )
}

export default Index