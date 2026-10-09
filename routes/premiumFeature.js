const express = require('express');
const premiumController = require('../controllers/premiumFeature');
const router = express.Router();

router.get('/showLeaderBoard', premiumController.getUserLeaderBoard);

module.exports = router;