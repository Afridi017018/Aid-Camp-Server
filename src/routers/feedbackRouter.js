const express = require('express');
const { giveFeedback, getFeedbacks } = require('../controllers/feedbackController');
const { verifyToken } = require('../middlewares/verifyToken');

const router = express.Router();


router.post('/give-feedback', verifyToken, giveFeedback);
router.get('/get-feedbacks', getFeedbacks);




module.exports = router;