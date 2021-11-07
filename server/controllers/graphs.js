'use strict';

const { sanitize } = require('@strapi/utils');
const { getService } = require('../utils');

const sanitizeOutput = (data, ctx) => {
  const schema = strapi.getModel('plugin::graphs-builder.graph');
  const { auth } = ctx.state;

  return sanitize.contentAPI.output(data, schema, { auth });
};

module.exports = {
  async find(ctx) {
    const files = await getService('graphs').findMany(ctx.query);

    ctx.body = await sanitizeOutput(files, ctx);
  },

  async findOne(ctx) {
    const {
      params: { id },
    } = ctx;

    const file = await getService('graphs').findOne(id);

    if (!file) {
      return ctx.notFound('graph.notFound');
    }

    ctx.body = await sanitizeOutput(file, ctx);
  },

  async count(ctx) {
    ctx.body = await getService('graphs').count(ctx.query);
  },
};
