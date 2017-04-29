'use strict';
const chai = require('chai');
const assert = chai.assert;

const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const allotment = require('../');
const HotelMasterdata = allotment.masterdata.Hotel;

const url = 'mongodb://localhost:27017/test';

function createRandomNumber () {
    return (Math.round(Math.random() * 10000));
}


describe('HotelMasterdata', () => {
    let dbConnection;
    before(() => {
        MongoClient.connect(url, function(err, db) {
            assert.strictEqual(err, null);
            dbConnection = db;
        });
    });
    after(() => {
        if (dbConnection) {
            dbConnection.close();
        }
    });

    describe('constructor', () => {
        it('should throw error if no `db` parameter is defined', () => {
            // Given
            var db = null;

            // Then
            assert.throws(() => {
                new HotelMasterdata(db);
            }, 'Missing db option');
        });

        it('should keep the `db` parameter referenced as `db` property', () => {
            // Given
            var db = {};

            // When
            var hotelMasterdata = new HotelMasterdata(db);
            var actual = hotelMasterdata.db;

            // Then
            assert.strictEqual(actual, db);
        });
    });
    describe('CRUD', () => {
        let manager;
        let randomHotel;
        before(() => {
            const randomNumber = createRandomNumber();
            randomHotel = {
                code: 'CODE' + randomNumber,
                name: 'Hotel Ramdom ' + randomNumber
            };

            manager = new HotelMasterdata(dbConnection);
        });
        it ('should create a single hotel', (done) => {
            // When
            const promise = manager.create(randomHotel);

            promise.then((savedHotel) => {
                const hotelId = savedHotel._id;
                try {
                    assert.isOk(hotelId);
                    done();
                } catch(e) {
                    done(e);
                }
            });

            promise.catch(() => {
                assert.fail(false, true, 'Save failed');
                done();
            });
        })
    });
});

