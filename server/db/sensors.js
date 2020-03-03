const Joi = require('joi');
const db = require('./connection');

const schema = Joi.object().keys({
    name: Joi.string().required(),
    types: Joi.array()

});

const sensors = db.get('sensors');

function getAll() {
    return sensors.find();
}

function create(sensor) {
    if (!sensor.name) sensor.name = 'Anonymous';

    const result = Joi.validate(sensor, schema);
    if (result.error == null) {
        sensor.created = new Date();
        return sensors.insert(sensor);
    } else {
        return Promise.reject(result.error);
    }
}

module.exports = {
    create,
    getAll
};
