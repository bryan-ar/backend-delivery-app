const promise = require('bluebird');
const options = {
    promiseLib: promise,
    query: (e) => {}
}

const pgp = require('pg-promise')(options);
const types = pgp.pg.types;
types.setTypeParser(1114, function(stringValue) {
    return stringValue;
});

const databaseConfig = {
    'host': 'ec2-52-54-212-232.compute-1.amazonaws.com',
    'port': 5432,
    'database': 'd7mf9gfdhdmkga',
    'user': 'jcvrpwtiwmibqc',
    'password': '820572a84307c77f365b447ff492b1ec0016089f6619522e253e8cb010aacea0'
};

const db = pgp(databaseConfig);

module.exports = db;