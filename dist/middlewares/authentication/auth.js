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
exports.middlewareCheckUserIsAuthenticated = middlewareCheckUserIsAuthenticated;
const _500response_1 = require("../../utils/response/500response");
const json_1 = require("../../utils/response/json");
function middlewareCheckUserIsAuthenticated(req, reply) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            if (!req.session.user) {
                return reply.status(401).send((0, json_1.JSONResponse)({}, "User must be logged"));
            }
            req.user = req.session.user;
            req.user.last_action = new Date();
            yield req.user.save();
        }
        catch (e) {
            return (0, _500response_1.sendInternalError)(req, reply, e);
        }
    });
}
