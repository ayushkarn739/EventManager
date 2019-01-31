const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/eventdb',
{
    useNewUrlParser: true,
});

const db = mongoose.connection;

db.once('open',function(){
    console.log('connected to db');
});

module.exports = db;