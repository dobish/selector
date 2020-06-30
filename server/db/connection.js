const mongoose = require('mongoose');
const MONGODB_URI = process.env.MONO_URI;
require('dotenv').config();


mongoose.connect( MONGODB_URI ||'mongodb+srv://admin:ZWer0ipTpU9pBBZp@cluster0-r5yi9.mongodb.net/Selector?retryWrites=true&w=majority', {useNewUrlParser: true}).then(() => console.log('connected'))

//const db = monk(connectionString);
 let db = mongoose.connection;

 db.on('error', console.error.bind(console, 'connection error'));

db.on('connected', () => {
    console.log('Mongoose connected!')
    console.log(process.env.MONO_URI)
})




module.exports = db;
