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
exports.userLoginRoute = userLoginRoute;
const _500response_1 = require("../../utils/response/500response");
const validator_1 = require("../../middlewares/datavalidation/validator");
const types_1 = require("../../middlewares/datavalidation/types");
const user_1 = require("../../models/user");
const json_1 = require("../../utils/response/json");
const argon2_1 = require("../../password/argon2");
const set_1 = require("../session/set");
const loginUserSchema = {
    type: 'object',
    required: ['email', 'password'],
    properties: {
        email: { type: 'string', format: 'email' },
        password: { type: 'string' },
    }
};
function userLoginRoute(path, app) {
    app.post(path, {
        schema: {
            body: loginUserSchema,
        },
        preHandler: validator_1.middlewareValidateParams.bind({ source: 'body', dataValidation: { email: { type: types_1.DataValidationType.email }, password: { type: types_1.DataValidationType.password } } })
    }, (req, rep) => __awaiter(this, void 0, void 0, function* () {
        try {
            const { email, password } = req.body;
            const user = yield user_1.BaseServerUser.findOne({ where: { email, is_active: true, blocked: false } });
            if (!user) {
                return rep.status(404).send((0, json_1.JSONResponse)({}, "User dont find"));
            }
            if (!(yield (0, argon2_1.argon2CheckPassword)(password, user.password_hash))) {
                return rep.status(403).send((0, json_1.JSONResponse)({}, "Invalid Password"));
            }
            user.last_action = new Date();
            yield user.save();
            (0, set_1.sessionSetUser)(req, user);
            return rep.status(200).send((0, json_1.JSONResponse)({ email: user.email, id: user.id }));
        }
        catch (e) {
            return (0, _500response_1.sendInternalError)(req, rep, e);
        }
    }));
}
