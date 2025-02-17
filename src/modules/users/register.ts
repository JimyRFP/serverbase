import { FastifyInstance, FastifySchema } from "fastify";
import { BodyRegisterUser } from "./types";
import { middlewareValidateParams } from "../../middlewares/datavalidation/validator";
import { DataValidationType } from "../../middlewares/datavalidation/types";
import { BaseServerUser } from "../../models/user";
import { JSONResponse } from "../../utils/response/json";
import { argon2GenerateHash } from "../../password/argon2";
import { sendInternalError } from "../../utils/response/500response";

const registerUserSchema={
    type:'object',
    required:['name','email','password'],
    properties:{
        name:{type:'string'},
        email:{type:'string',format:'email'},
        password:{type:'string'},
    }
}

export function registerUserModule(path:string,app:FastifyInstance){
    app.post<{Body:BodyRegisterUser}>(path,{
        schema:{
            body:registerUserSchema,
        },
        preHandler:middlewareValidateParams.bind({source:'body',dataValidation:{name:{type:DataValidationType.name},email:{type:DataValidationType.email},password:{type:DataValidationType.password}}})
    },async (req,reply)=>{
        try{
            const {name,email,password}=req.body;
            let user=await BaseServerUser.findOne({where:{email,is_active:true}});        
            if(user){
                return reply.status(401).send(JSONResponse({},"This user is registered"));
            }
            const hash=await argon2GenerateHash(password);
            user=await BaseServerUser.create({
                password_hash:hash,
                full_name:name,
                email,
                last_action:new Date(), 
            });
            return reply.status(201).send(JSONResponse({email:user.email,id:user.id}));
        }catch(e){
             return sendInternalError(req,reply,e);
        }
    })
}
