// Utility function to perform API requests
const axios = require('axios');
//Need to create database module 
//think this will prob change since we're hosting on RDS
//and ill name it db : const db = require('./database');
require('dotenv').config({ path: '/Users/vanessa/Desktop/TasteBuds/etl_recipes/.env' }); 

/*

async function getLatestRecipeIds() {
    // Fetch the latest or random recipe IDs from Spoonacular
    const apiKey = process.env.SPOON_RECIPES_API_KEY;
    const url = `https://api.spoonacular.com/recipes/random?number=10&apiKey=${apiKey}`; // Adjust number as needed
    const response = await axios.get(url);
    return response.data.recipes.map(recipe => recipe.id);
}

async function getNonFetchedRecipeIds(recipeIds) {
    const query = `SELECT recipe_id FROM fetched_recipes WHERE recipe_id = ANY($1)`;
    const { rows } = await db.query(query, [recipeIds]);
    const fetchedIds = rows.map(row => row.recipe_id);
    return recipeIds.filter(id => !fetchedIds.includes(id));
}

async function updateFetchedRecipes(recipeIds) {
    const query = `INSERT INTO fetched_recipes (recipe_id) VALUES ($1) ON CONFLICT (recipe_id) DO NOTHING`;
    await Promise.all(recipeIds.map(id => db.query(query, [id])));
}
*/ 

let pointsUsed = 0;
const maxDailyPoints = 150;
const pointsPerCall = 1.5;

async function extractData() {

    if (pointsUsed + pointsPerCall > maxDailyPoints) {
        throw new Error("API call limit reached for the day");
    }

    const apiKey = process.env.SPOON_RECIPES_API_KEY;
    const recipeIds = [12345, 67890, 13579];
    /*
    Will replace above recipeIds line w/ so that we can automate this pipeline
    let recipeIds = await getLatestRecipeIds();
    recipeIds = await getNonFetchedRecipeIds(recipeIds);

  
    if (recipeIds.length === 0) {
        console.log("No new recipes to fetch.");
        return [];
    }
     */

    const url = `https://api.spoonacular.com/recipes/informationBulk?ids=${recipeIds.join(',')}&ingredientsRequired=true&instructionsRequired=true&addRecipeInformation=true&includeNutrition=true&apiKey=${apiKey}`;
    
    try {
        const response = await axios.get(url);
        // /await updateFetchedRecipes(recipeIds);
        return response.data; // Returns the detailed recipes with ingredients
        pointsUsed += pointsPerCall;
    } catch (error) {
        console.error('Error fetching recipes:', error);
        throw error; // Rethrow to handle it in the main orchestrator
    }
}

module.exports = { extractData };