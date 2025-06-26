import { model, Schema } from "mongoose";

const userSchema = new Schema({
    username: String,
    email: String,
    password: String,
    age: String
}, { timestamps: true });

export const User = model(userSchema, "User");