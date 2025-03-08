import {  FastifyReply, FastifyRequest } from "fastify";
import { DataValidationType, ValidateParamsConfig } from "./types";
import { isValidName } from "../../utils/validators/name";
import { JSONResponse } from "../../utils/response/json";
import { isValidEmail } from "../../utils/validators/email";
import { isValidPassword } from "../../utils/validators/password";
import { isValidCPF } from "../../utils/validators/cpf";
import { isValidBrDate } from "../../utils/validators/brdate";

export async function middlewareValidateParams(this:ValidateParamsConfig,request:FastifyRequest,reply:FastifyReply):Promise<void>{
     const config=this;
     const validate:any=config.source=='body'?request.body:request.params;
     if(typeof(validate)!=='object')
        return;
     const entries=Object.entries(validate);
     for(let obj of entries){
          const val=config.dataValidation[obj[0]];
          if(!val)
            continue;
          switch(val.type){
              case DataValidationType.cpf:
                  if(!isValidCPF(obj[1])){
                    return reply.status(400).send(JSONResponse({},`Param ${obj[0]} must be a valid cpf`));
                  }
                  break;
              case DataValidationType.name:
                  if(!isValidName(obj[1])){
                      return reply.status(400).send(JSONResponse({},`Param ${obj[0]} must be a valid Name`));
                  }
                  break;
              case DataValidationType.email:
                  if(!isValidEmail(obj[1])){
                    return reply.status(400).send(JSONResponse({},`Param ${obj[0]} must be a valid email`)); 
                  }
                  break;    
              case DataValidationType.password:
                 if(!isValidPassword(obj[1])){
                    return reply.status(400).send(JSONResponse({},`Param ${obj[0]} must be a valid password, have equal or more then 7 chars.`)); 
                 }   
                 break;
              case DataValidationType.brDate:
                 if(!isValidBrDate(obj[1])){
                  return reply.status(400).send(JSONResponse({},`Param ${obj[0]} must be a valid BR DATE dd/mm/yyyy.`)); 
                 }
                 break;    
          }
     }
}