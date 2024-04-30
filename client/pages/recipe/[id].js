// pages/recipe/[id].js

import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Sidebar from "../../components/sidebar";

const Recipe = () => {
  const router = useRouter();
  const { id } = router.query;
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/search_by_id?id=${id}`);
        if (response.ok) {
          const data = await response.json();
          console.log(data); // Log the data received from the API
          setRecipe(data);
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
        <p>{recipe.description}</p>
        {recipe.totalPrice !== undefined && (
          <p>Total Price: {recipe.totalPrice}</p>
        )}
        {/* Display other recipe details */}
      </div>
    </div>
  );
};

export default Recipe;