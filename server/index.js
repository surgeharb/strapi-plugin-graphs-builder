'use strict';

const controllers = require('./controllers');
const bootstrap = require('./bootstrap');
const services = require('./services');
const config = require('./config');
const routes = require('./routes');

module.exports = () => ({
  controllers,
  bootstrap,
  services,
  config,
  routes,
});
