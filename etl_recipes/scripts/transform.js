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

module.exports = { transformRecipeData };