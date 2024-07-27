// backend/models/userModel.js

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  mobile: { type: String, required: true },
  country: { type: String, required: true },
  city: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  website: { type: String },  // Optional for business registration
  // Remove unnecessary fields like `name` and `purpose`
});

const User = mongoose.model('User', userSchema);

module.exports = User;
