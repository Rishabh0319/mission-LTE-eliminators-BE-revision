import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
    content: {
        type: String,
        require: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    subTodos: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "subTodos"
    }
}, { timestamps: true });

export const todos = mongoose.model("todos", todoSchema);