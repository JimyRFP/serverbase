declare const _default: {
    app: import("fastify").FastifyInstance<import("http").Server<typeof import("http").IncomingMessage, typeof import("http").ServerResponse>, import("http").IncomingMessage, import("http").ServerResponse<import("http").IncomingMessage>, import("fastify").FastifyBaseLogger, import("fastify").FastifyTypeProviderDefault> & PromiseLike<import("fastify").FastifyInstance<import("http").Server<typeof import("http").IncomingMessage, typeof import("http").ServerResponse>, import("http").IncomingMessage, import("http").ServerResponse<import("http").IncomingMessage>, import("fastify").FastifyBaseLogger, import("fastify").FastifyTypeProviderDefault>> & {
        __linterBrands: "SafePromiseLike";
    };
    modules: {
        user: typeof import("./modules/users/users").moduleInitUsers;
        session: typeof import("./modules/session/session").initSession;
        sessionFuncions: {
            sessionSetUser: typeof import("./modules/session/set").sessionSetUser;
            sessionDeleteUser: typeof import("./modules/session/set").sessionDeleteUser;
        };
    };
    dataBase: {
        sequelizeInstance: import("sequelize").Sequelize;
        models: {
            BaseServerUser: typeof import("./models/user").BaseServerUser;
        };
    };
    utils: {
        normalizePath: typeof import("./utils/path").normalizePath;
        string: {
            removeAccentuation: typeof import("./utils/string/accentuation").removeAccentuation;
        };
        validators: {
            isValidName: typeof import("./utils/validators/name").isValidName;
            isValidEmail: typeof import("./utils/validators/email").isValidEmail;
            isValidPassword: typeof import("./utils/validators/password").isValidPassword;
            isValidCPF: typeof import("./utils/validators/cpf").isValidCPF;
            isValidBrDate: typeof import("./utils/validators/brdate").isValidBrDate;
        };
        response: {
            JSONResponse: typeof import("./utils/response/json").JSONResponse;
            sendInternalError: typeof import("./utils/response/500response").sendInternalError;
        };
    };
    password: {
        argon2: {
            generate: typeof import("./password/argon2").argon2GenerateHash;
            verify: typeof import("./password/argon2").argon2CheckPassword;
        };
    };
    middlewares: {
        middlewareValidateParams: typeof import("./middlewares/datavalidation/validator").middlewareValidateParams;
        middlewareCheckUserIsAuthenticated: typeof import("./middlewares/authentication/auth").middlewareCheckUserIsAuthenticated;
    };
};
export default _default;
