import React, {useEffect, useState} from 'react'

function Index() {
  
  const [message, setMessage] = useState("Loading")
  const [recipes,setRecipes] = useState([]);

  console.log(process.env.NEXT_PUBLIC_SERVER_URL + "/")
  useEffect(() => {
    fetch(process.env.NEXT_PUBLIC_SERVER_URL + "/").then(
      response => response.json()).then(
      data => {
        console.log(data.message);
      }
    )
  }, [])

  return (
    <div>
      {/* <div>Return message from server</div>
      <div>{message}</div> */}
      <h1>
        Home
      </h1>
      {recipes.map((recipe)=>{
        <div>
          <p>{recipe.title}</p>
          <p>{recipe.diet}</p>
          <img src={recipe.img}></img>
        </div>
      })}
    </div>
  )
}

export default Index