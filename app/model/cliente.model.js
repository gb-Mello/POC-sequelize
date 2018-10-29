module.exports = (sequelize, Sequelize) => {
	const Cliente = sequelize.define('client', {
	  cli_code: {
			type: Sequelize.INTEGER,
			allowNull: false
	  },
	  cli_endereco: {
			type: Sequelize.STRING,
			allowNull: false
      },
	  cli_nome: {
			type: Sequelize.STRING,
			allowNull:false
		}
  });
	return Cliente;
}