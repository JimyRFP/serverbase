import { FastifyReply, FastifyRequest } from "fastify";
import { ValidateParamsConfig } from "./types";
export declare function middlewareValidateParams(this: ValidateParamsConfig, request: FastifyRequest, reply: FastifyReply): Promise<void>;
