// Utility function to perform API requests
const axios = require('axios');
//Need to create database module 
//think this will prob change since we're hosting on RDS
//and ill name it db : const db = require('./database');
require('dotenv').config({ path: '/Users/vanessa/Desktop/TasteBuds/etl_recipes/.env' }); 

/*
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
async function extractData() {
    const apiKey = process.env.SPOON_RECIPES_API_KEY;
    const recipeIds = [12345, 67890, 13579];
    //recipeIds = await getNonFetchedRecipeIds(recipeIds);
    const url = `https://api.spoonacular.com/recipes/informationBulk?ids=${recipeIds.join(',')}&ingredientsRequired=true&instructionsRequired=true&addRecipeInformation=true&includeNutrition=true&apiKey=${apiKey}`;
    /*
    if (recipeIds.length === 0) {
        console.log("No new recipes to fetch.");
        return [];
    }
     */
    try {
        const response = await axios.get(url);
        // /await updateFetchedRecipes(recipeIds);
        return response.data; // Returns the detailed recipes with ingredients
    } catch (error) {
        console.error('Error fetching recipes:', error);
        throw error; // Rethrow to handle it in the main orchestrator
    }
}

module.exports = { extractData };