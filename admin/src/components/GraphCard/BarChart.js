import React, { PureComponent } from 'react';
import { BarChart, Bar, Tooltip, Legend, XAxis, YAxis, CartesianGrid } from 'recharts';

const DEFAULT_DATA = [
  { name: 'A', value: 400 },
  { name: 'B', value: 300 },
  { name: 'C', value: 300 },
  { name: 'D', value: 200 },
];

const BarChartComponent = ({ title, data = DEFAULT_DATA }) => {
  return (
    <>
      <h3 style={{ marginLeft: 24, marginBottom: 24 }}>{title}</h3>
      <BarChart width={350} height={250} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="value" fill="#8884d8" />
      </BarChart>
    </>
  );
};

export default BarChartComponent;
