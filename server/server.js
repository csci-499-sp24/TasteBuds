// https://medium.com/@ibrahimhz/creating-your-first-backend-with-node-js-step-by-step-guide-892769af4cb0

const express = require("express");
const cors = require('cors');
const bodyParser = require("body-parser");
const bcrypt = require('bcrypt');
const { Pool } = require('pg');
const { Sequelize, DataTypes } = require('sequelize');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json({ limit: '50mb'}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

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

//create user model
const User = sequelize.define('User', {
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

//create user in database (sign up)
app.post('/signup', async (req, res) => {
    const { username, password } = req.body;

    try {
        //check for existing user
        const existingUser = await User.findOne({ where: { username } });
        if (existingUser) {
            return res.status(400).json({ error: "Username already exists" });
        }

        //hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        //create new user
        const newUser = await User.create({ username, password: hashedPassword });
        res.status(201).json({ message: "User signed up successfully", user: newUser });
    } catch (error) {
        console.error("Error signing up user:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

//log in existing user
app.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        //check for existing user
        const existingUser = await User.findOne({ where: { username } });
        if (!existingUser) {
            return res.status(404).json({ error: "User not found" });
        }

        //check if password input matches the existing password in the database
        const passwordMatch = await bcrypt.compare(password, existingUser.password);
        if (!passwordMatch) {
            return res.status(401).json({ error: "Incorrect password" });
        }

        //successful login
        res.status(200).json({ message: "Login successful", user: existingUser });

    } catch (error) {
        console.error("Error logging in user:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});


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

// app.get('/search', async (req, res) => {
//     try {
//         const { query } = req.query; // search query is passed as a query parameter

//         // Check if search query is provided and is a valid string
//         if (!query) {
//             return res.status(400).json({ error: "Invalid search query" });
//         }

//         // Fetch recipes from the database
//         const recipes = await Recipe.findAll({
//             subQuery: false,
//             raw: true,
//         });

//         // Filter recipes based on the search query
        

//         const filteredResults = recipes.filter(recipe =>
//             recipe.title.toLowerCase().includes(query.toLowerCase())
//         );

//         // Send filtered results as JSON response
//         console.log("Filtered Results:", filteredResults);
//         res.json(filteredResults);
        
//     } catch (error) {
//         console.error("Error searching recipes:", error);
//         res.status(500).json({ error: "Internal server error" });
//     }
// });

app.get('/searchV2', async (req, res) => {
    try {
        const { query, cuisine, diet, dishType, occasion, includeTips, servings, smartPoints, cheap, 
            healthy, sustainable, smartPointsMin, smartPointsMax, readyInMinutesMin, readyInMinutesMax, 
            readyInMinutes, pricePerServingMin, pricePerServingMax, pricePerServing, minTotalPrice , 
            maxTotalPrice, totalPrice } = req.query;

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
        if (servings) {
            baseQuery.where = {
                ...baseQuery.where,
                servings: servings
            };
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
                very_healthy: cheap
            };
        }

        if (sustainable !== undefined) {
            baseQuery.where = {
                ...baseQuery.where,
                sustainable: cheap
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

        if (pricePerServingMin && pricePerServingMax) {
            // price per serving is in pennys in the db
            const minPricePennies = pricePerServingMin * 100;
            const maxPricePennies = pricePerServingMax * 100;

            baseQuery.where = {
                ...baseQuery.where,
                price_per_serving: {
                    [Sequelize.Op.between]: [minPricePennies, maxPricePennies]
                }
            };
        } else if (pricePerServingMin) {
            const minPricePennies = pricePerServingMin * 100;
            baseQuery.where = {
                ...baseQuery.where,
                price_per_serving: {
                    [Sequelize.Op.gte]: minPricePennies
                }
            };
        } else if (pricePerServingMax) {
            const maxPricePennies = pricePerServingMax * 100;
            baseQuery.where = {
                ...baseQuery.where,
                price_per_serving: {
                    [Sequelize.Op.lte]: maxPricePennies
                }
            };
        } else if (pricePerServing !== undefined) {
            const pricePennies = pricePerServingMax * 100;
            baseQuery.where = {
                ...baseQuery.where,
                price_per_serving: pricePennies
            };
        }

        // error need resolving
        // if (minTotalPrice || maxTotalPrice) {
        //     baseQuery.attributes = baseQuery.attributes || []; // Initialize baseQuery.attributes as an array if it's not already
            
        //     baseQuery.attributes.push([
        //         sequelize.col('price_per_serving'), // Include price_per_serving column
        //         sequelize.col('servings'), // Include servings column
        //         ['*', 'total_cost'] // Multiply the columns and alias the result as 'total_cost'
        //     ]);
            
        //     baseQuery.having = {};
        //     if (minTotalPrice && maxTotalPrice) {
        //         const minTotalPricePennies = minTotalPrice * 100;
        //         const maxTotalPricePennies = maxTotalPrice * 100;
            
        //         baseQuery.having.total_cost = {
        //             [Sequelize.Op.between]: [minTotalPricePennies, maxTotalPricePennies]
        //         };
        //     } else if (minTotalPrice) {
        //         const minTotalPricePennies = minTotalPrice * 100;
        //         baseQuery.having.total_cost = {
        //             [Sequelize.Op.gte]: minTotalPricePennies
        //         };
        //     } else if (maxTotalPrice) {
        //         const maxTotalPricePennies = maxTotalPrice * 100;
        //         baseQuery.having.total_cost = {
        //             [Sequelize.Op.lte]: maxTotalPricePennies
        //         };
        //     } else if (totalPrice !== undefined) {
        //         const totalPricePennies = totalPrice * 100;
        //         baseQuery.having.total_cost = {
        //             [Sequelize.Op.eq]: totalPricePennies
        //         };
        //     }
        // }
        
        
        
        
        
         
    
  
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

app.get('/getAllIngredients', async (req, res) => {
    try{
        const listOfIngredients = await Ingredients.findAll();
        res.status(200).json(listOfIngredients);
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