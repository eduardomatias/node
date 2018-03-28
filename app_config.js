var express = require('express');

var app = module.exports = express();

var allowCors = function(req, res, next) {
	res.header('Access-Control-Allow-Origin', '127.0.0.1:5000');
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
	res.header('Access-Control-Allow-Headers', 'Content-Type');
	res.header('Access-Control-Allow-Credentials', 'true');
	next();
}
app.use(allowCors);

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));

app.listen(5000);