const mongoose = require('mongoose');

const vanSchema = new mongoose.Schema({
  van_id:'number',
  name:'string',
  description:'string',
  location:'string',
  price_per_day:'number',
  availability:'Boolean',
  created_at:'number',
  updated_at:'number',




});

module.exports = mongoose.model('van', vanSchema);