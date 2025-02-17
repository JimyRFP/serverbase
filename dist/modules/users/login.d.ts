import { FastifyInstance } from "fastify";
import { BaseServerUser } from "../../models/user";
declare module 'fastify' {
    interface Session {
        user?: BaseServerUser;
    }
}
export declare function userLoginRoute(path: string, app: FastifyInstance): void;
