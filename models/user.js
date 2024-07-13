const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  role: { type: String, required: true },
  id: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

const User = mongoose.model('User', UserSchema);

module.exports = User;