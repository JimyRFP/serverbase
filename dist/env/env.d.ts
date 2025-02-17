declare const ENV: {
    NODE_ENV: string;
    ALLOW_CORS: boolean;
    PORT: number;
    DATABASE: {
        dialect: string;
        port: any;
        host: any;
        database: any;
        username: any;
        password: string | undefined;
    };
    SESSION_SECRET: string;
};
export default ENV;
