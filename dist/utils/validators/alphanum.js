"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAlphaNum = isAlphaNum;
function isAlphaNum(char) {
    const code = char.charCodeAt(0);
    if (code > 47 && code < 58)
        return true;
    if (code > 64 && code < 91)
        return true;
    if (code > 96 && code < 123)
        return true;
    return false;
}
