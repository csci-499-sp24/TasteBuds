// Sidebar.js
import Link from "next/link";
import { useAuth } from "@/firebase/userAuthContext";

function Sidebar() {
  const { currentUser, signOut } = useAuth();

  const handleSignOut = () => {
    signOut();
  };
  return (
  <div>
      <div>
      {/* Sidebar navigation */}
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
        {/*<li><Link href="/discover"><i className="fas fa-search"></i>Discover</Link></li> */}
        <li><Link href="/searchByIngredient"><i className="fas fa-search"></i>Ingredient Search</Link></li> 
        {currentUser && ( <>
          <li>
              <Link href={`/savedRecipes`}>
                <i className="fas fa-star"></i>Saved Recipes
              </Link>
            </li>        
            <li>
              <Link href={`/users/${currentUser.uid}`}>
                <i className="fas fa-user"></i>Profile
              </Link>
            </li>
        <li><a href="#"><i className="fas fa-cog"></i>User Settings</a></li>
        <li><a href="#" onClick={handleSignOut}><i className="fas fa-sign-out-alt"></i>Sign Out</a></li>
        </>)}
        {!currentUser && (
        <li><Link href="/login"><i className="fas fa-sign-in-alt"></i>Login</Link></li>
      )}
      </ul>
    </div>
    </div>
    </div>
  );
}

export default Sidebar;

