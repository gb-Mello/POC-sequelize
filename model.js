const User = sequelize.define('user', {
    firstName: {
        type: Sequelize.STRING
    },
    lastName: {
        type: Sequelize.STRING
    }
  });
  
  // force: true will drop the table if it already exists
  User.sync({force: true}).then(() => {
    return User.create({
        firstName: 'John',
        lastName: 'Hancock'
    });
  });