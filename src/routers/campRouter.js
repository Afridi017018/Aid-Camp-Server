const express = require('express');
const { addCamp, getAvailableCamps, getUpcomingCamps } = require('../controllers/campController');

const router = express.Router();


router.post('/add-camp', addCamp);
router.get('/get-available-camps', getAvailableCamps);
router.get('/get-upcoming-camps', getUpcomingCamps);





module.exports = router;