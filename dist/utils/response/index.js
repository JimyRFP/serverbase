"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _500response_1 = require("./500response");
const json_1 = require("./json");
exports.default = {
    JSONResponse: json_1.JSONResponse,
    sendInternalError: _500response_1.sendInternalError,
};
