const Camp = require("../models/campModel");


const addCamp = async (req,res)=>{

   try{
    const obj = req.body;

    const newCamp = new Camp(obj)

    const data = await newCamp.save();

    res.json({
        success: true,
        message: "Camp Added !",
        data

    });

} catch (error) {
    res.status(500).json({
        success: false,
        message: error.message,
    });
}


}



module.exports = {addCamp}