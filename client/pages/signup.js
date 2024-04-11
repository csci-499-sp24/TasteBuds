import Link from "next/link";
import { useState } from "react";
import Sidebar from "./sidebar";

function Signup(){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    //handle signing up
    async function signUp(e) {
        e.preventDefault();
        
        try {
            //send username and password to database
            const response = await fetch(process.env.NEXT_PUBLIC_SERVER_URL + '/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Error signing up');
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
      {/* Sidebar component */}
      <Sidebar />
      <section></section>
      <div className="main">
        <h3>Sign Up</h3>
        <form onSubmit={signUp}>
          <label htmlFor="user"><b>Username: </b></label>
          <input type="text"
              id="user"
              name="user"
              className="user_credential_field"
              value={username}
              onChange={(e) => setUsername(e.target.value)} 
              placeholder="Enter your Username" required />
          <label htmlFor="password"><b>Password: </b></label>
            <input type="password"
                id="password"
                name="password"
                className="user_credential_field"
                value={password} 
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your Password" required />
            <div className="wrap">
                <button className="submit login_button" type="submit">Submit</button>
            </div>
        </form>
    </div>
        </div>
    )
}

export default Signup;