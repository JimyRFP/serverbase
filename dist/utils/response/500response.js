"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendInternalError = sendInternalError;
const json_1 = require("./json");
function sendInternalError(req, reply, err) {
    reply.status(500).send((0, json_1.JSONResponse)({}, "Internal Error"));
}
