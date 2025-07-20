import express from "express";
import dotenv from "dotenv";
import DBConnection from "./DB/DBConnection.js";

dotenv.config({ path: './.env' });

const app = express();
const PORT = process.env.PORT;


app.listen(PORT, () => {
    DBConnection();
    console.log(`Server is running on Port: ${PORT}`);
});