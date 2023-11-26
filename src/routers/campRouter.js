const express = require('express');
const { addCamp, getAvailableCamps, getUpcomingCamps, getPopularCamps } = require('../controllers/campController');

const router = express.Router();


router.post('/add-camp', addCamp);
router.get('/get-available-camps', getAvailableCamps);
router.get('/get-upcoming-camps', getUpcomingCamps);
router.get('/get-popular-camps', getPopularCamps);





module.exports = router;