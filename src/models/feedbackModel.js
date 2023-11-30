const mongoose = require('mongoose');

const feedbacksSchema = new mongoose.Schema(
    {

        participant: {
            type: String,
            required: true,
        },
        campId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "camps",
            required: true,
        },
        photo: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        rating: {
            type: Number,
            required: true,
        },
        feedback: {
            type: String,
            required: true,
        },

    },

    {
        timestamps: true,
    }
);

const Feedback = mongoose.model("feedbacks", feedbacksSchema);

module.exports = Feedback;