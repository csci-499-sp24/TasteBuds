//const { Sequelize, DataTypes } = require('sequelize');

// https://stackoverflow.com/questions/62556633/sequelize-6-import-models-from-file
module.exports = function (sequelize, DataTypes) {
    const database = sequelize.define("sample_data", {
        "\"(PK) id\"": {
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
        instructions: {
            type: DataTypes.STRING,
        },
        cuisines: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        preparationMinutes: {
            type: DataTypes.INTEGER,
        },
        cookingMinutes: {
            type: DataTypes.INTEGER,
        },
        readyInMinutes: {
            type: DataTypes.INTEGER,
        },
        priceperServing: {
            type: DataTypes.INTEGER,
        },
        dishTypes: {
            type: DataTypes.STRING,
        },
        servings: {
            type: DataTypes.INTEGER,
        },
        image: {
            type: DataTypes.STRING,
        },
        diet: {
            type: DataTypes.STRING,
        },
    },
    {
        tableName: "sample_data",
        timestamps: false,
    },
    );
    return database;
}