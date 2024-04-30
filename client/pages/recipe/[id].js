import { useState, useEffect } from "react";
import Sidebar from "../../components/sidebar";

const Recipe = () => {
  const [recipe, setRecipe] = useState(null);
  const [instructions, setInstructions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Dynamic import of useRouter only on the client side
    const fetchRecipe = async () => {
      try {
        const nextRouter = await import("next/router");
        const router = nextRouter.default;
        const { query } = router;
        const id = query.id;

        const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/search_by_id?id=${id}`);
        if (response.ok) {
          const data = await response.json();
          setRecipe(data[0]);
          setInstructions(data[1]);
          setLoading(false);
        } else {
          throw new Error("Failed to fetch recipe");
        }
      } catch (error) {
        console.error("Error fetching recipe:", error);
        setLoading(false);
      }
    };

    if (typeof window !== "undefined") {
      fetchRecipe();
    }
  }, []);

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
      </div>
    </div>
  );
};

export default Recipe;