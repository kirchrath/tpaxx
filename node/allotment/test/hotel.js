'use strict';

var chai = require('chai');
var assert = chai.assert;

var allotment = require('../');
var hotel = allotment.hotel;

describe('Hotel', () => {
    describe('get', () => {
        it('should return a Promise', () => {
            // When
            const actual = hotel.get('K');

            // Then
            assert.instanceOf(actual, Promise);
        });
    });

    describe('list', () => {
        it('should return a Promise', () => {
            // When
            const actual = hotel.list();

            // Then
            assert.instanceOf(actual, Promise);
        });
    });
});

