/**
 * Transforms the recipe data obtained from the extracted API response into a structured format.
 * @param {Array} extractResponse - The array containing recipe data from the extracted API response.
 * @returns {Array} An array of transformed recipe objects.
 */
function transformRecipeData(extractResponse) {

    return extractResponse.map(recipe => {
        /* RECIPE */
        // Object to store transformed recipe data
        const transformedRecipe = {
            recipe_id: recipe.id,
            title: recipe.title,
            summary: recipe.summary,
            preparation_minutes: recipe.preparationMinutes,
            cooking_minutes: recipe.cookingMinutes,
            ready_in_minutes: recipe.readyInMinutes,
            servings: recipe.servings,
            price_per_serving: recipe.pricePerServing,
            image: recipe.image,
            image_type: recipe.imageType,
            very_healthy: recipe.veryHealthy,
            cheap: recipe.cheap,
            weight_watcher_smart_points: recipe.weightWatcherSmartPoints,
            sustainable: recipe.sustainable,
            source_url: recipe.sourceUrl,
            source_name: recipe.sourceName,
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
        if (recipe.diets && recipe.diets.length > 0) {
            transformedDiet.push(...recipe.diets);
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
        if (recipe.dishTypes && recipe.dishTypes.length > 0) {
            transformedDishType.push(...recipe.dishTypes);
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
        // const transformedRecipeIngredients = [];
        if(recipe.extendedIngredients && recipe.extendedIngredients.length > 0){
            recipe.extendedIngredients.forEach(ingredient => {
                 // Object transformation for recipe ingredients
                const transformedIngredient = {
                    ingredient_id: ingredient.id,
                    specialized_name: ingredient.originalName,
                    us_unit: ingredient.measures.us.unitShort,
                    us_amount: ingredient.measures.us.amount,
                    metric_unit: ingredient.measures.metric.unitShort,
                    metric_amount: ingredient.measures.metric.amount,
                    image: ingredient.image,
                    standard_name: ingredient.nameClean,
 
                };
                transformedIngredients.push(transformedIngredient);
                //     // Object transformation for ingredients
                //    const transformedIngredient = {
                //     ingredient_id: ingredient.id,
                //     image: ingredient.image,
                //     standard_name: ingredient.nameClean,
                //     aisle: ingredient.aisle,
                // };
                // transformedIngredients.push(transformedIngredient);
            });
        }

        /* INSTRUTIONS, EQUIPMENT, INSTRUCTIONS-INGREDIENTS, and INSTRUCATION-LENGTH  */
        // Array to store transformed instructions
        const transformedInstructions = [];
        if (recipe.analyzedInstructions && recipe.analyzedInstructions.length > 0) {
            recipe.analyzedInstructions.forEach(instruction => { 
                 // API can have differnt type of instruction
                const innerRecipe = [];
           
                instruction.steps.forEach(step => {

                    let lengthData = {};
                    if (step.length && Object.keys(step.length).length !== 0) {
                        lengthData = {      
                            number: step.length.number,
                            unit: step.length.unit,
                        };
                    }
                    // Object transformation for instructions
                    const instructionData = {
                        name: instruction.name,
                        number: step.number,
                        step: step.step,
                        ingredients: [],
                        equipments: [],
                        length: lengthData,
                    };

                    // Object transformation for ingredients within instructions
                    if (step.ingredients && step.ingredients.length > 0) {
                        step.ingredients.forEach(ingredient => {
                            const ingredientData = {
                                id: ingredient.id,
                                name: ingredient.name,
                                image: ingredient.image
                            };
                            instructionData.ingredients.push(ingredientData);
                        });
                    } 
                    
                    // object transformation for equipment
                    if (step.equipment && step.equipment.length > 0) {
                        step.equipment.forEach(item => {
                            const equipmentData = {
                                id: item.id,
                                name: item.name,
                                image: item.image
                            };
                            instructionData.equipments.push(equipmentData);
                            
                        });
                    }
                                        
                    innerRecipe.push(instructionData);

                });
                // Push the transformed data for this instruction set into the arrays
                transformedInstructions.push(innerRecipe);
            });
        }
    

        /* TIPS */
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
                    amount: nutrient.amount,
                    unit: nutrient.unit,
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
                    amount: property.amount,
                    unit: property.unit,
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

            if (recipe.nutrition.caloricBreakdown && Object.keys(recipe.nutrition.caloricBreakdown).length !== 0) {
                // object transformation for the caloric breakdown
                const caloricBreakdownData = {
                    percentProtein: recipe.nutrition.caloricBreakdown.percentProtein,
                    percentFat: recipe.nutrition.caloricBreakdown.percentFat,
                    percentCarbs: recipe.nutrition.caloricBreakdown.percentCarbs, 
                };
                transformedRecipeCaloricBreakdown.push(caloricBreakdownData);  
            }
        
            if (recipe.nutrition.weightPerServing && Object.keys(recipe.nutrition.weightPerServing).length !== 0) {
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
            dishTypes: transformedDishType, // array of dish type names
            occasions: transformedOccasions, // array of occasions type names
            tips: transformedRecipeTips, // array of recipe tips objects
            ingredients: transformedIngredients, // array of transformed ingredients objects
            // recipeIngredients: transformedRecipeIngredients, // array of transformed ingredients objects
            instructions: transformedInstructions, // array of transformed instructions objects
            // instructionsIngredients: transformedInstructionsIngredients,
            // instructionLength: transformedInstructionsLength,
            // equipment: transformedEquipment, // array of equipment objects
            recipeNutrients: transformedRecipeNutrients, // array of recipe nutrients
            flavonoids: transformedFlavonoids, // array of flavonoids
            properties: transformedNutritionProperties, // array of nutrition properties
            recipeIngredientsNutrients: transformedRecipeIngredientsNutrients,
            recipeWeightPerServing: transformedRecipeWeightPerServing,
            recipeCaloricBreakdown: transformedRecipeCaloricBreakdown,
        };
    });
}

module.exports = { transformRecipeData };