import { initSession } from "./session/session";
import { sessionDeleteUser, sessionSetUser } from "./session/set";

import { moduleInitUsers } from "./users/users";

export default{
     user:moduleInitUsers,
     session:initSession,
     sessionFuncions:{
           sessionSetUser,
           sessionDeleteUser,
     }
}