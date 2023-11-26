const express = require('express');
const { addCamp } = require('../controllers/campController');

const router = express.Router();


router.post('/add-camp', addCamp);





module.exports = router;