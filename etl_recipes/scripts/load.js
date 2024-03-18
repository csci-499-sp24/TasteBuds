require('dotenv').config();
const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            require: true,  
            rejectUnauthorized: false  // Note: This is for development only
        }
    },
});

// Define Recipe model that mirrors the structure of Recipes table
const Recipe = sequelize.define('Recipe', {
    name: {
        type: DataTypes.STRING,
    },
    description: {
        type: DataTypes.TEXT,
    },
    cuisine: {
        type: DataTypes.STRING,
    },
    course: {
        type: DataTypes.STRING,
    },
    
}, {
    tableName: 'Recipes',  
    timestamps: false,  
});

// Function to load the transformed data into database
async function loadRecipesIntoDatabase(transformedData) {
    try {
        // Authenticate the sequelize connection
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');

        // Insert the transformed data into the database
        await Recipe.bulkCreate(transformedData, { validate: true });
        console.log('Data loaded successfully.');
    } catch (error) {
        console.error('Failed to load data:', error);
    }
}

module.exports = { loadRecipesIntoDatabase };
