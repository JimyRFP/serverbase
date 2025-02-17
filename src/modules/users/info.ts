import { FastifyInstance } from "fastify";
import { sendInternalError } from "../../utils/response/500response";
import { middlewareCheckUserIsAuthenticated } from "../../middlewares/authentication/auth";
import { JSONResponse } from "../../utils/response/json";

export function userInfoRoute(path:string,app:FastifyInstance){
    app.get(path,{preHandler:middlewareCheckUserIsAuthenticated},(req,rep)=>{
       try{
          const user=req.user;
          if(!user)
             throw "Invalid User";

          return rep.send(JSONResponse({email:user.email,full_name:user.full_name,id:user.id}));
       }catch(e){
          return sendInternalError(req,rep,e);
       }
    });
}