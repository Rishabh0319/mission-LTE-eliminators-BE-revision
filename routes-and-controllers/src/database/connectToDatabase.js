import mongoose from 'mongoose';
import { DB_NAME } from '../constants.js';

const connectToDatabase = async () => {
    try {
        const db_instance = await mongoose.connect(`${process.env.DB_URI}/${DB_NAME}`);
        console.log(`Database is Connected Successfully port: ${db_instance.connection.port} `);
        
    } catch (error) {
        console.error(`Database is not connected: ${error}`);
        process.exit(1);
    }
}


export default connectToDatabase;