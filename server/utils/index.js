'use strict';

const getService = (name) => strapi.plugin('graphs-builder').service(name);

const groupByCount = async (connection, table, groupingField) => {
  try {
    const result = await connection(table).groupBy(groupingField).select(groupingField).count();
    return result.map((item) => ({
      name: item[groupingField.toLowerCase()],
      value: item['count(*)'],
    }));
  } catch (error) {
    console.error(error);
    return [];
  }
};

module.exports = {
  groupByCount,
  getService,
};
