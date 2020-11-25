export interface IServerConfiguration {
    SERVER_PORT: number;
    DB_USERNAME: string;
    DB_PASSWORD: string;
    DB_NAME: string;
    DB_HOST: string;
    DB_PORT: string;
}

export interface IProcessEnv {
    [key: string]: string | undefined;
}
