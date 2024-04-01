//const { Sequelize, DataTypes } = require('sequelize');

// https://stackoverflow.com/questions/62556633/sequelize-6-import-models-from-file
module.exports = function (sequelize, DataTypes) {
    const users = sequelize.define("USERS", {
        "id": {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        tableName: "USERS",
        timestamps: false,
    },
    );
    return users;
}