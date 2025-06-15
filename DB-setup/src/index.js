import dotenv from 'dotenv';
import connectToDatabase from './database/DB_connection.js';

dotenv.config({ path: './.env' });

connectToDatabase();

