export function isValidBrDate(bt:any){
    if(typeof(bt)!=='string')
       return false;
    let div=bt.split('-');
    if(div.length!==3){
        div=bt.split('/');
    }
    if(div.length!==3)
         return false;
    const day=div[0];
    const month=div[1];
    const year=div[2];
    if(day.length!==2||month.length!==2||year.length!==4)
        return false;
    const iDay=parseInt(day);
    const iMonth=parseInt(month);
    const iYear=parseInt(year);
    if(iDay<1||iDay>31)
       return false;
    if(iMonth<1||iMonth>12)
       return false;
    const date=new Date(iYear,iMonth,iDay);
    const now=new Date();
    if(isNaN(date.getTime()))
       return false;
    if(date.getTime()>now.getTime())
       return false;
    return true; 
}



