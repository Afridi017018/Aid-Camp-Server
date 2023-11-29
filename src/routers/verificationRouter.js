const express = require('express');
const { accessToken, logout } = require('../controllers/verificationController');
const router = express.Router();



router.post("/access-token", accessToken )

router.post('/logout', logout)



module.exports = router;