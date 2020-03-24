'use strict';

const jsonUtils = require('../utils/jsonUtils');
const ServiceClass = require('../services/service');

class ControllerClass {
    constructor() {
    }

    getServices(req, res) {
        req.header('Access-Control-Allow-Origin', '*');
        const services = new ServiceClass().getServices(req.params.environment);
        res.send(jsonUtils.prettyStringify(services));
    }
}

module.exports = ControllerClass;
