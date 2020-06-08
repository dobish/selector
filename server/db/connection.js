const mongoose = require('mongoose');
const MONGODB_URI = process.env.MONO_URI
mongoose.connect( MONGODB_URI ||'mongodb://localhost/mevnStack' , {useNewUrlParser: true}).then(() => console.log('connected'))
//const db = monk(connectionString);
 let db = mongoose.connection;

 db.on('error', console.error.bind(console, 'connection error'));

db.on('connected', () => {
    console.log('Mongoose connected!')
})




module.exports = db;
