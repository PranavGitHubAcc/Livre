import mongoose from "mongoose";

const journalSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, "Please enter a title for the entry."],
            maxLength: [50, "Title cannot exceed 200 charecters. "],
        },
        location: {
            type: String,
        },
        entry: {
            type: String,
            maxLength: [500, "Entry cannot be larger than 500 charecters"],
        },
        images: {
            base64url: String,
        },
        isPublic: {
            type: Boolean,
        },
    },
    { timestamps: true }
);

export default mongoose.model("Journal", journalSchema);
