"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JSONResponse = JSONResponse;
function JSONResponse(data, error) {
    return {
        data,
        hasError: Boolean(error),
        error,
    };
}
;
