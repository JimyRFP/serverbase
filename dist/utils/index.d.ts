import { normalizePath } from "./path";
declare const _default: {
    normalizePath: typeof normalizePath;
    string: {
        removeAccentuation: typeof import("./string/accentuation").removeAccentuation;
    };
    validators: {
        isValidName: typeof import("./validators/name").isValidName;
        isValidEmail: typeof import("./validators/email").isValidEmail;
        isValidPassword: typeof import("./validators/password").isValidPassword;
        isValidCPF: typeof import("./validators/cpf").isValidCPF;
        isValidBrDate: typeof import("./validators/brdate").isValidBrDate;
    };
    response: {
        JSONResponse: typeof import("./response/json").JSONResponse;
        sendInternalError: typeof import("./response/500response").sendInternalError;
    };
};
export default _default;
