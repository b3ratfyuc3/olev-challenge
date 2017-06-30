let mongoose = require('mongoose');

const Schema = mongoose.Schema;

let driverSchema = new Schema({
	name: String,
	surname: String,
	long: String,
	lat: String,
	place: String
});


module.exports = mongoose.model('drivers', driverSchema);