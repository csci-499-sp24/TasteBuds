import Link from "next/link";

function Sidebar() {
  return (
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
  );
}

export default Sidebar;
