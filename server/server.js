const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const nodemailer = require('nodemailer');
const path = require('path');
const sensors = require('./db/sensors');
const sens = require('./db/getSensors')

//const Parameter = sensors.Parameter;

const app = express();

app.use(morgan('tiny'));
app.use(cors());
app.use(bodyParser.json());


//Deployment section
app.use(express.static(__dirname + '/../dist/'));

app.get('/api/parameters', (req, res) => {
    // Parameter.getAll().then((sensors) => {
    //     res.json(sensors);
    //     console.log(sensors)
    // })
    sensors.getAll().then((sensors) => {
        res.json(sensors);
        console.log(sensors)
        console.log(process.env.NODE_ENV)
    });
    //console.log(sensors.Parameter.find())
/*    Parameter.find({})
        .then((data) => {
            res.json(data)
            console.log(data)
        })*/
    console.log('Dafuck ' + process.env.NODE_ENV)
    console.log('Dafuck ' + process.env.VUE_APP_MONGO)
});

app.get('/api/sensors', (req, res) => {
    sens.getAllSensors().then((sensors) => {
        res.json(sensors);
        console.log(sensors)
        console.log(process.env.NODE_ENV)
    });
    //console.log(sensors.Parameter.find())
    /*    Parameter.find({})
            .then((data) => {
                res.json(data)
                console.log(data)
            })*/
});

app.get(/.*/, function (req, res) {
    res.sendfile(path.resolve( __dirname + '/../dist/index.html'));

});

/*if (!process.env.NODE_ENV === 'production') {

}*/

// Deployment section


app.get('/', (req, res) => {
    res.json({
        message: 'Behold The MEVN Stack!'
    });
});


app.post('/sensors', (req, res) => {
    console.log(req.body);
    sensors.create(req.body).then((message) => {
        res.json(message);
    }).catch((error) => {
        res.status(500);
        res.json(error);
    });
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`listening on ${port}`);
});




app.post('/sendmail', function (req, res) {
    let message = {
        from: req.body.from,
        subject:'Subject',
        to: 'to@email.com',
        //'sender': req.body.name,
        html: '<b> From: </b>' + req.body.name + "</br>" + "<b>Country: </b>" +  req.body.country
        + "</br>" + req.body.parameters + "</br>" + req.body.message
    };

    let transport = nodemailer.createTransport({
        host: 'smtp.mailtrap.io',
        port: 2525,
        auth: {
            user: 'deef4c8100a0e7',
            pass: 'a5333715677dc0'
        }
    });

    transport.sendMail(message, function (err, info) {
        if(err) {
            console.log(err)
        } else {
            console.log(info)
        }
    })

    console.log(req.body)
    console.log(message)
    res.send(message)

})
