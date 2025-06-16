import dotenv from 'dotenv';
import express from 'express';
import connectToDatabase from './database/DB-connection.js';
import cors from 'cors';
dotenv.config({ path: './.env' });

const app = express();
const PORT = process.env.PORT || 3000;

//middlewares
app.use(cors({
    origin: process.env.CORS_ORIGIN || '*',
    credentials: true,
}));
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true }));


connectToDatabase().then(() => {
    app.listen(PORT, () => {
        console.log(`server is running on PORT: ${PORT}`)
    })
}).catch((error) => {
    console.error.error(`Fail to connect to Database: ${error.message}`);
    process.exit(1);
})


