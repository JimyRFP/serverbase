import { isAlphaNum } from "./alphanum";

export function isValidEmail(email:any){
    if(typeof(email)!=='string')
        return false;
    const parts=email.split('@');
    if(parts.length!==2)
        return false;
    if(!isValidDomain(parts[1])) 
        return false;
    if(!isValidUserName(parts[0]))
        return false
    return true;   
}
function isValidUserName(name:string){
    const parts=name.split('.');
    for(let part of parts){
        if(part.length<1)
            return false;
        if(!isAlphaNum(part[0]))
            return false;
        if(!checkChars(part))
            return false;
    }
    return true;
    function checkChars(dn:string){
        for(let i=1;i<dn.length;i++){
            const code=dn.charCodeAt(i);
            if(code>47&&code<58)
                continue;
            if(code>64&&code<91)
               continue;
            if(code>96&&code<123)
               continue;
            if(code==45||code==95)
                continue;
            return false;
        }
        return true;
    }
}
function isValidDomain(dm:string){
    const parts=dm.split('.');
    if(parts.length<2)
        return false;
    for(let part of parts){
        if(isValidDomainName(part))
            continue;
        return false;
    }
    return true;
    function isValidDomainName(dn:string){
        if(dn.length<1)
            return false;
        if(!isAlphaNum(dn[0]))
            return false;
        for(let i=1;i<dn.length;i++){
            const code=dn.charCodeAt(i);
            if(code>47&&code<58)
                continue;
            if(code>64&&code<91)
               continue;
            if(code>96&&code<123)
               continue;
            if(code==45)
                continue;
            return false;
        }
        return true;
    }
}