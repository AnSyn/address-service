'use strict';

class ServiceClass {

    constructor() {
    }

    getServices(environment) {
        return {
            baseUrl: `https://ansyn-${environment}.com`,
            auth: `https://ansyn-auth-${environment}.com`,
            storageUrl: `https://ansyn-storage-service-${environment}.com`
        }
    }
}

module.exports = ServiceClass;
