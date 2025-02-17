"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("./database");
const user_1 = require("./user");
exports.default = {
    sequelizeInstance: database_1.dataBase,
    models: {
        BaseServerUser: user_1.BaseServerUser
    }
};
