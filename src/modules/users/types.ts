export const ROUTE_USERS_BASE_PATH='/user';

export interface ModuleUsersInitOptions{
    blockRegister?:boolean,
    blockAuth?:boolean,
    blockUserInfo?:boolean,
    pathUserInfo?:string,
    pathBase?:string,
    pathUserRegister?:string,
    pathUserAuth?:string,
}
export interface BodyRegisterUser{
     email:string,
     name:string,
     password:string,
}