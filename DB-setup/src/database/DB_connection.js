import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectToDatabase = async () => {
    try {
        console.log("DATABASE URI: ", process.env.DB_URI);

        const connectionInstance = await mongoose.connect(`${process.env.DB_URI}/${DB_NAME}`);
        console.log(`\n mongoose connected to ${connectionInstance.connection.host} on port ${connectionInstance.connection.port}`);
    } catch (error) {
        console.error("Error connecting to the database:", error);
        process.exit(1);
    }
}

export default connectToDatabase;