// test whole pipeline
const { transformRecipeData } = require('./transform');
// const dummyApiResponse = require('./dummyApiResponse');
const { loadRecipesIntoDatabase } = require('./load');
const { fetchRecipesFromSource } = require('./extract');
const URL = 'https://api.spoonacular.com/recipes/informationBulk?ids=12&includeIngredients=true&includeinstructions=true&addRecipeInformation=true&includeNutrition=true&apiKey=666e4501970a4b5881385974bb528c58';

async function main() {
    const extactedRecipe = await fetchRecipesFromSource(URL);
    const transformedRecipes = transformRecipeData(extactedRecipe);
    await loadRecipesIntoDatabase(transformedRecipes);
}

main()
    .then(() => {
        console.log('Data loaded successfully!');
        process.exit(0);
    })
    .catch(error => {
        console.error('Error loading data:', error);
        process.exit(1);
    });

