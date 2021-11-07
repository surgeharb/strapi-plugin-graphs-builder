'use strict';
const { getService } = require('../utils');

module.exports = ({ strapi }) => ({
  findOne: (id, populate) =>
    strapi.entityService.findOne('plugin::graphs-builder.graph', id, { populate }),

  findMany: (query) => strapi.entityService.findMany('plugin::graphs-builder.graph', query),

  findPage: (query) => strapi.entityService.findPage('plugin::graphs-builder.graph', query),
});
