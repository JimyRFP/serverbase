"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userInfoRoute = userInfoRoute;
const _500response_1 = require("../../utils/response/500response");
const auth_1 = require("../../middlewares/authentication/auth");
const json_1 = require("../../utils/response/json");
function userInfoRoute(path, app) {
    app.get(path, { preHandler: auth_1.middlewareCheckUserIsAuthenticated }, (req, rep) => {
        try {
            const user = req.user;
            if (!user)
                throw "Invalid User";
            return rep.send((0, json_1.JSONResponse)({ email: user.email, full_name: user.full_name, id: user.id }));
        }
        catch (e) {
            return (0, _500response_1.sendInternalError)(req, rep, e);
        }
    });
}
