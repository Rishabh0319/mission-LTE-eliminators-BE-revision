import mongoose from 'mongoose';
import { DB_NAME } from '../constents.js';

const connectToDatabase = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.DB_URI}/${DB_NAME}`);
        console.log(`Connected to the database: ${connectionInstance.connection.host} and PORT: ${connectionInstance.connection.port}`);
    } catch (error) {
        console.log("Error connecting to the database:", error);
        process.exit(1);
    }
}

export default connectToDatabase;
