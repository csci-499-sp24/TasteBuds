module.exports = function (sequelize, DataTypes) {
    const recipe_equipment = sequelize.define("recipe_equipment", {
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
        tableName: "recipe_equipment",
        timestamps: false,
    },
    );
    const instructions_ingredients = sequelize.define("instructions_ingredients", {
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
        tableName: "instructions_ingredients",
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
        tableName: "instructions_equipment",
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
        tableName: "recipe_cuisines",
        timestamps: false,
    },
    );
    const recipe_diet = sequelize.define("recipe_diet", {
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
        tableName: "recipe_diet",
        timestamps: false,
    },
    );
    const recipe_occasions = sequelize.define("recipe_occasions", {
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
        tableName: "recipe_occasions",
        timestamps: false,
    },
    );
    const recipe_properties = sequelize.define("recipe_properties", {
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
        tableName: "recipe_properties",
        timestamps: false,
    },
    );
    const RecipeDishType = sequelize.define("RecipeDishType", {
        recipe_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
        },
        dish_type_id: {
            type: DataTypes.INTEGER,
        },
    },
    {
        tableName: "recipe_dishType",
        timestamps: false,
    },
    );
    return {
        recipe_to_equip: recipe_equipment,
        instr_to_ingr: instructions_ingredients,
        instr_to_equip: InstructionsEquipment,
        recipe_to_cusine: RecipeCuisines,
        recipe_to_diet: recipe_diet,
        recipe_to_occasions: recipe_occasions,
        recipe_to_properties: recipe_properties,
        recipe_to_dishtype: RecipeDishType,
    }
}