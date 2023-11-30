const express = require('express');
const { professionalReg, getInterestedProfessionals, acceptInterestedProfessionals, getAcceptedCamps } = require('../controllers/professionalRegController');
const { verifyToken } = require('../middlewares/verifyToken');

const router = express.Router();


router.post('/professional-reg', verifyToken, professionalReg);

router.get('/get-interested-professionals/:id', verifyToken, getInterestedProfessionals)

router.put('/accept-interested-professionals/:id', verifyToken, acceptInterestedProfessionals)

router.get('/get-accepted-camps', verifyToken, getAcceptedCamps)



module.exports = router;