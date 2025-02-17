import { FastifyInstance } from "fastify";
import { ModuleUsersInitOptions, ROUTE_USERS_BASE_PATH } from "./types";
import { registerUserModule } from "./register";
import { normalizePath } from "../../utils/path";
import { initSession } from "../session/session";
import { userLoginRoute } from "./login";
import { userInfoRoute } from "./info";

export async function moduleInitUsers(app:FastifyInstance,options?:ModuleUsersInitOptions){
  try{
       const blockRegister=options?.blockRegister;
       const blockedAuth=options?.blockAuth;
       const blockedUserInfo=options?.blockUserInfo;
       const pathBase=options?.pathBase||ROUTE_USERS_BASE_PATH;
       const pathUserRegister=normalizePath(pathBase,options?.pathUserRegister||'register');
       const pathUserAuth=normalizePath(pathBase,options?.pathUserAuth||'auth');
       const pathUserInfo=normalizePath(pathBase,options?.pathUserInfo||'info');
       if(!blockRegister){
             await registerUserModule(pathUserRegister,app);
       }
       if(!blockedAuth){
          await initSession(app);
          await userLoginRoute(pathUserAuth,app);
       }
       if(!blockedUserInfo){
         await userInfoRoute(pathUserInfo,app);
       }
       return {
         pathBase,
          pathUserRegister,
          pathUserAuth,
          pathUserInfo,
       }
  }catch(e){
     throw e;
  }
}