"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.moduleInitUsers = moduleInitUsers;
const types_1 = require("./types");
const register_1 = require("./register");
const path_1 = require("../../utils/path");
const session_1 = require("../session/session");
const login_1 = require("./login");
const info_1 = require("./info");
function moduleInitUsers(app, options) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const blockRegister = options === null || options === void 0 ? void 0 : options.blockRegister;
            const blockedAuth = options === null || options === void 0 ? void 0 : options.blockAuth;
            const blockedUserInfo = options === null || options === void 0 ? void 0 : options.blockUserInfo;
            const pathBase = (options === null || options === void 0 ? void 0 : options.pathBase) || types_1.ROUTE_USERS_BASE_PATH;
            const pathUserRegister = (0, path_1.normalizePath)(pathBase, (options === null || options === void 0 ? void 0 : options.pathUserRegister) || 'register');
            const pathUserAuth = (0, path_1.normalizePath)(pathBase, (options === null || options === void 0 ? void 0 : options.pathUserAuth) || 'auth');
            const pathUserInfo = (0, path_1.normalizePath)(pathBase, (options === null || options === void 0 ? void 0 : options.pathUserInfo) || 'info');
            if (!blockRegister) {
                yield (0, register_1.registerUserModule)(pathUserRegister, app);
            }
            if (!blockedAuth) {
                yield (0, session_1.initSession)(app);
                yield (0, login_1.userLoginRoute)(pathUserAuth, app);
            }
            if (!blockedUserInfo) {
                yield (0, info_1.userInfoRoute)(pathUserInfo, app);
            }
            return {
                pathBase,
                pathUserRegister,
                pathUserAuth,
                pathUserInfo,
            };
        }
        catch (e) {
            throw e;
        }
    });
}
