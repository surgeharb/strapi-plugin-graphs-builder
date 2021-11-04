'use strict';

const contentTypes = require('./content-types');
const controllers = require('./controllers');
const bootstrap = require('./bootstrap');
const services = require('./services');
const config = require('./config');
const routes = require('./routes');

module.exports = () => ({
  contentTypes,
  controllers,
  bootstrap,
  services,
  config,
  routes,
});
