const express = require('express');
const { professionalReg, getInterestedProfessionals, acceptInterestedProfessionals } = require('../controllers/professionalRegController');

const router = express.Router();


router.post('/professional-reg', professionalReg);

router.get('/get-interested-professionals/:id', getInterestedProfessionals)

router.put('/accept-interested-professionals/:id', acceptInterestedProfessionals)



module.exports = router;