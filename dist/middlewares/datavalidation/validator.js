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
exports.middlewareValidateParams = middlewareValidateParams;
const types_1 = require("./types");
const name_1 = require("../../utils/validators/name");
const json_1 = require("../../utils/response/json");
const email_1 = require("../../utils/validators/email");
const password_1 = require("../../utils/validators/password");
function middlewareValidateParams(request, reply) {
    return __awaiter(this, void 0, void 0, function* () {
        const config = this;
        const validate = config.source == 'body' ? request.body : request.params;
        if (typeof (validate) !== 'object')
            return;
        const entries = Object.entries(validate);
        for (let obj of entries) {
            const val = config.dataValidation[obj[0]];
            if (!val)
                continue;
            switch (val.type) {
                case types_1.DataValidationType.name:
                    if (!(0, name_1.isValidName)(obj[1])) {
                        return reply.status(400).send((0, json_1.JSONResponse)({}, `Param ${obj[0]} must be a valid Name`));
                    }
                    break;
                case types_1.DataValidationType.email:
                    if (!(0, email_1.isValidEmail)(obj[1])) {
                        return reply.status(400).send((0, json_1.JSONResponse)({}, `Param ${obj[0]} must be a valid email`));
                    }
                    break;
                case types_1.DataValidationType.password:
                    if (!(0, password_1.isValidPassword)(obj[1])) {
                        return reply.status(400).send((0, json_1.JSONResponse)({}, `Param ${obj[0]} must be a valid password, have equal or more then 7 chars.`));
                    }
            }
        }
    });
}
