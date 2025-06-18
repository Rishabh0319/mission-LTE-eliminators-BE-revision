import mongoose from 'mongoose';

const PatientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    DignosedWith: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    bloodGroup: {
        type: String,
        enum: ["O+", "O-", "B+", "B-", "AB", "AB+", "AB-"]
    },
    age: {
        type: Number,
        required: true
    },
    gender: {
        type: String,
        enum: ["M", "F", "O"],
        required: true
    },
    admittedIn: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Hospital'
    }
}, { timestamps: true });

export const Patient = mongoose.model("Patient", PatientSchema);