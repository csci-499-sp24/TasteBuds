// https://medium.com/@ibrahimhz/creating-your-first-backend-with-node-js-step-by-step-guide-892769af4cb0

const express = require("express");
const cors = require('cors');
const { Pool } = require('pg');
const { Sequelize, DataTypes } = require('sequelize');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json({ limit: '50mb'}));

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'postgres', 
    /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
    dialectOptions: {
        // https://stackoverflow.com/questions/25000183/node-js-postgresql-error-no-pg-hba-conf-entry-for-host
        // See the answer from Victor Fazer.
        ssl: {
            require: true,
            rejectUnauthorized: false, // for dev only
        }
    },
    define: {
        // Define the schema to be used by default
        schema: 'public'
    }
});

async function syncDB() {
    try {
        console.log("beginning sequelize authenticate");
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
};
syncDB();


const database = require("./tables/recipes.js")(sequelize, DataTypes);

async function sync_table() {
    try {
        await database.sync();
        console.log("The table for the db has been (re)created.");
    }
    catch (error) {
        console.log("Syncing the table failed for this reason: ", error)
    }
};
sync_table();

const {
    Recipe,
    Cuisines,
    RecipeCuisines,
    Diet,
    RecipeDiet,
    DishType,
    RecipeDishType,
    Occasions,
    RecipeOccasions,
    Tips,
    Ingredients,
    RecipeIngredients,
    Instructions,
    InstructionsIngredients,
    Equipment,
    RecipeEquipment,
    InstructionsEquipment,
    InstructionLength,
    Nutrients,
    RecipeNutrients,
    RecipeIngredientsNutrients,
    Flavonoids,
    RecipeFlavonoids,
    Properties,
    RecipeProperties,
    WeightPerServing,
    CaloricBreakdown, 
} = require("./tables/recipes.js")(sequelize, DataTypes);


// app.get("/", async (req,res)=>{
//     try {
//         const first_ten = await database.findAll({
//             subQuery: false,
//             limit: 10,
//             raw: true,
//         });
//         res.status(200).json({recipeData: first_ten});
//         console.log("app.get / call successful");
//     }
//     catch(error){
//         console.log("encountered error: ", error)
//     }
// })

// app.get("/mytest", async (req,res)=>{
//     try {
//         const first_ten = await Recipe.findAll({
//             subQuery: false,
//             limit: 10,
//             raw: true,
//         });
//         res.status(200).json({recipeData: first_ten});
//         console.log("app.get / call successful");
//     }
//     catch(error){
//         console.log("encountered error: ", error)
//     }
// })

app.get('/search', async (req, res) => {
    try {
        const { query } = req.query; // search query is passed as a query parameter

        // Check if search query is provided and is a valid string
        if (!query) {
            return res.status(400).json({ error: "Invalid search query" });
        }

        // Fetch recipes from the database
        const recipes = await Recipe.findAll({
            subQuery: false,
            raw: true,
        });

        // Filter recipes based on the search query
        

        const filteredResults = recipes.filter(recipe =>
            recipe.title.toLowerCase().includes(query.toLowerCase())
        );

        // Send filtered results as JSON response
        console.log("Filtered Results:", filteredResults);
        res.json(filteredResults);
        
    } catch (error) {
        console.error("Error searching recipes:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

app.get('/searchV2', async (req, res) => {
    try {
        const { query, cuisine, diet, dishType, occasion, includeTips } = req.query;

        // Construct base query to fetch recipes
        let baseQuery = {
            include: [],
        };

        // Check if search query is provided and is a valid string
        if (query) {
            baseQuery.where = {
                title: { [Sequelize.Op.iLike]: `%${query}%` }
            };
        }

        if (cuisine) {
            // Add join with cuisines table only if cuisine parameter is provided
            baseQuery.include.unshift({
                model: Cuisines,
                through: {
                    model: RecipeCuisines,
                    attributes: [] // To exclude join table attributes
                },
                where: {
                    cuisine_name: { [Sequelize.Op.iLike]: `%${cuisine}%` }
                }
            });
        }

        if (diet) {
            baseQuery.include.push({
                model: Diet,
                through: {
                    model: RecipeDiet,
                    attributes: [] 
                },
                where: {
                    diet_name: { [Sequelize.Op.iLike]: `%${diet}%` }
                }
            });
        }

        if (dishType) {
            baseQuery.include.push({
                model: DishType,
                through: {
                    model: RecipeDishType,
                    attributes: [] 
                },
                where: {
                    dish_type_name: { [Sequelize.Op.iLike]: `%${dishType}%` }
                }
            });
        }

        if (occasion) {
            baseQuery.include.push({
                model: Occasions,
                through: {
                    model: RecipeOccasions,
                    attributes: [] 
                },
                where: {
                    occasion_name: { [Sequelize.Op.iLike]: `%${occasion}%` }
                }
            });
        }

        if (includeTips !== undefined) {
            if (includeTips === 'true') {
                // Include recipes with tips
                baseQuery.include.push({
                    model: Tips,
                    attributes: ['type', 'tip'] // Include tip attributes
                });
            } else {
                // Exclude recipes with tips
                baseQuery.include.push({
                    model: Tips,
                    attributes: ['type', 'tip'], // Include tip attributes
                    where: {
                        tip_id: null // Ensure no tips are included
                    },
                    required: false // Use a left join to include recipes without tips
                });
            }
        }
        
        
        // console.log("Executing query:", baseQuery);

        // Fetch recipes from the database
        const recipes = await Recipe.findAll(baseQuery);
        // Send filtered results as JSON response
        res.json(recipes);
        
    } catch (error) {
        console.error("Error searching recipes:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

app.post('/searchByIngredients', async (req, res) => {
    try{
        const { ingredientList } = req.body;
        let listOfIngredientIds = []; // Ids of ingredients to find recipes for
        let listOfRecipes = []; // The returned array of recipes
        let listOfRecipeIds = []; // Array for keeping track of recipes added
        for(const ingredientName of ingredientList) {
            const ingredient = await Ingredients.findOne({ where: {standard_name: ingredientName}});
            if (!ingredient){
                return res.status(404).json({message: "One or more ingredient(s) not found in database"});
            }
            listOfIngredientIds.push(ingredient.ingredient_id);
        }
        for(const ingredientId of listOfIngredientIds){
            //console.log(ingredientId);
            const recipesWithIngredient = await RecipeIngredients.findAll({ 
                where: {ingredient_id: ingredientId}, 
                include: Recipe, 
                attributes: [
                    [Sequelize.literal('ARRAY(SELECT ingredient_id FROM public.recipe_ingredient WHERE ingredient_id = ' + ingredientId + ' LIMIT 1)'), 'ingredient_ids'], 
                    [Sequelize.literal('ARRAY(SELECT standard_name FROM public.ingredients WHERE ingredient_id = ' + ingredientId + ' LIMIT 1)'), 'ingredients'], 
                    'recipe_id',
            ]
            });
                //console.log(recipesWithIngredient);
            for (const recipeWithIngredient of recipesWithIngredient){

                if (!listOfRecipeIds.includes(recipeWithIngredient.recipe_id)){
                    listOfRecipeIds.push(recipeWithIngredient.recipe_id);
                    listOfRecipes.push(recipeWithIngredient);
                } else {
                    const includedRecipeIndex = listOfRecipes.findIndex(recipe => recipe.recipe_id === recipeWithIngredient.recipe_id);
                    if (!listOfRecipes[includedRecipeIndex].dataValues.ingredients.includes(recipeWithIngredient.dataValues.ingredients[0])){
                        listOfRecipes[includedRecipeIndex].dataValues.ingredients.push(recipeWithIngredient.dataValues.ingredients[0]);
                        listOfRecipes[includedRecipeIndex].dataValues.ingredient_ids.push(recipeWithIngredient.dataValues.ingredient_ids[0]);
                    }
                }
            }

        }
        //const ingredients = await recipe.recipeIngredients;
        /*for(const ingredientName of ingredientList) {
            const ingredient = await recipes_table.findOne({ where: {recipe_id: 13}});
            listOfIngredientIds.push(ingredient);
        }*/
        res.status(200).json(listOfRecipes.flat()); //Flat because seperating by ingredient wasn't necessary.
    } catch (error) {
        console.error('Error fetching recipes by ingredients:', error);
        res.status(500).json({ error: 'Error fetching recipes by ingredients' });
    }
});


// Log requests
app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});


const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});

module.exports = {dbPool: sequelize};