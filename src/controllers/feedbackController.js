const Feedback = require("../models/feedbackModel");

const giveFeedback = async(req,res)=>{
    try {
        
        const obj = req.body;

        const newFeedback = new Feedback(obj);

        const data = await newFeedback.save();


        res.json({
            success: true,
            message: "Thank You For The Feedback !",
            data

        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
}



module.exports = { giveFeedback }