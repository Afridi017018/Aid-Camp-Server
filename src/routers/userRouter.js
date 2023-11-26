const express = require('express');
const { userInfo, getUserInfo, updateUserInfo } = require('../controllers/userController');

const router = express.Router();



router.post('/user-info', userInfo);
router.get('/get-user-info', getUserInfo);
router.put('/update-user-info', updateUserInfo);



module.exports = router;