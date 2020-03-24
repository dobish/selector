const Joi = require('joi');
const db = require('./connection');
const mongoose = require('mongoose')
const Schema = mongoose.Schema


//Schema
const parameter = new Schema ({
    name: String,
    types: Array
});

//Model
const Parameter = mongoose.model('parameter', parameter);



const schema = Joi.object().keys({
    name: Joi.string().required(),
    types: Joi.array()

});

const sensors = db.get('parameters');

function getAll() {
    //return sensors.find();
    console.log(Parameter)
    return Parameter.find()
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
    getAll,
    Parameter
};

