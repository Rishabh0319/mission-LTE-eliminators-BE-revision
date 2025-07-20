import mongoose from "mongoose";
import mongooseAggregatePaginateV2 from "mongoose-aggregate-paginate-v2";

const videoSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    videoFile: {
        type: String,           // cloudinary URL
        required: true
    },
    thumbnail: {
        type: String,                 // cloudinary URL
        required: true
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    duration: {
        type: Number,
        required: true
    },
    views: {
        type: Number,
        default: 0
    },
    isPublished: {
        type: Boolean,
        default: true
    }
}, { timestamps: true });

videoSchema.plugin(mongooseAggregatePaginateV2);

export const Video = mongoose.model("Video", videoSchema);