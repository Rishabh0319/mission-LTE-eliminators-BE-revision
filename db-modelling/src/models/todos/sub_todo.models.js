import mongoose from "mongoose";

const subTodosSchema = mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
}, { timestamps: true });

export const subTodos = mongoose.model('subTodos', subTodosSchema);