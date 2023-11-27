const express = require('express');
const { joinReg, getRegCamps } = require('../controllers/joinCampController');


const router = express.Router();

router.post('/join-reg', joinReg )
router.get('/get-reg-camps', getRegCamps )




module.exports = router;