'use strict';

module.exports = {
  type: 'admin',
  routes: [
    {
      method: 'GET',
      path: '/collections',
      handler: 'collections.getCollections',
      config: {
        policies: ['admin::isAuthenticatedAdmin'],
      },
    },
    {
      method: 'GET',
      path: '/graphs',
      handler: 'graphs.find',
      config: {
        policies: ['admin::isAuthenticatedAdmin'],
      },
    },
    {
      method: 'GET',
      path: '/graphs/:id',
      handler: 'graphs.findOne',
      config: {
        policies: ['admin::isAuthenticatedAdmin'],
      },
    },
  ],
};
