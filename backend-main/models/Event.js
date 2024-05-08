const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema({
    eventid: {
        type: String,
        unique: true
    },
    clubid: {
        type: Schema.Types.ObjectId,
        ref: 'Club',
        required: true
    },
    clubName: {
        type: String,
        required: true
    },
    register_date: {
        type: Date,
        required: true
    },
    event_date: {
        type: Date,
        required: true
    },
    register_time: {
        type: String,
        required: true
    },
    state: {
        type: Boolean,
        default: true
    },
    event_name: {
        type: String,
        required: true
    },
    details: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    contact_number: {
        type: String,
        required: true
    }
});

eventSchema.pre('save', function(next) {
    if (!this.eventid) {
        this.eventid = 'EVENT_' + Date.now();
    }
    next();
});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;
