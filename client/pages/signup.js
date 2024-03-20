import Link from "next/link";

function Signup(){
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
            <li><a href="#"><i class="fas fa-star"></i>Saved Recipes</a></li>
            <li><a href="#"><i class="fas fa-cog"></i>User Settings</a></li>
            <li><Link href="/login"><i class="fas fa-sign-in-alt"></i>Login</Link></li>
        </ul>
       </div>
      <section></section>
      <div class="main">
        <h3>Sign Up</h3>
        <form action="">
          <label for="user"><b>Username: </b></label>
          <input type="text"
              id="user"
              name="user"
              placeholder="Enter your Username" required />
          <label for="password"><b>Password: </b></label>
            <input type="password"
                id="password"
                name="password"
                placeholder="Enter your Password" required />
            <div class="wrap">
                <button type="submit"onclick="solve()">Submit</button>
            </div>
        </form>
    </div>
        </div>
    )
}

export default Signup;