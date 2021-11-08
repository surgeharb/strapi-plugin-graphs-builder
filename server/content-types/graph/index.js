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
  pluginOptions: {
    'content-manager': {
      visible: false,
    },
    'content-type-builder': {
      visible: process.env.NODE_ENV === 'development',
    },
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
      enum: ['pie', 'line', 'dateLine'],
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
    },
  },

  config: schemaConfig,
};
