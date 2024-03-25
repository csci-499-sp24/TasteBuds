// Transform the recipe data to fit schema
function transformData(data) {
    
    return data.map(recipe => {
        if (!recipe.instructions) {
            recipe.instructions = `No instructions provided. Refer to the source: ${recipe.sourceUrl}`;
        }      
        return recipe;
    })
}
/**
 * Transforms the recipe data obtained from the API response into a structured format.
 * @param {Array} dummyApiResponse - The array containing recipe data from the API response.
 * @returns {Array} An array of transformed recipe objects.
 */
function transformRecipeData(dummyApiResponse) {

    return dummyApiResponse.map(recipe => {
        /* RECIPE */
        // Object to store transformed recipe data
        const transformedRecipe = {
            recipe_id: recipe.id,
            title: recipe.title,
            summary: recipe.summary,
            preparation_time: recipe.preparationMinutes,
            cooking_time: recipe.cookingMinutes,
            ready_in_minutes: recipe.readyInMinutes,
            servings: recipe.servings,
            price_per_serving: recipe.pricePerServing,
            image: recipe.image,
            image_type: recipe.imageType,
            very_healthy: recipe.veryHealthy,
            cheap: recipe.cheap,
            weight_watcher_smart: recipe.weightWatcherSmartPoints,
            sustainable: recipe.sustainable,
        };

        /* CUISINE */
        // Array to store cuisine names
        const transformedCuisine = [];
        // Extract cuisine names
        if (recipe.cuisines && recipe.cuisines.length > 0) {
            transformedCuisine.push(...recipe.cuisines);
        }

        /* DIET */
        const transformedDiet = [];
        // Extract diet names
        if (recipe.diet && recipe.diet.length > 0) {
            transformedDiet.push(...recipe.diet);
        }
        // Add lowFodmap to transformedDiet if true
        if (recipe.lowFodmap) {
            transformedDiet.push('Low Fodmap');
        }
        // Add gaps to transformedDiet if not "no"
        if (recipe.gaps && recipe.gaps !== "no") {
            transformedDiet.push(recipe.gaps);
        }

        /* DISH TYPE */
        // Array to store dishType names
        const transformedDishType = [];
        // Extract dishType names
        if (recipe.dishType && recipe.dishType.length > 0) {
            transformedDishType.push(...recipe.dishType);
        }
        
        /* OCCASION TYPE */
        // Array to store occasions names
        const transformedOccasions = [];
        // Extract occasions names
        if (recipe.occasions && recipe.occasions.length > 0) {
            transformedOccasions.push(...recipe.occasions);
        }

        /* INGREDIENTS AND RECIPE INGREDIENTS */
        // Array to store transformed ingredients
        const transformedIngredients = [];
        const transformedRecipeIngredients = [];
        if(recipe.extendedIngredients && recipe.extendedIngredients.length > 0){
            recipe.extendedIngredients.forEach(ingredient => {
                 // Object transformation for recipe ingredients
                const transformedRecipeIngredient = {
                    ingredient_id: ingredient.id,
                    amount: ingredient.amount,
                    specialized_name: ingredient.originalName,
                    metric_unit: ingredient.measures.metric.unitShort,
                    metric_amount: ingredient.measures.metric.amount,
                    us_unit: ingredient.measures.us.unitShort,
                    us_amount: ingredient.measures.us.amount  
                };
                transformedRecipeIngredients.push(transformedRecipeIngredient);
                    // Object transformation for ingredients
                   const transformedIngredient = {
                    ingredient_id: ingredient.id,
                    image: ingredient.image,
                    standard_name: ingredient.nameClean,
                    aisle: ingredient.aisle,
                };
                transformedIngredients.push(transformedIngredient);
            });
        }

        /* INSTRUTIONS, EQUIPMENT, INSTRUCTIONS-INGREDIENTS, and INSTRUCATION-LENGTH  */
        // Array to store transformed instructions
        const transformedInstructions = [];
        const transformedInstructionsIngredients = [];
        const transformedEquipment = [];
        const transformedInstructionsLength = [];
        if (recipe.analyzedInstructions && recipe.analyzedInstructions.length > 0) {
            recipe.analyzedInstructions.forEach(instruction => {
                instruction.steps.forEach(step => {
                    // Object transformation for instructions
                    const instructionData = {
                        number: step.number,
                        step: step.step,
                        recipe_id: recipe.id
                    };
                    transformedInstructions.push(instructionData);

                    // Object transformation for ingredients within instructions
                    if (step.ingredients && step.ingredients.length > 0) {
                        step.ingredients.forEach(ingredient => {
                            const ingredientData = {
                                ingredient_id: ingredient.id,
                                name: ingredient.name,
                                image: ingredient.image
                            };
                            transformedInstructionsIngredients.push(ingredientData);
                        });
                    }
                    // object transformation for equipment
                    if (step.equipment && step.equipment.length > 0) {
                        step.equipment.forEach(item => {
                            const equipmentData = {
                                equipment_id: item.id,
                                number: step.number,
                                name: item.name,
                                image: item.image
                            };
                            transformedEquipment.push(equipmentData);
                        });
                    }
                    // object transformation for instrution length
                    if (step.length && step.length.length > 0) {
                        step.length.forEach(time => {
                            const lengthData = {
                                length_id: time.id,
                                number: time.number,
                                unit: time.unit,
                                stepNumber: step.number,
                            };
                            transformedInstructionsLength.push(lengthData);
                        });
                    }
                });
            });
        }
    

        /* RECIPE TIPS */
        const transformedRecipeTips = [];
        for (const type in recipe.tips) { // Iterate over each type of tip (health, cooking, price, green) in the recipe object
            if (recipe.tips.hasOwnProperty(type)) { // Check if the current property is a direct property of the object itself (not inherited from its prototype chain)
                const tipsOfType = recipe.tips[type]; // Get the array of tips for the current type
                tipsOfType.forEach(tip => { 
                    const tipData = {
                        type: type,
                        tip: tip,
                    };
                    transformedRecipeTips.push(tipData);
                });
            }
        }
        
        /* NUTRITION */
        // Arrays to store nutrient data
            /* NUTRIENTS */
        const transformedRecipeNutrients = [];
            /* FLAVONOIDS */
        const transformedFlavonoids = [];
            /* NUTRITION PROPERTIES */
        const transformedNutritionProperties = [];
            /* RECIPE INGREDIENTS NUTRIENTS */
        const transformedRecipeIngredientsNutrients = [];
            /* RECIPE CALORIC BREAKDOWN */
        const transformedRecipeCaloricBreakdown = [];
            /* RECIPE WEIGHT PER SERVING */
        const transformedRecipeWeightPerServing= [];
        if (recipe.nutrition) {
            recipe.nutrition.nutrients.forEach(nutrient => {
                // object transformtation for the nutrients
                const nutrientRecipeData = {
                    name: nutrient.name,
                    unit: nutrient.unit,
                    amount: nutrient.amount,
                    percentOfDailyNeeds: nutrient.percentOfDailyNeeds,
                };
                transformedRecipeNutrients.push(nutrientRecipeData);
            });
        
            
            recipe.nutrition.flavonoids.forEach(flavonoid => {
                // object transformtation for the flavonoids
                const flavonoidsRecipeData = {
                    name: flavonoid.name,
                    unit: flavonoid.unit,
                    amount: flavonoid.amount,
                };
                transformedFlavonoids.push(flavonoidsRecipeData);
            });
        
            recipe.nutrition.properties.forEach(property => {
                // object transformtation for the properties
                const propertiesRecipeData = {
                    name: property.name,
                    unit: property.unit,
                    amount: property.amount,
                };
                transformedNutritionProperties.push(propertiesRecipeData);
            });
        
            if (recipe.nutrition.ingredients && recipe.nutrition.ingredients.length > 0) {
                recipe.nutrition.ingredients.forEach(ingredient => {
                    // object transformtation for the ingredients
                    const ingredientData = {
                        id: ingredient.id,
                        name: ingredient.name,
                        amount: ingredient.amount,
                        unit: ingredient.unit,
                        nutrients: [] // Array to store nutrient data for each ingredient
                    };
            
                    if (ingredient.nutrients && ingredient.nutrients.length > 0) {
                        ingredient.nutrients.forEach(nutrient => {
                             // object transformtation for each ingredient nutrient
                            const nutrientData = {
                                name: nutrient.name,
                                amount: nutrient.amount,
                                unit: nutrient.unit,
                                percentOfDailyNeeds: nutrient.percentOfDailyNeeds
                            };
                            ingredientData.nutrients.push(nutrientData);
                        });
                    }
                    transformedRecipeIngredientsNutrients.push(ingredientData);
                });
            }

            if (recipe.nutrition.caloricBreakdown) {
                // object transformation for the caloric breakdown
                const caloricBreakdownData = {
                    percentProtein: recipe.nutrition.caloricBreakdown.percentProtein,
                    percentFat: recipe.nutrition.caloricBreakdown.percentFat,
                    percentCarbs: recipe.nutrition.caloricBreakdown.percentCarbs, 
                };
                transformedRecipeCaloricBreakdown.push(caloricBreakdownData);  
            }
        
            if (recipe.nutrition.weightPerServing) {
                // object transformation for the Recipe Weight Per Serving
                const weightPerServingData = {
                    amount: recipe.nutrition.weightPerServing.amount,
                    unit: recipe.nutrition.weightPerServing.unit,
                };
                transformedRecipeWeightPerServing.push(weightPerServingData);  
            }

        }

        return {
            recipe: transformedRecipe, // recipe object
            cuisine: transformedCuisine, // array of cuisine names
            diet: transformedDiet, // array of diet names
            dishType: transformedDishType, // array of dish type names
            occasions: transformedOccasions, // array of occasions type names
            ingredients: transformedIngredients, // array of transformed ingredients objects
            recipeIngredients: transformedRecipeIngredients, // array of transformed ingredients objects
            instructions: transformedInstructions, // array of transformed instructions objects
            instructionsIngredients: transformedInstructionsIngredients,
            instructionLength: transformedInstructionsLength,
            equipment: transformedEquipment, // array of equipment objects
            tips: transformedRecipeTips, // array of recipe tips objects
            recipeNutrients: transformedRecipeNutrients, // array of recipe nutrients
            flavonoids: transformedFlavonoids, // array of flavonoids
            properties: transformedNutritionProperties, // array of nutrition properties
            recipeIngredientsNutrients: transformedRecipeIngredientsNutrients,
            recipeWeightPerServing: transformedRecipeWeightPerServing,
            recipeCaloricBreakdown: transformedRecipeCaloricBreakdown,
        };
    });
}

module.exports = { transformData };