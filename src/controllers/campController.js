const { findById } = require("../models/campModel");
const Camp = require("../models/campModel");


const addCamp = async (req, res) => {

    try {
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



const getAvailableCamps = async (req, res) => {

    try {


        const data = await Camp.find({ upcoming: false }).sort({ createdAt: -1 });

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




const getUpcomingCamps = async (req, res) => {

    try {


        const data = await Camp.find({ upcoming: true }).sort({ createdAt: -1 });

        res.json({
            success: true,
            message: "All upcoming camps",
            data

        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }


}






const getPopularCamps = async (req, res) => {

    try {


        const data = await Camp.find({ popular: true }).sort({ createdAt: -1 }).limit(6);

        res.json({
            success: true,
            message: "All popular camps",
            data

        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }


}



const getCampsByOrganizer = async (req, res) => {

    try {
        const { email } = req.query;

        const data = await Camp.find({ organizer: email }).sort({ createdAt: -1 });

        res.json({
            success: true,
            message: "All camps by organizer ",
            data

        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }


}



const updateCamp = async (req, res) => {

    try {
        const { campId, name, image, fees, date, time, location, service, professional, target, description } = req.body;
        // console.log(obj)

        const data = await Camp.findByIdAndUpdate({ _id: campId }, { name, image, fees, date, time, location, service, professional, target, description });




        res.json({
            success: true,
            message: "Successfully Updated ! ",
            data

        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }


}


module.exports = { addCamp, getAvailableCamps, getUpcomingCamps, getPopularCamps, getCampsByOrganizer, updateCamp }