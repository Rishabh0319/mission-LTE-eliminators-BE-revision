import cors from 'cors';
import cookieparser from 'cookie-parser';
import express from 'express';

const app = express();

// middlewares
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))
app.use(express.json({ limit: '50kb' }));
app.use(express.urlencoded({ limit: '50kb', extended: true }));
app.use(express.static('public'));
app.use(cookieparser());

// routes import 
import router from './routes/user.routes.js';

export {express}