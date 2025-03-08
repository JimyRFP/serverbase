export enum DataValidationType{
    name='name',
    email='email',
    password='password',
    number='number',
    cpf='cpf',
    brDate='br_date',
}

export interface ValidateParamsConfig{
     dataValidation:{[key:string]:{
        type:DataValidationType,
     }},
     source:'body'|'params',
}