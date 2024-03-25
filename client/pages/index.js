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
            <li><a href="#"><i className="fas fa-star"></i>Saved Recipes</a></li>
            <li><a href="#"><i className="fas fa-cog"></i>User Settings</a></li>
            <li><a href="/search"><i className="fas fa-search"></i>Search</a></li>
            <li><Link href="/login"><i className="fas fa-sign-in-alt"></i>Login</Link></li>
        </ul>
       </div>
      <section>
      <h1>Home</h1>
      </section>
        </div>
    )
}

export default Login;