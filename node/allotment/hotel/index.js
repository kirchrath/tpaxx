'use strict';

module.exports = {
    get,
    list
};

function get(code) {
    return new Promise((resolve) => {
        resolve({
            code: code
        })
    });
}

function list() {
    return new Promise((resolve) => {
        resolve([
            {
                code: 'ASSFEAS'
            },
            {
                code: 'OOLASF'
            }
        ]);
    });
}

