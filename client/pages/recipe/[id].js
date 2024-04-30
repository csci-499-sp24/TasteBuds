import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Sidebar from "../../components/sidebar";

const Recipe = () => {
  const router = useRouter();
  const { id } = router.query;
  const [recipe, setRecipe] = useState(null);
  const [instructions, setInstructions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/search_by_id?id=${id}`);
        if (response.ok) {
          const data = await response.json();
          console.log(data); // Log the data received from the API
          setRecipe(data[0]); // Assuming the recipe data is in array 0
          setInstructions(data[1]); // Assuming the instructions data is in array 1
          setLoading(false);
        } else {
          throw new Error("Failed to fetch recipe");
        }
      } catch (error) {
        console.error("Error fetching recipe:", error);
        setLoading(false);
      }
    };

    if (id) {
      fetchRecipe();
    }
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!recipe) {
    return <div>Recipe not found</div>;
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
        <p dangerouslySetInnerHTML={{ __html: recipe.summary }}></p>
        {recipe.totalPrice !== undefined && (
          <p>Total Price: {recipe.totalPrice}</p>
        )}
        <h2>Instructions</h2>
        {instructions.length > 0 ? (
          <ol>
            {instructions.map((instruction, index) => (
              <li key={index}>{instruction.step}</li>
            ))}
          </ol>
        ) : (
          <p>No instructions available</p>
        )}
        {/* Display other recipe details */}
      </div>
    </div>
  );
};

export default Recipe;