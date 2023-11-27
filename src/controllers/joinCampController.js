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



module.exports = { joinReg }