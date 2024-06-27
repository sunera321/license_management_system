import React, { useEffect, useState } from 'react';
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

// Functional component to render the Bar Chart
const Chart = () => {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: 'Revenue',
        data: [],
        backgroundColor: 'rgba(12, 80, 126, 0.5)',
        barPercentage: 0.8,
        categoryPercentage: 0.9,
        barThickness: 'flex',
      },
    ],
  });

  useEffect(() => {
    fetchData(); // Fetch data when component mounts
  }, []);

  const fetchData = async () => {
    try {
      // Replace with your actual API endpoint
      const response = await fetch('https://localhost:7295/api/Dashboard/module-revenue-2024');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();

      // Process the fetched data and update chartData
      const updatedData = {
        labels: data.map(entry => entry.moduleName),
        datasets: [
          {
            label: 'Revenue',
            data: data.map(entry => entry.totalRevenue),
            backgroundColor: 'rgba(12, 80, 126, 0.5)',
            barPercentage: 0.8,
            categoryPercentage: 0.9,
            barThickness: 'flex',
          },
        ],
      };

      setChartData(updatedData);
    } catch (error) {
      console.error('Error fetching data:', error);
      // Optionally handle errors here, e.g., setChartData(initialData) to show initial static data
    }
  };

  return (
    <Bar options={options} data={chartData} />
  );
};

export default Chart;
