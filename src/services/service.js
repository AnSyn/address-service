'use strict';

class Services {

    constructor() {
    }

    getServices(environment) {
        return [`https://ansyn-${environment}.com`];
    }
}

module.exports = Services;
