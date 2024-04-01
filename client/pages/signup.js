import Link from "next/link";
import { useState } from "react";

function Signup(){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    async function signUp(e){
        try {
            const response = await fetch('/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });
            const data = await response.json();
            console.log(data);
            // Handle successful signup
        } catch (error) {
            console.error('Error signing up:', error);
            // Handle error
        }
    }

    return(
        <div>
            <input type="checkbox" id="check" />
      <label for="check">
        <i class="fas fa-bars" id="btn"></i>
        <i class="fas fa-times" id="cancel"></i>
      </label>
      <div class="sidebar">
        <header>TasteBuds</header>
        <ul>
            <li><Link href="/"><i class="fas fa-home"></i>Home</Link></li> 
            <li><Link href="/search"><i className="fas fa-search"></i>Search</Link></li>    
            <li><a href="#"><i class="fas fa-star"></i>Saved Recipes</a></li>
            <li><a href="#"><i class="fas fa-cog"></i>User Settings</a></li>
            <li><Link href="/login"><i class="fas fa-sign-in-alt"></i>Login</Link></li>
        </ul>
       </div>
      <section></section>
      <div class="main">
        <h3>Sign Up</h3>
        <form onSubmit={signUp} action="">
          <label for="user"><b>Username: </b></label>
          <input type="text"
              id="user"
              name="user"
              placeholder="Enter your Username" 
              value={username}
              onChange={(e)=>setUsername(e.target.value)}
              required />
          <label for="password"><b>Password: </b></label>
            <input type="password"
                id="password"
                name="password"
                placeholder="Enter your Password" 
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                required />
            <div class="wrap">
                <button className="submit" type="submit">Submit</button>
            </div>
        </form>
    </div>
        </div>
    )
}

export default Signup;