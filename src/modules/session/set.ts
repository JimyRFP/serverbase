import { FastifyRequest } from "fastify";
import { BaseServerUser } from "../../models/user";

export function sessionSetUser(req:FastifyRequest,user:BaseServerUser){
     req.session.user=user;
}
export function sessionDeleteUser(req:FastifyRequest){
       delete req.session.user;
}