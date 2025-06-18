import mongoose, { Schema } from 'mongoose';

const DoctorSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    salary: {
        type: Number,
        required: true
    },
    qualification: {
        type: String,
        required: true
    },
    experienceInYears: {
        type: Number,
        required: true,
        default: true
    },
    worksInHospital: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Hospital"
        }
    ]
}, { timestamps: true });

export const Doctors = mongoose.model("Doctors", DoctorSchema);