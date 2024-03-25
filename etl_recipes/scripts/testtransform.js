const { transformRecipeData } = require('./transform');
const dummyApiResponse = require('./dummyApiResponse'); 

test('TEST 1: number of Recipe Response', () => {
  // Call the transformation function
  const transformedRecipes = transformRecipeData(dummyApiResponse);
  // There are two recipes in the dummyApiResponse
  expect(transformedRecipes).toHaveLength(2);
});

test('TEST 2: Basic Recipe Info', () => {
    // Call the transformation function
    const transformedRecipes = transformRecipeData(dummyApiResponse);

    // 1st recipe - info for the Recipe table
    const firstRecipe = transformedRecipes[0].recipe;
    expect(firstRecipe.recipe_id).toEqual(3);
    expect(firstRecipe.title).toEqual("Carrots, Cauliflower And Anchovies");
    expect(firstRecipe.summary).toEqual("Carrots, Cauliflower And Anchovies might be just the main course you are searching for. For <b>$2.8 per serving</b>, this recipe <b>covers 29%</b> of your daily requirements of vitamins and minerals. This recipe serves 1. Watching your figure? This dairy free and pescatarian recipe has <b>943 calories</b>, <b>17g of protein</b>, and <b>73g of fat</b> per serving. A mixture of sale e pepe, quarter of a cauliflower, extra virgin olive oil, and a handful of other ingredients are all it takes to make this recipe so flavorful. This recipe is liked by 1 foodies and cooks. From preparation to the plate, this recipe takes around <b>45 minutes</b>. It is brought to you by saladpride.blogspot.com. With a spoonacular <b>score of 83%</b>, this dish is amazing. If you like this recipe, you might also like recipes such as <a href=\"https://spoonacular.com/recipes/carrots-cauliflower-and-anchovies-1228191\">Carrots, Cauliflower And Anchovies</a>, <a href=\"https://spoonacular.com/recipes/cauliflower-anchovies-and-tomatoes-23\">Cauliflower, Anchovies and Tomatoes</a>, and <a href=\"https://spoonacular.com/recipes/orecchiette-with-cauliflower-anchovies-and-pistachios-1228731\">Orecchiette with Cauliflower, Anchovies and Pistachios</a>.");
    expect(firstRecipe.preparation_time).toEqual(-1);
    expect(firstRecipe.cooking_time).toEqual(-1);
    expect(firstRecipe.ready_in_minutes).toEqual(45);
    expect(firstRecipe.servings).toEqual(1);
    expect(firstRecipe.price_per_serving).toEqual(279.64);
    expect(firstRecipe.image).toEqual("https://spoonacular.com/recipeImages/3-556x370.jpg");
    expect(firstRecipe.image_type).toEqual("jpg");
    expect(firstRecipe.very_healthy).toEqual(false);
    expect(firstRecipe.cheap).toEqual(false);
    expect(firstRecipe.weight_watcher_smart).toEqual(28);
    expect(firstRecipe.sustainable).toEqual(false);
});
