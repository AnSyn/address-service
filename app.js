'use strict';

const express = require('express');
const config = require('./config');
const router = require('./src/routers/router');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = new express();
app.use(router);
app.use(cors());
app.use(bodyParser.json({limit: '5mb'}));
app.use(bodyParser.urlencoded({extended: true}));
app.listen(config.port, () => console.log(`Server listening on port ${config.port}`));

module.exports = app;
