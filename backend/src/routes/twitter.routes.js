'use strict'

const express = require('express');
const cors = require('cors')
const router  = express.Router();
const TwitterController  = require('../controllers/twitter.controller.js');

const cors_options = {
  origin: process.env.FRONTEND_HOST,
  optionsSuccessStatus: 200
}

router.get('/:search', cors(cors_options), TwitterController.retrieveTweets);

module.exports = router;
