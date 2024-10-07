const mongoose = require('mongoose');

const vanSchema = new mongoose.Schema({
  van_id: String,
  name: String,
  description:String,
  location:String,
  price_per_day: Number,
  availability: Boolean,
  created_at: Number,
  updated_at: Number,

});

module.exports = mongoose.model('van', vanSchema);