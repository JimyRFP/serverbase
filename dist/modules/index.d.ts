import { initSession } from "./session/session";
import { sessionDeleteUser, sessionSetUser } from "./session/set";
import { moduleInitUsers } from "./users/users";
declare const _default: {
    user: typeof moduleInitUsers;
    session: typeof initSession;
    sessionFuncions: {
        sessionSetUser: typeof sessionSetUser;
        sessionDeleteUser: typeof sessionDeleteUser;
    };
};
export default _default;
