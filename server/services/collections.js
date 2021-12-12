'use strict';
const { getService } = require('../utils');
const { PLUGINS_INCLUDED, ATTRIBUTES_EXCLUDED } = require('../constants');

const getAttributes = (collection) => {
  return Object.entries(collection.attributes)
    .filter(([key, value]) => !value.private && !ATTRIBUTES_EXCLUDED.includes(key))
    .map(([key]) => key);
};

module.exports = ({ strapi }) => {
  let savedCollections = [];

  const getCollections = () => {
    return savedCollections;
  };

  const updateCollections = () => {
    const collections = Object.values(strapi.contentTypes)
      .filter((type) => type.uid.startsWith('api::') || PLUGINS_INCLUDED.includes(type.uid))
      .map((type) => ({ uid: type.uid, attributes: getAttributes(type) }));

    savedCollections = [...collections];
    return collections;
  };

  return { getCollections, updateCollections };
};
