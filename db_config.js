
var mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1/node');
mongoose.Promise = global.Promise;

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

var userSchema = mongoose.Schema({
	fullname: String,
	email: String,
	password: String,
	created_at: Date
});

exports.User = mongoose.model('User', userSchema);
