const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    
user_id:'number',
name:'string',
email:'string',
phone:'number',
password:'number',
created_at:'number',
updated_at:'number',


});

module.exports = mongoose.model('User', userSchema);