import React from 'react';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: 'Total Revenue',
      position: 'bottom'
    },
    legend: {
      display: true,
      position: 'bottom'
    },
  },
  scales: {
    y: {
      ticks: {
        beginAtZero: true,
        callback: function(value) {
          return value.toLocaleString(); 
        }
      }
    },
    x: {
      grid: {
        display: false 
      }
    }
  }
};

const labels = ['HRM', 'ESN', 'PeoplesHR', 'HRO', 'Tracking Systemsy', 'HRO', '07','08','09','10'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Users',
      data: [1000, 3000, 4000, 5000, 4000, 3000, 6000, 2000, 1500, 3000, 4000],
      barPercentage: 0.5 
    },
    {
      label: 'Revenue',
      data: [2000, 3000, 5000, 4000, 3000, 2000, 8000, 3500, 4500, 2500, 6000], 
      backgroundColor: 'rgba(12, 80, 126, 0.5)',
      barPercentage: 0.5
    },
  ],
};

const Chart = () => {
  return (
    <Bar options={options} data={data} />
  )
}

export default Chart;
