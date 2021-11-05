'use strict';
const { getService } = require('../utils');
const { PLUGINS_INCLUDED } = require('../constants');

module.exports = ({ strapi }) => {
  let savedCollections = [];

  const getCollections = () => {
    return savedCollections;
  };

  const updateCollections = () => {
    const collections = Object.values(strapi.contentTypes)
      .map((type) => type.uid)
      .filter((type) => type.startsWith('api::') || PLUGINS_INCLUDED.includes(type));

    savedCollections = [...collections];
    return collections;
  };

  return { getCollections, updateCollections };
};
