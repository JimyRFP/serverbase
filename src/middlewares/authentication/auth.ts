import fastify, { FastifyReply, FastifyRequest } from "fastify";
import { sendInternalError } from "../../utils/response/500response";
import { BaseServerUser } from "../../models/user";
import { JSONResponse } from "../../utils/response/json";

declare module "fastify"{
    interface FastifyRequest{
        user?:BaseServerUser
    }
}

export async function middlewareCheckUserIsAuthenticated(req:FastifyRequest,reply:FastifyReply){
   try{
       if(!req.session.user){
           return reply.status(401).send(JSONResponse({},"User must be logged"));
       }
       const user=req.session.user;
       if(!user.is_active||user.blocked){
          return reply.status(403).send(JSONResponse({},"User blocked, send email to suport"));
       }
       req.user=req.session.user;
       req.user.last_action=new Date();
       await req.user.save();
   }catch(e){
      return sendInternalError(req,reply,e);
   }
}