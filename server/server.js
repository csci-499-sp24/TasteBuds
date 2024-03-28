// https://medium.com/@ibrahimhz/creating-your-first-backend-with-node-js-step-by-step-guide-892769af4cb0

const express = require("express");
const cors = require('cors');
const { Pool } = require('pg');
const { Sequelize, DataTypes } = require('sequelize');
require('dotenv').config();

const app = express();
app.use(cors());

//const sequelize = new Sequelize(process.env.DB_HOST + "/" + process.env.DB_NAME)
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
});

// const postgres_db = new Sequelize(process.env.DB_HOST);
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

// Demonstration of how to define a foreign key (see fk_id).
// const test = sequelize.define("EXAMPLE", {
//     pk_id: {
//         type: DataTypes.INTEGER,
//         allowNull: false,
//         primaryKey: true,
//     },
//     fk_id: {
//         type: DataTypes.INTEGER,
//         allowNull: false,
//         primaryKey: true,
//         references: {
//             model: recipes_table,
//             key: "hi",
//         }
//     },
// })

const database = require("./tables/old_model.js")(sequelize, DataTypes);

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

// Calling up all the table objects,
// They don't work right now, Sequelize insists that the db relations don't exist
// I will add them here and figure that out later.
const {
    recipes_table,
    weight_per_serving,
    calories_table,
    secondary_recipes_table,
    recipes_flavors
} = require("./tables/recipes.js")(sequelize, DataTypes);
const {
    recipe_to_equip,
    instr_to_ingr,
    instr_to_equip,
    recipe_to_cusine,
    recipe_to_diet,
    recipe_to_occasions,
    recipe_to_properties,
    recipe_to_dishtype,
} = require("./tables/table_connectors.js")(sequelize, DataTypes)
const {
    tips_table,
    equipment_table,
    instructions_id,
    instr_length,
    ingredients_table,
    recipe_ingredients,
    recipe_nutrients,
    recipe_ingredient_nutrient,
    cuisine_table,
    diet_table,
    flavonoid_table,
    nutrients_table,
    properties_table,
    occasions_table,
    dish_type,
} = require("./tables/other_tables.js")(sequelize, DataTypes)



app.get("/", async (req,res)=>{
    try {
        const first_ten = await database.findAll({
            subQuery: false,
            limit: 10,
            raw: true,
        });
        res.status(200).json({recipeData: first_ten});
        console.log("app.get / call successful");
    }
    catch(error){
        console.log("encountered error: ", error)
    }
})

app.get("/mytest", async (req,res)=>{
    try {
        const first_ten = await recipes_table.findAll({
            subQuery: false,
            limit: 10,
            raw: true,
        });
        res.status(200).json({recipeData: first_ten});
        console.log("app.get / call successful");
    }
    catch(error){
        console.log("encountered error: ", error)
    }
});

app.get('/search', async (req, res) => {
    try {
        const { query } = req.query; // search query is passed as a query parameter

        // Check if search query is provided and is a valid string
        if (!query) {
            return res.status(400).json({ error: "Invalid search query" });
        }

        // Fetch recipes from the database
        const recipes = await recipes_table.findAll({
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


const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});