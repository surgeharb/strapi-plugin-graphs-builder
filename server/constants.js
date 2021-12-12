module.exports = {
  CREATED_BY_ATTRIBUTE: 'createdBy',
  UPDATED_BY_ATTRIBUTE: 'updatedBy',
  PLUGINS_INCLUDED: ['plugin::users-permissions.user'],
  ATTRIBUTES_EXCLUDED: ['updatedBy', 'createdBy', 'updatedAt', 'createdAt'],
};
