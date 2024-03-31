import Link from "next/link"

function Search() {

  return (
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
      <section>

        <div id = "div-center" class="search-wrapper">
          <label for="search">Search Recipes</label>
          <input type="search" id="search" data-search />
        </div>
        <div id = "div-center" class="user-recipes" data-user-cards-container></div>
        <template data-user-template>
          <div class="card">
            <div class="header" data-header></div>
            <div class="body" data-body=""></div>
          </div>
        </template>
        </section>
    </div>
  )
}

export default Search
