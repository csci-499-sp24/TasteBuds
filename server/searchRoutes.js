const express = require('express');
const { Sequelize, DataTypes, Op } = require('sequelize');

const router = express.Router();

module.exports = (sequelize, DataTypes) => {
    const { Recipe, Cuisines, RecipeCuisines, Diet, RecipeDiet, DishType, RecipeDishType, Occasions, RecipeOccasions, Tips, Ingredients, RecipeIngredients, Instructions, InstructionsIngredients, Equipment, RecipeEquipment, InstructionsEquipment, InstructionLength, Nutrients, RecipeNutrients, RecipeIngredientsNutrients, Flavonoids, RecipeFlavonoids, Properties, RecipeProperties, WeightPerServing } = require("./tables/recipes.js")(sequelize, DataTypes);

router.get('/', async (req, res) => {
    try {
        const { query, cuisine, diet, dishType, occasion, includeTips, servings, servingsMin, servingsMax, smartPoints, cheap, 
            healthy, sustainable, smartPointsMin, smartPointsMax, readyInMinutesMin, readyInMinutesMax, 
            readyInMinutes, pricePerServingMin, pricePerServingMax, pricePerServing, minTotalPrice , 
            maxTotalPrice, totalPrice, calories, minCalories, maxCalories } = req.query;

        // Construct base query to fetch recipes
        let baseQuery = {
            include: [],
        };

        // Check if search query is provided and is a valid string
        if (query) {
            baseQuery.where = {
                [Sequelize.Op.or]: [
                    { title: { [Sequelize.Op.iLike]: `%${query}%` } },
                    { summary: { [Sequelize.Op.iLike]: `%${query}%` } } // Add this condition for summary
                ]
            };
        }

        if (cuisine) {
            const cuisinesArray = cuisine.split(',').map(c => c.trim()); // Split the cuisines string by comma and trim whitespace
            // Add join with cuisines table only if cuisine parameter is provided
            baseQuery.include.push({
                model: Cuisines,
                through: {
                    model: RecipeCuisines,
                    attributes: [] // To exclude join table attributes
                },
                where: {
                    cuisine_name: { [Sequelize.Op.in]: cuisinesArray } // Use Sequelize.Op.in to match multiple cuisines, i.e, OR
                }
            });
        }

        if (diet) {
            const dietArray = diet.split(',').map(c => c.trim()); 
            baseQuery.include.push({
                model: Diet,
                through: {
                    model: RecipeDiet,
                    attributes: []
                },
                where: {
                    diet_name: { [Sequelize.Op.in]: dietArray }
                },
            });
        }
        

        if (dishType) {
            const dishTypeArray = dishType.split(',').map(c => c.trim()); 
            baseQuery.include.push({
                model: DishType,
                through: {
                    model: RecipeDishType,
                    attributes: [] 
                },
                where: {
                    dish_type_name: { [Sequelize.Op.in]: dishTypeArray }
                }
            });
        }

        if (occasion) {
            const occasionArray = occasion.split(',').map(c => c.trim()); 
            baseQuery.include.push({
                model: Occasions,
                through: {
                    model: RecipeOccasions,
                    attributes: [] 
                },
                where: {
                    occasion_name: { [Sequelize.Op.in]: occasionArray }
                }
            });
        }

       // Check if includeTips filter is provided and handle accordingly
        if (includeTips !== undefined) {
            if (includeTips === "true") {
                // Filter recipes that have at least one tip
                baseQuery.include.push({
                    model: Tips,
                    required: true 
                });
            } else if (includeTips === "false") {
                // Subquery to filter out recipes without any tips
                baseQuery.where = {
                    recipe_id: {
                        [Sequelize.Op.notIn]: sequelize.literal(`(
                            SELECT recipe_id FROM  public.tips
                        )`)
                    }
                };
            }
        }


        if (cheap !== undefined) {
            baseQuery.where = {
                ...baseQuery.where,
                cheap: cheap
            };
        }

        if (healthy !== undefined) {
            baseQuery.where = {
                ...baseQuery.where,
                very_healthy: healthy
            };
        }

        if (sustainable !== undefined) {
            baseQuery.where = {
                ...baseQuery.where,
                sustainable: sustainable
            };
        }

        if (smartPointsMin && smartPointsMax) {
            // Filter by a range of smart points
            baseQuery.where = {
                ...baseQuery.where,
                weight_watcher_smart_points: {
                    [Sequelize.Op.between]: [smartPointsMin, smartPointsMax]
                }
            };
        } else if (smartPointsMin) {
            // Filter by minimum smart points
            baseQuery.where = {
                ...baseQuery.where,
                weight_watcher_smart_points: {
                    [Sequelize.Op.gte]: smartPointsMin
                }
            };
        } else if (smartPointsMax) {
            // Filter by maximum smart points
            baseQuery.where = {
                ...baseQuery.where,
                weight_watcher_smart_points: {
                    [Sequelize.Op.lte]: smartPointsMax
                }
            };
        } else if (smartPoints !== undefined) {
            // Filter by exact smart points if provided
            baseQuery.where = {
                ...baseQuery.where,
                weight_watcher_smart_points: smartPoints
            };
        }


        if (readyInMinutesMin && readyInMinutesMax) {
            baseQuery.where = {
                ...baseQuery.where,
                ready_in_minutes: {
                    [Sequelize.Op.between]: [readyInMinutesMin, readyInMinutesMax]
                }
            };
        } else if (readyInMinutesMin) {
            baseQuery.where = {
                ...baseQuery.where,
                ready_in_minutes: {
                    [Sequelize.Op.gte]: readyInMinutesMin
                }
            };
        } else if (readyInMinutesMax) {
            baseQuery.where = {
                ...baseQuery.where,
                ready_in_minutes: {
                    [Sequelize.Op.lte]: readyInMinutesMax
                }
            };
        } else if (readyInMinutes !== undefined) {
            baseQuery.where = {
                ...baseQuery.where,
                ready_in_minutes: readyInMinutes
            };
        }

        if (servingsMin && servingsMax) {
            baseQuery.where = {
                ...baseQuery.where,
                servings: {
                    [Sequelize.Op.between]: [servingsMin, servingsMax]
                }
            };
        } else if (servingsMin) {
            // Filter by minimum smart points
            baseQuery.where = {
                ...baseQuery.where,
                servings: {
                    [Sequelize.Op.gte]: servingsMin
                }
            };
        } else if (servingsMax) {
            // Filter by maximum smart points
            baseQuery.where = {
                ...baseQuery.where,
                servings: {
                    [Sequelize.Op.lte]: servingsMax
                }
            };
        } else if (servings !== undefined) {
            // Filter by exact smart points if provided
            baseQuery.where = {
                ...baseQuery.where,
                servings: servings
            };
        }

        if (calories) {
            baseQuery.include.push({
                model: Nutrients,
                through: {
                    model: RecipeNutrients,
                    where: {
                        amount: calories 
                    }
                }
            });
        } else if (minCalories && maxCalories) {
            baseQuery.include.push({
                model: Nutrients,
                through: {
                    model: RecipeNutrients,
                    where: {
                        amount: {
                            [Sequelize.Op.between]: [minCalories, maxCalories]
                        }
                    }
                }
            });
        } else if (minCalories) {
            baseQuery.include.push({
                model: Nutrients,
                through: {
                    model: RecipeNutrients,
                    where: {
                        amount: {
                            [Sequelize.Op.gte]: minCalories
                        }
                    }
                }
            });
        } else if (maxCalories) {
            baseQuery.include.push({
                model: Nutrients,
                through: {
                    model: RecipeNutrients,
                    where: {
                        amount: {
                            [Sequelize.Op.lte]: maxCalories
                        }
                    }
                }
            });
        }
        // console.log("Executing query:", baseQuery);

        // Fetch recipes from the database
        const TOLERANCE = 0.0001;
        const recipes = await Recipe.findAll(baseQuery);
        if(totalPrice !== undefined || minTotalPrice !== undefined || maxTotalPrice !== undefined){
            const filteredRecipes = recipes.filter(recipe => {
                const dbPrice = recipe.getDataValue('servings') * recipe.getDataValue('price_per_serving') / 100;
                if (totalPrice !== undefined) {
                    return Math.abs(dbPrice - totalPrice) < TOLERANCE; 
                } else if (minTotalPrice !== undefined && maxTotalPrice !== undefined) {
                    return dbPrice >= minTotalPrice && dbPrice <= maxTotalPrice; // Filter by totalPrice range
                } else if (minTotalPrice !== undefined) {
                    return dbPrice >= minTotalPrice; // Filter by minimum totalPrice
                } else if (maxTotalPrice !== undefined) {
                    return dbPrice <= maxTotalPrice; // Filter by maximum totalPrice
                }
                return true; // If no totalPrice filter is provided, include all recipes
            });
            res.json(filteredRecipes);
        }
        else{
            res.json(recipes);
        }
        // Send filtered results as JSON response
    } catch (error) {
        console.error("Error searching recipes:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});
return router;
};

