import { config as dotenv } from 'dotenv';
import mongoose, { MongooseError } from 'mongoose';
dotenv();

export const config = {
    server: {
        port: parseInt(process.env.PORT, 10),
        mode: process.env.NODE_ENV,
    },
    database: async () => {
        await mongoose.connect(process.env.MONGODB_URI);

        mongoose.connection.on('error', (e: MongooseError) => {
            console.log(`We encountered the following error while trying to connect to the database: ${e.message}`)
        });

        mongoose.connection.on('open', () => {
            console.info('Mongo Database connection successful');
        });
    }

}