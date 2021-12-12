'use strict';
const { getService } = require('../utils');
const { PLUGINS_INCLUDED, ATTRIBUTES_EXCLUDED } = require('../constants');

const getAttributes = (collection) => {
  return Object.keys(collection.attributes).filter(
    (attribute) => !ATTRIBUTES_EXCLUDED.includes(attribute)
  );
};

module.exports = ({ strapi }) => {
  let savedCollections = [];

  const getCollections = () => {
    return savedCollections;
  };

  const updateCollections = () => {
    const collections = Object.values(strapi.contentTypes)
      .map((type) => ({ uid: type.uid, attributes: getAttributes(type) }))
      .filter((type) => type.uid.startsWith('api::') || PLUGINS_INCLUDED.includes(type.uid));

    savedCollections = [...collections];
    return collections;
  };

  return { getCollections, updateCollections };
};
