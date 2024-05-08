const mongoose = require('mongoose');

const clubSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  },
  Register: {
    type: Boolean,
    required: true
  }
}, { collection: 'clubs' });

module.exports = mongoose.model('Club', clubSchema);
