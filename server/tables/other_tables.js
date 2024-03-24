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
        recipe_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
        },
        step_number: {
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
    const RecipeNutrients = sequelize.define("RecipeNutrients", {
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
        tableName: "RecipeNutrients",
        timestamps: false,
    },
    );
    const RecipeIngredientsNutrients = sequelize.define("RecipeIngredientsNutrients", {
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
        tableName: "RecipeIngredientsNutrients",
        timestamps: false,
    },
    );
    const Cuisine = sequelize.define("Cuisine", {
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
        tableName: "Cuisine",
        timestamps: false,
    },
    );
    const Diet = sequelize.define("Diet", {
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
        tableName: "Diet",
        timestamps: false,
    },
    );
    const Flavonoids = sequelize.define("Flavonoids", {
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
        tableName: "Flavonoids",
        timestamps: false,
    },
    );
    const Nutrients = sequelize.define("Nutrients", {
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
        tableName: "Nutrients",
        timestamps: false,
    },
    );
    const Properties = sequelize.define("Properties", {
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
        tableName: "Properties",
        timestamps: false,
    },
    );
    const Occasions = sequelize.define("Occasions", {
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
        tableName: "Occasions",
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
        recipe_nutrients: RecipeNutrients,
        recipe_ingredient_nutrient: RecipeIngredientsNutrients,
        cuisine_table: Cuisine,
        diet_table: Diet,
        flavonoid_table: Flavonoids,
        nutrients_table: Nutrients,
        properties_table: Properties,
        occasions_table: Occasions,
    }
}