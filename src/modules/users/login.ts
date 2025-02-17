import { FastifyInstance } from "fastify";
import { sendInternalError } from "../../utils/response/500response";
import { middlewareValidateParams } from "../../middlewares/datavalidation/validator";
import { DataValidationType } from "../../middlewares/datavalidation/types";
import { BaseServerUser } from "../../models/user";
import { JSONResponse } from "../../utils/response/json";
import { argon2CheckPassword } from "../../password/argon2";
const loginUserSchema={
    type:'object',
    required:['email','password'],
    properties:{
        email:{type:'string',format:'email'},
        password:{type:'string'},
    }
}

declare module 'fastify'{
    interface Session{
        user?:BaseServerUser
    }
}

export function userLoginRoute(path:string,app:FastifyInstance){
    app.post<{Body:{email:string,password:string}}>(path,{
        schema:{
            body:loginUserSchema,
        },
        preHandler:middlewareValidateParams.bind({source:'body',dataValidation:{email:{type:DataValidationType.email},password:{type:DataValidationType.password}}})
    },async (req,rep)=>{
       try{
          const {email,password}=req.body;
          const user=await BaseServerUser.findOne({where:{email,is_active:true,blocked:false}});
          if(!user){
              return rep.status(404).send(JSONResponse({},"User dont find"));
          }
          if(!(await argon2CheckPassword(password,user.password_hash))){
               return rep.status(403).send(JSONResponse({},"Invalid Password"));
          }
          user.last_action=new Date();
          await user.save();
          req.session.user=user;
          return rep.status(200).send(JSONResponse({email:user.email,id:user.id}));
       }catch(e){
          return sendInternalError(req,rep,e);
       }
    });
}