import { useRouter } from "next/router"; 
import { useState, useEffect } from "react"; 
import Sidebar from "../components/sidebar"; 

const Recipe = () => {
  const router = useRouter(); // useRouter hook is initilized to access router object
  const { id } = router.query; 
  const [recipe, setRecipe] = useState(null); // recipe data 
  const [instructions, setInstructions] = useState([]); // instruction data
  const [loading, setLoading] = useState(true); // state tracks load or not

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/search_by_id?id=${id}`);
        if (response.ok) {
          const data = await response.json(); 
          console.log(data); // Logging data from api
          setRecipe(data[0]); // data of recipe in array 0
          setInstructions(data[1]); // in the data instructions are array 1
          setLoading(false); 
        } else {
          throw new Error("Failed to fetch recipe"); // Throw an error if fetching the recipe data fails
        }
      } catch (error) {
        console.error("Error fetching recipe:", error); // Logging any errors that occur during data fetching
        setLoading(false); // Update loading state to indicate data has been loaded to false
      }
    };

    if (id) {
      fetchRecipe(); // Call fetchRecipe function when id parameter is available
    }
  }, [id]); // Effect runs only if 'id' changes

  if (loading) {
    return <div>Loading...</div>; // Render a loading message while data is fetched
  }

  if (!recipe) {
    return <div>Recipe not found</div>; // When no data is fetched
  }

  return (
    <div>
      <input type="checkbox" id="check" /> 
      <label htmlFor="check">
        <i className="fas fa-bars" id="btn"></i> 
        <i className="fas fa-times" id="cancel"></i> 
      </label>
      <Sidebar /> 
      <div>
        <h1>{recipe.title}</h1> 
        <img src={recipe.image} alt={recipe.title} /> 
        <p dangerouslySetInnerHTML={{ __html: recipe.summary }}></p> {/* Render the recipe summary, https://blog.logrocket.com/using-dangerouslysetinnerhtml-react-application/ */}
        {recipe.totalPrice !== undefined && (
          <p>Total Price: {recipe.totalPrice}</p> 
        )}
        <h2>Instructions</h2> {/* Recipe Instructions are rendered when the condition is met/available */}
        {instructions.length > 0 ? (
          <ol>
            {instructions.map((instruction, index) => (
              <li key={index}>{instruction.step}</li> // Map over instructions and render each one as a list item
            ))}
          </ol>
        ) : (
          <p>No instructions available</p> // Else this render when ther are no instructions
        )}
      </div>
    </div>
  );
};

export default Recipe; 