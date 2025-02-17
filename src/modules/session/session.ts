import { FastifyInstance } from "fastify";
import fastifySession from "@fastify/session";
import fastifyCookie from '@fastify/cookie';
import ENV from "../../env/env";
export function initSession(app:FastifyInstance){
    app.register(fastifyCookie);
    app.register(fastifySession,{
        secret:ENV.SESSION_SECRET,
        cookie:{
            secure:false
        }
    });   
    
}