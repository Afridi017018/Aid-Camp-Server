const mongoose = require('mongoose');

const joinCampsSchema = new mongoose.Schema(
    {

        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "users",
            required: true,
        },
        interested:{
           type: Boolean,
           default: false
        },
        campId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "camps",
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        age: {
            type: Number,
            required: true,
        },
        gender: {
            type: String,
            required: true,
        },
        emergency: {
            type: String,
            required: true,
        },
        healthInfo: {
            type: String,
            required: true,
        },
        organizer: {
            type: String,
            required: true,
        },
        payment_status: {
            type: String,
            default: "unpaid"
        },
        confirmation_status: {
            type: String,
            default: "pending"
        },
        transaction: {
            type: String,
            default: ""
        },

    },

    {
        timestamps: true,
    }
);

const Join = mongoose.model("join-camps", joinCampsSchema);

module.exports = Join;