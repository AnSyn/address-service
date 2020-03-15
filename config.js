const config = {
    port: process.env.PORT || 8080,
    backend: {
        hosts: process.env.BACKEND_HOSTS ? process.env.BACKEND_HOSTS.split(',') : ['platform.ansyn.io'],
        credentials: process.env.BACKEND_CREDENTIALS || 'user:password',
    }
};

module.exports = config;
