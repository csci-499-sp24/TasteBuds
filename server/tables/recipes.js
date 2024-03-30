// https://dstackoverflow.com/questions/62556633/sequelize-6-import-models-from-file

module.exports = function (sequelize, DataTypes) {
    const recipe = sequelize.define("recipe", {
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
        preparation_minutes: {
            type: DataTypes.INTEGER,
        },
        cooking_minutes: {
            type: DataTypes.INTEGER,
        },
        ready_in_minutes: {
            type: DataTypes.INTEGER,
        },
        servings: {
            type: DataTypes.INTEGER,
        },
        price_per_serving: {
            type: DataTypes.DOUBLE,
        },
        image: {
            type: DataTypes.STRING,
        },
        image_type: {
            type: DataTypes.STRING,
        },
        very_healthy: {
            type: DataTypes.BOOLEAN,
        },
        cheap: {
            type: DataTypes.BOOLEAN,
        },
        weight_watcher_smart_points: {
            type: DataTypes.INTEGER,
        },
        sustainable: {
            type: DataTypes.BOOLEAN,
        },
        source_name: {
            type: DataTypes.STRING,
        },
        source_url: {
            type: DataTypes.STRING,
        },
    },
    {
        tableName: "recipes",
        timestamps: false,
    },
    );
    const WeightPerServing = sequelize.define("WeightPerServing", {
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
        tableName: "weightperServing",
        timestamps: false,
    },
    );
    const recipeCaloricBreakdowns = sequelize.define("recipeCaloricBreakdowns", {
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
        tableName: "recipeCaloricBreakdowns",
        timestamps: false,
    },
    );
    const recipe_flavonoids = sequelize.define("recipe_flavonoids", {
        flavonoid_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
        },
        recipe_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
        },
        amount: {
            type: DataTypes.DOUBLE,
        },
    },
    {
        tableName: "recipe_flavonoids",
        timestamps: false,
    },
    );
    return {
        recipes_table: recipe,
        weight_per_serving: WeightPerServing,
        calories_table: recipeCaloricBreakdowns,
        recipe_flavors: recipe_flavonoids,
    }
    //return recipes;
}