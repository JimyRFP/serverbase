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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.argon2GenerateHash = argon2GenerateHash;
exports.argon2CheckPassword = argon2CheckPassword;
const argon2_1 = __importDefault(require("argon2"));
function argon2GenerateHash(password) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const hash = yield argon2_1.default.hash(password);
            return hash;
        }
        catch (e) {
            throw e;
        }
    });
}
function argon2CheckPassword(password, hash) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const result = yield argon2_1.default.verify(hash, password);
            return result;
        }
        catch (e) {
            throw e;
        }
    });
}
