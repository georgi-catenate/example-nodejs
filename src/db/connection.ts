import { Connection, ConnectionOptions, createConnection } from 'typeorm';

export const getDbConnection = async (ORMConfig: ConnectionOptions): Promise<Connection> => {
    try {
        const connection = await createConnection(ORMConfig);
        console.log('🌴 Database connection was successful!');
        return connection;
    } catch (error) {
        console.error('ERROR: Database connection failed!!', error);
        throw error;
    }
};
