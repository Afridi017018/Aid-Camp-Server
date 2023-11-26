const express = require('express');
const { addCamp, getAvailableCamps } = require('../controllers/campController');

const router = express.Router();


router.post('/add-camp', addCamp);
router.get('/get-available-camps', getAvailableCamps);




module.exports = router;