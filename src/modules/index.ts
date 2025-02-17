import { initSession } from "./session/session";
import { registerUserModule } from "./users/register";
import { moduleInitUsers } from "./users/users";

export default{
     user:moduleInitUsers,
     session:initSession,
}