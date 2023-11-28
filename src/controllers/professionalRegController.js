const Professional = require("../models/professionalRegModel");

const professionalReg = async (req, res) => {
    try {

        const obj = req.body;


        const newReg = new Professional(obj);

        const data = await newReg.save();


        res.json({
            success: true,
            message: "Registration Successful !",
            data

        });

    } catch (error) {
        // console.log(error)
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
}



module.exports = {professionalReg}