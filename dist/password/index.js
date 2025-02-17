"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const argon2_1 = require("./argon2");
exports.default = {
    argon2: {
        generate: argon2_1.argon2GenerateHash,
        verify: argon2_1.argon2CheckPassword,
    }
};
