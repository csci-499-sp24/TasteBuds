const axios = require('axios');
require('dotenv').config({ path: '/Users/vanessa/Desktop/TasteBuds/etl_recipes/.env' }); 


async function extractData() {
    const apiKey = process.env.SPOON_RECIPES_API_KEY;
    const recipeIds = [12345, 67890, 13579];
    const url = `https://api.spoonacular.com/recipes/informationBulk?ids=${recipeIds.join(',')}&ingredientsRequired=true&instructionsRequired=true&addRecipeInformation=true&includeNutrition=true&apiKey=${apiKey}`;
    
    try {
        const response = await axios.get(url);
        return response.data; // Returns the detailed recipes with ingredients
    } catch (error) {
        console.error('Error fetching recipes:', error);
        throw error; // Rethrow to handle it in the main orchestrator
    }
}

module.exports = { extractData };
