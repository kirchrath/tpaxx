'use strict';

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const store = {};

module.exports = {
    init: init,
    get: function () {
        if (!store.promise) {
            return Promise.reject('Pool not initialized');
        }
        return store.promise;
    }
};

function init(config) {
    store.promise = new Promise((resolve, reject) => {
        try {
            assert(config, 'Missing config parameter');
            assert(config.host, 'Missing host config option');
            assert(config.port, 'Missing port config option');
            assert(config.db, 'Missing db config option');
        } catch(e) {
            reject(e);
            return;
        }

        const connectionString = `mongodb://${config.host}:${config.port}/${config.port}`;

        MongoClient.connect(connectionString, (err, db) => {
            err ? reject(err) : resolve(db);
        });
    });

    return store.promise;
}
