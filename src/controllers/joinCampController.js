const Join = require("../models/joinCampModel");
const { stripeSecretKey } = require("../secret");
const stripe = require('stripe')(stripeSecretKey);


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



const updateJoinReg = async (req, res) => {
    try {

        const {joinId, transaction, payment_status} = req.body;

        const data = await Join.findByIdAndUpdate({_id: joinId}, {transaction, payment_status})

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


const getSingleRegCamps = async (req, res) => {
    try {

        const {id} = req.params;

        const data = await Join.findById({_id: id}).populate("userId").populate("campId");

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

    try{
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

        const {id} = req.params;

        const data = await Join.findByIdAndDelete({_id: id})

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



module.exports = { joinReg, getRegCamps, stripePayment,getSingleRegCamps, updateJoinReg, deleteRegCamp }