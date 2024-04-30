export default async function RecipeInfo({ information }){
    console.log(information)
    return(
        <ul>
             <li>{information.title}</li>
        </ul>
    )
}
export async function getStaticProps( {params} ){
    const id = parseInt(params.id)
    const results = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/search_by_id?id=${id}`).then(res => res.json())
    return{
        props: {
            information: results
        }
    }
}

export async function getStaticPaths(){
    const recipes = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/searchv2?query=`).then(res => res.json())
    const res = []
    Object.keys(recipes).forEach(key =>{
        res.push({
            name: key,
            ...recipes[key]
        })
    })
    return {
        paths: res?.map(recipe => {
          return {
            params: {
              id: recipe.recipe_id.toString()
            }
          }
        }).filter(({ params }) => !!params.id),
        fallback: false
    }
}
