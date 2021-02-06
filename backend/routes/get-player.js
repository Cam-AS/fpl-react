const express = require('express');

const playerController = require('../controllers/player');

const router = express.Router();

router.get('/player', playerController.getPlayer);

module.exports = router;