const { transformRecipeData } = require('./transform');
const dummyApiResponse = require('./dummyApiResponse'); 

test('TEST 1: number of Recipe Response', () => {
  // Call the transformation function
  const transformedRecipes = transformRecipeData(dummyApiResponse);
  // There are two recipes in the dummyApiResponse
  expect(transformedRecipes).toHaveLength(3);
});

test('TEST 2: Basic Recipe Info', () => {
    // Call the transformation function
    const transformedRecipes = transformRecipeData(dummyApiResponse);

    // 1st recipe - info for the Recipe table
    const firstRecipe = transformedRecipes[0].recipe;
    expect(firstRecipe.recipe_id).toEqual(3);
    expect(firstRecipe.title).toEqual("Carrots, Cauliflower And Anchovies");
    expect(firstRecipe.summary).toEqual("Carrots, Cauliflower And Anchovies might be just the main course you are searching for. For <b>$2.8 per serving</b>, this recipe <b>covers 29%</b> of your daily requirements of vitamins and minerals. This recipe serves 1. Watching your figure? This dairy free and pescatarian recipe has <b>943 calories</b>, <b>17g of protein</b>, and <b>73g of fat</b> per serving. A mixture of sale e pepe, quarter of a cauliflower, extra virgin olive oil, and a handful of other ingredients are all it takes to make this recipe so flavorful. This recipe is liked by 1 foodies and cooks. From preparation to the plate, this recipe takes around <b>45 minutes</b>. It is brought to you by saladpride.blogspot.com. With a spoonacular <b>score of 83%</b>, this dish is amazing. If you like this recipe, you might also like recipes such as <a href=\"https://spoonacular.com/recipes/carrots-cauliflower-and-anchovies-1228191\">Carrots, Cauliflower And Anchovies</a>, <a href=\"https://spoonacular.com/recipes/cauliflower-anchovies-and-tomatoes-23\">Cauliflower, Anchovies and Tomatoes</a>, and <a href=\"https://spoonacular.com/recipes/orecchiette-with-cauliflower-anchovies-and-pistachios-1228731\">Orecchiette with Cauliflower, Anchovies and Pistachios</a>.");
    expect(firstRecipe.preparation_minutes).toEqual(-1);
    expect(firstRecipe.cooking_minutes).toEqual(-1);
    expect(firstRecipe.ready_in_minutes).toEqual(45);
    expect(firstRecipe.servings).toEqual(1);
    expect(firstRecipe.price_per_serving).toEqual(279.64);
    expect(firstRecipe.image).toEqual("https://spoonacular.com/recipeImages/3-556x370.jpg");
    expect(firstRecipe.image_type).toEqual("jpg");
    expect(firstRecipe.very_healthy).toEqual(false);
    expect(firstRecipe.cheap).toEqual(false);
    expect(firstRecipe.weight_watcher_smart_points).toEqual(28);
    expect(firstRecipe.sustainable).toEqual(false);
    expect(firstRecipe.source_url).toEqual("http://saladpride.blogspot.com/2011/06/carrots-cauliflower-and-anchovies.html");
    expect(firstRecipe.source_name).toEqual("blogspot.com");
});

test('TEST 3: Cuisine', () => {
  // Call the transformation function
  const transformedRecipes = transformRecipeData(dummyApiResponse);
  const firstRecipe = transformedRecipes[0].cuisine;
  const expectedCuisines = [];
  expect(firstRecipe).toEqual(expectedCuisines);
});

test('TEST 4: Diet', () => {
  const transformedRecipes = transformRecipeData(dummyApiResponse);
  const firstRecipe = transformedRecipes[0].diet;
  const expectedDiet = [ "dairy free", "pescatarian"];
  expect(firstRecipe).toEqual(expect.arrayContaining(expectedDiet));
});

test('TEST 5: Occasions', () => {
  const transformedRecipes = transformRecipeData(dummyApiResponse);
  const firstRecipe = transformedRecipes[0].occasions;
  const expectedOccasions = [];
  expect(firstRecipe).toEqual(expect.arrayContaining(expectedOccasions));
});

test('TEST 6: INGREDIENTS', () => {
  const transformedRecipes = transformRecipeData(dummyApiResponse);
  const firstRecipe = transformedRecipes[0].ingredients;
  const expectedRecipeIngredients = [
    {
      ingredient_id : 93647,
      specialized_name : "Sale e pepe",
      us_unit : "serving",
      us_amount: 1.0,
      metric_unit : "serving",
      metric_amount: 1.0,
      image: "pastina.jpg",
      standard_name: "pastina",
      aisle: "Pasta and Rice",
    },
    {
      ingredient_id : 12061,
      specialized_name : "almonds",
      us_unit : "handful",
      us_amount: 1.0,
      metric_unit : "handful",
      metric_amount: 1.0,
      image: "almonds.jpg",
      standard_name: "almonds",
      aisle: "Nuts",
    },
    {
      ingredient_id : 15001,
      specialized_name : "Anchovies (or Sardines)",
      us_unit : "",
      us_amount:  0.8,
      metric_unit : "",
      metric_amount:  0.8,
      image: "anchovies.jpg",
      standard_name: "boquerones",
      aisle: "Seafood",
    },
    {
      ingredient_id : 15001,
      specialized_name : "Anchovies (or Sardines)",
      us_unit : "",
      us_amount:  0.8,
      metric_unit : "",
      metric_amount:  0.8,
      image: "anchovies.jpg",
      standard_name: "boquerones",
      aisle: "Seafood",
    },
    {
      ingredient_id : 11124,
      specialized_name : "raw pealed carrots",
      us_unit : "",
      us_amount:  2.0,
      metric_unit : "",
      metric_amount:  2.0,
      image: "sliced-carrot.png",
      standard_name: "carrot",
      aisle: "Produce",
    },
    {
      ingredient_id : 11135,
      specialized_name : "A quarter of a raw cauliflower",
      us_unit : "serving",
      us_amount:  1.0,
      metric_unit : "serving",
      metric_amount:  1.0,
      image: "cauliflower.jpg",
      standard_name: "cauliflower",
      aisle: "Produce",
    },
    {
      ingredient_id : 1034053,
      specialized_name : "Extra virgin olive oil",
      us_unit : "serving",
      us_amount:  1.0,
      metric_unit : "serving",
      metric_amount:  1.0,
      image: "olive-oil.jpg",
      standard_name: "extra virgin olive oil",
      aisle: "Oil, Vinegar, Salad Dressing",
    },
    {
      ingredient_id : 1034053,
      specialized_name : "Dressing: Extra virgin olive oil, Salt and pepper, Lemon juice",
      us_unit : "Tbs",
      us_amount:  3.0,
      metric_unit : "Tbs",
      metric_amount:  3.0,
      image: "olive-oil.jpg",
      standard_name: "extra virgin olive oil",
      aisle: "Oil, Vinegar, Salad Dressing",
    },
    {
      ingredient_id : 9152,
      specialized_name : "Lemon juice",
      us_unit : "Tbs",
      us_amount:  3.0,
      metric_unit : "Tbs",
      metric_amount:  3.0,
      image: "lemon-juice.jpg",
      standard_name: "lemon juice",
      aisle: "Produce",
    },
    {
      ingredient_id : 11959,
      specialized_name : "Rocket (arugula)",
      us_unit : "oz",
      us_amount:  1.764,
      metric_unit : "gr",
      metric_amount:  50.0,
      image: "arugula-or-rocket-salad.jpg",
      standard_name: "arugula",
      aisle: "Produce",
    },
    {
      ingredient_id : 1102047,
      specialized_name : "Salt and pepper",
      us_unit : "serving",
      us_amount:  1.0,
      metric_unit : "serving",
      metric_amount:  1.0,
          image: "salt-and-pepper.jpg",
      standard_name: "salt and pepper",
      aisle: "Spices and Seasonings",
    },
  ];
  expect(firstRecipe).toEqual(expect.arrayContaining(expectedRecipeIngredients));
});

test('TEST 8: TIPS ', () => {
  const transformedRecipes = transformRecipeData(dummyApiResponse);
  const firstRecipe = transformedRecipes[0].tips;
  const expectedTips = [
    {
      type: "health",
      tip: "You can easily replace regular noodles with whole wheat noodles to add a little extra fiber, protein, vitamins, and minerals to this dish. Just don't make the mistake of assuming that because the pasta is whole wheat, you can eat as much as you want. The calories and the <a href=\"http://www.quickanddirtytips.com/health-fitness/healthy-eating/truth-about-whole-grains?page=all\">effect on your blood sugar</a> is not so drastically different! ",
    },
    {
      type: "cooking",
      tip: "The best method for cooking pasta is pretty controversial, but most sources seem to reach a consensus. Check out our lesson on <a href=\"https://spoonacular.com/academy/how-to-cook-pasta\">how to cook pasta</a> in the academy.",
    },
    {
      type: "cooking",
      tip: "The best method for cooking pasta is pretty controversial, but most sources seem to reach a consensus. Check out our lesson on <a href=\"https://spoonacular.com/academy/how-to-cook-pasta\">how to cook pasta</a> in the academy.",
    },
    {
      type: "cooking",
      tip: "The average fresh lemon contains between 2 to 3 tablespoons of lemon juice (just in case you are substituting bottled lemon juice)."
    },
    {
      type: "cooking",
      tip: "Carrots can be stored in the fridge for 2 to 3 weeks. The starch in the carrots will turn to sugar over time, but this is not a problem, they'll just taste sweeter. The academy lesson about <a href=\"https://spoonacular.com/academy/carrots\">carrots</a> contains more useful information."
    },
    {
      type: "cooking",
      tip: "Extra-virgin olive oil is the least refined type of olive oil and therefore contains more of the beneficial compounds that get lost during processing. However, its minimal processing could also mean it has a lower smoke point than other olive oils. Once an oil starts to smoke, it begins to break down, producing a bad flavor and potentially harmful compounds. Unfortunately, the smoke point of an oil depends on so many factors that it is hard to say what the smoke point of an oil really is. For extra-virgin olive oil, it could be anywhere between 200-400 degrees Fahrenheit. Most people recommend using extra-virgin olive oil to add flavor to a finished dish or in cold dishes to be on the safe side. More refined olive oils, canola oil,  coconut oil, and <a href=\"https://spoonacular.com/academy/butter\">clarified butter/ghee</a> are better options for high temperature cooking."
    },
    {
      type: "cooking",
      tip: "Fresh cauliflower should be white without any discoloration. If its leaves are attached, they should be green and not wilty. Store cauliflower in the crisper in your fridge and use within 5-7 days."
    },
  ];
  expect(firstRecipe).toEqual(expect.arrayContaining(expectedTips));
});

test('TEST 9: NUTRITION - RECIPE NUTRIENTS', () => {
  const transformedRecipes = transformRecipeData(dummyApiResponse);
  const firstRecipe = transformedRecipes[0].recipeNutrients;
  const expectedrecipeNutrients = [
    {
      name: "Calories",
      amount:  947.47,
      unit: "kcal",
      percentOfDailyNeeds: 47.37,
    },
    {
      name: "Fat",
      amount: 73.02,
      unit: "g",
      percentOfDailyNeeds: 112.34,
    },
    {
      name: "Saturated Fat",
      amount: 9.05,
      unit: "g",
      percentOfDailyNeeds: 56.57,
    },
    {
      name: "Carbohydrates",
      amount: 64.59,
      unit: "g",
      percentOfDailyNeeds: 21.53,
    },
    {
      name: "Net Carbohydrates",
      amount: 54.51,
      unit: "g",
      percentOfDailyNeeds: 19.82,
    },
    {
      name: "Sugar",
      amount: 11.23,
      unit: "g",
      percentOfDailyNeeds: 12.47,
    },
    {
      name: "Cholesterol",
      amount: 3.84,
      unit: "mg",
      percentOfDailyNeeds: 1.28,
    },
    {
      name: "Sodium",
      amount: 300.3,
      unit: "mg",
      percentOfDailyNeeds: 13.06
    },
    {
      name: "Protein",
      amount: 17.15,
      unit: "g",
      percentOfDailyNeeds: 34.3
    },
    {
      name: "Vitamin A",
      amount: 21574.02,
      unit: "IU",
      percentOfDailyNeeds: 431.48,
    },
    {
      name: "Vitamin E",
      amount: 16.87,
      unit: "mg",
      percentOfDailyNeeds: 112.46,
    },
    {
      name: "Vitamin K",
      amount: 104.48,
      unit: "µg",
      percentOfDailyNeeds: 99.5
    },
    {
      name: "Manganese",
      amount: 1.03,
      unit: "mg",
      percentOfDailyNeeds: 51.62,
    },
    {
      name: "Fiber",
      amount: 10.08,
      unit: "g",
      percentOfDailyNeeds: 40.32,
    },
    {
      name: "Vitamin C",
      amount: 32.6,
      unit: "mg",
      percentOfDailyNeeds: 39.51,
    },
    {
      name: "Magnesium",
      amount: 124.62,
      unit: "mg",
      percentOfDailyNeeds: 31.15,
    },
    {
      name: "Vitamin B2",
      amount: 0.48,
      unit: "mg",
      percentOfDailyNeeds: 28.21,
    },
    {
      name: "Iron",
      amount:  4.59,
      unit: "mg",
      percentOfDailyNeeds: 25.48,
    },
    {
      name: "Potassium",
      amount: 869.25,
      unit: "mg",
      percentOfDailyNeeds: 24.84,
    },
    {
      name: "Folate",
      amount: 95.03,
      unit: "µg",
      percentOfDailyNeeds: 23.76,
    },
    {
      name: "Phosphorus",
      amount: 228.18,
      unit: "mg",
      percentOfDailyNeeds: 22.82,
    },
    {
      name: "Calcium",
      amount: 213.97,
      unit: "mg",
      percentOfDailyNeeds: 21.4,
    },
    {
      name: "Copper",
      amount: 0.42,
      unit: "mg",
      percentOfDailyNeeds: 21.16,
    },
    {
      name: "Vitamin B3",
      amount: 3.38,
      unit: "mg",
      percentOfDailyNeeds: 16.91,
    },
    {
      name: "Vitamin B6",
      amount: 0.28,
      unit: "mg",
      percentOfDailyNeeds: 13.88,
    },
    {
      name: "Vitamin B1",
      amount: 0.18,
      unit: "mg",
      percentOfDailyNeeds: 11.92,
    },
    {
      name: "Zinc",
      amount: 1.6,
      unit: "mg",
      percentOfDailyNeeds: 10.66,
    },
    {
      name: "Vitamin B5",
      amount: 0.8,
      unit: "mg",
      percentOfDailyNeeds: 7.99,
    },
    {
      name: "Selenium",
      amount: 3.89,
      unit: "µg",
      percentOfDailyNeeds: 5.56,
    },
  ];
  expect(firstRecipe).toEqual(expect.arrayContaining(expectedrecipeNutrients));
});

test('TEST 10: NUTRITION -  RECIPE FLAVONOIDS', () => {
  // Call the transformation function
  const transformedRecipes = transformRecipeData(dummyApiResponse);

  // 1st recipe - info for the Recipe table
  const firstRecipe = transformedRecipes[0].flavonoids;

  const expectedflavonoids = [
    {
      name: "Cyanidin",
      amount:  0.74,
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
      amount: 0.38,
      unit: "mg",
    },
    {
      name: "Epigallocatechin",
      amount: 0.78,
      unit: "mg",
    },
    {
      name: "Epicatechin",
      amount: 0.18,
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
      amount: 2.27,
      unit: "mg",
    },
    {
      name: "Hesperetin",
      amount: 6.51,
      unit: "mg",
    },
    {
      name: "Naringenin",
      amount: 0.75,
      unit: "mg",
    },
    {
      name: "Apigenin",
      amount: 0.05,
      unit: "mg",
    },
    {
      name: "Luteolin",
      amount: 0.2,
      unit: "mg",
    },
    {
      name: "Isorhamnetin",
      amount: 2.94,
      unit: "mg",
    },
    {
      name: "Kaempferol",
      amount: 17.86,
      unit: "mg",
    },
    {
      name: "Myricetin",
      amount: 0.06,
      unit: "mg",
    },
    {
      name: "Quercetin",
      amount: 4.5,
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

test('TEST 11: NUTRITION -  RECIPE PROPERTIES', () => {
  // Call the transformation function
  const transformedRecipes = transformRecipeData(dummyApiResponse);

  // 1st recipe - info for the Recipe table
  const firstRecipe = transformedRecipes[0].properties;

  const expectedProperties = [
    {
      name: "Glycemic Index",
      amount: 158.83,
      unit: "",
    },
    {
      name: "Glycemic Load",
      amount:  19.49,
      unit: "",
    },
    {
      name:  "Inflammation Score",
      amount: -10.0,
      unit: "",
    },
    {
      name: "Nutrition Score",
      amount: 30.319565217391304,
      unit: "%",
    },
  ];
  expect(firstRecipe).toEqual(expect.arrayContaining(expectedProperties));
});

test('TEST 12: NUTRITION - RECIPE CALORIC BREAKDOWN', () => {
  const transformedRecipes = transformRecipeData(dummyApiResponse);
  const firstRecipe = transformedRecipes[0].recipeCaloricBreakdown;
  const expectedrecipeCaloricBreakdown = [
    {
      percentProtein: 6.97,
      percentFat:  66.78,
      percentCarbs: 26.25,
    }
  ];

  expect(firstRecipe).toEqual(expect.arrayContaining(expectedrecipeCaloricBreakdown));
});

test('TEST 13: NUTRITION - RECIPE WEIGHT PER SERVING', () => {
  const transformedRecipes = transformRecipeData(dummyApiResponse);
  const firstRecipe = transformedRecipes[0].recipeWeightPerServing;
  const expectedRecipeWeightPerServing = [{
    amount: 367,
    unit: "g"
  }];
  expect(firstRecipe).toEqual(expect.arrayContaining(expectedRecipeWeightPerServing));
});

test('TEST 14: INSTRUTIONS', () => {
  const transformedRecipes = transformRecipeData(dummyApiResponse);
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
            image: "oven.jpg",
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
            image: "bell-pepper-orange.png",
          },
        ],
        equipments: [
          {
            id: 404698,
            name: "broiler pan",
            image: "broiler-pan.jpg",
          },
          {
            id: 404641,
            name: "tongs",
            image: "tongs.jpg"
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
            image: "flour-tortilla.jpg"
          },
        ],
        equipments: [
          {
            id: 404730,
            name: "plastic wrap",
            image: "plastic-wrap.jpg",
          },
          {
            id: 404783,
            name: "bowl",
            image: "bowl.jpg",
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
            image: "green-pepper.jpg",
          },
          {
            id: 93818,
            name: "seeds",
            image: "sunflower-seeds.jpg"
          },
        ],
        equipments: [
          {
            id: 404783,
            name: "bowl",
            image: "bowl.jpg"
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
            image: "green-pepper.jpg",
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
            image: "green-pepper.jpg",
          },
          {
            id: 2053,
            name: "vinegar",
            image: "vinegar-(white).jpg",
          },
          {
            id: 1002030,
            name: "pepper",
            image: "pepper.jpg",
          },
          {
            id: 19335,
            name: "sugar",
            image: "sugar-in-bowl.png",
          },
        ],
        equipments: [
          {
            id: 405600,
            name: "sieve",
            image: "strainer.png"
          },
          {
              id: 404783,
              name: "bowl",
              image: "bowl.jpg"
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
            image: "anchovies.jpg",
          },
          {
            id: 10111333,
            name: "peppers",
            image: "green-pepper.jpg"
          },
        ],
        equipments:[
          {
            id: 404783,
            name: "bowl",
            image: "bowl.jpg"
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
            image: "anchovies.jpg",
          },
          {
              id: 10111333,
              name: "peppers",
              image: "green-pepper.jpg",
          },
        ],
        equipments: [],
        length: {},
      },

    ],
  ];

  expect(firstRecipe).toEqual(analyzedInstructions);

});

test('TEST 15: NUTRITION -  RECIPE INGREDIENTS NUTRIENTS', () => {
  const transformedRecipes = transformRecipeData(dummyApiResponse);
  const firstRecipe = transformedRecipes[0].recipeIngredientsNutrients[0];
  const expectedrecipeIngredientsNutrients = 
    {
      id: 93647,
      amount: 1.0,
      name: "sale e pepe",
      unit: "serving",
      nutrients: [
        {amount: 0.0, name: "Caffeine", percentOfDailyNeeds: 0.0, unit: "mg"},
        {amount: 0.0, name: "Vitamin B3", percentOfDailyNeeds: 16.91, unit: "mg"},
        {amount: 197.68, name: "Calories", percentOfDailyNeeds: 47.37, unit: "kcal"},
        {amount: 1.96, name: "Sugar", percentOfDailyNeeds: 12.47, unit: "g"},
        {amount: 0.0, name: "Calcium", percentOfDailyNeeds: 21.4, unit: "mg"},
        {amount: 0.0, name: "Fluoride", percentOfDailyNeeds: 0.0, unit: "mg"},{amount: 0.0, name: "Manganese", percentOfDailyNeeds: 51.62, unit: "mg"},{amount: 0.0, name: "Sodium", percentOfDailyNeeds: 13.06, unit: "mg"},{amount: 1.01, name: "Fat", percentOfDailyNeeds: 112.34, unit: "g"},{amount: 0.0, name: "Magnesium", percentOfDailyNeeds: 31.15, unit: "mg"},
        {amount:0.0,name:  "Selenium",  percentOfDailyNeeds:  5.56, unit: "µg"},
        {amount: 0.0 ,name:"Trans Fat",percentOfDailyNeeds:51.0, unit: "g"},
        {amount:0.0,name: "Potassium", percentOfDailyNeeds: 24.84, unit: "mg"},
        {amount: 0.0, name: "Vitamin B2", percentOfDailyNeeds: 28.21, unit: "mg"},
        {amount:0.0,name:"Mono Unsaturated Fat",percentOfDailyNeeds:0,unit: "g"},
        {amount:0.0, name: "Folate", percentOfDailyNeeds: 23.76, unit:"µg"},
        {amount:0.0, name: "Vitamin B6", percentOfDailyNeeds: 13.88, unit:"mg"},
        {amount:0.0, name: "Zinc", percentOfDailyNeeds: 10.66, unit:"mg"},
        {amount:39.48,name: "Net Carbohydrates", percentOfDailyNeeds: 19.82, unit:"g"},
        {amount:0.0, name: "Vitamin B5", percentOfDailyNeeds: 7.99, unit:"mg"},
        {amount:0.0, name: "Alcohol", percentOfDailyNeeds:0.0, unit:"g"},
        {amount:1.81,name: "Iron", percentOfDailyNeeds: 25.48, unit:"mg"},
        {amount:1.96,name:"Fiber", percentOfDailyNeeds: 40.32, unit:"g"},
        {amount:0.0,name:"Vitamin E", percentOfDailyNeeds: 112.46, unit:"mg"},
        {amount:0.0,name: "Copper", percentOfDailyNeeds:21.16, unit:"mg"},
        {amount:0.0,name:"Cholesterol", percentOfDailyNeeds:1.28, unit:"mg"},
        {amount:6.89,name:"Protein", percentOfDailyNeeds:34.3, unit:"g"},
        {amount:0.0, name:"Vitamin C", percentOfDailyNeeds:39.51, unit:"mg"},
        {amount:0.0,name:"Vitamin B1", percentOfDailyNeeds: 11.92, unit:"mg"},
        {amount:0.0, name:"Saturated Fat", percentOfDailyNeeds:56.57, unit:"g"},
        {amount:41.44,name:"Carbohydrates",percentOfDailyNeeds:21.53, unit:"g"},
        {amount:0.0, name:"Vitamin B12",percentOfDailyNeeds:0.66, unit:"µg"},
        {amount:0.0, name:"Poly Unsaturated Fat",percentOfDailyNeeds:0, unit:"g"},
        {amount:0.0, name:"Vitamin D",percentOfDailyNeeds:0.0, unit:"µg"},
        {amount:0.0,name:"Phosphorus",percentOfDailyNeeds:22.82, unit:"mg"},
        {amount:0.0,name:"Vitamin A",percentOfDailyNeeds:431.48, unit:"IU"},
        {amount:0.0,name:"Vitamin K",percentOfDailyNeeds:99.5, unit:"µg"},
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

// test('TEST 16: INSTRUTIONS - EQUIPMENT', () => {
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

// test('TEST 17: INSTRUTIONS - INSTRUCATION-LENGTH', () => {
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
