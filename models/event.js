const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    title: String,
    description: String,
    date: Date,
    registrations: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Registration'
        }
    ]
});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;