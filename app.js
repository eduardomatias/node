var app = require('./app_config.js');

var validator = require('validator');

var userController = require('./controller/user.js');

// raiz
app.get('/', function(req, res){});

// obtem usuarios
app.get('/users', function(req, res){
	userController.list(function(resp){
		res.json(resp);
	});
});

// obtem usuario = id
app.get('/users/:id', function(req, res){
	var id = validator.trim(validator.escape(req.param('id')));

	userController.user(id, function(resp){
		res.json(resp);
	});
});

// cadastra usuario
app.post('/users', function(req, res){
	var fullname = validator.trim(validator.escape(req.param('fullname')));
	var email = validator.trim(validator.escape(req.param('email')));
	var password = validator.trim(validator.escape(req.param('password')));

	userController.insert(fullname, email, password, function(resp){
		res.json(resp);
	});
});

// atualiza usuario
app.put('/users', function(req, res){
	var id = validator.trim(validator.escape(req.param('id')));
	var fullname = validator.trim(validator.escape(req.param('fullname')));
	var email = validator.trim(validator.escape(req.param('email')));
	var password = validator.trim(validator.escape(req.param('password')));

	userController.update(id, fullname, email, password, function(resp){
		res.json(resp);
	});
});

// deleta usuario
app.delete('/users/:id', function(req, res){
	var id = validator.trim(validator.escape(req.param('id')));

	userController.delete(id, function(resp){
		res.json(resp);
	});
});