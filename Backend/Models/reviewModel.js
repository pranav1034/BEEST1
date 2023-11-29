import mongoose from "mongoose";

const reviewSchema= mongoose.Schema(
    {
        Content: {
            type: String,
            required: true,
        },
        Rating: {
            type: Number,
            required: true,
        },
        Author: {
            type: String,
            required: true,
        },
    }
)

export  const Review = mongoose.model('Review', reviewSchema);

