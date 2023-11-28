const Camp = require("../models/campModel");
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



const getInterestedProfessionals = async (req, res) => {
    try {

        const { id } = req.params;

        // console.log(id)


        const data = await Professional.find({ campId: id }).populate("userId").populate("campId");

        // console.log(data)

        res.json({
            success: true,
            message: "All interested professionals !",
            data

        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
}



const acceptInterestedProfessionals = async (req, res) => {
    try {

        const { id } = req.params;
    

        const info = await Professional.findByIdAndUpdate({ _id: id },{approve_status: "accepted"}).populate("userId");

// console.log(info.userId.name)

        const data = await Camp.findById({ _id: info.campId.toString() });


        await Camp.findByIdAndUpdate({ _id: info.campId.toString() }, { professional_count: data.professional_count + 1, professional: [...data.professional, info.userId.name ] })


        // const info = await Professional.findById({ _id: id }).populate("userId");
        // console.log(info)






        // const info = await Professional.findById({ _id: id }).populate("userId");
         
        // console.log(info);



        // const count = await Camp.findById({ _id: info.campId.toString() });

        // const data = await Camp.findById({ _id: info.campId.toString() });

        // const dataa  = [...data.professional, "kkkk"]


        // console.log(dataa);


        res.json({
            success: true,
            message: "Accepted !",
            // data

        });

    } catch (error) {
        // console.log(error)
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
}



module.exports = {professionalReg, getInterestedProfessionals, acceptInterestedProfessionals}