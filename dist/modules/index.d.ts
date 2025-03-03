import { initSession } from "./session/session";
import { sessionSetUser } from "./session/set";
import { moduleInitUsers } from "./users/users";
declare const _default: {
    user: typeof moduleInitUsers;
    session: typeof initSession;
    sessionFuncions: {
        sessionSetUser: typeof sessionSetUser;
    };
};
export default _default;
