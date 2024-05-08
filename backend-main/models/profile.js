const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  name: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  department: {
    type: String,
    required: true
  },
  profileImage: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  linkedIn: {
    type: String
  },
  contactNumber: {
    type: String
  }
}, { collection: 'profile' });

const Profile = mongoose.model('Profile', profileSchema);

module.exports = Profile;
