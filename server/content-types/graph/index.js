'use strict';

const schemaConfig = require('./schema-config');

module.exports = {
  collectionName: 'graphs_builder_graph',
  info: {
    name: 'graph',
    description: '',
    singularName: 'graph',
    pluralName: 'graphs',
    displayName: 'Graph',
  },
  options: {
    draftAndPublish: false,
    timestamps: true,
  },
  attributes: {
    title: {
      type: 'string',
      configurable: false,
      required: true,
    },
  },

  config: schemaConfig,
};
