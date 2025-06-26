import mongoose from "mongoose";

const connectToDatabase = async () => {
    try {
        const connectionInstance = await mongoose.connect(process.env.DB_CONNECTION_URI);
        console.log(`\n mongoose connected to ${connectionInstance.connection.host} on port ${connectionInstance.connection.port}`);
    } catch (error) {
        console.error("database connection fail: ", error);
        process.exit(1);
    }
}


export default connectToDatabase;