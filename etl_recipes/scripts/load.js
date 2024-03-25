const { Sequelize, DataTypes } = require('sequelize');
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
            rejectUnauthorized: false, // Note: This is for development only
        }
    },
});


/* --- MODELS and RELATIONSHP ---- */

// Define Recipe model that mirrors the structure of Recipes table
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
    tableName: 'recipe',  
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
    cuisine_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    recipe_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
    },
}, {
    tableName: 'recipe_cuisines',
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
    tableName: 'diet',
    timestamps: false,
});
const RecipeDiet = sequelize.define('RecipeDiet', {
    diet_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
    },
    recipe_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
    },
}, {
    tableName: 'recipe_diet',
    timestamps: false
});
// Define the ER of Diet and Recipe (M:M)
Diet.belongsToMany(Recipe, { through: RecipeDiet, foreignKey: 'diet_id' });
Recipe.belongsToMany(Diet, { through: RecipeDiet, foreignKey: 'recipe_id' });

/* DISH TYPE */
 const Dish_Type = sequelize.define('Dish_Type', {
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
    tableName: 'dish_type',
    timestamps: false,
});
const RecipeDishType = sequelize.define('RecipeDishType', {
    dish_type_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    recipe_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
    },
}, {
    tableName: 'recipe_dish_type',
    timestamps: false
});
// Define the ER of DishType and Recipe (M:M)
Recipe.belongsToMany(Dish_Type, { through: RecipeDishType, foreignKey: 'recipe_id' });
Dish_Type.belongsToMany(Recipe, { through: RecipeDishType, foreignKey: 'dish_type_id' });

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
    occasion_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    recipe_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
    },
}, {
    tableName: 'recipe_occasions',
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
    aisle_tag: {
        type: DataTypes.STRING
    }
}, {
    tableName: 'ingredients',
    timestamps: false
});
const RecipeIngredients = sequelize.define('RecipeIngredients', {
    ingredient_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
    },
    recipe_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
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
    tableName: 'recipe_ingredients',
    timestamps: false
});
// Define the ER of Ingredients and Recipe (M:M)
Ingredients.belongsToMany(Recipe, { through: RecipeIngredients, foreignKey: 'ingredient_id' });
Recipe.belongsToMany(Ingredients, { through: RecipeIngredients, foreignKey: 'recipe_id' });

/* INSTRUTIONS, EQUIPMENT, INSTRUCTIONS-INGREDIENTS, and INSTRUCATION-LENGTH */
const Instructions = sequelize.define('Instructions', {
    instructions_id: {
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
    instructions_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true 
    },
}, {
    tableName: 'instructions_ingredients',
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
    tableName: 'equipment',
    timestamps: false
});
const RecipeEquipment = sequelize.define('RecipeEquipment', {
    equipment_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false
    },
    recipe_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
    },
}, {
    tableName: 'recipe_equipment',
    timestamps: false
});
const InstructionsEquipment = sequelize.define('InstructionsEquipment', {
    equipment_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false
    },
    ingredient_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
    },
}, {
    tableName: 'recipe_equipment',
    timestamps: false
});
// Define the ER of Instructions and Equipment (M:M)
Equipment.belongsToMany(Instructions, { through: InstructionsEquipment, foreignKey: 'equipment_id' });
Instructions.belongsToMany(Equipment, { through: InstructionsEquipment, foreignKey: 'instruction_id' });
// Define the ER of Recipe and Equipment (M:M)
Equipment.belongsToMany(Recipe, { through: RecipeEquipment, foreignKey: 'equipment_id' });
Recipe.belongsToMany(Equipment, { through: RecipeEquipment, foreignKey: 'recipe_id' });

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
        type: DataTypes.STRING 
    }
}, {
    tableName: 'instruction_length', 
    timestamps: false 
});
// Define the relationship with Instructions and Length (1:1)
InstructionLength.belongsTo(Instructions, { foreignKey: 'instruction_id' });
Instructions.hasOne(InstructionLength, { foreignKey: 'instruction_id' });

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
        allowNull: false,
    },
    recipe_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
    },
    amount: {
        type: DataTypes.DOUBLE,
        allowNull: false,
    },
    percent_of_daily_need: {
        type: DataTypes.DOUBLE,
        allowNull: false
    }
}, {
    tableName: 'recipe_nutrients',
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
        autoIncrement: true, 
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
    tableName: 'recipe_ingredients_nutrients',
    timestamps: false
});
// Define the  the relationship with Recipes, Nutrients, and Ingredients tabel (M:M)
Ingredients.belongsToMany(Nutrients, { through: RecipeIngredientsNutrients, foreignKey: 'ingredient_id' });
Nutrients.belongsToMany(Ingredients, { through: RecipeIngredientsNutrients, foreignKey: 'nutrient_id' });

Recipe.belongsToMany(Ingredients, { through: RecipeIngredientsNutrients, foreignKey: 'recipe_id' });
Ingredients.belongsToMany(Recipe, { through: RecipeIngredientsNutrients, foreignKey: 'ingredient_id' });

Recipe.belongsToMany(Nutrients, { through: RecipeIngredientsNutrients, foreignKey: 'recipe_id' });
Nutrients.belongsToMany(Recipe, { through: RecipeIngredientsNutrients, foreignKey: 'nutrient_id' });

RecipeIngredientsNutrients.belongsTo(Recipe, { foreignKey: 'recipe_id' });
RecipeIngredientsNutrients.belongsTo(Ingredients, { foreignKey: 'ingredient_id' });
RecipeIngredientsNutrients.belongsTo(Nutrients, { foreignKey: 'nutrient_id' });

/* FLAVONOIDS */
const Flavonoids = sequelize.define('Flavonoids', {
    flavonoids_id: {
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
        allowNull: false,
    },
    flavonoid_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
    },
    amount: {
        type: DataTypes.DOUBLE,
        allowNull: false,
    }
}, {
    tableName: 'recipe_flavonoids',
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
        allowNull: false,
    },
    property_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    amount: {
        type: DataTypes.DOUBLE,
        allowNull: false,
    }
}, {
    tableName: 'recipe_properties',
    timestamps: false
});
// Define the many-to-many relationship between Recipe and Properties (M:M)
Recipe.belongsToMany(RecipeProperties, { through: RecipeFlavonoids, foreignKey: 'recipe_id' });
RecipeProperties.belongsToMany(Recipe, { through: RecipeFlavonoids, foreignKey: 'property_id' });

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
    tableName: 'weight_per_serving',
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
    amount: {
        type: DataTypes.DOUBLE,
        allowNull: false,
    },
    unit: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    tableName: 'caloric_breakdown',
    timestamps: false,
});

// Define the relationship with Recipe and CaloricBreakdown (1:1)
CaloricBreakdown.belongsTo(Recipe, { foreignKey: 'recipe_id' });

/* END OF MODELS*/

// Function to load the transformed data into your database
async function loadRecipesIntoDatabase(transformedData) {
    try {
        // Authenticate the sequelize connection
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
        await sequelize.sync();

        // Iterate over each recipe response object in transformedData
        let createdRecipe; // Declare createdRecipe outside of the try block
        for (const recipeResponse of transformedData) {
            // Extract data for the Recipe table
            const recipeData = recipeResponse.recipe;
            console.log(`Recipe with ID ${recipeData.recipe_id} loading...`);
            // Attempt to create the recipe in the database
            createdRecipe = await Recipe.create(recipeData);
            console.log(`Recipe with ID ${createdRecipe.recipe_id} loaded successfully.`);
                        // Iterate over each Tips

            // Iterate over each cuisine 
            for (const cuisineData of recipeResponse.cuisine) {
                // returns either an object representing the found record or null 
                let createdCusine = await Cuisines.findOne({ where: { cuisine_name: cuisineData } });

                // If cuisine doesn't exist, create it
                if (!createdCusine) {
                    createdCusine = await Cuisines.create({ cuisine_name: cuisineData },  { validate: true });
                    console.log(`Cuisine with ID ${createdCusine.cuisine_id} created successfully.`);
                }
                // Create entry in the RecipeCuisine join table
                const existingRecipeCuisine = await RecipeCuisines.findOne({
                    where: {
                        recipe_id: createdRecipe.recipe_id,
                        cuisine_id: createdCusine.cuisine_id
                    }
                });
  
                if (!existingRecipeCuisine) {
                    // If no existing record found, create a new one
                    await RecipeCuisines.create({
                        recipe_id: createdRecipe.recipe_id,
                        cuisine_id: createdCusine.cuisine_id
                    });
                    console.log(`RecipeCuisines entry created successfully for recipe ${createdRecipe.recipe_id} and cuisine ${createdCusine.cuisine_id}.`);
                } else {
                    // Handle the case where the record already exists
                    console.log(`RecipeCuisines entry for recipe ${createdRecipe.recipe_id} and cuisine ${createdCusine.cuisine_id}.`);
                }
            
            }

            // Iterate over each diet
            for (const dietData of recipeResponse.diet) {
                let diet = await Diet.findOne({ where: { diet_name: dietData} });

                if (!diet) {
                    diet = await Diet.create(dietData);
                    console.log(`Diet with ID ${diet.diet_id} created successfully.`);
                }
                // Check if a record with the same recipe_id and diet_id exists
                const existingRecipeDiet = await RecipeDiet.findOne({
                    where: {
                        recipe_id: createdRecipe.recipe_id,
                        diet_id: diet.diet_id
                    }
                });

                if (!existingRecipeDiet) {
                    // If no existing record found, create a new one
                    await RecipeDiet.create({
                        recipe_id: createdRecipe.recipe_id,
                        diet_id: diet.diet_id
                    });
                    console.log(`RecipeDiet entry created successfully for recipe ${createdRecipe.recipe_id} and Diet ${diet.diet_id}.`);
                } else {
                    // Handle the case where the record already exists
                    console.log(`RecipeDiet entry for recipe ${createdRecipe.recipe_id} and Diet ${diet.diet_id} already exists.`);
                }
            }

            // Iterate over each Dish Type
            for (const dishTypeData of recipeResponse.dishType) {
                let createddishType = await Dish_Type.findOne({ where: { dish_type_name: dishTypeData} });

                if (!createddishType) {
                    createddishType = await Dish_Type.create(dishTypeData);
                    console.log(`Dish Type with ID ${createddishType.dish_type_id} created successfully.`);
                }
                const existingRecipeDishType = await RecipeDishType.findOne({
                    where: {
                        recipe_id: createdRecipe.recipe_id,
                        dish_type_id: createddishType.dish_type_id
                    }
                });


                if (!existingRecipeDishType) {
                    // If no existing record found, create a new one
                    await RecipeDishType.create({
                        recipe_id: createdRecipe.recipe_id,
                        diet_id:  createddishType.dish_type_id,
                    });
                    console.log(`RecipeDishType entry created successfully for recipe ${createdRecipe.recipe_id} and DishType ${createddishType.dish_type_id}.`);
                } else {
                    // Handle the case where the record already exists
                    console.log(`RecipeDishType entry for recipe ${createdRecipe.recipe_id} and DishType ${createddishType.dish_type_id}.`);
                }
            }
            // Iterate over each Occasions
            for (const occasionsData of recipeResponse.occasions) {
                let occasions = await Occasions.findOne({ where: { occasion: occasionsData} });

                if (!occasions) {
                    occasions = await Occasions.create(occasionsData);
                    console.log(`Occasions with ID ${occasions.occasion_id} created successfully.`);
                }

                await RecipeOccasions.create({
                    recipe_id: createdRecipe.recipe_id,
                    occasion_id: occasions.occasion_id
                });
                console.log(`RecipeOccasions entry created successfully for recipe ${createdRecipe.recipe_id} and Occasions ${occasions.occasion_id}.`);
            }

            for (const tipData of recipeResponse.tips) {
                const createdTip = await Tips.create({
                    type: tipData.type,
                    tip: tipData.tip,
                }, { validate: true });
    
                console.log(`Tip with ID ${createdTip.tip_id} loaded successfully.`);
    
                // Associate the tip with the recipe using Sequelize's built-in and automatically generated association methods.
                await createdRecipe.addTip(createdTip); 

                
            }

            // Iterate over each Recipe Ingredients and Ingredients
            for (const ingredientData of recipeResponse.ingredients) {
               let ingredient = await Ingredients.findOne({where: {ingredient_id: ingredientData.ingredient_id}});
               if(!ingredient){
                    const createdIngredient = await Ingredients.create({
                        ingredient_id: ingredientData.ingredient_id,
                        standard_name: ingredientData.standard_name,
                        image: ingredientData.image,
                        aisle: ingredientData.aisle,
                        }, { validate: true });
                    console.log(`Ingredient with ID ${createdIngredient.ingredient_id} inserted into Ingredients table.`);
               }
               await RecipeIngredients.create({
                    ingredient_id: ingredientData.ingredient_id,
                    recipe_id: createdRecipe.recipe_id,
                    specialized_name : ingredientData.specialized_name,
                    us_unit : ingredientData.us_unit,
                    us_amount: ingredientData.us_amount,
                    metric_unit : ingredientData.metric_unit,
                    metric_amount: ingredientData.metric_amount,
                }, { validate: true });
                console.log(`Ingredients with ID ${ingredientData.ingredient_id} linked to recipe with ID ${createdRecipe.recipe_id}.`);
            }
            //  Iterate over each Recipe Nutrients and Nutrients
            for (const nutrientData of recipeResponse.recipeNutrients) {
                let createdNutrients = await Nutrients.findOne({ where: { name: nutrientData.name } });
                if(!createdNutrients){
                    createdNutrients = await Nutrients.create({
                        name: nutrientData.name,
                        unit: nutrientData.unit
                    }, { validate: true });
                    console.log(`Nutrient ${createdNutrients.name} with ID ${createdNutrients.nutrient_id} inserted into Nutrients table.`);
                }
                await RecipeNutrients.create({
                    nutrient_id: createdNutrients.nutrient_id,
                    recipe_id: createdRecipe.recipe_id,
                    amount: nutrientData.amount,
                    percent_of_daily_needs: nutrientData.percentOfDailyNeeds
                }, { validate: true });
                console.log(`Nutrient ${createdNutrients.name} linked to recipe with ID ${createdRecipe.recipe_id}.`);
            }
            // Iterate over each flavonoid 
            for (const flavonoidData of recipeResponse.flavonoids) {
                let createdFlavonoid = await Flavonoids.findOne({ where: { name: flavonoidData.name } });
                if(!createdFlavonoid){
                    createdFlavonoid = await Flavonoids.create({
                        name: flavonoidData.name,
                        unit: flavonoidData.unit
                    }, { validate: true });
                    console.log(`Flavonoid ${createdFlavonoid.name} with ID ${createdFlavonoid.flavonoid_id} inserted into Flavonoids table.`);
                }
                await RecipeFlavonoids.create({
                    flavonoid_id: createdFlavonoid.flavonoid_id,
                    recipe_id: createdRecipe.recipe_id,
                    amount: flavonoidData.amount
                }, { validate: true });
                console.log(`Flavonoid ${createdFlavonoid.name} linked to recipe with ID ${createdRecipe.recipe_id}.`);
            }
            // Iterate over each properties 
            for (const propertiesData of recipeResponse.properties) {
                let createdProperties = await Properties.findOne({ where: { name: propertiesData.name } });
                if(!createdProperties){
                    createdProperties = await Properties.create({
                        name: propertiesData.name,
                        unit: propertiesData.unit
                    }, { validate: true });
                    console.log(`Properties ${createdProperties.name} with ID ${createdProperties.flavonoid_id} inserted into Properties table.`);
                }
                await RecipeProperties.create({
                    property_id: createdProperties.property_id,
                    recipe_id: createdRecipe.recipe_id,
                    amount: propertiesData.amount
                }, { validate: true });
                console.log(`Properties ${createdProperties.name} linked to recipe with ID ${createdRecipe.recipe_id}.`);
            }
            // Insert data into the WeightPerServing table
            const weightPerServingData = recipeResponse.weightPerServing[0];
            const createdWeightPerServing = await WeightPerServing.create({
                recipe_id: createdRecipe.recipe_id,
                percent_protein: weightPerServingData.percentProtein,
                percent_fat: weightPerServingData.percentFat,
                percent_carbs: weightPerServingData.percentCarbs
            }, { validate: true });
            console.log(`Weight per serving for recipe with ID ${createdRecipe.recipe_id} inserted successfully.`);

            // Insert data into the CaloricBreakdown table
            const caloricBreakdownData = recipeResponse.caloricBreakdown[0];
            const createdCaloricBreakdown = await CaloricBreakdown.create({
                recipe_id: createdRecipe.recipe_id,
                amount: caloricBreakdownData.amount,
                unit: caloricBreakdownData.unit
            }, { validate: true });
            console.log(`Caloric breakdown for recipe with ID ${createdRecipe.recipe_id} inserted successfully.`);

            // Iterate over instructions sets
            for(const instructionsResponse of recipeResponse.instructions){
                for (const instructionData of instructionsResponse.ingredients) {
                    let isSecondaryRecipe = false;
                    if (instructionData.name !== "") {
                        isSecondaryRecipe = true;
                    }

                    // Insert instructions
                    const createdInstruction = await Instructions.create({
                        step_number: instructionData.number,
                        name: instructionData.name,
                        step: instructionData.step,
                        recipe_id: createdRecipe.recipe_id,
                        is_secondary_recipe: isSecondaryRecipe
                    }, { validate: true });
                    console.log(`Instruction with ID ${createdInstruction.instruction_id} inserted successfully.`);

                    // Insert instruction length
                    if (instructionData.length.length > 0) {
                        const lengthData = instructionData.length;
                        await InstructionLength.create({
                            instruction_id: createdInstruction.instruction_id,
                            length_number: lengthData.number,
                            length_unit: lengthData.unit
                        }, { validate: true });
                        console.log(`Instruction length for instruction ID ${createdInstruction.instruction_id} inserted successfully.`);
                    }
                    // Insert instruction ingredients
                    for (const instructionIngredientsData of instructionData.ingredients) {
                        if (instructionIngredientsData.id !== 0) { //ignore if Id is 0
                            // Check if the ingredient already exists in the Ingredients table
                            let createdInstructionIngredients =  await Ingredients.findOne({ where: { ingredient_id: instructionIngredientsData.id } });
                            if(!createdInstructionIngredients){
                                
                                let aisle_tag  = "";
                                let matchingIngredients = await Ingredients.findAll({ where: { image: instructionIngredientsData.image } }); // Attempt to find a matching ingredient based on image
                                matchingIngredients = matchingIngredients.length > 0 ? matchingIngredients[0] : null;
                                if(!matchingIngredients){
                                    const ingredientId = instructionIngredientsData.id.toString();
                                    const lastFourDigits = ingredientId.length >= 4 ? ingredientId.slice(-4) : null;
                                    if(lastFourDigits !== null){
                                        matchingIngredients = await Ingredients.findOne({ where: { ingredient_id: { [Sequelize.Op.like]: `%${lastFourDigits}` } } });
                                        if (matchingIngredients.length > 0) {
                                            aisle_tag = matchingIngredients[0].aisle;
                                        }                                                                               
                                    }
                                }

                                createdInstructionIngredients = await Ingredients.create({
                                    ingredient_id: instructionIngredientsData.ingredient_id,
                                    standard_name:  instructionIngredientsData.name,
                                    image:  instructionIngredientsData.image,
                                    aisle: aisle_tag,
                                }, { validate: true });
                                console.log(`Ingredient with ID ${instructionIngredientsData.ingredient_id} inserted successfully. .`);
                            }
                            await InstructionsIngredients.create({
                                ingredient_id: instructionIngredientsData.ingredient_id,
                                instruction_id: createdInstruction.instruction_id,
                            }, { validate: true });
                            console.log(`Ingredient ${instructionIngredientsData.name} linked to Instruction with ID ${createdInstructionIngredients.instruction_id}.`);
                        }
                    }
                    // Insert instruction equipment
                    for (const equipmentData of instructionData.equipments) {
                        let createdEquipment = await Equipment.findOne({ where: { equipment_id: equipmentData.id } });
                        if (!createdEquipment) {
                            createdEquipment = await Equipment.create({
                                equipment_id: equipmentData.id,
                                name: equipmentData.name,
                                image: equipmentData.image
                            }, { validate: true });
                            console.log(`Equipment with ID ${createdEquipment.equipment_id} inserted into Equipment table.`);
                        }
                        await InstructionsEquipment.create({
                            equipment_id: createdEquipment.equipment_id,
                            instruction_id: createdInstruction.instruction_id
                        }, { validate: true });
                        console.log(`Equipment with ID ${createdEquipment.equipment_id} linked to instruction with ID ${createdInstruction.instruction_id}.`);

                        await RecipeEquipment.create({
                            equipment_id: createdEquipment.equipment_id,
                            recipe_id: createdRecipe.recipe_id,
                        }, { validate: true });
                        console.log(`Equipment with ID ${createdEquipment.equipment_id} linked to recipe with ID ${createdRecipe.recipe_id}.`);
                    }

                }
            }
            // Iterate over ingredients NUTRITION -  RECIPE INGREDIENTS NUTRIENTS
            for(const ingredientNutrientsResponse of recipeResponse.recipeIngredientsNutrients){

                for (const nutrientData of ingredientNutrientsResponse.nutrients) {
                    let creatednutrient = await Nutrients.findOne({ where: { name: nutrientData.name } });
                    if(!creatednutrient){
                        creatednutrient = await  Nutrients.create({
                            name: nutrientData.name,
                            unit: nutrientData.unit,
                        })
                        console.log(`Nutrient "${creatednutrient.name}" inserted into Nutrients table.`);
                    }
                    await RecipeIngredientsNutrients.create({
                        recipe_id: createdRecipe.recipe_id,
                        nutrient_id: creatednutrient.nutrient_id,
                        ingredient_id: ingredientNutrientsResponse.id,
                        ingredient_amount: ingredientNutrientsResponse.amount,
                        nutrient_amount: nutrientData.amount,
                        ingredient_unit: ingredientNutrientsResponse.unit,
                        percent_of_daily_needs: nutrientData.percentOfDailyNeeds,
                    })
                    console.log(`Nutrient "${creatednutrient.name}" linked to Recipe with ID ${createdRecipe.recipe_id}, Ingredient with ID ${ingredientNutrientsResponse.id}.`);
                }

            }
            console.log('Recipe ingredients loaded successfully.');
        }        
        console.log('Data loaded successfully.');
    } catch (error) {
        console.error('Failed to load data:', error);
    }
}

module.exports = { 
    Recipe,
    Diet,
    RecipeDiet,
    sequelize,
    loadRecipesIntoDatabase };
