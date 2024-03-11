require('dotenv').config();
const axios = require('axios');
const { Pool } = require('pg');

// Set up the database connection pool
const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASS,
    port: process.env.DB_PORT,
});

// Utility function to perform API requests
async function fetchRecipesFromSource(apiEndpoint) {
    try {
        const response = await axios.get(apiEndpoint, {
            headers: { 'Authorization': `Bearer ${process.env.SPOON_RECIPES_API_KEY}` }
        });
        return response.data; // Assuming the API returns the recipe data in response.data
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
}

// Transform the recipe data to fit your schema
function transformRecipeData(rawData) {
    // This function will depend on the structure of the data you receive
    // Perform operations such as mapping fields, converting units, etc.
    return rawData.map(recipe => {
        return {
            name: recipe.title,
            description: recipe.summary,
            cuisine: recipe.cuisine,
            course: recipe.dishType,
            // ... other fields
        };
    });
}

// Load the transformed data into your database
async function loadRecipesIntoDatabase(transformedData) {
    const client = await pool.connect();
    try {
        await client.query('BEGIN');
        for (const recipe of transformedData) {
            const insertText = 'INSERT INTO Recipes(name, description, cuisine, course) VALUES($1, $2, $3, $4)';
            const insertValues = [recipe.name, recipe.description, recipe.cuisine, recipe.course];
            await client.query(insertText, insertValues);
        }
        await client.query('COMMIT');
    } catch (e) {
        await client.query('ROLLBACK');
        throw e;
    } finally {
        client.release();
    }
}

// Main ETL function
async function runETL() {
    const apiEndpoint = 'https://api.example.com/recipes'; // Replace with the actual API endpoint
    const rawData = await fetchRecipesFromSource(apiEndpoint);
    if (rawData) {
        const transformedData = transformRecipeData(rawData);
        await loadRecipesIntoDatabase(transformedData);
    }
}

runETL().then(() => {
    console.log('ETL process completed.');
}).catch(error => {
    console.error('ETL process failed:', error);
});
