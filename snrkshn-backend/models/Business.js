const mongoose = require('mongoose');

const businessSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  mobile: { type: String, required: true },
  purpose: { type: String, required: true },
  city: { type: String, required: true },
  country: { type: String, required: true },
  website: { type: String, required: true }
});

module.exports = mongoose.model('Business', businessSchema);
