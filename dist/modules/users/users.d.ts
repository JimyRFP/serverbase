import { FastifyInstance } from "fastify";
import { ModuleUsersInitOptions } from "./types";
export declare function moduleInitUsers(app: FastifyInstance, options?: ModuleUsersInitOptions): Promise<{
    pathBase: string;
    pathUserRegister: string;
    pathUserAuth: string;
    pathUserInfo: string;
}>;
