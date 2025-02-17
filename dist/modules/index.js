"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const session_1 = require("./session/session");
const users_1 = require("./users/users");
exports.default = {
    user: users_1.moduleInitUsers,
    session: session_1.initSession,
};
