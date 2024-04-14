const axios = require('axios');
const { dbPool } = require('../../server/server'); 

async function fetchRecipesFromSource(apiEndpoint) {
    try {
        const response = await axios.get(apiEndpoint, {
            headers: { 'Authorization': `Bearer ${process.env.SPOON_RECIPES_API_KEY}` }
        });
        const recipes = response.data;
        const newRecipes = [];

        if (recipes.length === 0) {
            console.log('No recipes to check.');
            return [];
        } else {
            for (const recipe of recipes) {
                if (recipe.id) {
                    console.log("Recipe ID:", recipe.id);
                    const [results, metadata] = await dbPool.query('SELECT recipe_id FROM recipes WHERE recipe_id = ?', 
                         { replacements: [recipe.id], type: dbPool.QueryTypes.SELECT });

                    if (!results || results.length === 0) {
                        newRecipes.push(recipe);
                        if (newRecipes.length >= 100) break; 
                    }
                }
            }
        }

        console.log("New recipes ready for processing:", newRecipes.length);
        return newRecipes;
        
    } catch (error) {
        console.error('Error during recipe fetching:', error);
        return null;
    }
}

module.exports = { fetchRecipesFromSource };
