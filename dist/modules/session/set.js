"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sessionSetUser = sessionSetUser;
function sessionSetUser(req, user) {
    req.session.user = user;
}
