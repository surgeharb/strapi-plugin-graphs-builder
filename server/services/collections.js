'use strict';
const { getService } = require('../utils');
const { PLUGINS_INCLUDED } = require('../constants');

const getAttributes = (collection) =>
  Object.keys(collection.attributes).filter(
    (attribute) => !['updatedBy', 'createdBy'].includes(attribute)
  );

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
