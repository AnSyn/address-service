'use strict';

const express = require('express');
const config = require('./config');
const router = require('./src/routers/router');
const cors = require('cors');
const bodyParser = require('body-parser');
var swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./swagger.yaml');

const app = new express();
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/api/v1', router);

app.listen(config.port, () => console.log(`Server listening on port ${config.port}`));

module.exports = app;
