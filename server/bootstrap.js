'use strict';

const { getService } = require('./utils');

module.exports = async ({ strapi }) => {
  getService('collections').updateCollections();
};
