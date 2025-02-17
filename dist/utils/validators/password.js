"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidPassword = isValidPassword;
function isValidPassword(pass) {
    if (typeof (pass) !== 'string')
        return false;
    if (pass.length < 7)
        return false;
    return true;
}
