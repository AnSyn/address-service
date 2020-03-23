'use strict';

const express = require('express');
const ControllerClass = require('../controllers/controller');

const router = express.Router();
const controller = new ControllerClass();

router.get('/address/:environment', controller.getServices);

module.exports = router;
