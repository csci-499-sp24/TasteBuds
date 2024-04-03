import Link from "next/link";

function Login(){
    return(
        <div>
            <input type="checkbox" id="check" />
      <label for="check">
        <i className="fas fa-bars" id="btn"></i>
        <i className="fas fa-times" id="cancel"></i>
      </label>
      <div className="sidebar">
        <header>TasteBuds</header>
        <ul>
            <li><Link href="/"><i className="fas fa-home"></i>Home</Link></li>
            <li><Link href="/search"><i className="fas fa-search"></i>Search</Link></li>   
            <li><Link href="/recipeprofile"><i class="fal fa-apple-alt"></i>Recipe Profiles(Temp)</Link></li>  
            <li><a href="#"><i className="fas fa-star"></i>Saved Recipes</a></li>
            <li><a href="#"><i className="fas fa-cog"></i>User Settings</a></li>
            <li><Link href="/login"><i className="fas fa-sign-in-alt"></i>Login</Link></li>
        </ul>
       </div>
      <section></section>
      <div className="main">
        <h3>Login</h3>
        <form action=""> 
        {/* </form><!--<form action="login.php" method="post">--> */}
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
          <div className="wrap">
              <button className="submit" type="submit"onclick="solve()">Submit</button>
            </div>
        </form>
        <p>Not registered? Create an account <Link href="/signup" className="sign-up">here</Link></p>
    </div>
        </div>
    )
}

export default Login;