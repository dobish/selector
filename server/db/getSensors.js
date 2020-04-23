const Joi = require('joi');
const db = require('./connection');
const mongoose = require('mongoose')
const Schema = mongoose.Schema


//Schema
const sensor = new Schema ({
    name: String,
    types: Array
});

//Model
const Sensor = mongoose.model('sensor', sensor);



const schema = Joi.object().keys({
    name: Joi.string().required(),
    types: Joi.array()

});

const sensors = db.get('sensors');

function getAllSensors() {
    //return sensors.find();
    console.log(Sensor)
    return Sensor.find()
}

function createSensor(sensor) {
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
    createSensor,
    getAllSensors,
    Sensor
};

