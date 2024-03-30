const { loadRecipesIntoDatabase, Recipe, Cuisines, RecipeCuisines, Diet, RecipeDiet} = require('./load'); // Import the function responsible for loading data into the database
const { transformRecipeData } = require('./transform');
const dummyApiResponse = require('./dummyApiResponse'); // Import dummy API response here
// Mock the database interaction directly

describe('Recipe Data Table Loading', () => {
  test('Loads recipe data into the database', async () => {
    // Define mock data to be loaded into the database
    const transformedRecipes = transformRecipeData(dummyApiResponse);
    const mockRecipes = transformedRecipes[0].recipe;
    
    // Mock the database functions
    const mockRecipeCreate = jest.fn(async (recipeData) => {
        return { 
            recipe_id: recipeData.recipe_id,
            title: recipeData.title,
            summary: recipeData.summary,
            preparation_minutes: recipeData.preparationMinutes,
            cooking_minutes: recipeData.cookingMinutes,
            ready_in_minutes: recipeData.readyInMinutes,
            servings: recipeData.servings,
            price_per_serving: recipeData.pricePerServing,
            image: recipeData.image,
            image_type: recipeData.imageType,
            very_healthy: recipeData.veryHealthy,
            cheap: recipeData.cheap,
            weight_watcher_smart_points: recipeData.weightWatcherSmartPoints,
            sustainable: recipeData.sustainable,
            source_url: recipeData.sourceUrl,
            source_name: recipeData.sourceName,
        };
    });
    
    const mockFindOne = jest.fn(async () => {
        return null;
    });        
    // Mock the database functions in the 'load' module
    jest.spyOn(Recipe, 'create').mockImplementation(mockRecipeCreate);
    jest.spyOn(Recipe, 'findOne').mockImplementation(mockFindOne);

    // Mock the Cuisines model and its database functions
    const mockCuisineCreate = jest.fn(async (cuisineData) => {
        // Simulate generating a unique cuisine_id
        const cuisine_id = Math.floor(Math.random() * 1000) + 1; // Generate a random ID between 1 and 1000
        return { 
            cuisine_id,
            cuisine_name: cuisineData,
        };
    });
    

    // Mock the database functions in the 'load' module
    jest.spyOn(Cuisines, 'create').mockImplementation(mockCuisineCreate);
    jest.spyOn(Cuisines, 'findOne').mockImplementation(mockFindOne);

    // Mock the RecipeCuisines model and its database functions
    const mockRecipeCuisinesCreate = jest.fn(async (recipeCuisinesData) => {
        // Mock the creation of entries in the RecipeCuisines join table
        return {
            recipe_id: recipeCuisinesData.recipe_id,
            cuisine_id: recipeCuisinesData.cuisine_id
        };
    });
    jest.spyOn(RecipeCuisines, 'create').mockImplementation(mockRecipeCuisinesCreate);

    
   
    // Call the function responsible for loading recipe data into the database
    await loadRecipesIntoDatabase(transformedRecipes);

    expect(mockRecipeCreate).toHaveBeenCalledTimes(1);
    if(mockRecipes.cuisine && mockRecipes.cuisine.length > 0){
        expect(mockCuisineCreate).toHaveBeenCalledTimes(1);
        expect(mockRecipeCuisinesCreate).toHaveBeenCalledTimes(mockRecipes.cuisine.length);
    }

  });
});


