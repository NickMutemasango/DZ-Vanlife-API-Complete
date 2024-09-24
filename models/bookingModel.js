const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
   booking_id:'number',
   user_id:'number',
   service_id:'number',
   booking_date:'number',
   start_time:'number',
   end_time:'number',
   status:'string',
   total_price:'number',
   payment_id:'number',
   created_at:'number',
   updated_at:'number',


});

module.exports = mongoose.model('Booking', bookingSchema);