export function JSONResponse(data:any,error?:any){
    return {
        data,
        hasError:Boolean(error),
        error,
    };
};