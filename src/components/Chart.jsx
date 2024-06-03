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

// Register necessary Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

// Configuration options for the bar chart
export const options = {
  responsive: true, 
  plugins: {
    title: {
      display: true,
      text: 'Total Revenue', 
      position: 'bottom',
    },
    legend: {
      display: true,
      position: 'bottom', 
    },
  },
  scales: {
    y: {
      ticks: {
        beginAtZero: true,
        callback: function(value) {
          return value.toLocaleString(); 
        },
      },
    },
    x: {
      grid: {
        display: false, 
      },
    },
  },
};


const labels = ['HRM', 'ESN', 'PeoplesHR', 'HRO', 'Tracking Systemsy', 'HRO', '07','08','09','10'];

// Data for the bar chart
export const data = {
  labels,
  datasets: [
    {
      label: 'Users',
      data: [20, 30, 42, 35, 38, 60, 45, 50, 50, 30, 45],
      backgroundColor: 'rgba(69, 96, 113, 0.5)',
      barPercentage: 0.8, // Adjust overall width of bars (default: 0.9)
      categoryPercentage: 0.9, // Adjust spacing between bars within the same category (default: 0.8)
      barThickness: 'flex', // Use 'flex' to fit bars within the available space
    },
    {
      label: 'Revenue',
      data: [2000, 3000, 5000, 4000, 3000, 2000, 8000, 3500, 4500, 2500, 6000],
      backgroundColor: 'rgba(12, 80, 126, 0.5)',
      barPercentage: 0.8,
      categoryPercentage: 0.9,
      barThickness: 'flex',
    },
  ],
};

// Functional component to render the Bar Chart
const Chart = () => {
  return (
    <Bar options={options} data={data} /> 
  );
};

export default Chart;
