// https://medium.com/@ibrahimhz/creating-your-first-backend-with-node-js-step-by-step-guide-892769af4cb0

const express = require("express");
const cors = require('cors');
const bodyParser = require("body-parser");
const bcrypt = require('bcrypt');
const { Pool } = require('pg');
const { Sequelize, DataTypes, QueryTypes } = require('sequelize');
const userRoutes = require('./firebase/user.js')
// const searchRoutes = require('./searchRoutes.js');

require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json({ limit: '50mb'}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(userRoutes)

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    database: process.env.DB_NAME,
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
const searchRoutes = require('./searchRoutes.js')(sequelize, DataTypes);

async function sync_table() {
    try {
        await database.sync();
        await User.sync();
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

// search + filter 
app.use('/searchV2', searchRoutes); // Use the new search routes


app.get('/getAllOccasions', async (req, res) => {
    try{
        const listOfOccasions = await Occasions.findAll();
        res.status(200).json(listOfOccasions);
    } catch (error){
        console.error("Error searching recipes:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

app.get('/getAllIngredients', async (req, res) => {
    try{
        const listOfIngredients = await Ingredients.findAll();
        res.status(200).json(listOfIngredients);
    } catch (error){
        console.error("Error searching recipes:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

app.get('/getAllDishTypes', async (req, res) => {
    try{
        const listOfDishTypes = await DishType.findAll();
        res.status(200).json(listOfDishTypes);
    } catch (error){
        console.error("Error searching recipes:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

app.post('/searchByIngredients', async (req, res) => {
    try{
        const { ingredientIds } = req.body;
        let listOfRecipes = []; // The returned array of recipes
        let listOfRecipeIds = []; // Array for keeping track of recipes added
        //For each ingredient in the passed array of Ids, find all recipes
        for(const ingredientId of ingredientIds){
            const recipesWithIngredient = await RecipeIngredients.findAll({ 
                where: {ingredient_id: ingredientId},
                include: Recipe,
                attributes: [
                    [Sequelize.literal('ARRAY(SELECT ingredient_id FROM public.recipe_ingredient WHERE ingredient_id = ' + ingredientId + ' LIMIT 1)'), 'ingredient_ids'], 
                    [Sequelize.literal('ARRAY(SELECT standard_name FROM public.ingredients WHERE ingredient_id = ' + ingredientId + ' LIMIT 1)'), 'ingredients'], 
                    'recipe_id',
                ]
            });
            //For each recipe which contains the ingredient, 
            //check if a previous ingredient already added the recipe to the return array
            for (const recipeWithIngredient of recipesWithIngredient){
                if (!listOfRecipeIds.includes(recipeWithIngredient.recipe_id)){//If it doesnt already exist, add it to the array
                    listOfRecipeIds.push(recipeWithIngredient.recipe_id);
                    listOfRecipes.push(recipeWithIngredient);
                } else { //Add current ingredient to that recipe's ingredients if true
                    const includedRecipeIndex = listOfRecipes.findIndex(recipe => recipe.recipe_id === recipeWithIngredient.recipe_id);
                    if (!listOfRecipes[includedRecipeIndex].dataValues.ingredients.includes(recipeWithIngredient.dataValues.ingredients[0])){
                        listOfRecipes[includedRecipeIndex].dataValues.ingredients.push(recipeWithIngredient.dataValues.ingredients[0]);
                        listOfRecipes[includedRecipeIndex].dataValues.ingredient_ids.push(recipeWithIngredient.dataValues.ingredient_ids[0]);
                    }
                }
            }
        }
        res.status(200).json(listOfRecipes.flat()); //Flat because seperating by ingredient wasn't necessary.
    } catch (error) {
        console.error('Error fetching recipes by ingredients:', error);
        res.status(500).json({ error: 'Error fetching recipes by ingredients' });
    }
});
// Random Daily Recipe
app.get('/getRandomRecipe', async (req, res) => {
    try {
      // Fetch all recipes
      const listOfRecipes = await Recipe.findAll();
  
      // Generate a random index
      const randomIndex = Math.floor(Math.random() * listOfRecipes.length);
  
      // Get the random recipe using the random index
      const randomRecipe = listOfRecipes[randomIndex];
  
      // Send the random recipe as JSON response
      res.json(randomRecipe);
    } catch (error) {
      console.error('Error fetching random recipe:', error);
      res.status(500).json({ error: 'Error fetching random recipe' });
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