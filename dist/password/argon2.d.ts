export declare function argon2GenerateHash(password: string): Promise<string>;
export declare function argon2CheckPassword(password: string, hash: string): Promise<boolean>;
