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


const getUserInfo = async(req,res)=>{
    try {
        
        const {email} = req.query;

        const data = await User.findOne({email});

        res.json({
            success: true,
            message: "User's Information",
            data

        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
}

const updateUserInfo = async(req,res)=>{
    try {
        
        const {email,name,phone,interests} = req.body;

        console.log(req.body)

        const data = await User.findOneAndUpdate({email},{name,phone,interests});

        res.json({
            success: true,
            message: "Profile Information Updated !",
            data

        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
}


module.exports = {userInfo, getUserInfo, updateUserInfo}