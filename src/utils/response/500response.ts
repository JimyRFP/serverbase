import { FastifyReply, FastifyRequest } from "fastify";
import { JSONResponse } from "./json";

export function sendInternalError(req:FastifyRequest,reply:FastifyReply,err?:any){
    reply.status(500).send(JSONResponse({},"Internal Error"));
}