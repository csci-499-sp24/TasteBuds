// https://dstackoverflow.com/questions/62556633/sequelize-6-import-models-from-file
module.exports = function (sequelize, DataTypes) {
    const recipes = sequelize.define("Recipes", {
        recipe_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
        },
        title: {
            type: DataTypes.STRING,
        },
        summary: {
            type: DataTypes.STRING,
        },
        preparation_time: {
            type: DataTypes.INT,
        },
        cooking_time: {
            type: DataTypes.INT,
        },
        ready_in_minutes: {
            type: DataTypes.INT,
        },
        preferences_id: {
            type: DataTypes.INT,
        },
        preparation_time: {
            type: DataTypes.INT,
        },
        servings: {
            type: DataTypes.INT,
        },
        price_per_serving: {
            type: DataTypes.DOUBLE,
        },
        image: {
            type: DataTypes.STRING,
        },
        very_healthy: {
            type: DataTypes.BOOLEAN,
        },
        cheap: {
            type: DataTypes.BOOLEAN,
        },
        weight_watcher_smart: {
            type: DataTypes.INT,
        },
        sustainable: {
            type: DataTypes.BOOLEAN,
        },
    },
    {
        tableName: "Recipes",
        timestamps: false,
    },
    );
    //
    const RecipeWeightPerServing = sequelize.define("RecipeWeightPerServing", {
        recipe_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
        },
        percent_protein: {
            type: DataTypes.DOUBLE,
        },
        percent_fat: {
            type: DataTypes.DOUBLE,
        },
        percent_carbs: {
            type: DataTypes.DOUBLE,
        },
    },
    {
        tableName: "RecipeWeightPerServing",
        timestamps: false,
    },
    );
    //
    const RecipeCalorieBreakdown = sequelize.define("RecipeWeightPerServing", {
        recipe_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
        },
        amount: {
            type: DataTypes.DOUBLE,
        },
        unit: {
            type: DataTypes.STRING,
        },
    },
    {
        tableName: "RecipeWeightPerServing",
        timestamps: false,
    },
    );
    const SecondaryRecipes = sequelize.define("RecipeWeightPerServing", {
        recipe_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            primaryKey: true,
        },
    },
    {
        tableName: "RecipeWeightPerServing",
        timestamps: false,
    },
    );
    return {
        recipes_table: recipes,
        nutrients_table: RecipeWeightPerServing,
        calories_table: RecipeCalorieBreakdown,
        secondary_recipes_table: SecondaryRecipes,
    }
    //return recipes;
}