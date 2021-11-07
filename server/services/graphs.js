'use strict';

const PLUGIN_GRAPH = 'plugin::graphs-builder.graph';

const { getService } = require('../utils');
const { contentTypes: contentTypesUtils } = require('@strapi/utils');
const { UPDATED_BY_ATTRIBUTE, CREATED_BY_ATTRIBUTE } = contentTypesUtils.constants;

module.exports = ({ strapi }) => ({
  fetch: (params, populate) => strapi.query(PLUGIN_GRAPH).findOne({ where: params, populate }),

  fetchAll: (params, populate) => strapi.query(PLUGIN_GRAPH).findMany({ where: params, populate }),

  count: (params) => strapi.query(PLUGIN_GRAPH).count({ where: params }),

  add: (values) => strapi.query(PLUGIN_GRAPH).create({ data: values }),

  edit: (params, values) => strapi.query(PLUGIN_GRAPH).update({ where: params, data: values }),

  remove: (params, populate) => strapi.query(PLUGIN_GRAPH).delete({ where: params }),
});
