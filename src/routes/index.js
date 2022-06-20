const routes = require('express').Router();

const example = require('./example.routes');

routes.use('/example', example);

module.exports = routes;
