import Link from "next/link";
import {kebabCase} from "lodash"

export const getStaticProps = async () =>{
    const res = await fetch(process.env.NEXT_PUBLIC_SERVER_URL + "/");
    const data = await res.json();

    return{
      props: {recipes: data.recipeData}
    }
}

const Index = ({recipes}) =>{

  console.log(recipes);

  return (
    <div>
      <nav>
        <Link className="header" href={"/"}>Home</Link>
      </nav>
      <p className="featured">Featured Recipes</p>
      <div className="recipes">
        <div className="recipe-card">
        <img className="recipe-img" src={recipes[0].image}></img>
          <p className="recipe-title">{kebabCase(recipes[0].title)}</p>
          {/* <p>{recipes[0].summary}</p> */}
          <Link className="recipe-link" href={`/recipe/${recipes[0].title}`}>Read more...</Link>
        </div>
        <div className="recipe-card">
        <img className="recipe-img" src={recipes[3].image}></img>
          <p className="recipe-title">{kebabCase(recipes[3].title)}</p>
          {/* <p>{recipes[3].summary}</p> */}
          <Link className="recipe-link" href={`/recipe/${recipes[3].title}`}>Read more...</Link>
        </div>
        <div className="recipe-card">
        <img className="recipe-img" src={recipes[2].image}></img>
          <p className="recipe-title">{kebabCase(recipes[2].title)}</p>
          {/* <p>{recipes[2].summary}</p> */}
          <Link className="recipe-link" href={`/recipe/${recipes[2].title}`}>Read more...</Link>
        </div>
      </div>
    </div>
  )
}

export default Index