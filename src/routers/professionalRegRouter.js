const express = require('express');
const { professionalReg, getInterestedProfessionals, acceptInterestedProfessionals, getAcceptedCamps } = require('../controllers/professionalRegController');

const router = express.Router();


router.post('/professional-reg', professionalReg);

router.get('/get-interested-professionals/:id', getInterestedProfessionals)

router.put('/accept-interested-professionals/:id', acceptInterestedProfessionals)

router.get('/get-accepted-camps', getAcceptedCamps)



module.exports = router;