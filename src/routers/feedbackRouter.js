const express = require('express');
const { giveFeedback, getFeedbacks } = require('../controllers/feedbackController');

const router = express.Router();


router.post('/give-feedback', giveFeedback);
router.get('/get-feedbacks', getFeedbacks);




module.exports = router;