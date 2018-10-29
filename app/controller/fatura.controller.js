const db = require('../config/db.config.js');
const Fatura = db.fatura;
 
exports.create = (req, res) => {
	Fatura.create({
	  fat_dtVencimento: null,
	  fat_valor: req.body.valor,
      cliente_id: req.body.cliente_id,
      
	}).then(fatura => {		
		res.send(fatura);
	});
};
 
exports.findAll = (req, res) => {
	Fatura.findAll({
        include: [{ model: db.cliente }]
    }).then(faturas => {
	  res.send(faturas);
	});
};