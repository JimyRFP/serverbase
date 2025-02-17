"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initSession = initSession;
const session_1 = __importDefault(require("@fastify/session"));
const cookie_1 = __importDefault(require("@fastify/cookie"));
const env_1 = __importDefault(require("../../env/env"));
function initSession(app) {
    app.register(cookie_1.default);
    app.register(session_1.default, {
        secret: env_1.default.SESSION_SECRET,
        cookie: {
            secure: false
        }
    });
}
