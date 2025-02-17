import { FastifyReply, FastifyRequest } from "fastify";
import { BaseServerUser } from "../../models/user";
declare module "fastify" {
    interface FastifyRequest {
        user?: BaseServerUser;
    }
}
export declare function middlewareCheckUserIsAuthenticated(req: FastifyRequest, reply: FastifyReply): Promise<void>;
