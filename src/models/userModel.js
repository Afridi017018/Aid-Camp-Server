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

        photo:{
            type: String,
            required: true
        },

        address: {
            type: String,
            default: "",
        },
        interests: {
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