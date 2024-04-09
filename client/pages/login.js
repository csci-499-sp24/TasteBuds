import Link from "next/link";
import { useState } from "react";

function Login(){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    //handle logging in
    async function logIn(e) {
        e.preventDefault();
        
        try {
            //send username and password to database
            const response = await fetch(process.env.NEXT_PUBLIC_SERVER_URL + '/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Error logging in');
            }

            console.log(data);
        } catch (error) {
            console.error('Error signing up:', error.message);
        }
    }

    return(
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
      <section></section>
      <div className="main">
        <h3>Login</h3>
        <form onSubmit={logIn}> 
          <label htmlFor="user"><b>Username: </b></label>
          <input type="text"
              id="user"
              className="user_credential_field"
              name="user"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your Username" required />
          <label htmlFor="password"><b>Password: </b></label>
          <input type="password"
              id="password"
              className="user_credential_field"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your Password" required />
          <div className="wrap">
              <button className="submit login_button" type="submit" >Submit</button>
            </div>
        </form>
        <p>Not registered? Create an account <Link href="/signup" className="sign-up">here</Link></p>
    </div>
        </div>
    )
}

export default Login;