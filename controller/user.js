var db = require('../db_config.js');

exports.list = function (callback) {
	db.User.find({}, function(error, users) {
		if(error) {
			callback({error: 'Não foi possível retornar os usuários.'});
		} else {
			callback(users);
		}
	})
};


exports.user = function (id, callback) {
	db.User.findById(id, function(error, user) {
		if(error) {
			callback({error: 'Não foi possível retornar o usuário.'});
		} else {
			callback(user);
		}
	})
};


exports.insert = function (fullname, email, password, callback) {
	new db.User({
		'fullname': fullname,
		'email': email,
		'password': password,
		'created_at': new Date()
	}).save(function(error, user) {
		if(error) {
			callback({error: 'erro ao salvar'});
		} else {
			callback(user);
		}
	});
};


exports.update = function (id, fullname, email, password, callback) {
	db.User.findById(id, function(error, user) {
		if(error) {
			callback({error: 'Usuário não encontrado!'});
		} else {
			if(fullname) {
				user.fullname = fullname;
			}
			if(email) {
				user.email = email;
			}
			if(password) {
				user.password =password;
			}
			user.save(function(error, user){
				if(error) {
					callback({error: 'Erro ao tentar alterar o usuário'});
				} else {
					callback(user);
				}
			});
		}
	});
};


exports.delete = function (id, callback) {
	db.User.findById(id, function(error, user) {
		if(error) {
			callback({error: 'Usuário não encontrado!'});
		} else {
			user.remove(function(error) {
				if(!error) {
					callback({response: 'Usuário excluído com sucesso.'});
				}
			})
		}
	});
};