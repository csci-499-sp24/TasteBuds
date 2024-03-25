const axios = require('axios');
require('dotenv').config({ path: '/Users/vanessa/Desktop/TasteBuds/etl_recipes/.env' });

// Fetches random recipe IDs
async function fetchRandomRecipeIds(numberOfRecipes) {
    const apiKey = process.env.SPOON_RECIPES_API_KEY;
    const url = `https://api.spoonacular.com/recipes/random?number=${numberOfRecipes}&apiKey=${apiKey}`;

    try {
        const response = await axios.get(url);
        // Extract IDs from the response
        const recipeIds = response.data.recipes.map(recipe => recipe.id);
        return recipeIds;
    } catch (error) {
        console.error('Error fetching random recipe IDs:', error);
        throw error;
    }
}

// Fetches detailed information for given recipe IDs
async function fetchRecipeDetails(recipeIds) {
    const apiKey = process.env.SPOON_RECIPES_API_KEY;
    const url = `https://api.spoonacular.com/recipes/informationBulk?ids=${recipeIds.join(',')}&ingredientsRequired=true&instructionsRequired=true&addRecipeInformation=true&includeNutrition=true&apiKey=${apiKey}`;

    try {
        const response = await axios.get(url);
        return response.data; // Returns the detailed recipes with ingredients
    } catch (error) {
        console.error('Error fetching recipe details:', error);
        throw error;
    }
}

// Main extraction function
async function extractData(numberOfRecipes = 5) {
    try {
        const recipeIds = await fetchRandomRecipeIds(numberOfRecipes);
        const recipeDetails = await fetchRecipeDetails(recipeIds);
        return recipeDetails; // Returns the detailed recipes with ingredients
    } catch (error) {
        console.error('Error in extraction process:', error);
        throw error;
    }
}

module.exports = { extractData };
