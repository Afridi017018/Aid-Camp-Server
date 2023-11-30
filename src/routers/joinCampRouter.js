const express = require('express');
const { joinReg, getRegCamps, stripePayment, getSingleRegCamps, updateJoinReg, deleteRegCamp, paymentHistory, confirmedHistory, manageRegCamps, updateConfirm, getInterestedParticipants, acceptInterestedParticipants } = require('../controllers/joinCampController');
const { verifyToken } = require('../middlewares/verifyToken');


const router = express.Router();

router.post('/join-reg', verifyToken, joinReg )
router.get('/get-reg-camps', verifyToken, getRegCamps )
router.get('/get-single-reg-camp/:id', verifyToken, getSingleRegCamps )



router.put('/update-join-reg', verifyToken, updateJoinReg )

router.post('/create-payment-intent', verifyToken, stripePayment);

router.get('/payment-history', verifyToken, paymentHistory )

router.get('/confirmed-history', verifyToken, confirmedHistory )

router.delete('/delete-reg-camp/:id', verifyToken,deleteRegCamp)

//organizer
router.get('/manage-reg-camps', verifyToken,manageRegCamps)

router.put('/update-confirm', verifyToken,updateConfirm)

router.get('/get-interested-participants/:id', verifyToken, getInterestedParticipants)

router.put('/accept-interested-participants/:id', verifyToken, acceptInterestedParticipants)


module.exports = router;