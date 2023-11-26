const mongoose = require('mongoose');

const campSchema = new mongoose.Schema(
    {

        name: {
            type: String,
            required: true,
            trim: true,
        },
        image: {
            type: String,
            required: true,
            trim: true,
        },
        fees: {
            type: Number,
            required: true,
        },
        date: {
            type: String,
            required: true,
        },
        time: {
            type: String,
            required: true,
        },
        location: {
            type: String,
            required: true,
            trim: true
        },
        service: {
            type: String,
            required: true,
        },
        professional: {
            type: String,
            required: true,
            trim: true
        },
        target: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        participant_count: {
            type: Number,
            default: 0,
        },
        professional_count: {
            type: Number,
            default: 0,
        },
        organizer: {
            type: String,
            required: true
        },
        upcoming: {
            type: Boolean,
            default: false
        },
        popular: {
            type: Boolean,
            default: false
        },


    },
    {
        timestamps: true,
    }
);

const Camp = mongoose.model("camps", campSchema);

module.exports = Camp;