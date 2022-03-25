/**
 * importaciones requeridas
 */
require('dotenv').config();
const Server = require('./models/server');
const server = new Server();
// ----------------------------------------------------------------------------------

/**
 * Puesta en marcha servidor express
 */
server.listen()