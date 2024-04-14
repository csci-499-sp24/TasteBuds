// import React, {useEffect, useState} from 'react'
// import Link from 'next/link'

import React from 'react';
import Homepage from './home'; // Import the Homepage component

function Index() {
  
  // const [message, setMessage] = useState("Loading");

  // console.log(process.env.NEXT_PUBLIC_SERVER_URL + "/api/home")
  // useEffect(() => {
  //   fetch(process.env.NEXT_PUBLIC_SERVER_URL + "/api/home").then(
  //     response => response.json()
  //   ).then(
  //     data => {
  //       console.log(data)
  //       setMessage(data.message)
  //     }
  //   )
  // }, []);

//   return (
//     <div>
//         <input type="checkbox" id="check" />
//       <label htmlFor="check">
//         <i className="fas fa-bars" id="btn"></i>
//         <i className="fas fa-times" id="cancel"></i>
//       </label>
//       <div className="sidebar">
//         <header>TasteBuds</header>
//         <ul>
//           <li><Link href="/"><i className="fas fa-home"></i>Home</Link></li>  
//           <li><Link href="/search"><i className="fas fa-search"></i>Search</Link></li> 
//           <li><Link href="/discover"><i className="fas fa-search"></i>Discover</Link></li> 
//           <li><Link href="/searchByIngredient"><i className="fas fa-search"></i>Ingredient Search</Link></li> 
//           <li><a href="#"><i className="fas fa-star"></i>Saved Recipes</a></li>
//           <li><a href="#"><i className="fas fa-cog"></i>User Settings</a></li>
//           <li><Link href="/login"><i className="fas fa-sign-in-alt"></i>Login</Link></li>
//         </ul>
//       </div>
//       <section className='bg'>
//       <div id="div-center" className="head">
//           Home
//         </div>
//       </section>
//     </div>
//   )
// }


  return <Homepage />;
}

export default Index;