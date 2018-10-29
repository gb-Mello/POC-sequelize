module.exports = function(app) {
    const faturas = require('../controller/fatura.controller.js');
    
    app.post('/api/faturas', faturas.create);
 
    // Retrieve all player
    app.get('/api/faturas', faturas.findAll);
}