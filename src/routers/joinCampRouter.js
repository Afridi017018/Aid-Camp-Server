const express = require('express');
const { joinReg } = require('../controllers/joinCampController');


const router = express.Router();

router.post('/join-reg', joinReg )



module.exports = router;