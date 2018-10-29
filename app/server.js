const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json())
 
const db = require('./config/db.config.js');
  
// db.sequelize.sync({force: true}).then(() => {
//   console.log('Drop and Resync with { force: true }');
// });

require('./route/cliente.route.js')(app);
require('./route/fatura.route.js')(app);

console.log('x5');
const server = app.listen(3030, function () {
console.log('x6');
 
  const host = server.address().address;
  const port = server.address().port;
 
  console.log('Server Running in localhost:', host, port);
})