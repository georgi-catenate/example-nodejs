import mongoose, { Mongoose } from 'mongoose';
import { IServerConfiguration } from '../interfaces/constants/server-configuration.interface';

export const getDbConnection = async (configurations: IServerConfiguration): Promise<Mongoose> => {
    try {
        const mongoOptions = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        };

        const mongooseClient = await mongoose.connect(`${configurations.DB_CONNECTION_STRING}/${configurations.DB_NAME}`, mongoOptions);
        console.log('🌴 Database connection was successful!');

        return mongooseClient;
    } catch (error) {
        console.error('ERROR: Database connection failed!!', error);
        throw error;
    }
};
