const Server = require('./models/server');
require('dotenv').config();

const server = new Server();


//inicio del servidor
server.listen()