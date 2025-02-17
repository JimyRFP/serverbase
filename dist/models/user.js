"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseServerUser = void 0;
const sequelize_1 = require("sequelize");
const sequelize_2 = require("sequelize");
const database_1 = require("./database");
class BaseServerUser extends sequelize_1.Model {
}
exports.BaseServerUser = BaseServerUser;
BaseServerUser.init({
    id: {
        primaryKey: true,
        type: sequelize_2.DataTypes.UUIDV4,
        allowNull: false,
        defaultValue: sequelize_2.DataTypes.UUIDV4,
    },
    full_name: sequelize_2.DataTypes.STRING,
    email: sequelize_2.DataTypes.STRING,
    is_active: sequelize_2.DataTypes.BOOLEAN,
    password_hash: sequelize_2.DataTypes.STRING,
    blocked: sequelize_2.DataTypes.BOOLEAN,
    last_action: sequelize_2.DataTypes.DATE,
}, {
    sequelize: database_1.dataBase,
    tableName: 'baseserver_users',
});
