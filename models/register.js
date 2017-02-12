// get an instance of mongoose and mongoose.Schema
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// set up a mongoose model and pass it using module.exports
module.exports = mongoose.model('Register', new Schema({
    name: String,
    lastname1: String,
    lastname2: String,
    birthdate: Date,
    role: String,
    email: String,
    accepted: Boolean
}));
