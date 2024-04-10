import React from 'react';
import Link from 'next/link';

import Sidebar from "./sidebar";


function Homepage() {
  return (
    <div>
      <input type="checkbox" id="check" />
      <label htmlFor="check">
        <i className="fas fa-bars" id="btn"></i>
        <i className="fas fa-times" id="cancel"></i>
      </label>

      {/* Sidebar component */}
      <Sidebar />

      <div className="sidebar">
        <header>TasteBuds</header>
        <ul>
          <li><Link href="/"><i className="fas fa-home"></i>Home</Link></li>  
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
          Home
        </div>
      </section>
    </div>
  );
}

export default Homepage;
