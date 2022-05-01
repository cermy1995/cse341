const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: 'cse341 Contacts API',
        description: 'Contacts API'
    },
    host: 'cw-cs341.herokuapp.com',
    schemes:['https'],

};

const outputFile = './swagger.json';
const endpointsFile = ['./routes/index.js'];

swaggerAutogen(outputFile, endpointsFile, doc);