const config = {
    port: process.env.PORT || 8080,
    backend: {
        hosts: process.env.BACKEND_HOSTS ? process.env.BACKEND_HOSTS.split(',') : ['platform.ansyn.io'],
    }
};

module.exports = config;
