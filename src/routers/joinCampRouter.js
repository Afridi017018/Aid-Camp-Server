const express = require('express');
const { joinReg, getRegCamps, stripePayment, getSingleRegCamps, updateJoinReg, deleteRegCamp, paymentHistory, confirmedHistory, manageRegCamps, updateConfirm, getInterestedParticipants, acceptInterestedParticipants } = require('../controllers/joinCampController');


const router = express.Router();

router.post('/join-reg', joinReg )
router.get('/get-reg-camps', getRegCamps )
router.get('/get-single-reg-camp/:id', getSingleRegCamps )



router.put('/update-join-reg', updateJoinReg )

router.post('/create-payment-intent', stripePayment);

router.get('/payment-history', paymentHistory )

router.get('/confirmed-history', confirmedHistory )

router.delete('/delete-reg-camp/:id',deleteRegCamp)

//organizer
router.get('/manage-reg-camps',manageRegCamps)

router.put('/update-confirm',updateConfirm)

router.get('/get-interested-participants/:id', getInterestedParticipants)

router.put('/accept-interested-participants/:id', acceptInterestedParticipants)


module.exports = router;