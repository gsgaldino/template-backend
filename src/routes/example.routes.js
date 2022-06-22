const routes = require('express').Router();
const ExampleController = require('../app/controllers/ExampleController');
const { ExampleValidator, validate } = require('../app/validators');

routes
  .get('/', ExampleController.index)
  .post('/', validate(ExampleValidator.create), ExampleController.create);

module.exports = routes;
