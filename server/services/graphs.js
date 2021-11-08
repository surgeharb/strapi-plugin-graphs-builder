'use strict';

const PLUGIN_GRAPH = 'plugin::graphs-builder.graph';

const { getService, groupByCount } = require('../utils');
const { contentTypes: contentTypesUtils } = require('@strapi/utils');
const { UPDATED_BY_ATTRIBUTE, CREATED_BY_ATTRIBUTE } = contentTypesUtils.constants;

module.exports = ({ strapi }) => ({
  fetch: (params, populate) => strapi.query(PLUGIN_GRAPH).findOne({ where: params, populate }),

  fetchAll: async (params, populate) => {
    const graphs = await strapi.query(PLUGIN_GRAPH).findMany({ where: params, populate });
    return Promise.all(
      graphs.map(async (graph) => ({
        ...graph,
        graphData: await groupByCount(
          strapi.db.connection,
          strapi.contentTypes[graph.collectionX].collectionName,
          graph.collectionXAttribute
        ),
      }))
    );
  },

  count: (params) => strapi.query(PLUGIN_GRAPH).count({ where: params }),

  add: (values) => strapi.query(PLUGIN_GRAPH).create({ data: values }),

  edit: (params, values) => strapi.query(PLUGIN_GRAPH).update({ where: params, data: values }),

  remove: (params, populate) => strapi.query(PLUGIN_GRAPH).delete({ where: params }),
});
