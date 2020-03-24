'use strict';

class ServiceClass {

    constructor() {
    }

    getServices(environment) {
        return {
            layersManagerConfig: {
                schema: "",
            },
            credentialsConfig: {
                active: true
            }
        }
    }
}

module.exports = ServiceClass;
