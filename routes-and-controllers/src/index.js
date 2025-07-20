import dotenv from 'dotenv';
import connectToDatabase from './database/connectToDatabase.js';
import { app } from './app.js';
dotenv.config({ path: './.env' });


app.listen(process.env.PORT || 3000, () => {
    console.log(`Server is Running on PORT: ${process.env.PORT}`);
    connectToDatabase();
})