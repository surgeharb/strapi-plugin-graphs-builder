'use strict';

module.exports = {
  getCollections(ctx) {
    console.log('hola');
    const collections = getService('content-types').getCollections();
    console.log('hola');
    ctx.body = {
      collections,
    };
  },
};
