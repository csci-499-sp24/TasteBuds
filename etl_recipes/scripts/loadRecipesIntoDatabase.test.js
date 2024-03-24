// // Import the load function
// const { transformRecipeData } = require('./transform');
// const dummyApiResponse = require('./dummyApiResponse');
// const { Recipe, loadRecipesIntoDatabase } = require('./load');

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
        

//         // Transform dummyApiResponse data before testing
//         const transformedRecipeData = transformRecipeData(dummyApiResponse);
//         // expect(transformedRecipeData).toHaveLength(3);

//         // Call the load function
//         await loadRecipesIntoDatabase(transformedRecipeData);

//         // Check if the create method was called
//         expect(Recipe.create).toHaveBeenCalledTimes(transformedRecipeData.length);
//     });
// });

