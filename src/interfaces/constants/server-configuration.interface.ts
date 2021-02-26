export interface IServerConfiguration {
    SERVER_PORT: number;
    DB_CONNECTION_STRING: string;
    DB_USERNAME: string;
    DB_NAME: string;
}

export interface IProcessEnv {
    [key: string]: string | undefined;
}
