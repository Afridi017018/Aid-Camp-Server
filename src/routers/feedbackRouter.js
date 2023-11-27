const express = require('express');
const { giveFeedback } = require('../controllers/feedbackController');

const router = express.Router();


router.post('/give-feedback', giveFeedback);




module.exports = router;