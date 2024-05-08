const mongoose = require('mongoose');

const specialCollectionSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  clubId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Club',
    required: true,
  },
}, { collection: 'sp' });

module.exports = mongoose.model('SpecialCollection', specialCollectionSchema);
