import  argon2  from "argon2";
export async function argon2GenerateHash(password:string){
    try{
       const hash=await argon2.hash(password);
       return hash;
    }catch(e){
        throw e;
    }
}

export async function argon2CheckPassword(password:string,hash:string){
    try{
      const result=await argon2.verify(hash,password);
      return result;
    }catch(e){
        throw e;
    }
}