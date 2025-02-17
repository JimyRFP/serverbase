"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const auth_1 = require("./authentication/auth");
const validator_1 = require("./datavalidation/validator");
exports.default = {
    middlewareValidateParams: validator_1.middlewareValidateParams,
    middlewareCheckUserIsAuthenticated: auth_1.middlewareCheckUserIsAuthenticated,
};
