// https://medium.com/@ibrahimhz/creating-your-first-backend-with-node-js-step-by-step-guide-892769af4cb0

const express = require("express");
const cors = require('cors');
const bodyParser = require("body-parser");
const bcrypt = require('bcrypt');
const { Pool } = require('pg');
const { Sequelize, DataTypes, QueryTypes } = require('sequelize');
const userRoutes = require('./firebase/user.js');
const isAuthenticated = require('./isAuthenticated');
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

//define savedRecipes table
const SavedRecipes = sequelize.define('savedRecipes', {
    userId: {
        type: DataTypes.STRING,
        allowNull: false
    },
    recipeTitle: {
        type: DataTypes.STRING,
        allowNull: false
    },
    recipeId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    imageUrl: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

async function sync_table() {
    try {
        // await sequelize.sync()
        await database.sync();
        //await User.sync();
        await SavedRecipes.sync()
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
    Comments, 
} = require("./tables/recipes.js")(sequelize, DataTypes);

/*
Things to get for the recipe profile:
Price per serving: recipe_data.price_per_serving
Rating:
Difficulty:
Time: recipe_data.ready_in_minutes
Description: recipe_data.summary
Ingredients: 
Equipment: equipment_ids
*/

// for some reason Express gets very worked up if this is above the block of text above
// so I moved it down
app.get('/search_by_id', async (req, res) => {
    try {
        const {id} = req.query; 
        const recipe_data = await Recipe.findOne({
            where: {recipe_id: id},
            include: [
                {
                    model: Equipment,
                }, 
                {
                    model: Ingredients,
                },
                // {
                //     model: Nutrients
                // },
                // {
                //     model: Instructions,//Instructions and Recipe doesn't have a connector table
                //     //association: new Sequelize.belongsTo(Recipe, Instructions, {/*options*/}),
                // },
                // {
                //     model: InstructionLength,
                // },
            ],
        });
        const instruction_data = await Instructions.findAll({
            where: {recipe_id: id}
        })
        let instr_ids = []
        if (instruction_data !== null) {
            instruction_data.forEach((json_obj) => {
                instr_ids.push(json_obj.instruction_id)
            })
        }
        const instr_length_data = await InstructionLength.findAll({
            where: {
                instruction_id: //instruction_data[0].instruction_id}
                {
                    [Sequelize.Op.in]: instr_ids,
                }
            }
        })
        //console.log("printing the returned value to see what happens")
        //console.log(instruction_data.instruction_id)
        //console.log(JSON.parse(JSON.stringify(equipment_ids)))
        res.status(200).json([recipe_data, instruction_data, instr_length_data]);
    } catch (error) {
        console.error("Error finding recipe by id:", error);
        res.status(500).json({ error: "Internal server error" });
    }
})

// search + filter 
app.use('/searchV2', searchRoutes); // search routes


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

app.post('/comments', isAuthenticated, async (req, res) => {
    try {
        const { userId, recipeId, commentText, firebaseUserId } = req.body;
        // Insert the new comment into the database
        const newComment = await Comments.create({
            user_id: userId,
            recipe_id: recipeId,
            comment_text: commentText,
            firebase_user_id: firebaseUserId,
        });
        res.status(201).json(newComment);
    } catch (error) {
        console.error('Error creating comment:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.get('/comments/:recipeId', async (req, res) => {
    try {
        const { recipeId } = req.params;
        const comments = await Comments.findAll({
            where: { recipe_id: recipeId },
        });
        res.status(200).json(comments);
    } catch (error) {
        console.error('Error fetching comments:', error)
    }
});

//get all saved recipes for a user
app.get('/savedRecipes/:userId', isAuthenticated, async (req, res) => {
    try {
        const userId = req.params.userId;
        const savedRecipes = await SavedRecipes.findAll({ where: { userId: userId } });
        res.status(200).json(savedRecipes);
    } catch (error) {
        console.error('Error fetching saved recipes:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});


//saving a recipe, adding it to savedRecipes table
app.post('/saveRecipe', isAuthenticated, async (req, res) => {
    try {
        const { userId, recipeTitle, imageUrl, recipeId } = req.body;
        const savedRecipe = await SavedRecipes.create({
            userId: userId,
            recipeTitle: recipeTitle,
            recipeId: recipeId,
            imageUrl: imageUrl
        });
        res.status(201).json(savedRecipe);
    } catch (error) {
        console.error('Error creating saved recipe:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

//deleting a recipe from the savedRecipes table
app.delete('/deleteRecipe/:userId/:recipeId', isAuthenticated, async (req, res) => {
    try {
        const userId = req.params.userId;
        const recipeId = req.params.recipeId;
        await SavedRecipes.destroy({ where: { userId: userId, recipeId: recipeId } });
        res.status(200).json({ message: 'Saved recipe deleted successfully' });
    } catch (error) {
        console.error('Error deleting saved recipe:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Endpoint to fetch recipe details by ID
app.get('/recipe/:recipeId', async (req, res) => {
    try {
      const { recipeId } = req.params;
      const recipeDetails = await Recipe.findOne({
        where: { recipe_id: recipeId },
        include: [Equipment, Ingredients] 
      });
      res.status(200).json(recipeDetails);
    } catch (error) {
      console.error('Error fetching recipe details:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
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