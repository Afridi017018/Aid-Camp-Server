const express = require('express');
const { joinReg, getRegCamps, stripePayment, getSingleRegCamps, updateJoinReg, deleteRegCamp, paymentHistory } = require('../controllers/joinCampController');


const router = express.Router();

router.post('/join-reg', joinReg )
router.get('/get-reg-camps', getRegCamps )
router.get('/get-single-reg-camp/:id', getSingleRegCamps )



router.put('/update-join-reg', updateJoinReg )

router.post('/create-payment-intent', stripePayment);

router.get('/payment-history', paymentHistory )

router.delete('/delete-reg-camp/:id',deleteRegCamp)

module.exports = router;