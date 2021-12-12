import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';

const DEFAULT_DATA = [
  { name: 'A', value: 400 },
  { name: 'B', value: 200 },
  { name: 'C', value: 300 },
  { name: 'D', value: 250 },
  { name: 'E', value: 150 },
];

const DateLineChartComponent = ({ title, data = DEFAULT_DATA }) => {
  return (
    <>
      <h3 style={{ marginLeft: 24, marginBottom: 24 }}>{title}</h3>
      <LineChart width={350} height={270} data={data}>
        <Line type="monotone" dataKey="value" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="name" />
        <YAxis />
      </LineChart>
    </>
  );
};

export default DateLineChartComponent;
