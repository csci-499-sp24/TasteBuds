import { useState, useEffect } from "react";
import { useRouter } from "next/router"; // Import useRouter here

const Recipe = () => {
  const [recipe, setRecipe] = useState(null);
  const [instructions, setInstructions] = useState([]);
  const [loading, setLoading] = useState(true);
  
  // Use useRouter conditionally
  const router = typeof useRouter !== 'undefined' ? useRouter() : null;
  const id = router ? router.query.id : null;

  useEffect(() => {
    if (id) {
      const fetchRecipe = async () => {
        try {
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
