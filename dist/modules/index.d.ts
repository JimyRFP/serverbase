import { initSession } from "./session/session";
import { moduleInitUsers } from "./users/users";
declare const _default: {
    user: typeof moduleInitUsers;
    session: typeof initSession;
};
export default _default;
