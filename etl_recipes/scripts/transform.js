// Transform the recipe data to fit schema
function transformData(data) {
    
    return data.map(recipe => {
        if (!recipe.instructions) {
            recipe.instructions = `No instructions provided. Refer to the source: ${recipe.sourceUrl}`;
        }
        
        return recipe;
    });
}

module.exports = { transformData };