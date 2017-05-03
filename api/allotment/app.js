'use strict';

const SwaggerExpress = require('swagger-express-mw');
const app = require('express')();
const dbPool = require('./api/helpers/db_pool');

module.exports = app; // for testing

const config = {
    appRoot: __dirname // required config
};

const dbConfig = {
    host: 'localhost',
    port: '27017',
    db: 'test'
};

SwaggerExpress.create(config, function (err, swaggerExpress) {
    if (err) {
        throw err;
    }

    // install middleware
    swaggerExpress.register(app);

    const port = process.env.PORT || 10010;
    dbPool.init(dbConfig).then(() => {
        app.listen(port);
    }).catch((err) => {
        console.log(err);
    });
});
