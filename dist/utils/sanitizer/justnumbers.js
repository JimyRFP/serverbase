"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.keepJustNumbers = keepJustNumbers;
function keepJustNumbers(str) {
    let ret = '';
    for (let i = 0; i < str.length; i++) {
        let code = str.charCodeAt(i);
        if (code > 47 && code < 58) {
            ret += str[i];
        }
    }
    return ret;
}
