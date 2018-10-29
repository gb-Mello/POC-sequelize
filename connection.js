const Sequelize = require('sequelize');
const sequelize = new Sequelize('POC', 'sa', 'Fastcars1@', {
    host: 'localhost',
    dialect: 'mssql',   //choose anyone between them
    port: 32775,
       
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    },

  });
  
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

  const Fatura = sequelize.define('fatura', {
	  fat_dtVencimento: {
			type: Sequelize.DATE,
			allowNull: true
	  },
	  fat_valor: {
			type: Sequelize.DECIMAL,
			allowNull: false
		},
  },{
   tableName: 'faturas'
  });
  
Cliente.hasMany(Fatura);

  /* criando objetos Clientes
  sequelize.sync().then(() => {
    Cliente.create({
      cli_code: 1,
      cli_endereco: 'Av. do Jorginho',
      cli_nome: 'Jorginho'
    })
  });
  */

  // sequelize.sync().then(() => {
  //   Fatura.create({
  //     fat_dtVencimento: null,
  //     fat_valor: 3000.5,
  //     clientId: 2
  //   });
  // })


  // sequelize.sync().then(() => {
  //   Cliente.findAll().then(client => {
  //     console.log(client);
  //   });
  // });
  Fatura.belongsTo(Cliente, {
    foreignKey: 'cliendId',
    otherKey: 'id',
    as: 'daciolo'
  });

  Cliente.findAll({
    include: [{
      where: {clientId: 1},
      model: Fatura,
      attributes: ['id']
     }]
  }).then(posts => {
    console.log('--------foi---------\n',posts);
  });

  // force: true will drop the table if it alr