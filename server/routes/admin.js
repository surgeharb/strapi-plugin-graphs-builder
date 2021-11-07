'use strict';

module.exports = {
  type: 'admin',
  routes: [
    {
      method: 'GET',
      path: '/collections',
      handler: 'collection.getCollections',
      config: {
        policies: ['admin::isAuthenticatedAdmin'],
      },
    },
    {
      method: 'GET',
      path: '/graphs',
      handler: 'graph.find',
      config: {
        policies: ['admin::isAuthenticatedAdmin'],
      },
    },
    {
      method: 'GET',
      path: '/graphs/:id',
      handler: 'graph.findOne',
      config: {
        policies: ['admin::isAuthenticatedAdmin'],
      },
    },
    {
      method: 'GET',
      path: '/graphs/count',
      handler: 'graph.count',
      config: {
        policies: ['admin::isAuthenticatedAdmin'],
      },
    },
    {
      method: 'POST',
      path: '/graphs',
      handler: 'graph.create',
      config: {
        policies: ['admin::isAuthenticatedAdmin'],
      },
    },
    {
      method: 'PUT',
      path: '/graphs/:id',
      handler: 'graph.update',
      config: {
        policies: ['admin::isAuthenticatedAdmin'],
      },
    },
    {
      method: 'DELETE',
      path: '/graphs/:id',
      handler: 'graph.destroy',
      config: {
        policies: ['admin::isAuthenticatedAdmin'],
      },
    },
  ],
};
