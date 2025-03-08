"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sessionSetUser = sessionSetUser;
exports.sessionDeleteUser = sessionDeleteUser;
function sessionSetUser(req, user) {
    req.session.user = user;
}
function sessionDeleteUser(req) {
    delete req.session.user;
}
