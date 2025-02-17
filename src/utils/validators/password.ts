export function isValidPassword(pass:any){
   if(typeof(pass)!=='string')
      return false;
   if(pass.length<7)
      return false;
   return true;
}


