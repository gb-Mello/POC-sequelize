module.exports = function(app) {
    const clientes = require('../controller/cliente.controller.js');
    
    app.post('/api/clientes', clientes.create);
 
    // Retrieve all player
    app.get('/api/clientes', clientes.findAll);

    app.get('/api/clientefatura', clientes.findInner)
}