const { transformRecipeData } = require('./transform');
const { fetchRecipesFromSource } = require('./extract');
// const dummyApiResponse = require('./dummyApiResponse'); // Import dummy API response here
const URL = 'https://api.spoonacular.com/recipes/informationBulk?ids=7,11,12,71826,975070&includeIngredients=true&includeinstructions=true&addRecipeInformation=true&includeNutrition=true&apiKey=666e4501970a4b5881385974bb528c58';

let extactedRecipe; // Declare a variable to store the fetched recipe data

beforeAll(async () => {
  // Fetch recipes from the API and store the data in extactedRecipe variable
  extactedRecipe = await fetchRecipesFromSource(URL);
});

test('TEST 1: number of Recipe Response', () => {
  const transformedRecipes = transformRecipeData(extactedRecipe); 
  expect(transformedRecipes).toHaveLength(5);
});


test('TEST 2: Basic Recipe Info', async () => { 
    const transformedRecipes = transformRecipeData(extactedRecipe); 
  // 1st recipe - info for the Recipe table
    const firstRecipe = transformedRecipes[0].recipe;
    expect(firstRecipe.recipe_id).toEqual(7);
    expect(firstRecipe.title).toEqual("Tomato & Anchovies With Bread Crumbs, Basil & Red Onion   Recip");
    expect(firstRecipe.summary).toEqual("Tomato & Anchovies With Bread Crumbs, Basil & Red Onion Recip requires around <b>45 minutes</b> from start to finish. This recipe serves 1. This hor d'oeuvre has <b>142 calories</b>, <b>4g of protein</b>, and <b>9g of fat</b> per serving. For <b>86 cents per serving</b>, this recipe <b>covers 6%</b> of your daily requirements of vitamins and minerals. 31 person were glad they tried this recipe. This recipe from The Kitchn requires anchovy, basil leaves, sherry vinegar, and freshly cracked pepper. It is a good option if you're following a <b>dairy free and pescatarian</b> diet. All things considered, we decided this recipe <b>deserves a spoonacular score of 69%</b>. This score is solid. Similar recipes include <a href=\"https://spoonacular.com/recipes/spaghetti-with-bread-crumbs-and-anchovies-567604\">Spaghetti with Bread Crumbs and Anchovies</a>, <a href=\"https://spoonacular.com/recipes/spaghetti-with-anchovies-olives-and-toasted-bread-crumbs-153152\">Spaghetti with Anchovies, Olives, and Toasted Bread Crumbs</a>, and <a href=\"https://spoonacular.com/recipes/tomato-red-onion-and-basil-bruschetta-27033\">Tomato, Red Onion, and Basil Bruschetta</a>.");
    expect(firstRecipe.preparation_minutes).toEqual(-1);
    expect(firstRecipe.cooking_minutes).toEqual(-1);
    expect(firstRecipe.ready_in_minutes).toEqual(45);
    expect(firstRecipe.servings).toEqual(1);
    expect(firstRecipe.price_per_serving).toEqual(86.03);
    expect(firstRecipe.image).toEqual("https://img.spoonacular.com/recipes/7-556x370.jpg");
    expect(firstRecipe.image_type).toEqual("jpg");
    expect(firstRecipe.very_healthy).toEqual(false);
    expect(firstRecipe.cheap).toEqual(false);
    expect(firstRecipe.weight_watcher_smart_points).toEqual(4);
    expect(firstRecipe.sustainable).toEqual(false);
    expect(firstRecipe.source_url).toEqual("http://www.thekitchn.com/tomato-and-anchovies-with-breadcrumbs-63500");
    expect(firstRecipe.source_name).toEqual("The Kitchn");
});

test('TEST 3: Cuisine', async () => { 
  const transformedRecipes = transformRecipeData(extactedRecipe); 
  const firstRecipe = transformedRecipes[3].cuisine;
  const expectedCuisines = ["Southern"];
  expect(firstRecipe).toEqual(expectedCuisines);
});

test('TEST 4: Diet', async () => { 
  const transformedRecipes = transformRecipeData(extactedRecipe); 
  const firstRecipe = transformedRecipes[0].diet;
  const expectedDiet = ["dairy free", "pescatarian"];
  expect(firstRecipe).toEqual(expect.arrayContaining(expectedDiet));
});

test('TEST 5: Occasions', async () => { 
  const transformedRecipes = transformRecipeData(extactedRecipe); 
  const firstRecipe = transformedRecipes[4].occasions;
  const expectedOccasions = ["fall", "winter"];
  expect(firstRecipe).toEqual(expect.arrayContaining(expectedOccasions));
});

test('TEST 6: INGREDIENTS', async () => { 
  const transformedRecipes = transformRecipeData(extactedRecipe); 
  const firstRecipe = transformedRecipes[0].ingredients;
  const expectedRecipeIngredients = [
    {
      ingredient_id : 15001,
      specialized_name : "whole Boquerones or anchovy fillets",
      us_unit : "fillet",
      us_amount: 3.0,
      metric_unit : "fillet",
      metric_amount: 3.0,
      image: "fresh-anchovies.jpg",
      standard_name: "boquerones",
      aisle: "Seafood",
    },
    {
      ingredient_id : 15001,
      specialized_name : "whole Boquerones or anchovy fillets",
      us_unit : "fillet",
      us_amount: 3.0,
      metric_unit : "fillet",
      metric_amount: 3.0,
      image: "anchovies.jpg",
      standard_name: "boquerones",
      aisle: "Seafood",
    },
    {
      ingredient_id : 2044,
      specialized_name : "basil leaves, sliced",
      us_unit : "",
      us_amount: 2.0,
      metric_unit : "",
      metric_amount: 2.0,
      image:  "fresh-basil.jpg",
      standard_name: "fresh basil",
      aisle: "Produce",
    },
    {
      ingredient_id : 2044,
      specialized_name : "basil leaves, sliced",
      us_unit : "",
      us_amount: 2.0,
      metric_unit : "",
      metric_amount: 2.0,
      image:  "fresh-basil.jpg",
      standard_name: "fresh basil",
      aisle: "Produce",
    },
    {
      ingredient_id : 2044,
      specialized_name : "basil leaves, sliced",
      us_unit : "",
      us_amount: 2.0,
      metric_unit : "",
      metric_amount: 2.0,
      image:  "basil.jpg",
      standard_name: "fresh basil",
      aisle: "Produce",
    },
    {
      ingredient_id : 18079,
      specialized_name : "bread crumbs, toasted if desired",
      us_unit : "Tbsp",
      us_amount:  1.0,
      metric_unit : "Tbsp",
      metric_amount: 1.0,
      image: "breadcrumbs.jpg",
      standard_name: "breadcrumbs",
      aisle: "Pasta and Rice",
    },
    {
      ingredient_id : 1034053,
      specialized_name : "extra virgin olive oil",
      us_unit : "tsps",
      us_amount: 2.0,
      metric_unit : "tsps",
      metric_amount: 2.0,
      image: "olive-oil.jpg",
      standard_name: "extra virgin olive oil",
      aisle: "Oil, Vinegar, Salad Dressing",
    },
    {
      ingredient_id : 1002030,
      specialized_name : "Freshly cracked black pepper, to taste",
      us_unit : "serving",
      us_amount:  1.0,
      metric_unit : "serving",
      metric_amount:  1.0,
      image: "pepper.jpg",
      standard_name: "black pepper",
      aisle: "Spices and Seasonings",
    },
    {
      ingredient_id : 10011282,
      specialized_name : "red onion, thinly sliced",
      us_unit : "",
      us_amount: 0.125,
      metric_unit : "",
      metric_amount: 0.125,
      image: "red-onion.png",
      standard_name: "red onion",
      aisle: "Produce",
    },
    {
      ingredient_id: 1012068,
      specialized_name : "sherry vinegar",
      us_unit : "tsps",
      us_amount: 0.5,
      metric_unit : "tsps",
      metric_amount: 0.5,
      image: "dark-sauce.jpg",
      standard_name: "sherry vinegar",
      aisle: "Oil, Vinegar, Salad Dressing",
    },
    {
      ingredient_id : 11529,
      specialized_name : "2-3 thick slices from a large tomato",
      us_unit :  "slice",
      us_amount:  2.0,
      metric_unit: "slice",
      metric_amount: 2.0,
      image: "tomato.png",
      standard_name: "tomato",
      aisle: "Produce",
    },
  ];
  expect(firstRecipe).toEqual(expect.arrayContaining(expectedRecipeIngredients));
});

test('TEST 7: TIPS ', async () => { 
  const transformedRecipes = transformRecipeData(extactedRecipe); 
  const firstRecipe = transformedRecipes[0].tips;
  const expectedTips = [
    {
      type: "health",
      tip: "If you're following a gluten-free diet, be sure to find a brand of gluten-free breadcrumbs.",
    },
    {
      type: "health",
      tip: "Depending on the recipe, you might be able to substitute almond meal or flaxseed for the breadcrumbs to reduce the carbohydrate content and up the nutrition. For example, almond meal works well for breading, while ground flaxseed can help with binding.",
    },
    {
      type: "health",
      tip: "Lycopene, the chemical in tomatoes that makes them red (and healthy), is fat soluble. This means eating tomatoes with a <a href=\"https://spoonacular.com/academy/fat\">fat</a> &mdash; say, avocado or olive oil?improves the body's ability to absorb the lycopene. Don't hesitate to include some healthy fats in this dish to get the most health benefits from the tomatoes!"
    },
    {
      type: "price",
      tip: "Fresh herbs can be expensive, so don't let them go to waste. If you have any leftovers, you might be able to freeze them. The Kitchn recommends <a href=\"http://www.thekitchn.com/freeze-herbs-in-olive-oil-173648\">freezing hardy herbs</a> like rosemary and thyme in olive oil, while Better Homes and Gardens suggests using <a href=\"http://www.bhg.com/recipes/how-to/food-storage-safety/freezing-herbs/\">freezer bags</a> to freeze basil, chives, mint, and more."
    },

    {
      type: "cooking",
      tip:  "To keep your eyes from stinging and watering while cutting onions, trying popping the onion in the freezer for 15 minutes before you plan to start cooking. Chilling the onion slows the release of the enzyme responsible for teary eyes.",
    },
    {
      type: "cooking",
      tip:  "Don't have fresh herbs? Substitute dried herbs, but use about 1/3 less because dried herbs are more potent than fresh.  ",
    },
    {
      type: "cooking",
      tip: "You should not store your onions with your potatoes because the gases they emit will make each other spoil faster. For more information about selecting and storing onions, check out <a href=\"https://spoonacular.com/academy/onions\">this lesson about onions</a> in the academy.",
    },
    {
      type: "cooking",
      tip:  "Just a head's up: tomatoes shouldn't be refrigerated! They will lose their flavor and probably get mushy too. For more on selecting and storing tomatoes and other vegetables, check out the <a href=\"https://spoonacular.com/academy#Ingredients\">academy</a>."},
    {
      type: "cooking",
      tip: "Fresh herbs should be added toward the end of the cooking process &mdash; even at the very last minute?especially delicate herbs like cilantro, basil, and dill. Hardier herbs like bay leaves, rosemary, and thyme can be added earlier.",
    },
    {
      type: "cooking",
      tip: "Extra-virgin olive oil is the least refined type of olive oil and therefore contains more of the beneficial compounds that get lost during processing. However, its minimal processing could also mean it has a lower smoke point than other olive oils. Once an oil starts to smoke, it begins to break down, producing a bad flavor and potentially harmful compounds. Unfortunately, the smoke point of an oil depends on so many factors that it is hard to say what the smoke point of an oil really is. For extra-virgin olive oil, it could be anywhere between 200-400 degrees Fahrenheit. Most people recommend using extra-virgin olive oil to add flavor to a finished dish or in cold dishes to be on the safe side. More refined olive oils, canola oil,  coconut oil, and <a href=\"https://spoonacular.com/academy/butter\">clarified butter/ghee</a> are better options for high temperature cooking.",
    },
    {
      type: "green",
      tip:   "Tomatoes, especially cherry tomatoes, should be bought <a href=\"http://www.ewg.org/foodnews/list.php\">organic</a> when possible. Moreover, buying tomatoes from your <a href=\"http://www.localharvest.org/farmers-markets/\">local farmers' market</a> when they are in season is going to make your dish much, much tastier, not to mention more eco-friendly. In fact, we recommend using canned &mdash; or better yet, jarred?tomato products when tomatoes aren't in season instead of buying imported or greenhouse-grown tomatoes."
    },    
  ];
  expect(firstRecipe).toEqual(expect.arrayContaining(expectedTips));
});

test('TEST 9: NUTRITION - RECIPE NUTRIENTS', async () => { 
  const transformedRecipes = transformRecipeData(extactedRecipe); 
  const firstRecipe = transformedRecipes[1].recipeNutrients;
  const expectedrecipeNutrients = [
    {
      name: "Calories",
      amount:  581.03,
      unit: "kcal",
      percentOfDailyNeeds: 29.05,
    },
    {
      name: "Fat",
      amount: 16.29,
      unit: "g",
      percentOfDailyNeeds:  25.07,
    },
    {
      name: "Saturated Fat",
      amount: 2.9,
      unit: "g",
      percentOfDailyNeeds:  18.13,
    },
    {
      name: "Carbohydrates",
      amount:  88.56,
      unit: "g",
      percentOfDailyNeeds: 29.52,
    },
    {
      name: "Net Carbohydrates",
      amount:  83.6,
      unit: "g",
      percentOfDailyNeeds: 30.4,
    },
    {
      name: "Sugar",
      amount: 3.61,
      unit: "g",
      percentOfDailyNeeds: 4.01,
    },
    {
      name: "Cholesterol",
      amount: 8.67,
      unit: "mg",
      percentOfDailyNeeds:  2.89,
    },
    {
      name: "Sodium",
      amount: 107.69,
      unit: "mg",
      percentOfDailyNeeds: 4.68,
    },
    {
      name: "Protein",
      amount: 20.5,
      unit: "g",
      percentOfDailyNeeds:  41.0,
    },
    {
      name: "Selenium",
      amount: 74.23,
      unit: "µg",
      percentOfDailyNeeds: 106.04,
    },
    {
      name: "Manganese",
      amount: 1.74,
      unit: "mg",
      percentOfDailyNeeds: 86.85,
    },
    {
      name: "Phosphorus",
      amount: 347.64,
      unit: "mg",
      percentOfDailyNeeds: 34.76,
    },
    {
      name: "Copper",
      amount: 0.64,
      unit: "mg",
      percentOfDailyNeeds: 31.98,
    },
    {
      name: "Magnesium",
      amount: 94.13,
      unit: "mg",
      percentOfDailyNeeds:23.53,
    },
    {
      name: "Fiber",
      amount: 4.96,
      unit: "g",
      percentOfDailyNeeds: 19.83,
    },
    {
      name: "Zinc",
      amount: 2.43,
      unit: "mg",
      percentOfDailyNeeds: 16.22,
    },
    {
      name: "Vitamin B6",
      amount: 0.31,
      unit: "mg",
      percentOfDailyNeeds: 15.34,
    },
    {
      name: "Calcium",
      amount: 136.43,
      unit: "mg",
      percentOfDailyNeeds: 13.64,
    },
    {
      name: "Iron",
      amount:  2.14,
      unit: "mg",
      percentOfDailyNeeds: 11.89,
    },
    {
      name: "Vitamin B1",
      amount: 0.18,
      unit: "mg",
      percentOfDailyNeeds:11.71,
    },
    {
      name: "Vitamin B3",
      amount: 2.17,
      unit: "mg",
      percentOfDailyNeeds: 10.83,
    },
    {
      name: "Potassium",
      amount: 355.42,
      unit: "mg",
      percentOfDailyNeeds: 10.15,
    },
   {
      name: "Folate",
      amount: 39.61,
      unit: "µg",
      percentOfDailyNeeds: 9.9,
    },
    {
      name: "Vitamin B2",
      amount: 0.13,
      unit: "mg",
      percentOfDailyNeeds: 7.68,
    },
    {
      name: "Vitamin B5",
      amount: 0.65,
      unit: "mg",
      percentOfDailyNeeds: 6.5,
    },
    {
      name: "Vitamin E",
      amount: 0.28,
      unit: "mg",
      percentOfDailyNeeds: 1.86,
    },
    {
      name: "Vitamin B12",
      amount: 0.09,
      unit: "µg",
      percentOfDailyNeeds: 1.56,
    },
    {
      name: "Vitamin C",
      amount: 1.18,
      unit: "mg",
      percentOfDailyNeeds: 1.43,
    },
  ];
  expect(firstRecipe).toEqual(expect.arrayContaining(expectedrecipeNutrients));
});

test('TEST 10: NUTRITION -  RECIPE FLAVONOIDS', async () => { 
  const transformedRecipes = transformRecipeData(extactedRecipe); 
  const firstRecipe = transformedRecipes[0].flavonoids;
  const expectedflavonoids = [
    {
      name: "Cyanidin",
      amount:  0.0,
      unit: "mg",
    },
    {
      name: "Petunidin",
      amount:  0.0,
      unit: "mg",
    },
    {
      name: "Delphinidin",
      amount:  0.0,
      unit: "mg",
    },
    {
      name: "Malvidin",
      amount:  0.0,
      unit: "mg",
    },
    {
      name: "Pelargonidin",
      amount:  0.0,
      unit: "mg",
    },
    {
      name: "Peonidin",
      amount:  0.0,
      unit: "mg",
    },
    {
      name: "Catechin",
      amount: 0.0,
      unit: "mg",
    },
    {
      name: "Epigallocatechin",
      amount: 0.0,
      unit: "mg",
    },
    {
      name: "Epicatechin",
      amount: 0.0,
      unit: "mg",
    },
    {
      name: "Epicatechin 3-gallate",
      amount: 0.0,
      unit: "mg",
    },
    {
      name: "Epigallocatechin 3-gallate",
      amount: 0.0,
      unit: "mg",
    },
    {
      name: "Theaflavin",
      amount: 0.0,
      unit: "",
    },
    {
      name: "Thearubigins",
      amount: 0.0,
      unit: "",
    },
    {
      name: "Eriodictyol",
      amount: 0.0,
      unit: "",
    },
    {
      name: "Hesperetin",
      amount: 0.0,
      unit: "mg",
    },
    {
      name: "Naringenin",
      amount: 0.37,
      unit: "mg",
    },
    {
      name: "Apigenin",
      amount:  0.01,
      unit: "mg",
    },
    {
      name: "Luteolin",
      amount: 0.01,
      unit: "mg",
    },
    {
      name: "Isorhamnetin",
      amount: 0.69,
      unit: "mg",
    },
    {
      name: "Kaempferol",
      amount:  0.14,
      unit: "mg",
    },
    {
      name: "Myricetin",
      amount: 0.07,
      unit: "mg",
    },
    {
      name: "Quercetin",
      amount: 3.1,
      unit: "mg",
    },
    {
      name: "Theaflavin-3,3'-digallate",
      amount: 0.0,
      unit: "",
    },
    {
      name: "Theaflavin-3'-gallate",
      amount: 0.0,
      unit: "",
    },
    {
      name: "Theaflavin-3-gallate",
      amount: 0.0,
      unit: "",
    },
    {
      name: "Gallocatechin",
      amount: 0.0,
      unit: "mg",
    },
  ];
  expect(firstRecipe).toEqual(expect.arrayContaining(expectedflavonoids));
});

test('TEST 11: NUTRITION -  RECIPE PROPERTIES', async () => { 
  const transformedRecipes = transformRecipeData(extactedRecipe); 
  const firstRecipe = transformedRecipes[0].properties;

  const expectedProperties = [
    {
      name: "Glycemic Index",
      amount: 237.0,
      unit: "",
    },
    {
      name: "Glycemic Load",
      amount:  0.86,
      unit: "",
    },
    {
      name:  "Inflammation Score",
      amount: -5.0,
      unit: "",
    },
    {
      name: "Nutrition Score",
      amount:  7.956086956521739,
      unit: "%",
    },
  ];
  expect(firstRecipe).toEqual(expect.arrayContaining(expectedProperties));
});

test('TEST 12: NUTRITION - RECIPE CALORIC BREAKDOWN', async () => { 
  const transformedRecipes = transformRecipeData(extactedRecipe);
  const firstRecipe = transformedRecipes[0].recipeCaloricBreakdown;
  const expectedrecipeCaloricBreakdown = [
    {
      percentProtein: 17.39,
      percentFat:  55.67,
      percentCarbs: 26.94,
    }
  ];

  expect(firstRecipe).toEqual(expect.arrayContaining(expectedrecipeCaloricBreakdown));
});

test('TEST 13: NUTRITION - RECIPE WEIGHT PER SERVING', async () => { 
  const transformedRecipes = transformRecipeData(extactedRecipe);
  const firstRecipe = transformedRecipes[0].recipeWeightPerServing;
  const expectedRecipeWeightPerServing = [{
    amount: 114,
    unit: "g"
  }];
  expect(firstRecipe).toEqual(expect.arrayContaining(expectedRecipeWeightPerServing));
});

test('TEST 14: INSTRUTIONS', async () => { 
  const transformedRecipes = transformRecipeData(extactedRecipe);
  const firstRecipe = transformedRecipes[2].instructions;
  const analyzedInstructions = [
    [
      {
        number: 1,
        step: "Preheat broiler.",
        name: "",
        ingredients: [],
        equipments: [
          {
            id: 405914,
            name: "broiler",
            image: "https://spoonacular.com/cdn/equipment_100x100/oven.jpg",
          },
        ],
        length: {},
      },
      {
        number: 2,
        step: "Broil bell peppers on a broiler pan about 5 inches from heat, turning occasionally with tongs, until skins are blackened, 15 to 20 minutes.",
        name: "",
        ingredients: [
          {
            id: 10211821,
            name: "bell pepper",
            image: "https://spoonacular.com/cdn/ingredients_100x100/bell-pepper-orange.png",
          },
        ],
        equipments: [
          {
            id: 404698,
            name: "broiler pan",
            image: "https://spoonacular.com/cdn/equipment_100x100/broiler-pan.jpg",
          },
          {
            id: 404641,
            name: "tongs",
            image: "https://spoonacular.com/cdn/equipment_100x100/tongs.jpg",
          },
        ],
        length: {
            number: 15,
            unit: "minutes",
          },
      }, 
      {
        number: 3,
        step: "Transfer to a large bowl and cover bowl tightly with plastic wrap, then let steam 20 minutes.",
        name: "",
        ingredients: [
          {
            id: 10018364,
            name: "wrap",
            image: "https://spoonacular.com/cdn/ingredients_100x100/flour-tortilla.jpg",
          },
        ],
        equipments: [
          {
            id: 404730,
            name: "plastic wrap",
            image: "https://spoonacular.com/cdn/equipment_100x100/plastic-wrap.jpg",
          },
          {
            id: 404783,
            name: "bowl",
            image: "https://spoonacular.com/cdn/equipment_100x100/bowl.jpg",
          },
        ],
        length:{
            number: 20,
            unit: "minutes",
        },
      },
      {
        number: 4,
        step: "When peppers are cool enough to handle, peel them, reserving all juices in bowl, and discard stems and seeds.",
        name: "",
        ingredients: [
          {
            id: 10111333,
            name: "peppers",
            image:  "https://spoonacular.com/cdn/ingredients_100x100/green-pepper.jpg",
          },
          {
            id: 93818,
            name: "seeds",
            image: "https://spoonacular.com/cdn/ingredients_100x100/sunflower-seeds.jpg",
          },
        ],
        equipments: [
          {
            id: 404783,
            name: "bowl",
            image: "https://spoonacular.com/cdn/equipment_100x100/bowl.jpg",
          },     
        ],
        length: {},
      },
      {
        number: 5,
        step: "Cut peppers lengthwise into 1/4-inch-wide strips.",
        name: "",
        ingredients: [
          {
            id: 10111333,
            name: "peppers",
            image: "https://spoonacular.com/cdn/ingredients_100x100/green-pepper.jpg",
          },
        ],
        equipments:[],
        length: {},
      },
      {
        number: 6,
        step: "Pour pepper juices through a sieve into another bowl, then add vinegar and sugar to juices, stirring until sugar is dissolved, then stir in peppers. Marinate peppers at room temperature, stirring occasionally, at least 2 hours.",
        name: "",
        ingredients: [
          {
            id: 10111333,
            name: "peppers",
            image: "https://spoonacular.com/cdn/ingredients_100x100/green-pepper.jpg"
          },
          {
            id: 2053,
            name: "vinegar",
            image: "https://spoonacular.com/cdn/ingredients_100x100/vinegar-(white).jpg",
          },
          {
            id: 1002030,
            name: "pepper",
            image: "https://spoonacular.com/cdn/ingredients_100x100/pepper.jpg",
          },
          {
            id: 19335,
            name: "sugar",
            image:  "https://spoonacular.com/cdn/ingredients_100x100/sugar-in-bowl.png",
          },
        ],
        equipments: [
          {
            id: 405600,
            name: "sieve",
            image: "https://spoonacular.com/cdn/equipment_100x100/strainer.png",
          },
          {
              id: 404783,
              name: "bowl",
              image: "https://spoonacular.com/cdn/equipment_100x100/bowl.jpg",
          },
        ],
        length: {
            number: 120,
            unit: "minutes",
          },
      },
      {
        number: 7,
        step: "Spoon peppers and juices into a shallow bowl and arrange anchovy strips decoratively on top.",
        name: "",
        ingredients: [
          {
            id: 15001, 
            name: "anchovies",
            image:  "https://spoonacular.com/cdn/ingredients_100x100/anchovies.jpg",
          },
          {
            id: 10111333,
            name: "peppers",
            image: "https://spoonacular.com/cdn/ingredients_100x100/green-pepper.jpg",
          },
        ],
        equipments:[
          {
            id: 404783,
            name: "bowl",
            image: "https://spoonacular.com/cdn/equipment_100x100/bowl.jpg",
          },
        ],
        length:{},
      },
    ],
    [
      {
        name: "Cooks' note",
        step: "Peppers can marinate (without anchovies), covered and chilled, up to 3 days. Bring to room temperature before serving.",
        number: 1,
        ingredients: [
          {
            id: 15001,
            name: "anchovies",
            image:  "https://spoonacular.com/cdn/ingredients_100x100/anchovies.jpg",
          },
          {
              id: 10111333,
              name: "peppers",
              image: "https://spoonacular.com/cdn/ingredients_100x100/green-pepper.jpg",
          },
        ],
        equipments: [],
        length: {},
      },

    ],
  ];

  expect(firstRecipe).toEqual(analyzedInstructions);

});

test('TEST 15: NUTRITION -  RECIPE INGREDIENTS NUTRIENTS', async () => { 
  const transformedRecipes = transformRecipeData(extactedRecipe);
  const firstRecipe = transformedRecipes[0].recipeIngredientsNutrients[0];
  const expectedrecipeIngredientsNutrients = 
    {
      id: 15001,
      amount: 3.0,
      name: "anchovy",
      unit: "fillet",
      nutrients: [
        {amount: 45.96, name: "Potassium", percentOfDailyNeeds: 7.62, unit: "mg"},
        {amount:0.07,name:"Vitamin E", percentOfDailyNeeds: 10.7, unit:"mg"},
        {amount:2.44,name:"Protein", percentOfDailyNeeds:13.81, unit:"g"},
        {amount:20.88,name:"Phosphorus",percentOfDailyNeeds:7.65, unit:"mg"},
        {amount: 1.68, name: "Vitamin B3", percentOfDailyNeeds: 21.91, unit: "mg"},
        {amount:0.0,name:"Fiber", percentOfDailyNeeds: 5.53, unit:"g"},
        {amount:0.2, name:"Poly Unsaturated Fat",percentOfDailyNeeds:0, unit:"g"},
        {amount: 0.0, name: "Folic Acid", percentOfDailyNeeds: 0.0, unit: "µg"},
        {amount:0.08, name: "Vitamin B5", percentOfDailyNeeds: 2.8, unit:"mg"},
        {amount: 17.64, name: "Calcium", percentOfDailyNeeds: 6.56, unit: "mg"},
        {amount: 0.0, name: "Caffeine", percentOfDailyNeeds: 0.0, unit: "mg"},
        {amount: 0.0, name: "Sugar", percentOfDailyNeeds: 2.92, unit: "g"},
        {amount:0.14,name:"Mono Unsaturated Fat",percentOfDailyNeeds:0.0,unit: "g"},
        {amount: 15.72, name: "Calories", percentOfDailyNeeds:  7.9, unit: "kcal"},
        {amount:6.0,name:"Vitamin A",percentOfDailyNeeds: 10.94, unit:"IU"},
        {amount:0.0, name:"Vitamin C", percentOfDailyNeeds:10.56, unit:"mg"},
        {amount:0.15, name:"Saturated Fat", percentOfDailyNeeds:9.72, unit:"g"},
        {amount:0.39,name: "Iron", percentOfDailyNeeds: 8.63, unit:"mg"},
        {amount:0.07, name:"Vitamin B12",percentOfDailyNeeds:3.06, unit:"µg"},
        {amount: 0.01,name: "Vitamin B1", percentOfDailyNeeds: 9.12, unit: "mg"},
        {amount: 7.2,name:"Cholesterol", percentOfDailyNeeds:4.8, unit:"mg"},
        {amount:0.0, name: "Alcohol", percentOfDailyNeeds:0.0, unit:"g"},
        {amount:0.0,name: "Net Carbohydrates", percentOfDailyNeeds: 3.39, unit:"g"},
        {amount:0.02, name: "Vitamin B6", percentOfDailyNeeds: 5.44, unit:"mg"},
        {amount:0.0,name:"Carbohydrates",percentOfDailyNeeds:3.57, unit:"g"},
        {amount:0.01,name:"Manganese",percentOfDailyNeeds:11.01, unit:"mg"},
        {amount:0.58,name:"Fat",percentOfDailyNeeds:15.12, unit:"g"},
        {amount:0.01,name:"Vitamin K",percentOfDailyNeeds:15.83, unit:"µg"},
        {amount: 0.03, name: "Vitamin B2", percentOfDailyNeeds: 6.89, unit: "mg"},
        {amount:1.08, name: "Folate", percentOfDailyNeeds: 6.17, unit:"µg"},
        {amount:4.92, name: "Magnesium", percentOfDailyNeeds: 5.69, unit:"mg"},
        {amount:0.03,name: "Copper", percentOfDailyNeeds:6.06, unit:"mg"},
        {amount:12.48, name: "Sodium", percentOfDailyNeeds: 4.43, unit:"mg"},
        {amount: 0.21, name: "Zinc", percentOfDailyNeeds: 4.59, unit:"mg"},
        {amount: 4.38, name:  "Selenium",  percentOfDailyNeeds: 16.23, unit: "µg"},
        {amount:0.0, name: "Lycopene", percentOfDailyNeeds: 0.0, unit:"µg",},
      ],
  };

  expect(firstRecipe).toEqual((expectedrecipeIngredientsNutrients));
});


// test('TEST 16: INSTRUTIONS - INGREDIENTS', () => {
//   // Call the transformation function
//   const transformedRecipes = transformRecipeData(dummyApiResponse);

//   // 1st recipe - info for the Recipe table
//   const firstRecipe = transformedRecipes[2].instructionsIngredients;

//   const expectedinstructionsIngredients = [
//     [
//       [], // 1
//       [
//         {
//           id: 10211821,
//           name: "bell pepper",
//           image: "bell-pepper-orange.png",
//         },
//       ],
//       [
//         {
//           id: 10018364,
//           name: "wrap",
//           image: "flour-tortilla.jpg"
//         },
//       ],
//       [
//         {
//           id: 10111333,
//           name: "peppers",
//           image: "green-pepper.jpg",
//         },
//         {
//           id: 93818,
//           name: "seeds",
//           image: "sunflower-seeds.jpg"
//         },
//       ],
//       [
//         {
//           id: 10111333,
//           name: "peppers",
//           image: "green-pepper.jpg",
//         },
//       ],
//       [
//         {
//           id: 10111333,
//           name: "peppers",
//           image: "green-pepper.jpg",
//         },
//         {
//           id: 2053,
//           name: "vinegar",
//           image: "vinegar-(white).jpg",
//         },
//         {
//           id: 1002030,
//           name: "pepper",
//           image: "pepper.jpg",
//         },
//         {
//           id: 19335,
//           name: "sugar",
//           image: "sugar-in-bowl.png",
//         },
//       ],
//       [
//         {
//           id: 15001, 
//           name: "anchovies",
//           image: "anchovies.jpg",
//         },
//         {
//           id: 10111333,
//           name: "peppers",
//           image: "green-pepper.jpg"
//         },
//       ],
//     ],
//     [
//       [
//         {
//           id: 15001,
//           name: "anchovies",
//           image: "anchovies.jpg",
//         },
//         {
//             id: 10111333,
//             name: "peppers",
//             image: "green-pepper.jpg",
//         },
//       ]
//     ]
//   ];
//   expect(firstRecipe).toEqual(expect.arrayContaining(expectedinstructionsIngredients));
// });

// test('TEST 17: INSTRUTIONS - EQUIPMENT', () => {
//   // Call the transformation function
//   const transformedRecipes = transformRecipeData(dummyApiResponse);

//   // 1st recipe - info for the Recipe table
//   const firstRecipe = transformedRecipes[2].equipment;

//   const expectedEquipment = [
//     [
//       [
//         {
//           id: 405914,
//           name: "broiler",
//           image: "oven.jpg",
//         },
//       ],
//       [
//         {
//           id: 404698,
//           name: "broiler pan",
//           image: "broiler-pan.jpg",
//         },
//         {
//           id: 404641,
//           name: "tongs",
//           image: "tongs.jpg"
//         },
//       ],
//       [
//         {
//           id: 404730,
//           name: "plastic wrap",
//           image: "plastic-wrap.jpg",
//         },
//         {
//           id: 404783,
//           name: "bowl",
//           image: "bowl.jpg",
//         },
//       ],
//       [
//         {
//           id: 404783,
//           name: "bowl",
//           image: "bowl.jpg"
//         },     
//       ],
//       [],
//       [
//         {
//           id: 405600,
//           name: "sieve",
//           image: "strainer.png"
//         },
//         {
//             id: 404783,
//             name: "bowl",
//             image: "bowl.jpg"
//         },
//       ],
//       [
//         {
//           id: 404783,
//           name: "bowl",
//           image: "bowl.jpg"
//         },
//       ],
//     ],
//     [
//       [],
//     ],
//   ];
//   expect(firstRecipe).toEqual(expect.arrayContaining(expectedEquipment));
// });

// test('TEST 18: INSTRUTIONS - INSTRUCATION-LENGTH', () => {
//   // Call the transformation function
//   const transformedRecipes = transformRecipeData(dummyApiResponse);

//   // 1st recipe - info for the Recipe table
//   const firstRecipe = transformedRecipes[2].instructionLength;

//   const expectedinstructionLength = [
//     [
//       [],
//       [
//         {
//           number: 15,
//           unit: "minutes",
//         },
//       ],
//       [
//         {
//           number: 20,
//           unit: "minutes",
//         },
//       ], [],[],
//       [
//         {
//           number: 120,
//           unit: "minutes",
//         },
//       ],[],
//     ],
//     [
//       []
//     ],
//   ];

//   expect(firstRecipe).toEqual(expect.arrayContaining(expectedinstructionLength));
// });
