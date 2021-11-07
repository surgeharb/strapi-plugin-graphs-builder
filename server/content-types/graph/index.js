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
    type: {
      type: 'enumeration',
      enum: ['pie', 'line'],
      configurable: false,
      required: true,
    },
    collectionX: {
      type: 'string',
      configurable: false,
      required: true,
    },
    collectionXAttribute: {
      type: 'string',
      configurable: false,
      required: true,
    },
  },

  config: schemaConfig,
};
