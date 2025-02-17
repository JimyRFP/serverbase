import { argon2CheckPassword, argon2GenerateHash } from "./argon2";
declare const _default: {
    argon2: {
        generate: typeof argon2GenerateHash;
        verify: typeof argon2CheckPassword;
    };
};
export default _default;
