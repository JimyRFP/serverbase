import { argon2CheckPassword, argon2GenerateHash } from "./argon2";

export default {
   argon2:{
      generate:argon2GenerateHash,
      verify:argon2CheckPassword,
   }
}