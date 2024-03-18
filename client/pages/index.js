
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
      <h1>All Recipes</h1>
      <div className="recipe-card">
      <img src={recipes[0].image}></img>
        <p className="recipe-title">{recipes[0].title}</p>
        <p>{recipes[0].summary}</p>
      </div>
      <div className="recipe-card">
      <img src={recipes[3].image}></img>
        <p className="recipe-title">{recipes[3].title}</p>
        <p>{recipes[3].summary}</p>
      </div>
      <div className="recipe-card">
      <img src={recipes[2].image}></img>
        <p className="recipe-title">{recipes[2].title}</p>
        <p>{recipes[2].summary}</p>
      </div>
    </div>
  )
}

export default Index