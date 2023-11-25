const express = require('express');
const { userInfo } = require('../controllers/userController');

const router = express.Router();



router.post('/user-info', userInfo);



module.exports = router;