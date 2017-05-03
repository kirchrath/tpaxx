'use strict';

const dbPool = require('../helpers/db_pool');
const alltoment = require('tpaxx-allotment');

module.exports = {
    list,
    get,
    update,
    drop,
    create
};

function create(req, res) {
    const hotel = req.swagger.params.data.value;

    dbPool.get().then((db) => {
        const manager = new alltoment.masterdata.Hotel(db);
        const promise = manager.create(hotel);
        promise.then(hotels => {
            // TODO: version check
            res.json(hotels);
        }).catch(error => {
            res.status(500);
            res.json({
                success: false,
                message: error
            });
        });
    }).catch(e => {
        res.status(500);
        res.json({success: false, message: e});
    });
}

function drop(req, res) {
    const code = req.swagger.params.code.value;
    dbPool.get().then((db) => {
        const manager = new alltoment.masterdata.Hotel(db);
        const promise = manager.drop(code);
        promise.then(() => {
            // TODO: version check
            res.json({
                success: true
            });
        }).catch(error => {
            res.status(500);
            res.json({
                success: false,
                message: error
            });
        });
    }).catch(e => {
        res.status(500);
        res.json({success: false, message: e});
    });
}

function update(req, res) {
    const code = req.swagger.params.code.value;
    const hotel = req.swagger.params.data.value;
    hotel.code = code;

    dbPool.get().then((db) => {
        const manager = new alltoment.masterdata.Hotel(db);
        const promise = manager.update(hotel);
        promise.then(hotel => {
            // TODO: version check
            res.json(hotel);
        }).catch(error => {
            res.json({
                success: false,
                message: error
            });
        });
    }).catch(e => {
        res.json({success: false, message: e});
    });
}

function list(req, res) {
    dbPool.get().then((db) => {
        const manager = new alltoment.masterdata.Hotel(db);
        const promise = manager.list();
        promise.then(hotels => {
            // TODO: version check
            res.json({
                data: hotels
            });
        }).catch(error => {
            res.status(500);
            res.json({
                success: false,
                message: error
            });
        });
    }).catch(e => {
        res.status(500);
        res.json({success: false, message: e});
    });
}

function get(req, res) {
    // variables defined in the Swagger document can be referenced using req.swagger.params.{parameter_name}
    const code = req.swagger.params.code.value;

    dbPool.get().then((db) => {
        const manager = new alltoment.masterdata.Hotel(db);
        manager.read(code).then(hotel => {
            let message;
            //ensure not null values producing response validation failures
            if (!hotel) {
                res.status(404);
                hotel = undefined;
                message = 'Not found';
            }

            res.json({
                data: hotel,
                message: message
            });
        }).catch(err => {
            res.status(500);
            res.json({
                success: false, message: err
            });
        })
    }).catch(err => {
        res.status(500);
        res.json({
            success: false, message: err
        });
    });
}

