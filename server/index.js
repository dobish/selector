const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const nodemailer = require('nodemailer')

const sensors = require('./db/sensors');

const app = express();

app.use(morgan('tiny'));
app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.json({
        message: 'Behold The MEVN Stack!'
    });
});

app.get('/sensors', (req, res) => {
    sensors.getAll().then((sensors) => {
        res.json(sensors);
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


//Email sending with nodemailer
/*let transport = nodemailer.createTransport({
    host: 'smtp.mailtrap.io',
    port: 2525,
    auth: {
        user: 'deef4c8100a0e7',
        pass: 'a5333715677dc0'
    }
});

//Message content
const message = {
    from: 'test@test.com',
    to: 'to@email.com',
    subject: 'Subject field',
    text: 'Email text'
};

transport.sendMail(message, function (err, info) {
    if(err) {
        console.log(err)
    } else {
        console.log(info)
    }
})*/

app.post('/sendmail', function (req, res) {
    let message = {
        from: req.body.from,
        subject:'Subject',
        to: 'to@email.com',
        //'sender': req.body.name,
        html: '<b> From: </b>' + req.body.name + "</br>" + "<b>Country: </b>" +  req.body.country + "</br>" + req.body.message
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
