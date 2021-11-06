/**
 *
 * GraphCard
 *
 */

import React from 'react';
import PieChart from './PieChart';
import LineChart from './LineChart';

import { Box } from '@strapi/design-system/Box';
import { Card } from '@strapi/design-system/Card';

const GraphCard = ({ title, graphType }) => {
  return (
    <Card width="350" style={{ margin: 8 }}>
      <Box style={{ padding: '24px 32px 16px 0' }}>
        {graphType === 'line' && <LineChart title={title} />}
        {graphType === 'pie' && <PieChart title={title} />}
      </Box>
    </Card>
  );
};

export default GraphCard;
