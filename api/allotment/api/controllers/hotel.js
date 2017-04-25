'use strict';

module.exports = {
    list: list,
    get: get
};

function list() {}

function get(req, res) {
    // variables defined in the Swagger document can be referenced using req.swagger.params.{parameter_name}
    var code = req.swagger.params.code.value;
    var hotel = {
        name: 'Name ' + code,
        code: code
    };

    // ensure not null values producing response validation failures
    if (!hotel) {
        hotel = undefined;
    }

    // this sends back a JSON response which is a single string
    res.json({
        data: hotel
    });
}

