'use strict';

const _ = require('lodash');
const { sanitize } = require('@strapi/utils');
const { CREATED_BY_ATTRIBUTE, UPDATED_BY_ATTRIBUTE } = require('../constants');
const { getService } = require('../utils');

const sanitizeOutput = (data, ctx) => {
  const schema = strapi.getModel('plugin::graphs-builder.graph');
  const { auth } = ctx.state;

  return sanitize.contentAPI.output(data, schema, { auth });
};

module.exports = {
  async find(ctx, next, { populate } = {}) {
    const graphs = await getService('graphs').fetchAll(ctx.query, populate);

    ctx.body = await Promise.all(graphs.map((graph) => sanitizeOutput(graph, ctx)));
  },

  async findOne(ctx) {
    const { id } = ctx.params;
    let data = await getService('graphs').fetch({ id });

    if (data) {
      data = await sanitizeOutput(data, ctx);
    }

    ctx.body = data;
  },

  async count(ctx) {
    ctx.body = await getService('graphs').count(ctx.query);
  },

  async destroy(ctx) {
    const { id } = ctx.params;

    const data = await getService('graphs').remove({ id });
    const sanitizedGraph = await sanitizeOutput(data, ctx);

    ctx.send(sanitizedGraph);
  },

  async create(ctx) {
    const { body } = ctx.request;
    const { user: admin } = ctx.state;

    const graph = {
      ...body,
      [CREATED_BY_ATTRIBUTE]: admin.id,
      [UPDATED_BY_ATTRIBUTE]: admin.id,
    };

    const data = await getService('graphs').add(graph);
    const sanitizedData = await sanitizeOutput(data, ctx);

    ctx.created(sanitizedData);
  },

  async update(ctx) {
    const { id } = ctx.params;
    const { body } = ctx.request;
    const { user: admin } = ctx.state;

    const updateData = _.omit({ ...body, [UPDATED_BY_ATTRIBUTE]: admin.id }, CREATED_BY_ATTRIBUTE);

    const data = await getService('graphs').edit({ id }, updateData);
    const sanitizedData = await sanitizeOutput(data, ctx);

    ctx.created(sanitizedData);
  },
};
