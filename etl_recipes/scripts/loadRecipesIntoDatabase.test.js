// Import the load function
const { transformRecipeData } = require('./transform');
const dummyApiResponse = require('./dummyApiResponse');
const { Recipe, loadRecipesIntoDatabase } = require('./load');

describe('Load Recipes into Database', () => {
    it('should load recipes into the database', async () => {
        // Mock the create method of the Recipe model
        Recipe.create = jest.fn().mockResolvedValue({});

        // Transform dummyApiResponse data before testing
        const transformedRecipeData = transformRecipeData(dummyApiResponse);

        // Call the load function
        await loadRecipesIntoDatabase(transformedRecipeData);

        // Check if the create method was called
        expect(Recipe.create).toHaveBeenCalledTimes(transformedRecipeData.length);
    });
});

