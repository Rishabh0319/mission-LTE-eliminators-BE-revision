import { connect } from 'mongoose';
import { DB_NAME } from '../constants.js';

async function DBConnection() {
    try {
        const connectionInstances = await connect(`${process.env.DB_URI}/${DB_NAME}`);
        console.log(`MongoDB Connected on Host: ${connectionInstances.connection.host}`);
    } catch (error) {
        console.error(`MongoDB Connection fail: ${error}`);
        process.exit(1);
    }
}


export default DBConnection;