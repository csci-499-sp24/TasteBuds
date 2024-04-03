// test whole pipeline
const { transformRecipeData } = require('./transform');
const axios = require('axios');
const { loadRecipesIntoDatabase } = require('./load');
const { fetchRecipesFromSource } = require('./extract');

async function main() {
    const listApiUrl = `https://api.spoonacular.com/recipes/complexSearch?query=pasta&number=100&apiKey=${process.env.SPOON_RECIPES_API_KEY}`;

    try {
        let listResponse = await axios.get(listApiUrl);
        let recipeList = listResponse.data.results; 

        let randomRecipes = selectRandomRecipes(recipeList, 10); 

        for (const recipe of randomRecipes) {
            const detailApiUrl = `https://api.spoonacular.com/recipes/informationBulk?ids=${recipe.id}&includeIngredients=true&includeInstructions=true&addRecipeInformation=true&includeNutrition=true&apiKey=${process.env.SPOON_RECIPES_API_KEY}`;

            const extractedRecipe = await fetchRecipesFromSource(detailApiUrl);
            const transformedRecipes = transformRecipeData(extractedRecipe);
            await loadRecipesIntoDatabase(transformedRecipes);
        }

        console.log('Data loaded successfully!');
    } catch (error) {
        console.error('Error loading data:', error);
    }
}

function selectRandomRecipes(recipeList, count) {
    let shuffled = recipeList.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error('Error in main execution:', error);
        process.exit(1);
    });
