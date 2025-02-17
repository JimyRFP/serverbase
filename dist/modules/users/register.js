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
exports.registerUserModule = registerUserModule;
const validator_1 = require("../../middlewares/datavalidation/validator");
const types_1 = require("../../middlewares/datavalidation/types");
const user_1 = require("../../models/user");
const json_1 = require("../../utils/response/json");
const argon2_1 = require("../../password/argon2");
const _500response_1 = require("../../utils/response/500response");
const registerUserSchema = {
    type: 'object',
    required: ['name', 'email', 'password'],
    properties: {
        name: { type: 'string' },
        email: { type: 'string', format: 'email' },
        password: { type: 'string' },
    }
};
function registerUserModule(path, app) {
    app.post(path, {
        schema: {
            body: registerUserSchema,
        },
        preHandler: validator_1.middlewareValidateParams.bind({ source: 'body', dataValidation: { name: { type: types_1.DataValidationType.name }, email: { type: types_1.DataValidationType.email }, password: { type: types_1.DataValidationType.password } } })
    }, (req, reply) => __awaiter(this, void 0, void 0, function* () {
        try {
            const { name, email, password } = req.body;
            let user = yield user_1.BaseServerUser.findOne({ where: { email, is_active: true } });
            if (user) {
                return reply.status(401).send((0, json_1.JSONResponse)({}, "This user is registered"));
            }
            const hash = yield (0, argon2_1.argon2GenerateHash)(password);
            user = yield user_1.BaseServerUser.create({
                password_hash: hash,
                full_name: name,
                email,
                last_action: new Date(),
            });
            return reply.status(201).send((0, json_1.JSONResponse)({ email: user.email, id: user.id }));
        }
        catch (e) {
            return (0, _500response_1.sendInternalError)(req, reply, e);
        }
    }));
}
