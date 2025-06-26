import express from "express";
import cookieParser from "cookie-parser";
import path from "path";
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import dotenv from 'dotenv';
import connectToDatabase from "./db/database-connection.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// ✅ Load .env from root
dotenv.config({ path: path.join(__dirname, "../.env") });

const PORT = 3000;
const app = express();

// ✅ Set EJS as view engine and views path
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// ✅ Middleware
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ✅ Serve static files from root/public folder
app.use(express.static(path.join(__dirname, "../public")));

app.get('/', (req, res) => {
    res.render("index");
});

app.post('/create', async (req, res) => {

    let { username, email, password, age } = req.body;
    

})

app.listen(PORT, () => {
    console.log(`Server is running on Port: ${PORT}`);
    connectToDatabase();
});
