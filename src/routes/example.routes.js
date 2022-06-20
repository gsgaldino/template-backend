const routes = require('express').Router();
const ExampleController = require('../app/controllers/ExampleController');
const { ExampleValidator } = require('../app/validators');
const { validate } = require('../app/middlewares');

routes
  .get('/', ExampleController.index)
  .post('/', validate(ExampleValidator.create), ExampleController.create);

module.exports = routes;
