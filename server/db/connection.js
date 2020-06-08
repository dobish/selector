//const monk = require('monk');
//const connectionString = 'mongodb+srv://admin:c7olk0jWG13ny88S@cluster0-r5yi9.mongodb.net/test?retryWrites=true&w=majority' || 'localhost/mevnStack';
const mongoose = require('mongoose');
//const MONGODB_URI = 'mongodb+srv://admin:ZWer0ipTpU9pBBZp@cluster0-r5yi9.mongodb.net/Selector?retryWrites=true&w=majority'
const MONGODB_URI = process.env.MONO_URI
mongoose.connect( MONGODB_URI ||'mongodb://localhost/mevnStack' , {useNewUrlParser: true}).then(() => console.log('connected'))
//const db = monk(connectionString);
 let db = mongoose.connection;

 db.on('error', console.error.bind(console, 'connection error'));

db.on('connected', () => {
    console.log('Mongoose connected!')
})



/*db.then(() => {
    console.log("Connection success");

}).catch((e)=>{
    console.error(e);
});*/

module.exports = db;
