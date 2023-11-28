const express = require('express');
const { professionalReg } = require('../controllers/professionalRegController');

const router = express.Router();


router.post('/professional-reg', professionalReg);



module.exports = router;