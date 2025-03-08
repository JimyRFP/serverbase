"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const brdate_1 = require("./brdate");
const cpf_1 = require("./cpf");
const email_1 = require("./email");
const name_1 = require("./name");
const password_1 = require("./password");
exports.default = {
    isValidName: name_1.isValidName,
    isValidEmail: email_1.isValidEmail,
    isValidPassword: password_1.isValidPassword,
    isValidCPF: cpf_1.isValidCPF,
    isValidBrDate: brdate_1.isValidBrDate,
};
