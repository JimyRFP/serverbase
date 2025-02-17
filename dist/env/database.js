"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const env_1 = __importDefault(require("./env"));
module.exports = {
    dialect: env_1.default.DATABASE.dialect,
    host: env_1.default.DATABASE.host,
    database: env_1.default.DATABASE.database,
    username: env_1.default.DATABASE.username,
    password: env_1.default.DATABASE.password,
    port: env_1.default.DATABASE.port,
    define: {
        underscored: true,
        timestamps: true,
    },
    logging: false,
};
