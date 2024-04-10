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
      <section className='bg'>
        <div id="div-center" className="head">
          Home
        </div>
      </section>
    </div>
  );
}

export default Homepage;