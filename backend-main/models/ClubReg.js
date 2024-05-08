const mongoose = require('mongoose');

const clubRegSchema = new mongoose.Schema({
  clubId: {
    type: String,
    required: true,
    unique: true
  },
  userId: {
    type: String,
    required: true
  }
}, { collection: "club_registration" });

const ClubReg = mongoose.model('ClubReg', clubRegSchema);

module.exports = ClubReg;
