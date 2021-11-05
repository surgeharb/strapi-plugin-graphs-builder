'use strict';

const collectionRoutes = require('./collections');

module.exports = {
  type: 'content-api',
  routes: [...collectionRoutes],
};
