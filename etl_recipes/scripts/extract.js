// Utility function to perform API requests
const axios = require('axios');
const { dbPool } = require('./server');

async function fetchRecipesFromSource(apiEndpoint) {
    try {
        const response = await axios.get(apiEndpoint, {
            headers: { 'Authorization': `Bearer ${process.env.SPOON_RECIPES_API_KEY}` }
        });

        const recipes = response.data;
        const newRecipes = [];

        for (const recipe of recipes) {
            const res = await dbPool.query('SELECT id FROM fetchedRecipes WHERE id = $1', [recipe.id]);
            if (res.rows.length === 0) {
                await dbPool.query('INSERT INTO fetchedRecipes(id, recipe_data) VALUES($1, $2)', [recipe.id, JSON.stringify(recipe)]);
                newRecipes.push(recipe);

                if (newRecipes.length >= 100) break;
            }
        }

        console.log("New data fetched successfully:", newRecipes);
        return newRecipes;
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
}

module.exports = { fetchRecipesFromSource };
