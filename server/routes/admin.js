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
  ],
};
