const express = require('express');
const { joinReg, getRegCamps, stripePayment, getSingleRegCamps, updateJoinReg } = require('../controllers/joinCampController');


const router = express.Router();

router.post('/join-reg', joinReg )
router.get('/get-reg-camps', getRegCamps )
router.get('/get-single-reg-camp/:id', getSingleRegCamps )


router.put('/update-join-reg', updateJoinReg )

router.post('/create-payment-intent', stripePayment);


module.exports = router;