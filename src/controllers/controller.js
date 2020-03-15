'use strict';

const jsonUtils = require('../utils/jsonUtils');
const Service = require('../services/service');

class Controllers {
    constructor() {
    }

    getServices(req, res) {
        const services = new Service().getServices(req.params.environment);
        res.send(jsonUtils.prettyStringify(services));
    }
}


module.exports = Controllers;
