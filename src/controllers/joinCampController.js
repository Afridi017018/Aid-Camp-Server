const Join = require("../models/joinCampModel");


const joinReg = async (req, res) => {
    try {

        const obj = req.body;

        const newJoin = new Join(obj);

        const data = await newJoin.save();

        res.json({
            success: true,
            message: "Registration Successful !",
            data

        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
}



const getRegCamps = async (req, res) => {
    try {

        const {email} = req.query;

        const data = await Join.find({email}).populate("campId").populate("userId").sort({createdAt: -1})

        res.json({
            success: true,
            message: "All Registered Camps !",
            data

        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
}


module.exports = { joinReg, getRegCamps }