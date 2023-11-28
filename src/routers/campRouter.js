const express = require('express');
const { addCamp, getAvailableCamps, getUpcomingCamps, getPopularCamps, getCampsByOrganizer, updateCamp, deleteCamp, getUpcomingCampsByOrganizer, getCampById, publishCamp, getAllPopularCamps, getAllUpcomingCamps} = require('../controllers/campController');

const router = express.Router();


router.post('/add-camp', addCamp);
router.put('/update-camp', updateCamp);
router.delete('/delete-camp/:campId', deleteCamp);

router.get('/get-available-camps', getAvailableCamps);

router.get('/get-upcoming-camps', getUpcomingCamps);
router.get('/get-upcoming-camps-by-organizer', getUpcomingCampsByOrganizer);

router.get('/get-popular-camps', getPopularCamps);

router.get('/get-camps-by-organizer', getCampsByOrganizer)

router.get('/get-camp-by-id/:campId',getCampById)

router.put('/publish-camp/:id', publishCamp)

router.get('/get-all-popular-camps', getAllPopularCamps);

router.get('/get-all-upcoming-camps', getAllUpcomingCamps);





module.exports = router;