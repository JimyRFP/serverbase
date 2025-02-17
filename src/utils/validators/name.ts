import { removeAccentuation } from "../string/accentuation";
export function isValidName(name:any){
     if(typeof(name)!=='string')
        return false;
     if(!name)
         return false;
     const tName=removeAccentuation(name);
     for(let i=0;i<tName.length;i++){
          const code=tName.charCodeAt(i);
          if(code>64&&code<91)
            continue;
          if(code>96&&code<123)
            continue;
          if(code==32)
            continue;
          return false;
     }
     return true;
}
