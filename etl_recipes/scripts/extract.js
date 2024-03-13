// Utility function to perform API requests
const axios = require('axios');

async function fetchRecipesFromSource(apiEndpoint) {
    try {
        const response = await axios.get(apiEndpoint, {
            headers: { 'Authorization': `Bearer ${process.env.SPOON_RECIPES_API_KEY}` }
        });
        console.log("Data fetched successfully:");
        console.log(response.data);
        return response.data; // Assuming the API returns the recipe data in response.data
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
}

module.exports = { fetchRecipesFromSource };