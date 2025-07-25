import express from "express";
import dotenv from "dotenv";
import DBConnection from "./DB/DBConnection.js";
import cors from 'cors';
import cookieParser from 'cookie-parser';

// .ENV configure
dotenv.config({ path: './.env' });
const PORT = process.env.PORT;
const app = express();

// middlewares
app.use(express.urlencoded({ extended: true }));     // for handling data coming from URL
app.use(express.json({ limit: "16kb" }));            // for handle json data or say REST API data
app.use(express.static('public'));                   // for store and handle statice file coming from client like: .pdf
app.use(cors({
    path: process.env.CORS_ORIGIN,
    credentials: true
}));                                                 // for handling cros origin requestes and restrictions
app.use(cookieParser());                             // for access and set the cookies which are coming from client or browser


//routes import
import userRouter from './routes/user.route.js';

// routes declaration
app.use("/api/v1/users", userRouter);


DBConnection()
    .then(() => {
        app.listen(PORT || 8000, () => {
            console.log(`Server is running on Port: ${PORT}`);
        });
    })
    .catch((err) => {
        console.error(`MongoDB connection Fail: ${err}`);
    });

