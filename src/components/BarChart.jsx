// BarChart.js
import React from 'react';
import { Chart } from 'react-google-charts';

const data = [
  ['Product', '2022', '2023'],
  ['HR Solution', 50, 60],
  ['HR', 60, 70],
  ['Product X', 70, 80],
  ['Product Y', 80, 100],
  ['Product Z', 100, 90],
];

const options = {
  title: 'Most Popular Products in 2022 and 2023',
  chartArea: { width: '50%' }, // Adjust the chart area width
  hAxis: {
    title: 'Total Users',
    minValue: 0,
  },
  
  vAxis: {
    title: 'Product',
  },
  colors: ['#6252bc', '#280cc9'], // emerald-700 and pink-800
  width: '700px', // Adjust the width here
  legend: { position: 'top' }, // Set the legend position to top
};

function BarChart() {
  return (
    <div style={{ background: '#B2B2B2', padding: '20px', borderRadius: '10px', width: '750px' }}>
      <Chart
        chartType="BarChart"
        width={options.width}
        height="400px"
        data={data}
        options={options}
      />
    </div>
  );
}

export default BarChart;
