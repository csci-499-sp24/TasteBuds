const { transformRecipeData } = require('./transform');
const dummyApiResponse = require('./dummyApiResponse');
const { loadRecipesIntoDatabase } = require('./load');

async function main() {
    const transformedRecipes = transformRecipeData(dummyApiResponse);
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

