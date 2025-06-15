import dotenv from 'dotenv';
import connectToDatabase from './database/DB_connection.js';

dotenv.config({path: './.env'});

// Connect to the database
connectToDatabase();