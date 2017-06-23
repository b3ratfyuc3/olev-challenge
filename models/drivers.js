import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let driverSchema = new Schema({
	name: String,
	surname: String,
	location: String
});


module.exports = mongoose.model('drivers', driverSchema);