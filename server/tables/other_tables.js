module.exports = function (sequelize, DataTypes) {
    const Tips = sequelize.define("Tips", {
        tip_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
        },
        recipe_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
        },
        type: {
            type: DataTypes.STRING,
        },
        tip: {
            type: DataTypes.STRING,
        },
    },
    {
        tableName: "Tips",
        timestamps: false,
    },
    );
    const Equipment = sequelize.define("Equipment", {
        equipment_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
        },
        image: {
            type: DataTypes.STRING,
        },
    },
    {
        tableName: "Equipment",
        timestamps: false,
    },
    );
    const Instructions = sequelize.define("Instructions", {
        instruction_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
        },
        step_number: {
            type: DataTypes.INTEGER,
        },
        name: {
            type: DataTypes.STRING,
        },
        step: {
            type: DataTypes.STRING,
        },
        recipe_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
        },
        is_secondary_recipe: {
            type: DataTypes.BOOLEAN,
        }
    },
    {
        tableName: "Instructions",
        timestamps: false,
    },
    );
    const InstructionLength = sequelize.define("InstructionLength", {
        instruction_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
        },
        length_number: {
            type: DataTypes.INTEGER,
        },
        length_unit: {
            type: DataTypes.INTEGER,
        },
    },
    {
        tableName: "InstructionLength",
        timestamps: false,
    },
    );
    const Ingredients = sequelize.define("Ingredients", {
        ingredient_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
        },
        standard_name: {
            type: DataTypes.STRING,
        },
        image: {
            type: DataTypes.STRING,
        },
        aisle_tag: {
            type: DataTypes.STRING,
        },
    },
    {
        tableName: "Ingredients",
        timestamps: false,
    },
    );
    const RecipeIngredients = sequelize.define("RecipeIngredients", {
        ingredient_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
        },
        standard_name: {
            type: DataTypes.STRING,
        },
        image: {
            type: DataTypes.STRING,
        },
        aisle_tag: {
            type: DataTypes.STRING,
        },
    },
    {
        tableName: "RecipeIngredients",
        timestamps: false,
    },
    );
    const recipe_nutrients = sequelize.define("recipe_nutrients", {
        nutrient_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
        },
        recipe_id: {
            type: DataTypes.INTEGER,
        },
        amount: {
            type: DataTypes.DOUBLE,
        },
        percent_of_daily_needs: {
            type: DataTypes.DOUBLE,
        },
    },
    {
        tableName: "recipe_nutrients",
        timestamps: false,
    },
    );
    const recipe_ingredients_nutrients = sequelize.define("recipe_ingredients_nutrients", {
        recipe_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
        },
        ingredient_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
        },
        nutrient_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
        },
        recipe_id: {
            type: DataTypes.INTEGER,
        },
        amount: {
            type: DataTypes.DOUBLE,
        },
        percent_of_daily_needs: {
            type: DataTypes.DOUBLE,
        },
    },
    {
        tableName: "recipe_ingredients_nutrients",
        timestamps: false,
    },
    );
    const cuisine = sequelize.define("cuisine", {
        cuisine_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
        },
        cuisine_name: {
            type: DataTypes.STRING,
        },
    },
    {
        tableName: "cuisine",
        timestamps: false,
    },
    );
    const diet = sequelize.define("diet", {
        diet_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
        },
        diet_name: {
            type: DataTypes.STRING,
        },
    },
    {
        tableName: "diet",
        timestamps: false,
    },
    );
    const flavonoids = sequelize.define("flavonoids", {
        flavonoid_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
        },
        unit: {
            type: DataTypes.STRING,
        },
    },
    {
        tableName: "flavonoids",
        timestamps: false,
    },
    );
    const nutrients = sequelize.define("nutrients", {
        nutrient_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
        },
        unit: {
            type: DataTypes.STRING,
        },
    },
    {
        tableName: "nutrients",
        timestamps: false,
    },
    );
    const properties = sequelize.define("properties", {
        property_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
        },
        unit: {
            type: DataTypes.STRING,
        },
    },
    {
        tableName: "properties",
        timestamps: false,
    },
    );
    const occasions = sequelize.define("occasions", {
        occasion_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
        },
        occasion: {
            type: DataTypes.STRING,
        },
    },
    {
        tableName: "occasions",
        timestamps: false,
    },
    );
    const dish_type = sequelize.define("dish_type", {
        occasion_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
        },
        occasion: {
            type: DataTypes.STRING,
        },
    },
    {
        tableName: "dish_type",
        timestamps: false,
    },
    );
    return {
        tips_table: Tips,
        equipment_table: Equipment,
        instructions_id: Instructions,
        instr_length: InstructionLength,
        ingredients_table: Ingredients,
        recipe_ingredients: RecipeIngredients,
        recipe_nutrients: recipe_nutrients,
        recipe_ingredient_nutrient: recipe_ingredients_nutrients,
        cuisine_table: cuisine,
        diet_table: diet,
        flavonoid_table: flavonoids,
        nutrients_table: nutrients,
        properties_table: properties,
        occasions_table: occasions,
        dish_type: dish_type,
    }
}