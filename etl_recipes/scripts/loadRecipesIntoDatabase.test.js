const { loadRecipesIntoDatabase, Recipe, Cuisines, RecipeCuisines, Diet, RecipeDiet, DishType, RecipeDishType, Occasions, RecipeOccasions, Tips} = require('./load'); // Import the function responsible for loading data into the database
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

    /* CUISINES */
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
    jest.spyOn(RecipeCuisines, 'findOne').mockImplementation(mockFindOne);


    /* DIET */
    const mockDietCreate = jest.fn(async (dietData) => {
        const diet_id = Math.floor(Math.random() * 1000) + 1; 
            return { 
                diet_id,
                diet_name: dietData,
            };
    });
    
    jest.spyOn(Diet, 'create').mockImplementation(mockDietCreate);
    jest.spyOn(Diet, 'findOne').mockImplementation(mockFindOne);

    const mockRecipeDietCreate = jest.fn(async (recipeDietData) => {
        return {
            recipe_id: recipeDietData.recipe_id,
            diet_id: recipeDietData.diet_id
        };
    });
    jest.spyOn(RecipeDiet, 'create').mockImplementation(mockRecipeDietCreate);
    jest.spyOn(RecipeDiet, 'findOne').mockImplementation(mockFindOne);


    /* DISH TYPE */
    const mockDishTypeCreate = jest.fn(async (dishTypeData) => {
        const dish_type_id = Math.floor(Math.random() * 1000) + 1; 
            return { 
                dish_type_id,
                dish_type_name: dishTypeData,
            };
    });
    
    jest.spyOn(DishType, 'create').mockImplementation(mockDishTypeCreate);
    jest.spyOn(DishType, 'findOne').mockImplementation(mockFindOne);

    const mockRecipeDishTypeCreate = jest.fn(async (recipeDishTypeData) => {
        return {
            recipe_id: recipeDishTypeData.recipe_id,
            dish_type_id: recipeDishTypeData.dish_type_id
        };
    });
    jest.spyOn(RecipeDishType, 'create').mockImplementation(mockRecipeDishTypeCreate);
    jest.spyOn(RecipeDishType, 'findOne').mockImplementation(mockFindOne);


    /* OCCASIONS */
    const mockOccasionsCreate = jest.fn(async (occasionsData) => {
        const occasions_id = Math.floor(Math.random() * 1000) + 1; 
            return { 
                occasions_id,
                occasions_name: occasionsData,
            };
    });
    
    jest.spyOn(Occasions, 'create').mockImplementation(mockOccasionsCreate);
    jest.spyOn(Occasions, 'findOne').mockImplementation(mockFindOne);

    const mockRecipeOccasionsCreate = jest.fn(async (recipeOccasionsData) => {
        return {
            recipe_id: recipeOccasionsData.recipe_id,
            occasions_id: recipeOccasionsData.occasions_id
        };
    });
    jest.spyOn(RecipeOccasions, 'create').mockImplementation(mockRecipeOccasionsCreate);
    jest.spyOn(RecipeOccasions, 'findOne').mockImplementation(mockFindOne);

    /* TIPS */
    const mockTipsCreate = jest.fn(async (tipsData) => {
        const tip_id = Math.floor(Math.random() * 1000) + 1; 
        return { 
            tip_id,
            type: tipsData.type,
            tip: tipsData.tip,
            recipe_id: tipsData.recipe_id, 
        };
    });

    // const mockAddTip = jest.fn(async (tipData) => {
    //     // Simulate the behavior of adding a tip to a recipe
    //     // For now, you can just return the provided tipData
    //     // Assuming tipData already contains recipe_id
    //     return tipData;
    // });
    
    // jest.spyOn(Tips, 'create').mockImplementation(mockTipsCreate);
    // jest.spyOn(Recipe.prototype, 'addTip').mockImplementation(mockAddTip);

    /* RECIPE INGREDIENTS AND INGREDIENTS */
    
     
    // Call the function responsible for loading recipe data into the database
    await loadRecipesIntoDatabase(transformedRecipes);
    expect(mockRecipeCreate).toHaveBeenCalledTimes(1);
    if(mockRecipes.cuisine && mockRecipes.cuisine.length > 0){
        expect(mockCuisineCreate).toHaveBeenCalledTimes(1);
        expect(mockRecipeCuisinesCreate).toHaveBeenCalledTimes(mockRecipes.cuisine.length);
    }
    if(mockRecipes.diet && mockRecipes.diet.length > 0){
        expect(mockDietCreate).toHaveBeenCalledTimes(2);
        expect(mockRecipeDietCreate).toHaveBeenCalledTimes(mockRecipes.diet.length);
    }
    if(mockRecipes.dishTypes && mockRecipes.dishTypes.length > 0){
        
        expect(mockDishTypeCreate).toHaveBeenCalledTimes(2);
        expect(mockRecipeDishTypeCreate).toHaveBeenCalledTimes(mockRecipes.dish_type.length);
    }
    if(mockRecipes.occasions && mockRecipes.occasions.length > 0){
        expect(mockOccasionsCreate).toHaveBeenCalledTimes(2);
        expect(mockRecipeOccasionsCreate).toHaveBeenCalledTimes(mockRecipes.occasions.length);
    }
    // if (mockRecipes.tips && mockRecipes.tips.length > 0) {
    //     expect(mockTipsCreate).toHaveBeenCalledTimes(mockRecipes.tips.length);
    //     expect(mockAddTip).toHaveBeenCalledTimes(mockRecipes.tips.length);
    // }
  });
});


