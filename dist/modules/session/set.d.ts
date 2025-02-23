import { FastifyRequest } from "fastify";
import { BaseServerUser } from "../../models/user";
export declare function sessionSetUser(req: FastifyRequest, user: BaseServerUser): void;
