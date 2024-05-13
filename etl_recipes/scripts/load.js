const { Sequelize, DataTypes } = require('sequelize');
const { Op } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false,
        }
    },
    define: {
        schema: 'public'
    }
});


/* --- MODELS and RELATIONSHP ---- */

/* RECIPE */
const Recipe = sequelize.define('Recipe', {
    recipe_id: {
        type: DataTypes.INTEGER, 
        primaryKey: true, 
        allowNull: false, 
    },
    title: {
        type: DataTypes.STRING,
    },
    summary: {
        type: DataTypes.TEXT,
    },
    preparation_minutes: {
        type: DataTypes.INTEGER,
    },
    cooking_minutes: {
        type: DataTypes.INTEGER,
    },
    ready_in_minutes: {
        type: DataTypes.INTEGER,
    },
    servings: {
        type: DataTypes.INTEGER,
    },
    price_per_serving: {
        type: DataTypes.FLOAT,
    },
    image: {
        type: DataTypes.STRING, 
    },
    image_type: {
        type: DataTypes.STRING,
    },
    very_healthy: {
        type: DataTypes.BOOLEAN,
    },
    cheap: {
        type: DataTypes.BOOLEAN,
    },
    weight_watcher_smart_points: {
        type: DataTypes.INTEGER,
    },
    sustainable: {
        type: DataTypes.BOOLEAN,
    },
    source_name: {
        type: DataTypes.STRING,
    },
    source_url:{
        type: DataTypes.STRING,
    },
}, {
    tableName: 'recipes',  
    timestamps: false, 
});

/* CUISINE */
const Cuisines = sequelize.define('Cuisines', {
    cuisine_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    cuisine_name: {
        type: DataTypes.STRING,
    }
}, {
    tableName: 'cuisines',
    timestamps: false,
});

const RecipeCuisines = sequelize.define('RecipeCuisines', {
    recipe_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: {
        model: 'recipes',
        key: 'recipe_id'
      }
    },
    cuisine_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: {
        model: 'cuisines',
        key: 'cuisine_id'
      }
    },
  }, {
    tableName: 'recipe_cuisine',
    timestamps: false
  });
  
// Define the ER of Cuisines and Recipe (M:M)
Cuisines.belongsToMany(Recipe, { through: RecipeCuisines, foreignKey: 'cuisine_id' });
Recipe.belongsToMany(Cuisines, { through: RecipeCuisines, foreignKey: 'recipe_id' });

/* DIET */
const Diet = sequelize.define('Diet', {
    diet_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false, 
    },
    diet_name: {
        type: DataTypes.STRING,
    }
}, {
    tableName: 'diets',
    timestamps: false,
});
const RecipeDiet = sequelize.define('RecipeDiet', {
    recipe_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
          model: 'recipes',
          key: 'recipe_id'
        }
      },
      diet_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
          model: 'diets',
          key: 'diet_id'
        }
      }, 
}, {
    tableName: 'recipe_diet',
    timestamps: false
});
// Define the ER of Diet and Recipe (M:M)
Diet.belongsToMany(Recipe, { through: RecipeDiet, foreignKey: 'diet_id' });
Recipe.belongsToMany(Diet, { through: RecipeDiet, foreignKey: 'recipe_id' });

/* DISH TYPE */
 const DishType = sequelize.define('DishType', { 
    dish_type_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    dish_type_name: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    tableName: 'dishTypes',
    timestamps: false,
});
const RecipeDishType = sequelize.define('RecipeDishType', {
    recipe_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
          model: 'recipes',
          key: 'recipe_id'
        }
      },
      dish_type_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
          model: 'dishTypes',
          key: 'dish_type_id:'
        }
      }
}, {
    tableName: 'recipe_dishType',
    timestamps: false
});
// Define the ER of DishType and Recipe (M:M)
Recipe.belongsToMany(DishType, { through: RecipeDishType, foreignKey: 'recipe_id' });
DishType.belongsToMany(Recipe, { through: RecipeDishType, foreignKey: 'dish_type_id' });

/* OCCASION TYPE */
const Occasions = sequelize.define('Occasions', {
    occasion_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true 
    },
    occasion_name: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    tableName: 'occasions',
    timestamps: false,
});
const RecipeOccasions = sequelize.define('RecipeOccasions', {
    recipe_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
          model: 'recipes',
          key: 'recipe_id'
        }
      },
      occasion_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
          model: 'occasions',
          key: 'occasion_id'
        }
      }
}, {
    tableName: 'recipe_occasion',
    timestamps: false
});
// Define the ER of Occasions and Recipe (M:M)
Occasions.belongsToMany(Recipe, { through: RecipeOccasions, foreignKey: 'occasion_id' });
Recipe.belongsToMany(Occasions, { through: RecipeOccasions, foreignKey: 'recipe_id' });

/* TIPS */
const Tips = sequelize.define('Tips', {
    tip_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    type: {
        type: DataTypes.STRING,
    },
    tip: {
        type: DataTypes.TEXT,
    },
    recipe_id: {
        type: DataTypes.INTEGER, 
        allowNull: false, 
        references: {
            model: 'Recipe', 
            key: 'recipe_id',
        }
    }
}, {
    tableName: 'tips', 
    timestamps: false
});
// Define the ER of Tips and Recipe (M:1)
Tips.belongsTo(Recipe, { foreignKey: 'recipe_id' });
Recipe.hasMany(Tips, { foreignKey: 'recipe_id' });

/* INGREDIENTS AND RECIPE INGREDIENTS */
const Ingredients = sequelize.define('Ingredients', {
    ingredient_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
    },
    standard_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    image: {
        type: DataTypes.STRING
    },
}, {
    tableName: 'ingredients',
    timestamps: false
});
const RecipeIngredients = sequelize.define('RecipeIngredients', {
    ingredient_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
          model: 'ingredients',
          key: 'ingredient_id'
        }
      },
    recipe_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
          model: 'recipes',
          key: 'recipe_id'
        }
    },
    specialized_name: {
        type: DataTypes.STRING
    },
    metric_unit: {
        type: DataTypes.STRING
    },
    metric_amount: {
        type: DataTypes.DOUBLE
    },
    us_unit: {
        type: DataTypes.STRING
    },
    us_amount: {
        type: DataTypes.DOUBLE
    }
}, {
    tableName: 'recipe_ingredient',
    timestamps: false
});
// Define the ER of Ingredients and Recipe (M:M)
RecipeIngredients.belongsTo(Ingredients, { foreignKey: 'ingredient_id' });
RecipeIngredients.belongsTo(Recipe, { foreignKey: 'recipe_id' });

/* INSTRUTIONS, EQUIPMENT, INSTRUCTIONS-INGREDIENTS, and INSTRUCATION-LENGTH */
const Instructions = sequelize.define('Instructions', {
    instruction_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true 
    },
    step_number: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING
    },
    step: {
        type: DataTypes.TEXT
    },
    is_secondary_recipe: {
        type: DataTypes.BOOLEAN,
        defaultValue: false 
    }
}, {
    tableName: 'instructions', 
    timestamps: false
});
const InstructionsIngredients = sequelize.define('InstructionsIngredients', {
    ingredient_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
    },
    instruction_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true 
    },
}, {
    tableName: 'instruction_ingredient',
    timestamps: false
});
// Define the ER of Instructions and Recipe (M:1), Instructions and Ingredients (M:M)
Instructions.belongsTo(Recipe, { foreignKey: 'recipe_id' });
Instructions.belongsToMany(Ingredients, { through: InstructionsIngredients, foreignKey: 'instruction_id' });
Ingredients.belongsToMany(Instructions, { through: InstructionsIngredients, foreignKey: 'ingredient_id' });

const Equipment = sequelize.define('Equipment', {
    equipment_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    image: {
        type: DataTypes.STRING
    },
}, {
    tableName: 'equipments',
    timestamps: false
});
const RecipeEquipment = sequelize.define('RecipeEquipment', {
    recipe_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
          model: 'recipes',
          key: 'recipe_id'
        }
      },
      equipment_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
          model: 'equipments',
          key: 'equipment_id'
        }
      },
}, {
    tableName: 'recipe_equipment',
    timestamps: false
});
// Define the ER of Recipe and Equipment (M:M)
Equipment.belongsToMany(Recipe, { through: RecipeEquipment, foreignKey: 'equipment_id' });
Recipe.belongsToMany(Equipment, { through: RecipeEquipment, foreignKey: 'recipe_id' });

const InstructionsEquipment = sequelize.define('InstructionsEquipment', {
    equipment_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
          model: 'equipments',
          key: 'equipment_id'
        }
    },
    instruction_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
          model: 'instructions',
          key: 'rinstruction_id'
        }
      },
}, {
    tableName: 'instruction_equipment',
    timestamps: false
});
// Define the ER of Instructions and Equipment (M:M)
Equipment.belongsToMany(Instructions, { through: InstructionsEquipment, foreignKey: 'equipment_id' });
Instructions.belongsToMany(Equipment, { through: InstructionsEquipment, foreignKey: 'instruction_id' });


const InstructionLength = sequelize.define('InstructionLength', {
    instruction_id: {
        type: DataTypes.INTEGER,
        allowNull: false, 
        primaryKey: true,
        references: {
            model: 'Instructions', 
            key: 'instruction_id'
        }
    },
    length_number: {
        type: DataTypes.INTEGER,
        allowNull: false 
    },
    length_unit: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'instructionLength', 
    timestamps: false 
});
// Define the relationship with Instructions and Length (1:1)
InstructionLength.belongsTo(Instructions, { foreignKey: 'instruction_id', primaryKey: true });


/* NUTRITION TABLES */

/* NUTRIENTS */
const Nutrients = sequelize.define('Nutrients', {
    nutrient_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true 
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    unit: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'nutrients',
    timestamps: false
});
/* RECIPE NUTRIENTS */
const RecipeNutrients = sequelize.define('RecipeNutrients', {
    nutrient_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        references: {
            model: 'nutrients',
            key: 'nutrient_id'
        }
    },
    recipe_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
          model: 'recipes',
          key: 'recipe_id'
        }
    },
    amount: {
        type: DataTypes.DOUBLE,
        allowNull: false,
    },
    percent_of_daily_needs: {
        type: DataTypes.DOUBLE,
        allowNull: false
    }
}, {
    tableName: 'recipe_nutrient',
    timestamps: false
});
// Define the relationship with Nutrients and Recipe (M:M), 
Recipe.belongsToMany(Nutrients, { through: RecipeNutrients, foreignKey: 'recipe_id' });
Nutrients.belongsToMany(Recipe, { through: RecipeNutrients, foreignKey: 'nutrient_id' });

/* RECIPE INGREDIENTS NUTRIENTS */
const RecipeIngredientsNutrients = sequelize.define('RecipeIngredientsNutrients', {
    ingredient_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
    },
    nutrient_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
    },
    recipe_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
    },
    ingredient_amount: {
        type: DataTypes.DOUBLE,
        allowNull: false,
    },
    nutrient_amount: {
        type: DataTypes.DOUBLE,
        allowNull: false,
    },
    ingredient_unit: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    percent_of_daily_needs: {
        type: DataTypes.DOUBLE,
        allowNull: false,
    }
}, {
    tableName: 'recipe_ingredient_nutrient',
    timestamps: false
});
// Define the relationships with Recipes, Nutrients, and Ingredients table (M:M)
Ingredients.belongsToMany(Nutrients, { through: RecipeIngredientsNutrients, foreignKey: 'ingredient_id', otherKey: 'nutrient_id' });
Nutrients.belongsToMany(Ingredients, { through: RecipeIngredientsNutrients, foreignKey: 'nutrient_id', otherKey: 'ingredient_id' });

Recipe.belongsToMany(Ingredients, { through: RecipeIngredientsNutrients, foreignKey: 'recipe_id', otherKey: 'ingredient_id' });
Ingredients.belongsToMany(Recipe, { through: RecipeIngredientsNutrients, foreignKey: 'ingredient_id', otherKey: 'recipe_id' });

Recipe.belongsToMany(Nutrients, { through: RecipeIngredientsNutrients, foreignKey: 'recipe_id', otherKey: 'nutrient_id' });
Nutrients.belongsToMany(Recipe, { through: RecipeIngredientsNutrients, foreignKey: 'nutrient_id', otherKey: 'recipe_id' });

// Define the relationships between RecipeIngredientsNutrients and other tables
RecipeIngredientsNutrients.belongsTo(Recipe, { foreignKey: 'recipe_id', targetKey: 'recipe_id' });
RecipeIngredientsNutrients.belongsTo(Ingredients, { foreignKey: 'ingredient_id', targetKey: 'ingredient_id' });
RecipeIngredientsNutrients.belongsTo(Nutrients, { foreignKey: 'nutrient_id', targetKey: 'nutrient_id' });

/* FLAVONOIDS */
const Flavonoids = sequelize.define('Flavonoids', {
    flavonoid_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    unit: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    tableName: 'flavonoids',
    timestamps: false
});
/* RECIPE FLAVONOIDS */
const RecipeFlavonoids = sequelize.define('RecipeFlavonoids', {
    recipe_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
          model: 'recipes',
          key: 'recipe_id'
        }
    },
    flavonoid_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
            model: 'flavonoids',
            key: 'flavonoid_id'
        }
    },
    amount: {
        type: DataTypes.DOUBLE,
        allowNull: false,
    }
}, {
    tableName: 'recipe_flavonoid',
    timestamps: false
});
// Define the  the relationship with Recipes and Flavonoids tabel (M:M)
Recipe.belongsToMany(Flavonoids, { through: RecipeFlavonoids, foreignKey: 'recipe_id' });
Flavonoids.belongsToMany(Recipe, { through: RecipeFlavonoids, foreignKey: 'flavonoid_id' });

/* PROPERTIES  */
const Properties = sequelize.define('Properties', {
    property_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    unit: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    tableName: 'properties',
    timestamps: false
});
/* RECIPE FLAVONOIDS */
const RecipeProperties = sequelize.define('RecipeProperties', {
    recipe_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
          model: 'recipes',
          key: 'recipe_id'
        }
      },
    property_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        references: {
            model: 'properties',
            key: 'property_id'
          }
    },
    amount: {
        type: DataTypes.DOUBLE,
        allowNull: false,
    }
}, {
    tableName: 'recipe_property',
    timestamps: false
});
// Define the many-to-many relationship between Recipe and Properties (M:M)
Recipe.belongsToMany(Properties, { through: RecipeProperties, foreignKey: 'recipe_id' });
Properties.belongsToMany(Recipe, { through: RecipeProperties, foreignKey: 'property_id' });

/* WEIGHT PER SERVING */
const WeightPerServing = sequelize.define('WeightPerServing', {
    recipe_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        references: {
            model: 'Recipe',
            key: 'recipe_id'
        }
    },
    amount: {
        type: DataTypes.DOUBLE,
        allowNull: false,
    },
    unit: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    tableName: 'weightPerServing',
    timestamps: false
});

// Define the relationship with Recipe and WeightPerServing (1:1)
WeightPerServing.belongsTo(Recipe, { foreignKey: 'recipe_id' });

/* CALORIC BREAKDOWN */
const CaloricBreakdown = sequelize.define('CaloricBreakdown', {
    recipe_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        references: {
            model: 'Recipe',
            key: 'recipe_id'
        }
    },
    percent_protein: {
        type: DataTypes.DOUBLE,
        allowNull: false,
    },
    percent_fat: {
        type: DataTypes.DOUBLE,
        allowNull: false,
    },
    percent_carbs: {
        type: DataTypes.DOUBLE,
        allowNull: false,
    }
}, {
    tableName: 'caloricBreakdowns',
    timestamps: false,
});

// Define the relationship with Recipe and CaloricBreakdown (1:1)
CaloricBreakdown.belongsTo(Recipe, { foreignKey: 'recipe_id' });


/* Intolerances */
// const Intolerances = sequelize.define('Intolerances', {
//     intolerance_id: {
//         type: DataTypes.INTEGER,
//         primaryKey: true,
//         autoIncrement: true,
//         allowNull: false,
//     },
//     intolerance_name: {
//         type: DataTypes.STRING,
//     }
// }, {
//     tableName: 'intolerances',
//     timestamps: false,
// });

// const RecipeIntolerance = sequelize.define('RecipeIntolerance', {
//     recipe_id: {
//       type: DataTypes.INTEGER,
//       primaryKey: true,
//       references: {
//         model: 'recipes',
//         key: 'recipe_id'
//       }
//     },
//     intolerance_id: {
//       type: DataTypes.INTEGER,
//       primaryKey: true,
//       references: {
//         model: 'intolerances',
//         key: 'intolerance_id'
//       }
//     },
//   }, {
//     tableName: 'recipe_intolerance',
//     timestamps: false
//   });
  
// // Define the ER of Cuisines and Recipe (M:M)
// Intolerances.belongsToMany(Recipe, { through: RecipeIntolerance, foreignKey: 'intolerance_id' });
// Recipe.belongsToMany(Intolerances, { through: RecipeIntolerance, foreignKey: 'recipe_id' });

/* END OF MODELS*/

// Function to load the transformed data into your database
async function loadRecipesIntoDatabase(transformedData) {
    // async function loadRecipesIntoDatabase(transformedData, intolerances) {

    try {
        // Authenticate the sequelize connection
        // await sequelize.authenticate();
        // console.log('Connection has been established successfully.');
        // await sequelize.sync();

        // Iterate over each recipe response object in transformedData
        let createdRecipe; 
        for (const recipeResponse of transformedData) {
            // Extract data - Recipe table
            const recipeData = recipeResponse.recipe;
            try {
                // returns either an object representing the found record or null 
                createdRecipe = await Recipe.findOne({ where: { recipe_id: recipeData.recipe_id } });
                if (!createdRecipe) {
                    createdRecipe = await Recipe.create(recipeData);
                    console.log(`Recipe with ID ${createdRecipe.recipe_id} loaded successfully.`);
                } else {
                    console.log(`Recipe with ID ${createdRecipe.recipe_id} already exists.`);
                }
            } catch (error) {
                console.error(`Error loading recipe with ID ${recipeData.recipe_id}: ${error.message}`);
            }
            /*intolerances*/
                                
            /* CUISINIE */ 
            for (const cuisineData of recipeResponse.cuisine) {
                let createdCuisine = await Cuisines.findOne({ where: { cuisine_name: cuisineData} });
                try {
                    if (!createdCuisine) {
                        createdCuisine = await Cuisines.create({
                            cuisine_name: cuisineData
                        });
                    }
                }
                catch(error){
                    console.error(`Error loading cuisine "${cuisineData}" and recipe with ID ${recipeData.recipe_id}. An error occurred: ${error.message}`);
                }

                /* RECIPE CUISINIE  */ 
                try{
                    const existingRecipeCuisine = await RecipeCuisines.findOne({
                        where: {
                            recipe_id: createdRecipe.recipe_id,
                            cuisine_id: createdCuisine.cuisine_id,
                        }
                    });
                    if (!existingRecipeCuisine && createdCuisine && createdRecipe) {
                        await RecipeCuisines.create({
                            recipe_id: createdRecipe.recipe_id,
                            cuisine_id: createdCuisine.cuisine_id
                        });
                    }
                }
                catch(error){
                    console.error(`Error loading cuisine "${cuisineData}" and recipe with ID ${recipeData.recipe_id} into RecipeCuisines. An error occurred: ${error.message}`);
                }
            }
            /* DIET */
            for (const dietData of recipeResponse.diet) {
                let createdDiet = await Diet.findOne({ where: { diet_name: dietData} });
                try{
                    if (!createdDiet) {
                        createdDiet = await Diet.create({
                            diet_name: dietData
                        });
                    }
                }
                catch (error){
                    console.error(`Error loading diet "${dietData}" and recipe with ID ${recipeData.recipe_id}. An error occurred: ${error.message}`);
                }

                /* RECIPE DIET */
                try{
                    const existingRecipeDiet = await RecipeDiet.findOne({
                        where: {
                            recipe_id: createdRecipe.recipe_id,
                            diet_id: createdDiet.diet_id,
                        }
                    });
                    if (!existingRecipeDiet && createdDiet && createdRecipe) {
                        await RecipeDiet.create({
                            recipe_id: createdRecipe.recipe_id,
                            diet_id: createdDiet.diet_id
                        });
                    } 
                    }
                catch (error){
                    console.error(`Error loading diet "${dietData}" and recipe with ID ${recipeData.recipe_id} into RecipeDiet. An error occurred: ${error.message}`);
                }
            }

            /* DISH TYPE */
            for (const dishTypeData of recipeResponse.dishTypes) {
                let createdDishType = await DishType.findOne({ where: { dish_type_name: dishTypeData} });
                try{
                    if (!createdDishType) {
                        createdDishType = await DishType.create({
                            dish_type_name: dishTypeData
                        });
                    }
                }
                catch(error){
                    console.error(`Error loading cuisine "${dishTypeData}" and recipe with ID ${recipeData.recipe_id}. An error occurred: ${error.message}`);
                }
                 /* RECIPE DISH TYPE */
                try{
                    const existingRecipeDishType = await RecipeDishType.findOne({
                        where: {
                            recipe_id: createdRecipe.recipe_id,
                            dish_type_id: createdDishType.dish_type_id
                        }
                    });
                    if (!existingRecipeDishType && createdDishType && createdRecipe) {
                        await RecipeDishType.create({
                            recipe_id: createdRecipe.recipe_id,
                            dish_type_id:  createdDishType.dish_type_id,
                        });                
                    }
                }
                catch(error){
                    console.error(`Error loading cuisine "${dishTypeData}" and recipe with ID ${recipeData.recipe_id} for RecipeDishType. An error occurred: ${error.message}`);
                } 
            }

            /* OCCASION */
            for (const occasionsData of recipeResponse.occasions) {
                let createdOccasions = await Occasions.findOne({ where: { occasion_name: occasionsData} });
                try{
                    if (!createdOccasions) {
                        createdOccasions = await Occasions.create({
                            occasion_name: occasionsData});
                    }
                } catch(error){
                    console.error(`Error loading occasion "${cuisineData}" and recipe with ID ${recipeData.recipe_id}. An error occurred: ${error.message}`);
                }

                try{
                    const existingRecipeOccasions  = await RecipeOccasions.findOne({
                        where: {
                            recipe_id: createdRecipe.recipe_id,
                            occasion_id: createdOccasions.occasion_id
                        }
                    });
                    if(!existingRecipeOccasions && createdOccasions && createdRecipe){
                        await RecipeOccasions.create({
                            recipe_id: createdRecipe.recipe_id,
                            occasion_id: createdOccasions.occasion_id
                        });
                    }    
                } catch (error) {
                    console.error(`Error loading Occasions "${occasionsData}" and recipe with ID ${recipeData.recipe_id} into RecipeOccasions. An error occurred: ${error.message}`);
                }
            }
            /* INGREDIENTS */
            for (const ingredientData of recipeResponse.ingredients) {
                let createdIngredient = await Ingredients.findOne({where: {ingredient_id: ingredientData.ingredient_id}});
                try{
                    if(!createdIngredient){
                        createdIngredient = await Ingredients.create({
                            ingredient_id: ingredientData.ingredient_id,
                            standard_name: ingredientData.standard_name,
                            image: ingredientData.image,
                        }, { validate: true });
                    }
                }
                catch(error){
                    console.error(`Error loading ingredientData "${ingredientData.standard_name}", ID: ${ingredientData.ingredient_id} and recipe with ID ${recipeData.recipe_id}. An error occurred: ${error.message}`);
                }

                try{
                    const recipeIngredientsExits =  await RecipeIngredients.findOne({where: {ingredient_id: createdIngredient.ingredient_id, recipe_id: createdRecipe.recipe_id, us_amount: ingredientData.us_amount}});
                    if(!recipeIngredientsExits && createdIngredient && createdRecipe){
                        await RecipeIngredients.create({
                            ingredient_id: createdIngredient.ingredient_id,
                            recipe_id: createdRecipe.recipe_id,
                            specialized_name : ingredientData.specialized_name,
                            us_unit : ingredientData.us_unit,
                            us_amount: ingredientData.us_amount,
                            metric_unit : ingredientData.metric_unit,
                            metric_amount: ingredientData.metric_amount,
                        }, { validate: true });
                    }
                } catch(error){
                    console.error(`Error loading Ingredient "${ingredientData.standard_name}", ID: ${ingredientData.ingredient_id} and recipe with ID ${recipeData.recipe_id} for the RecipeIngredients. An error occurred: ${error.message}`);
                }
            }
            /* RECIPE NUTRIENTS AND NUTRIENTS*/
            for (const nutrientData of recipeResponse.recipeNutrients) {
                let createdNutrients = await Nutrients.findOne({ where: { name: nutrientData.name } });
                try{
                    if(!createdNutrients){
                        createdNutrients = await Nutrients.create({
                            name: nutrientData.name,
                            unit: nutrientData.unit,
                        }, { validate: true });
                    }
                } catch (error){
                    console.error(`Error loading Nutrient "${nutrientData.name}" and recipe with ID ${recipeData.recipe_id}. An error occurred: ${error.message}`);
                }
                try{
                    const existingRecipeNutrients = await RecipeNutrients.findOne({
                        where: {
                            recipe_id: createdRecipe.recipe_id,
                            nutrient_id: createdNutrients.nutrient_id,
                        }
                    });
                    if(!existingRecipeNutrients && createdRecipe && createdNutrients){
                        await RecipeNutrients.create({
                            nutrient_id: createdNutrients.nutrient_id,
                            recipe_id: createdRecipe.recipe_id,
                            amount: nutrientData.amount,
                            percent_of_daily_needs: nutrientData.percentOfDailyNeeds,
                        }, { validate: true });
                    }
                } catch (error){
                    console.error(`Error loading Nutrient "${nutrientData.name}" and recipe with ID ${recipeData.recipe_id} for RecipeNutrients. An error occurred: ${error.message}`);
                }
            }

            /* FLAVONOID*/
            for (const flavonoidData of recipeResponse.flavonoids) {
                let createdFlavonoid = await Flavonoids.findOne({ where: { name: flavonoidData.name } });
                try{
                    if(!createdFlavonoid){
                        createdFlavonoid = await Flavonoids.create({
                            name: flavonoidData.name,
                            unit: flavonoidData.unit
                        }, { validate: true });
                    }
                } catch(error){

                }
                try{
                    const existingRecipeFlavonoids = await RecipeFlavonoids.findOne({
                        where: {
                            recipe_id: createdRecipe.recipe_id,
                            flavonoid_id: createdFlavonoid.flavonoid_id,
                        }
                    });
                    if(!existingRecipeFlavonoids && createdFlavonoid && createdRecipe){
                        await RecipeFlavonoids.create({
                            flavonoid_id: createdFlavonoid.flavonoid_id,
                            recipe_id: createdRecipe.recipe_id,
                            amount: flavonoidData.amount
                        }, { validate: true });
                    }
                } catch (error){
                    console.error(`Error loading Flavonoids "${flavonoidData.name}" and recipe with ID ${recipeData.recipe_id} into RecipeFlavonoids. An error occurred: ${error.message}`);
                }
            }
            /* PROPERTIES */
            for (const propertiesData of recipeResponse.properties) {
                let createdProperties = await Properties.findOne({ where: { name: propertiesData.name } });
                try{
                    if(!createdProperties){
                        createdProperties = await Properties.create({
                            name: propertiesData.name,
                            unit: propertiesData.unit
                        }, { validate: true });
                    }
                } catch(error){
                    console.error(`Error loading properties "${propertiesData.name}" and recipe with ID ${recipeData.recipe_id}. An error occurred: ${error.message}`);
                }
                try{
                    const existingRecipeProperties = await RecipeProperties.findOne({
                        where: {
                            recipe_id: createdRecipe.recipe_id,
                            property_id: createdProperties.property_id,
                        }
                    }); 
                    if(!existingRecipeProperties && createdRecipe && createdProperties){
                        await RecipeProperties.create({
                            property_id: createdProperties.property_id,
                            recipe_id: createdRecipe.recipe_id,
                            amount: propertiesData.amount
                        }, { validate: true });
                    }
                } catch(error){
                    console.error(`Error loading properties "${propertiesData.name}" and recipe with ID ${recipeData.recipe_id} for RecipeProperties. An error occurred: ${error.message}`);
                }
            }

            /* WEIGHT PER SERVING */
            const weightPerServingData = recipeResponse.recipeWeightPerServing[0];
            try{
                let createdweightPerServingData= await WeightPerServing.findOne({ where: { recipe_id: createdRecipe.recipe_id} });
                if(!createdweightPerServingData && createdRecipe){
                    createdweightPerServingData = await WeightPerServing.create({
                        recipe_id: createdRecipe.recipe_id,
                        amount: weightPerServingData.amount,
                        unit: weightPerServingData.unit,
                    }, { validate: true });
                }
            } catch (error){
                console.error(`Error loading Weight per serving for recipe with ID ${recipeData.recipe_id}. An error occurred: ${error.message}`);
            }

            /* CALORIC BREAKDOWN */
            const caloricBreakdownData = recipeResponse.recipeCaloricBreakdown[0];
            try{
                let createdCaloricBreakdown = await CaloricBreakdown.findOne({ where: { recipe_id: createdRecipe.recipe_id} });
                if(!createdCaloricBreakdown && createdRecipe){
                    createdCaloricBreakdown = await CaloricBreakdown.create({
                        recipe_id: createdRecipe.recipe_id,
                        percent_protein: caloricBreakdownData.percentProtein,
                        percent_fat: caloricBreakdownData.percentFat,
                        percent_carbs: caloricBreakdownData.percentCarbs
                    }, { validate: true });
                }
            } catch(error){
                console.error(`Error loading Caloric breakdow for recipe with ID ${recipeData.recipe_id}. An error occurred: ${error.message}`);
            }

            /* INSTRUCTION */
            for(const instructionsResponse of recipeResponse.instructions){
                for (const instructionData of instructionsResponse) {

                    let isSecondaryRecipe = false;
                    let nametype = "";
                    if (instructionData.name !== "") {
                        isSecondaryRecipe = true;
                        nametype = instructionData.name;
                    }
                    if(instructionData.name === "") {
                        nametype = "main recipe";
                    }

                    let createdInstruction = await Instructions.findOne({ where: { recipe_id: recipeData.recipe_id,  step_number: instructionData.number, name: nametype } });
                    try{
                        if(!createdInstruction){
                            createdInstruction = await Instructions.create({
                                step_number: instructionData.number,
                                name: nametype,
                                step: instructionData.step,
                                recipe_id: createdRecipe.recipe_id,
                                is_secondary_recipe: isSecondaryRecipe
                            }, { validate: true });
                        }
                    } catch (error) {
                        console.error(`Error loading Instruction name: "${nametype}", step number ${instructionData.number}, and recipe with ID ${recipeData.recipe_id} into Instructions. An error occurred: ${error.message}`);
                    }
                    /* INSTRUCTION LENGTH */
                    try{
                        if(createdInstruction){
                            if (instructionData.length_data && Object.keys(instructionData.length_data).length > 0) { 
                                let createdInstructionLength = await InstructionLength.findOne({ where: { instruction_id: createdInstruction.instruction_id,  step_number: instructionData.number, name: nametype } });
                                if(!createdInstructionLength){
                                    createdInstructionLength = await InstructionLength.create({
                                        instruction_id: createdInstruction.instruction_id,
                                        length_number: instructionData.length_data.number,
                                        length_unit: instructionData.length_data.unit,
                                    }, { validate: true });
                                }
                            }
                        }
                        else{
                            console.log(`Skipped loading Instruction Length for Instruction name: "${nametype}", step number ${instructionData.number}, and recipe with ID ${recipeData.recipe_id} into InstructionLength. An error occurred: instrution wasn't created in the instrucation table first`);
                        }
                    } catch (error){
                        console.error(`Error loading Instruction Length for Intruction ID ${createdInstruction.instruction_id}, step number ${instructionData.number}, and recipe with ID ${recipeData.recipe_id} into InstructionLength. An error occurred: ${error.message}`);
                    }

                    /*INGREDIENTS*/
                    for (const instructionIngredientsData of instructionData.ingredients) {
                        if (instructionIngredientsData.id !== 0) { //ignore if Id is 0
                            let createdInstructionIngredients =  await Ingredients.findOne({ where: { ingredient_id: instructionIngredientsData.id } });
                            try{
                                if(!createdInstructionIngredients){
                                    createdInstructionIngredients = await Ingredients.create({
                                    ingredient_id: instructionIngredientsData.id,
                                    standard_name:  instructionIngredientsData.name,
                                    image:  instructionIngredientsData.image,
                                }, { validate: true });
                            }
                            } catch (error){
                                console.error(`Error loading Ingredient "${instructionIngredientsData.name}", ID: ${instructionIngredientsData.id} for Recipe ID ${recipeData.recipe_id}: ${error.message}`);
                            }
                            /*INSTRUCTION - INGREDIENTS*/    
                            try{
                                if(createdInstruction){
                                    let createdInstructionsIngredients =  await InstructionsIngredients.findOne({ where: { instruction_id: createdInstruction.instruction_id, ingredient_id: instructionIngredientsData.id } });
                                    if(!createdInstructionsIngredients){
                                        await InstructionsIngredients.create({
                                            ingredient_id: createdInstructionIngredients.ingredient_id,
                                            instruction_id: createdInstruction.instruction_id,
                                        }, { validate: true });
                                    }
                                }
                                else{
                                    console.log(`Skipped loading Instruction - ingredients for Instruction name: "${nametype}" - step number: ${instructionData.number}, Ingredient name: "${instructionIngredientsData.name}" - ID: ${instructionIngredientsData.id}, and recipe with ID ${recipeData.recipe_id} into InstructionsIngredients. An error occurred: instrution wasn't created in the instrucation table`);
                                }
                            } catch(error){
                                console.log(`Error loading Instruction - ingredients for Instruction name: "${nametype}" - step number: ${instructionData.number}, Ingredient name: "${instructionIngredientsData.name}" - ID:"${instructionIngredientsData.id}", and recipe with ID ${recipeData.recipe_id} into InstructionsIngredients. An error occurred: ${error.message}`);
                            }
                        }
                    }
                    
                    /* EQUIPMENT */
                    for (const equipmentData of instructionData.equipments) {
                        let createdEquipment = await Equipment.findOne({ where: { equipment_id: equipmentData.id } });
                        try{
                            if (!createdEquipment) {
                                createdEquipment = await Equipment.create({
                                    equipment_id: equipmentData.id,
                                    name: equipmentData.name,
                                    image: equipmentData.image
                                }, { validate: true });
                            }
                        } catch (error){
                             console.log(`Error loading Equipment with ID ${equipmentData.id}. An error occurred: ${error.message}`);
                         }
                        if(createdInstruction){
                            try{
                                let createdInstructionsEquipment = InstructionsEquipment.findOne({ where: { equipment_id: equipmentData.id, instruction_id: createdInstruction.instruction_id} });
                                if(!createdInstructionsEquipment){
                                    await InstructionsEquipment.create({
                                        equipment_id: createdEquipment.equipment_id,
                                        instruction_id: createdInstruction.instruction_id
                                    }, { validate: true });
                                }
                            } catch (error){
                                console.log(`Error loading InstructionEquipment for Instruction name: "${nametype}" - step number: ${instructionData.number}, Equipment name: "${equipmentData.name}" - ID: "${equipmentData.id}", and recipe with ID ${recipeData.recipe_id} into InstructionsIngredients. An error occurred: ${error.message}`);
                            }
                        }
                        else{
                            console.log(`Skipped loading InstructionEquipment for Instruction name: "${nametype}" - step number: ${instructionData.number}, Equipment name: "${equipmentData.name}" - ID: "${equipmentData.id}", and recipe with ID ${recipeData.recipe_id} into InstructionsIngredients. An error occurred: instrution wasn't created in the instrucation table`);
                        }
                        try{
                            let createdRecipeEquipment = RecipeEquipment.findOne({ where: { equipment_id: equipmentData.id, recipe_id: createdRecipe.recipe_id} });
                            if(!createdRecipeEquipment){
                                await RecipeEquipment.create({
                                    equipment_id: createdEquipment.equipment_id,
                                    recipe_id: createdRecipe.recipe_id,
                                }, { validate: true });
                            }
                        } catch (error){
                            console.log(`Error loading RecipeEquipment for Equipment name: "${equipmentData.name}" - ID: "${equipmentData.id}" and recipe with ID ${recipeData.recipe_id} into RecipeEquipment. An error occurred: ${error.message}`);
                        }
                    }
                }
            }
            /* NUTRITION */
            // RECIPE INGREDIENTS NUTRIENTS
            for(const ingredientNutrientsResponse of recipeResponse.recipeIngredientsNutrients){
                for (const nutrientData of ingredientNutrientsResponse.nutrients) {
                    let creatednutrient = await Nutrients.findOne({ where: { name: nutrientData.name } });
                    try{
                        if(!creatednutrient){
                            creatednutrient = await  Nutrients.create({
                                name: nutrientData.name,
                                unit: nutrientData.unit,
                            })
                        }
                    } catch (error){
                        console.error(`Error loading nutrient "${nutrientData.name}" and recipe with ID ${recipeData.recipe_id}. An error occurred: ${error.message}`);

                    }
                    try{
                        let existingIngredient =  await Ingredients.findOne({where: {ingredient_id: ingredientNutrientsResponse.id}});;
                        if(creatednutrient && createdRecipe && existingIngredient){
                            const recipeingredientsNutrientsExists = await RecipeIngredientsNutrients.findOne({ where: {recipe_id: createdRecipe.recipe_id, nutrient_id: creatednutrient.nutrient_id,
                                ingredient_id: ingredientNutrientsResponse.id,} });
                            if(!recipeingredientsNutrientsExists){
                                await RecipeIngredientsNutrients.create({
                                    recipe_id: createdRecipe.recipe_id,
                                    nutrient_id: creatednutrient.nutrient_id,
                                    ingredient_id: ingredientNutrientsResponse.id,
                                    ingredient_amount: ingredientNutrientsResponse.amount,
                                    nutrient_amount: nutrientData.amount,
                                    ingredient_unit: ingredientNutrientsResponse.unit,
                                    percent_of_daily_needs: nutrientData.percentOfDailyNeeds,
                                })
                            }
                        }
                        else{
                            console.log(`Skipped loading RecipeIngredientsNutrients for Nutrients name: "${ nutrientData.name}", Ingredient name: "${ingredientNutrientsResponse.name}" - ID: ${ingredientNutrientsResponse.id}, and recipe with ID ${recipeData.recipe_id} into RecipeIngredientsNutrients. An error occurred: recipe, ingredient, or nutrient wasn't loaded in thier table`);
                        }
                    } catch (error){
                        console.error(`Error loading nutrient "${nutrientData.name}", ingredient "${ingredientNutrientsResponse.name}" - ID: ${ingredientNutrientsResponse.id} , and recipe with ID ${recipeData.recipe_id}. An error occurred: ${error.message}`);
                    }
                }
            }

            for (const tipData of recipeResponse.tips) {
                try{
                    if(createdRecipe){
                        let createdTip = await Tips.findOne({ where: { recipe_id: recipeData.recipe_id, tip: tipData.tip}});
                        if(!createdTip){
                            createdTip = await Tips.create({
                                type: tipData.type,
                                tip: tipData.tip,
                                recipe_id: createdRecipe.recipe_id, 
                            }, { validate: true });
                            await createdRecipe.addTip(createdTip);
                        }
                    }
                    else{
                        console.log(`Skipped loading Tip: "${tipData.tip}" for recipe with ID ${recipeData.recipe_id}. An error occurred: recipe was not added into its table`);
                    }
                } catch(error){
                    console.error(`Error loading Tip: "${tipData.tip}" for recipe with ID ${recipeData.recipe_id}. An error occurred: ${error.message}`);
                }
            }
            console.log('Data loaded successfully.');
        }
    }
    catch (error) {
        console.error('Failed to load data:', error);
    }
}

module.exports = { 
    Recipe,
    Diet,
    RecipeDiet,
    Cuisines,
    sequelize,
    RecipeCuisines,
    DishType,
    RecipeDishType,
    Occasions,
    RecipeOccasions,
    Tips,
    loadRecipesIntoDatabase };
