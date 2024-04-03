const { loadRecipesIntoDatabase } = require('./load');
const { transformRecipeData } = require('./transform');
const dummyApiResponse = require('./dummyApiResponse');
const { fetchRecipesFromSource } = require('./extract');
// const URL = `https://api.spoonacular.com/recipes/informationBulk?ids=658987&includeIngredients=true&includeInstructions=true&addRecipeInformation=true&includeNutrition=true&apiKey=${process.env.SPOON_RECIPES_API_KEY}`;

async function test() {
    // let extactedRecipe = await fetchRecipesFromSource(URL);
    const transformedRecipes = transformRecipeData(dummyApiResponse);
    await loadRecipesIntoDatabase(transformedRecipes);
}

test()
  .then(() => {
    console.log("Test completed successfully.");
    // Any additional logic you want to execute after the test
  })
  .catch((error) => {
    console.error("An error occurred during the test:", error);
    // Any error handling logic you want to perform
});