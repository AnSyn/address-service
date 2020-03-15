'use strict';

const express = require('express');
const router = express.Router();

const Controller = require('../controllers/controller');
const controller = new Controller();

router.post('/address/:environment', new Controller().getServices);

module.exports = router;
