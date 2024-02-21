import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement,  Tooltip, Filler} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler
);

const LineGraph = ({ chartData }) => {
  const options = {
    responsive: true,
    interaction: {
      intersect: false,
      mode: 'index',
    },
    scales: {
      x: {
        grid: {
         display: false, 
        },
      },
      y: {
        grid: {
          display: false,
        },
      },
    },
    maintainAspectRatio: false, 
    elements: {
      line: {
        tension: 0.3,
        borderWidth: 2,
      },
      point: {
        radius: 0,
      },
    },
  };
  chartData.datasets.forEach(dataset => {
    dataset.borderColor = 'black'; // Set the color of the line
    dataset.backgroundColor = 'transparent'; // No fill beneath the line
    dataset.pointRadius = 0; // Hide the points
    dataset.pointHoverRadius = 5; // Show point on hover, adjust as needed
  });

  return <Line data={chartData} options={options} />;
};

export default LineGraph;
