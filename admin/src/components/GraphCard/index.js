/**
 *
 * GraphCard
 *
 */

import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';

import { Box } from '@strapi/parts/Box';
import { Card } from '@strapi/parts/Card';

const GraphCard = ({ title }) => {
  const data = [
    { name: 'A', value: 400 },
    { name: 'B', value: 200 },
    { name: 'C', value: 300 },
    { name: 'D', value: 250 },
    { name: 'E', value: 150 },
  ];

  return (
    <Card width="350" style={{ margin: 8 }}>
      <Box style={{ padding: '24px 32px 16px 0' }}>
        <h3 style={{ marginLeft: 24, marginBottom: 24 }}>{title}</h3>
        <LineChart width={350} height={270} data={data}>
          <Line type="monotone" dataKey="value" stroke="#8884d8" />
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="name" />
          <YAxis />
        </LineChart>
      </Box>
    </Card>
  );
};

export default GraphCard;
