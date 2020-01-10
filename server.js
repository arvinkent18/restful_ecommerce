/**
 * http module
 * @const
 */
const http = require('http');

/**
 * main application
 * @const
 */
const app = require('./app');


/**
 * port number
 * @const
 */
const port = process.env.PORT || 5000;


/**
 * server
 * @type {object}
 * @const
 */
const server = http.createServer(app);

server.listen(port);