const { transformData } = require('./transform');
const { extractData } = require('./extract');

// Dynamically fetch and transform recipes for testing
test('Dynamically fetch and transform recipes', async () => {
    // Fetch recipes dynamically
    const fetchedRecipes = await extractData();
  
    // Transform the fetched recipes
    const transformedRecipes = transformData(fetchedRecipes);
  
    // Test: Verify that at least one recipe is transformed
    expect(transformedRecipes.length).toBeGreaterThan(0);
  
    // Further tests on the transformed data can be conducted here
    // For example, verifying the structure of the transformed recipe
    if (transformedRecipes.length > 0) {
        const firstRecipe = transformedRecipes[0].recipe; // Assuming 'recipe' is part of the structure of each transformed item
        expect(firstRecipe).toHaveProperty('title');
        expect(firstRecipe).toHaveProperty('summary');
        // Continue with other property checks as needed
    }
});
