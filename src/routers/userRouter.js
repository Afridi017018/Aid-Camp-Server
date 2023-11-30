const express = require('express');
const { userInfo, getUserInfo, updateUserInfo, accessToken } = require('../controllers/userController');
const { verifyToken } = require('../middlewares/verifyToken');

const router = express.Router();





router.post('/user-info', userInfo);
router.get('/get-user-info', getUserInfo);
router.put('/update-user-info', verifyToken, updateUserInfo);



module.exports = router;