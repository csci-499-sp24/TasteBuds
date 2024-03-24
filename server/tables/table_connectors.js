module.exports = function (sequelize, DataTypes) {
    const RecipeEquipment = sequelize.define("RecipeEquipment", {
        recipe_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
        },
        equipment_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
        },
    },
    {
        tableName: "RecipeEquipment",
        timestamps: false,
    },
    );
    const InstructionsIngredients = sequelize.define("InstructionsIngredients", {
        ingredient_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
        },
        instruction_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
        },
    },
    {
        tableName: "InstructionsIngredients",
        timestamps: false,
    },
    );
    const InstructionsEquipment = sequelize.define("InstructionsEquipment", {
        equipment_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
        },
        instruction_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
        },
    },
    {
        tableName: "InstructionsEquipment",
        timestamps: false,
    },
    );
    const RecipeCuisines = sequelize.define("RecipeCuisines", {
        recipe_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
        },
        cuisine_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
        },
    },
    {
        tableName: "RecipeCuisines",
        timestamps: false,
    },
    );
    const RecipeDiet = sequelize.define("RecipeDiet", {
        recipe_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
        },
        diet_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
        },
    },
    {
        tableName: "RecipeDiet",
        timestamps: false,
    },
    );
    const RecipeOccasions = sequelize.define("RecipeOccasions", {
        occasions_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
        },
        recipe_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
        },
    },
    {
        tableName: "RecipeOccasions",
        timestamps: false,
    },
    );
    const RecipeProperties = sequelize.define("RecipeProperties", {
        property_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
        },
        recipe_id: {
            type: DataTypes.INTEGER,
        },
    },
    {
        tableName: "RecipeProperties",
        timestamps: false,
    },
    );
    return {
        recipe_to_equip: RecipeEquipment,
        instr_to_ingr: InstructionsIngredients,
        instr_to_equip: InstructionsEquipment,
        recipe_to_cusine: RecipeCuisines,
        recipe_to_diet: RecipeDiet,
        recipe_to_occasions: RecipeOccasions,
        recipe_to_properties: RecipeProperties,
    }
}