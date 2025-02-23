export declare enum DataValidationType {
    name = "name",
    email = "email",
    password = "password",
    number = "number",
    cpf = "cpf"
}
export interface ValidateParamsConfig {
    dataValidation: {
        [key: string]: {
            type: DataValidationType;
        };
    };
    source: 'body' | 'params';
}
