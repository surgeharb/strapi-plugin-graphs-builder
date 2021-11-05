'use strict';

const getService = (name) => strapi.plugin('graphs-builder').service(name);

module.exports = {
  getService,
};
