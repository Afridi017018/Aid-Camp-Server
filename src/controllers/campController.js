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



const getAvailableCamps = async (req,res)=>{

    try{
 
 
     const data = await Camp.find({}).sort({createdAt: -1});
 
     res.json({
         success: true,
         message: "All Camps",
         data
 
     });
 
 } catch (error) {
     res.status(500).json({
         success: false,
         message: error.message,
     });
 }
 
 
 }



module.exports = {addCamp, getAvailableCamps}