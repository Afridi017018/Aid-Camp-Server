const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {

        name: {
            type: String,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            trim: true,
        },
        phone: {
            type: String,
            default: "",
        },

        address: {
            type: String,
            default: "",
        },
        interests: {
            type: String,
            default: "",
        },
        specialty: {
            type: String,
            default: null,
        },
        certifications: {
            type: String,
            default: null,
        },
        address: {
            type: String,
            default: "",
        },

        role: {
            type: String,
            required: true,
        },


    },
    {
        timestamps: true,
    }
);

const User = mongoose.model("users", userSchema);

module.exports = User;