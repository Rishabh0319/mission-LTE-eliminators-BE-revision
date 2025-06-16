import mongoose from 'mongoose';
import { DB_NAME } from '../constants.js';
const connectToDatabase = async () => {
    try {
        const connection = await mongoose.connect(`${process.env.DB_URI}/${DB_NAME}`);
        console.log(`Connected to database: ${connection.connection.host} PORT: ${connection.connection.port}`);
    } catch (error) {
        console.error('Database connection error:', error);
        process.exit(1);
    }
}

export default connectToDatabase;