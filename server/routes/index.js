'use strict';

module.exports = [
  {
    method: 'GET',
    path: '/',
    handler: 'custom.sendWelcome',
    config: {
      policies: [],
    },
  },
];
