const Camp = require("../models/campModel");
const Join = require("../models/joinCampModel");
const { stripeSecretKey } = require("../secret");
const stripe = require('stripe')(stripeSecretKey);


const joinReg = async (req, res) => {
    try {

        const obj = req.body;


        const newJoin = new Join(obj);

        const data = await newJoin.save();

        if (!obj.interested) {
            const count = await Camp.findById({ _id: obj.campId });

            await Camp.findByIdAndUpdate({ _id: obj.campId }, { participant_count: count.participant_count + 1 })
        }
        // console.log(test)

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



const updateJoinReg = async (req, res) => {
    try {

        const { joinId, transaction, payment_status } = req.body;

        const data = await Join.findByIdAndUpdate({ _id: joinId }, { transaction, payment_status })

        // console.log(obj)

        // const newJoin = new Join(obj);

        // const data = await newJoin.save();

        res.json({
            success: true,
            message: "Payment Successful !",
            // data

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

        const { email } = req.query;

        const data = await Join.find({ email, interested: false }).populate("campId").populate("userId").sort({ createdAt: -1 })

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


const paymentHistory = async (req, res) => {
    try {

        const { email } = req.query;

        const data = await Join.find({ email, payment_status: "paid" }).populate("campId").populate("userId").sort({ createdAt: -1 })

        res.json({
            success: true,
            message: "All Paid Camps !",
            data

        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
}




const confirmedHistory = async (req, res) => {
    try {

        const { email } = req.query;

        const data = await Join.find({ email, confirmation_status: "confirmed" }).populate("campId").populate("userId").sort({ createdAt: -1 })

        res.json({
            success: true,
            message: "All Confirmed Camps !",
            data

        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
}



const getSingleRegCamps = async (req, res) => {
    try {

        const { id } = req.params;

        const data = await Join.findById({ _id: id }).populate("userId").populate("campId");

        res.json({
            success: true,
            message: "Single Registered Camp !",
            data

        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
}





const stripePayment = async (req, res) => {

    try {
        const { price } = req.body;
        const amount = parseInt(price * 100);
        // console.log(amount, 'amount inside the intent')

        const paymentIntent = await stripe.paymentIntents.create({
            amount: amount,
            currency: 'usd',
            payment_method_types: ['card']
        });

        // res.send({
        //   clientSecret: paymentIntent.client_secret
        // })


        res.json({
            success: true,
            message: "Payment info !",
            clientSecret: paymentIntent.client_secret

        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }


}





const deleteRegCamp = async (req, res) => {
    try {

        const { id } = req.params;

        const data = await Join.findByIdAndDelete({ _id: id })

        res.json({
            success: true,
            message: "Registered Camp Deleted !",
            data

        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
}





///organizer
const manageRegCamps = async (req, res) => {
    try {

        // console.log("hiiiiiiiiiiiiiiiiii")

        const { organizer } = req.query;
        // console.log(organizer)

        const data = await Join.find({ organizer, interested: false }).populate("campId").populate("userId").sort({ createdAt: -1 })
        // console.log(data)

        res.json({
            success: true,
            message: "Registered Camps !",
            data

        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
}


const updateConfirm = async (req, res) => {
    try {

        const { joinId } = req.body;

        const data = await Join.findByIdAndUpdate({ _id: joinId }, { confirmation_status: "confirmed" })


        res.json({
            success: true,
            message: "Confirmation Successful !",
            // data

        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
}



const getInterestedParticipants = async (req, res) => {
    try {

        const { id } = req.params;


        const data = await Join.find({ campId: id, interested: true }).populate("userId").populate("campId");

        // console.log(data)

        res.json({
            success: true,
            message: "All interested participants !",
            data

        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
}



const acceptInterestedParticipants = async (req, res) => {
    try {

        const { id } = req.params;

        const info = await Join.findByIdAndUpdate({ _id: id }, { interested: false });



        const count = await Camp.findById({ _id: info.campId.toString() });

        await Camp.findByIdAndUpdate({ _id: info.campId.toString() }, { participant_count: count.participant_count + 1 })


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




module.exports = { joinReg, getRegCamps, stripePayment, getSingleRegCamps, updateJoinReg, deleteRegCamp, paymentHistory, confirmedHistory, manageRegCamps, updateConfirm, getInterestedParticipants, acceptInterestedParticipants }