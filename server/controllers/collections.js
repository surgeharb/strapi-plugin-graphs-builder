'use strict';

const { getService } = require('../utils');

module.exports = {
  getCollections(ctx) {
    const collections = getService('collections').getCollections();
    ctx.body = {
      collections,
    };
  },
};
