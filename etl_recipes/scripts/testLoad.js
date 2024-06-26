// test whole pipeline
const { sequelize, Recipe, RecipeCuisines, Cuisines } = require('./load');
const { QueryTypes } = require('sequelize');

const { transformRecipeData } = require('./transform');
const axios = require('axios');
const { loadRecipesIntoDatabase } = require('./load');
const { fetchRecipesFromSource } = require('./extract');



async function syncDB() {
    try {
        console.log("beginning sequelize authenticate");
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
};
syncDB();


async function main() {
    try {
        // Fetch the 10 cuisines with the lowest count
        // const lowestCountCuisines = await getCuisinesWithLowestCount(5);
        // const lowestCountDiets = await getDietWithLowestCount(3);
        // const getIntolerancesWithLowestCount = getDietWithLowestCount(3);
        // let i = 0;
        // lowestCountCuisines = [{cuisine_name: "Korean"}, {cuisine_name: "Chinese"}];
        // for (const cuisineType of lowestCountCuisines) {
            // const os = await getOffsetForCuisine(cuisineType.cuisine_name);
            // const os = await getOffsetForCuisine("Central American");
            // console.log(os)
            // const offset = parseInt(os, 10) + 10;
            // 146 African-paleolithic,195 
            // 183 70(+4?) ketogenic, Indian 
            // 145 pescatarian, Scand, 239
            // 500 550 570 or 157, 700 740 790
            // 205 Central American
            //chinese fod 10, Thai 100 Fod
            // (8)E.E 2 vegetarian, (1)M.E 9, (2) l.A 8
            // 116 Fodmap 


            // console.log(offset)
            // const listApiUrl = `https://api.spoonacular.com/recipes/complexSearch?$cuisine=${cuisineType.cuisine_name}&number=10&offset=${offset}&diet=whole 30&apiKey=${process.env.SPOON_RECIPES_API_KEY}`;
            // const listApiUrl = `https://api.spoonacular.com/recipes/complexSearch?$cuisine=Central American&number=20&offset=${offset}&apiKey=${process.env.SPOON_RECIPES_API_KEY}`;
            // const listApiUrl = `https://api.spoonacular.com/recipes/complexSearch?cuisine=${cuisine.cuisine_name}&diet=${lowestCountDiets[i].diet_name}&number=10&offset=${offset}&apiKey=${process.env.SPOON_RECIPES_API_KEY}`;
            // const listApiUrl = `https://api.spoonacular.com/recipes/complexSearch?cuisine=${cuisine.cuisine_name}&diet=${lowestCountDiets[i].cuisine_name}&intolerances=${lowestCountintolerances[i].intolerance_name}&number=10&offset=${offset}&apiKey=${process.env.SPOON_RECIPES_API_KEY}`;


            // console.log(listApiUrl)
            // let listResponse = await axios.get(listApiUrl);
            // let recipeList = listResponse.data.results;
            // console.log(`Number of recipes fetched: ${recipeList.length}`);
            // console.log(`id: ${recipeList[0].id}`);

            // let recipeLt = [];

            // for (const recipe of recipeList) {
            //     let createdRecipe = await Recipe.findOne({ where: { recipe_id: recipe.id } });
            //     if(!createdRecipe){
            //         recipeLt.push(recipe);
            //     }
            // }
            // for (const recipe of recipeLt) {
            //     console.log(`ID:${recipe.id}`);
            // }


            
            // let recipeLt2 = [];

            // for(const recipe of recipeList){
            //     let exitsRecipe = await Recipe.findOne({ where: { recipe_id: recipe.id} });
            //     if(!exitsRecipe){
            //         recipeLt2.push(recipe);
            //     }
            //     else{
            //         let createdCuisines = await Cuisines.findOne({ where: { cuisine_name: cuisineType.cuisine_name} });
            //         const existingRecipeCuisines = await RecipeCuisines.findOne({
            //             where: {
            //                 recipe_id: recipe.id,
            //                 cuisine_id: createdCuisines.cuisine_id,
            //             }
            //         });
            //         if (!existingRecipeCuisines && exitsRecipe) {
            //             await RecipeCuisines.create({
            //                 recipe_id: recipe.id,
            //                 cuisine_id: createdCuisines.cuisine_id,
            //             });
            //         }
            //     }
            // }
            
            // let j = 60040; 
            // let j = 600010;
            // let j  = 638060, 639060, 636000, 
            let j  = 640981;
            let recipeLt2 = [];
            for(let i = j; recipeLt2.length <= 20;i++){
                let exitsRecipe = await Recipe.findOne({ where: { recipe_id: i} });
                if(!exitsRecipe){
                    recipeLt2.push(i);
                }
            }
            recipeLt2.push(640942);
            
            for (const recipe of recipeLt2) {
                // const detailApiUrl = `https://api.spoonacular.com/recipes/informationBulk?ids=${recipe.id}&includeIngredients=true&includeInstructions=true&addRecipeInformation=true&includeNutrition=true&apiKey=${process.env.SPOON_RECIPES_API_KEY}`;
                const detailApiUrl = `https://api.spoonacular.com/recipes/informationBulk?ids=${recipe}&includeIngredients=true&includeInstructions=true&addRecipeInformation=true&includeNutrition=true&apiKey=${process.env.SPOON_RECIPES_API_KEY}`;

                const extractedRecipe = await fetchRecipesFromSource(detailApiUrl);
                const transformedRecipes = transformRecipeData(extractedRecipe);
                // transformedRecipes[0].cuisine.push(cuisineType.cuisine_name);
                // transformedRecipes[0].cuisine.push("Central American");

                // transformedRecipes[0].diet.push("whole 30");
                // console.log(transformedRecipes[0].cuisine);
                // transformedRecipes[0].cuisine.cuisine_nameforEach(function(entry) {
                //     console.log(entry);
                //   });
                await loadRecipesIntoDatabase(transformedRecipes);
            }
            // console.log(`Size: ${recipeLt2.length}`);
        // }

    } catch (error) {
        console.error('Error in main execution:', error);
    }
}
// async function getOffsetForCuisine(cuisineName) {
//     const count = await sequelize.query(
//         `SELECT COUNT(recipe_cuisine.recipe_id) AS count
//         FROM public.recipe_cuisine
//         LEFT JOIN public.cuisines ON recipe_cuisine.cuisine_id = cuisines.cuisine_id
//         WHERE cuisines.cuisine_name = '${cuisineName}';`,
//         { type: QueryTypes.SELECT }
//     );

//     return count[0].count || 0; // Return the count or 0 if not found
// }

// async function getCuisinesWithLowestCount(count) {
//     return await sequelize.query(
//         `SELECT cuisine_name, COUNT(recipes.recipe_id) AS recipe_count
//         FROM public.cuisines
//         LEFT JOIN public.recipe_cuisine ON cuisines.cuisine_id = recipe_cuisine.cuisine_id
//         LEFT JOIN public.recipes ON recipe_cuisine.recipe_id = recipes.recipe_id
//         GROUP BY cuisine_name
//         ORDER BY recipe_count
//         OFFSET 2
//         LIMIT ${count};`, 

//         { type: QueryTypes.SELECT }
//     );
// }


// async function getDietWithLowestCount(count) {
//     return await sequelize.query(
//         `SELECT diet_name, COUNT(recipes.recipe_id) AS recipe_count
//         FROM public.diets
//         LEFT JOIN public.recipe_diet ON diets.diet_id = recipe_diet.diet_id
//         LEFT JOIN public.recipes ON recipe_diet.recipe_id = recipes.recipe_id
//         GROUP BY diet_name
//         ORDER BY recipe_count
//         LIMIT ${count};`,
//         { type: QueryTypes.SELECT }
//     );
// }

// async function getIntolerancesWithLowestCount(count) {
//     return await sequelize.query(
//         `SELECT intolerance_name, COUNT(recipes.recipe_id) AS recipe_count
//         FROM public.intolerances
//         LEFT JOIN public.recipe_intolerance ON cuisines.cuisine_id = recipe_intolerance.intolerance_id
//         LEFT JOIN public.recipes ON recipe_intolerance.recipe_id = recipes.recipe_id
//         GROUP BY intolerance_name
//         ORDER BY recipe_count
//         LIMIT ${count};`,
//         { type: QueryTypes.SELECT }
//     );
// }

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error('Error in main execution:', error);
        process.exit(1);
});



// async function main() {

//      const listApiUrl = `https://api.spoonacular.com/recipes/complexSearch?number=100&apiKey=${process.env.SPOON_RECIPES_API_KEY}`;

//     // const listApiUrl = `https://api.spoonacular.com/recipes/complexSearch?&cuisine=African,Asian,American,British,Cajun,Caribbean,Chinese,Eastern European,European,French,German,Greek,Indian,Irish,Italian,Japanese,Jewish,Korean,Latin American,Mediterranean,Mexican,Middle Eastern,Nordic,Southern,Spanish,Thai,Vietnamese&number=100&apiKey=${process.env.SPOON_RECIPES_API_KEY}`;

//     // const listApiUrl = `https://api.spoonacular.com/recipes/complexSearch?&cuisine=Asian, Chinese, Indian, Japanese,Korean,Thai, Vietnamese&number=20&offset=100&apiKey=${process.env.SPOON_RECIPES_API_KEY}`;

//     // const listApiUrl = `https://api.spoonacular.com/recipes/complexSearch?&cuisine=African,Cajun,Caribbean, Latin American,Mediterranean,Mexican,Middle Eastern,Spanish,&number=1&offset=101&apiKey=${process.env.SPOON_RECIPES_API_KEY}`;

//     // const listApiUrl = `https://api.spoonacular.com/recipes/complexSearch?&cuisine=American,British,European,French,German,Greek,Irish,Italian,Southern&number=30&offset=13&apiKey=${process.env.SPOON_RECIPES_API_KEY}`;

//     // const listApiUrl = `https://api.spoonacular.com/recipes/complexSearch?&cuisine=Creole,Eastern European,Jewish,Nordic&number=20&offset=10&apiKey=${process.env.SPOON_RECIPES_API_KEY}`;

//     // const listApiUrl = `https://api.spoonacular.com/recipes/complexSearch?&cuisine=Jewish&number=20&apiKey=${process.env.SPOON_RECIPES_API_KEY}`;

//     try {
//         let listResponse = await axios.get(listApiUrl);
//         let recipeList = listResponse.data.results; 

//         let randomRecipes = selectRandomRecipes(recipeList, 10); 

//         for (const recipe of recipeList) {
//             const detailApiUrl = `https://api.spoonacular.com/recipes/informationBulk?ids=${recipe.id}&includeIngredients=true&includeInstructions=true&addRecipeInformation=true&includeNutrition=true&apiKey=${process.env.SPOON_RECIPES_API_KEY}`;

//             const extractedRecipe = await fetchRecipesFromSource(detailApiUrl);
//             const transformedRecipes = transformRecipeData(extractedRecipe);
//             await loadRecipesIntoDatabase(transformedRecipes);
//         }

//         console.log('Data loaded successfully!');
//     } catch (error) {
//         console.error('Error loading data:', error);
//     }
// }

// function selectRandomRecipes(recipeList, count) {
//     let shuffled = recipeList.sort(() => 0.5 - Math.random());
//     return shuffled.slice(0, count);
// }

// main()
//     .then(() => process.exit(0))
//     .catch((error) => {
//         console.error('Error in main execution:', error);
//         process.exit(1);
//     });    