'use strict';

const { getService } = require('./utils');

module.exports = async ({ strapi }) => {
  const test = getService('collections').updateCollections();
};
