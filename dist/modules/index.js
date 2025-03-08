"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const session_1 = require("./session/session");
const set_1 = require("./session/set");
const users_1 = require("./users/users");
exports.default = {
    user: users_1.moduleInitUsers,
    session: session_1.initSession,
    sessionFuncions: {
        sessionSetUser: set_1.sessionSetUser,
        sessionDeleteUser: set_1.sessionDeleteUser,
    }
};
