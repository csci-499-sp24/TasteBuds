// Import the load function
const { transformRecipeData } = require('./transform');
const dummyApiResponse = require('./dummyApiResponse');
const { Recipe, Diet, RecipeDiet, loadRecipesIntoDatabase } = require('./load');
const { sequelize } = require('./load'); // Assuming you have sequelize configuration exported from another file
describe('Database Loading', () => {
    beforeAll(async () => {
        // Connect to the database before running tests
        await sequelize.authenticate();
        await sequelize.sync({ force: true }); // Force sync to clear existing data
    });

    afterAll(async () => {
        // Close database connection after tests
        await sequelize.close();
    });

    it('should load recipes into the database', async () => {
        // Define sample data to load (could be generated or loaded from fixtures)
        const transformedRecipeData = transformRecipeData(dummyApiResponse);

        // Call the load function with the sample data
        await loadRecipesIntoDatabase(transformedRecipeData);

        // Check if at least one recipe has been loaded into the database
        const recipesCount = await Recipe.count();
        expect(recipesCount).toBeGreaterThan(0);

        // Check if at least one diet has been associated with a recipe
        const recipeDietCount = await RecipeDiet.count();
        expect(recipeDietCount).toBeGreaterThan(0);
    });
});
// describe('Load Recipes into Database', () => {
//     it('should load recipes into the database', async () => {
//         // Mock the create method of the Recipe model
//         Recipe.create = jest.fn().mockImplementation(async (data) => {
//             return {
//                 recipe_id: data.recipe_id,
//                 title: data.title,
//                 summary: data.summary,
//                 preparation_minutes: data.preparation_minutes,
//                 cooking_minutes: data.cooking_minutes,
//                 ready_in_minutes: data.ready_in_minutes,
//                 servings: data.servings,
//                 price_per_serving: data.price_per_serving,
//                 image: data.image,
//                 image_type: data.image_type,
//                 very_healthy: data.very_healthy,
//                 cheap: data.cheap,
//                 weight_watcher_smart_points: data.weight_watcher_smart_points,
//                 sustainable: data.sustainable,
//                 source_url: data.source_url,
//                 source_name: data.source_name,
//             };
//         });
        
//         // Mock the create method of the Diet model
//         Diet.create = jest.fn().mockImplementation(async (data) => {
//             // Assuming data is an object containing diet properties
//             return data;
//         });

        
//         // Transform dummyApiResponse data before testing
//         const transformedRecipeData = transformRecipeData(dummyApiResponse);
//         // expect(transformedRecipeData).toHaveLength(3);

//         // Call the load function
//         await loadRecipesIntoDatabase(transformedRecipeData);

//         // Check if the create method was called
//         expect(Recipe.create).toHaveBeenCalledTimes(transformedRecipeData.length);
//     });
// });

