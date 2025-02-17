"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidName = isValidName;
const accentuation_1 = require("../string/accentuation");
function isValidName(name) {
    if (typeof (name) !== 'string')
        return false;
    if (!name)
        return false;
    const tName = (0, accentuation_1.removeAccentuation)(name);
    for (let i = 0; i < tName.length; i++) {
        const code = tName.charCodeAt(i);
        if (code > 64 && code < 91)
            continue;
        if (code > 96 && code < 123)
            continue;
        if (code == 32)
            continue;
        return false;
    }
    return true;
}
