const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const routes = require('./routes');

class App {
  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(cors());
    this.server.use(express.json());
    this.server.use(helmet());
    this.server.use(morgan('dev'));
  }

  routes() {
    this.server.use('/api/v1', routes);
  }
}

module.exports = new App().server;
