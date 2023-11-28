const mongoose = require('mongoose');

const professionalSchema = new mongoose.Schema(
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
        
        specialization: {
            type: String,
            required: true,
        },
        organizer: {
            type: String,
            required: true,
        },
        approve_status: {
            type: String,
            default: "pending"
        },


    },

    {
        timestamps: true,
    }
);

const Professional= mongoose.model("InterestedProfessionals", professionalSchema);

module.exports = Professional;