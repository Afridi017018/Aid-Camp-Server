const User = require("../models/userModel");




const userInfo = async(req,res)=>{
    try {
        
        const user = req.body;

        const newUser = new User(user);

        const data = await newUser.save();

        res.json({
            success: true,
            message: "User logged in successfully",
            data

        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
}


module.exports = {userInfo}