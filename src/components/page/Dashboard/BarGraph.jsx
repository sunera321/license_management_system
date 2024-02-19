import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement);

const BarGraph = ({ chartData }) => {
  return <Bar data={chartData} />;
};

export default BarGraph;
