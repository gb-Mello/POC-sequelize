const db = require('../config/db.config.js');
const Cliente = db.cliente;
const Fatura = db.fatura;
 
exports.create = (req, res) => {
	Cliente.create({
	  cli_code: 1,
	  cli_endereco: req.body.endereco,
	  cli_nome: req.body.nome,
	}).then(cliente => {
		res.send(cliente);
	});
};
 
exports.findAll = (req, res) => {
	Cliente.findAll().then(clientes => {
	  res.send(clientes);
	});
};

exports.findInner = (req, res) => {
	Fatura.findAll({
		include: [{
			model: Cliente,
			attributes: [['cli_nome', 'nomeCliente']],
      required: true
		 }],
		 attributes: [['fat_valor','valorFatura']],
		 raw: true
	}).then(clientes => {
		res.send(clientes);
	});
};
 /*
exports.findById = (req, res) => {	
	Player.findById(
		req.params.playerId, {
		include: [
			{
				model: db.team,
				attributes: ['nameTeam'],
			}
		]}
	).then(player => {
		res.send(player);
	})
};
 
exports.update = (req, res) => {
	const id = req.params.playerId;
	Player.update( { firstname: req.body.firstname, lastname: req.body.lastname, age: req.body.age, team_id: req.body.team_id, position_id: req.body.position_id }, 
					 { where: {id: req.params.playerId} }
				   ).then(() => {
					 res.status(200).send("updated successfully a player with id = " + id);
				   });
};
 
exports.delete = (req, res) => {
	const id = req.params.playerId;
	Player.destroy({
	  where: { id: id }
	}).then(() => {
	  res.status(200).send('deleted successfully a player with id = ' + id);
    });
    
};
*/