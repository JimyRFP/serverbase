import path from 'path';
export function normalizePath(...paths:string[]){
   const result=path.join(...paths);
   if(!result)
      return "";
 
   return result;
}
