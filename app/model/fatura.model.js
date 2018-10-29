module.exports = (sequelize, Sequelize) => {
	const Fatura = sequelize.define('fatura', {
		fat_dtVencimento: {
			  type: Sequelize.DATE,
			  allowNull: true
		},
		fat_valor: {
			  type: Sequelize.DECIMAL,
			  allowNull: false
		  },
		clientId: {
			  type: Sequelize.INTEGER,
			  allowNull: false
		}
	});

	Fatura.associate = (models) => {
		Fatura.belongsTo(models.cliente, {
			foreignKey: 'clientId',
		});
	};
	return Fatura;
}