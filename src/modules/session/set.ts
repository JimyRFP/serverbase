import { FastifyRequest } from "fastify";
import { BaseServerUser } from "../../models/user";

export function sessionSetUser(req:FastifyRequest,user:BaseServerUser){
     req.session.user=user;
}