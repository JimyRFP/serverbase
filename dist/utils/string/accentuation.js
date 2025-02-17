"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeAccentuation = removeAccentuation;
function removeAccentuation(str) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}
