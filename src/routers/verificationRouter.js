const express = require('express');
const { accessToken } = require('../controllers/verificationController');
const router = express.Router();



router.post("/access-token", accessToken )



module.exports = router;