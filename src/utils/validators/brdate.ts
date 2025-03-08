export function isValidBrDate(str:any):boolean{
   if(typeof str!=='string')
      return false;
   let checkd=str.split('-');
   if(checkd.length!=3){
      checkd=str.split('/');
   }
   if(checkd.length!=3)
      return false;
   const day=parseInt(checkd[0]);
   const month=parseInt(checkd[1]);
   const year=parseInt(checkd[2]);
   if(day<1||day>31)
      return false;
   if(month<1||month>12)
      return false;
   if(year<1000||year>3000)
      return false;  
   return true;
}

