'use strict';

var hotelcollectionName = 'masterdata_hotel';

function HotelMasterdata(db) {
    if (!db) {
        throw new Error('Missing db option');
    }
    this.db = db;
}


function list() {
    const collection = this.db.collection(hotelcollectionName);

    return new Promise((resolve, reject) => {
        collection.find({}).toArray(function (err, docs) {
            if (err) {
                reject(err);
            } else {
                resolve(docs);
            }
        });
    });
}

function read(code) {
    const collection = this.db.collection(hotelcollectionName);

    return new Promise((resolve, reject) => {
        collection.find({
            'code': code
        }).toArray(function (err, docs) {
            if (err) {
                reject(err);
            } else {
                resolve(docs[0]);
            }
        });
    });
}

function create(hotel) {
    const collection = this.db.collection(hotelcollectionName);

    return new Promise((resolve, reject) => {
        try {
            collection.createIndex({'code': 1}, {unique: true});
            collection.insertOne(hotel, (err, response) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(response.ops[0]);
                }
            });
        } catch(e) {
            reject(e);
        }
    });
}

function update(hotel) {
    const collection = this.db.collection(hotelcollectionName);

    return new Promise((resolve, reject) => {
        collection.updateOne({ code: hotel.code }, {
            $set: hotel
        }, err => {
            if (err) {
                reject(err);
            } else {
                resolve();
            }
        });
    });
}

function drop(code) {
    const collection = this.db.collection(hotelcollectionName);

    return new Promise((resolve, reject) => {
        collection.deleteOne({ code: code }, err => {
            if (err) {
                reject(err);
            } else {
                resolve();
            }
        } );
    });
}


Object.assign(HotelMasterdata.prototype, {
    list,
    read,
    create,
    update,
    drop
});
module.exports = HotelMasterdata;