// https://medium.com/@ibrahimhz/creating-your-first-backend-with-node-js-step-by-step-guide-892769af4cb0

const express = require("express");
const cors = require('cors');
const { Pool } = require('pg');
const { Sequelize, DataTypes } = require('sequelize');
require('dotenv').config();

const app = express();
app.use(cors());

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

async function syncDB() {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
};
syncDB();

// Sequelize table object.
const database = sequelize.define("sample_data", {
        "\"(PK) id\"": {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
        },
        title: {
            type: DataTypes.STRING,
        },
        summary: {
            type: DataTypes.STRING,
        },
        instructions: {
            type: DataTypes.STRING,
        },
        cuisines: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        preparationMinutes: {
            type: DataTypes.INTEGER,
        },
        cookingMinutes: {
            type: DataTypes.INTEGER,
        },
        readyInMinutes: {
            type: DataTypes.INTEGER,
        },
        priceperServing: {
            type: DataTypes.INTEGER,
        },
        dishTypes: {
            type: DataTypes.STRING,
        },
        servings: {
            type: DataTypes.INTEGER,
        },
        image: {
            type: DataTypes.STRING,
        },
        diet: {
            type: DataTypes.STRING,
        },
    },
    {
        tableName: "sample_data",
        timestamps: false,
    },
)

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

app.get("/", async (req,res)=>{
    try {
        const first_ten = await database.findAll({
            subQuery: false,
            limit: 10,
            raw: true,
        });
        res.status(200).json({recipeData: first_ten});
    }
    catch(error){
        console.log("encountered error: ", error)
    }
})

const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
