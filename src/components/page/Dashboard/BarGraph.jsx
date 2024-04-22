import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement } from 'chart.js';
import axios from 'axios';

ChartJS.register(CategoryScale, LinearScale, BarElement);

const BarGraph = () => {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: 'User Count',
        data: [],
        backgroundColor: [
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(199, 199, 199, 0.2)'
        ],
        borderColor: [
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(199, 199, 199, 1)'
        ],
        borderWidth: 1
      }
    ]
  });

  const options = {
    scales: {
      x: {
        grid: {
          display: false, 
        },
      },
      y: {
        grid: {
          drawBorder: false,
          display: false,
          color: function(context) {
            if (context.tick.value === 0) {
              return 'transparent'; 
            }
            return 'rgba(0, 0, 0, 0.1)'; 
          },
        },
        ticks: {
          precision: 0, 
          beginAtZero: true 
        }
      },
    },
    maintainAspectRatio: false, 
    responsive: true,
    layout: {
      padding: {
        top: 10,
        right: 50,
        bottom: 10,
        left: 50
      }
    }
  };

  useEffect(() => {
    axios.get('https://localhost:7284/api/client')
      .then(response => {
        const data = response.data;
        const moduleData = {};

        data.forEach(item => {
          if (!moduleData[item.module]) {
            moduleData[item.module] = 0;
          }
          moduleData[item.module]++;
        });

        const labels = Object.keys(moduleData).map(module => `${module} (${moduleData[module]})`);
        const userData = Object.values(moduleData);

        setChartData({
          labels: labels,
          datasets: [{
            label: 'User Count',
            data: userData,
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
          }]
        });
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="w-3/4 px-4 md:px-0"> 
      <div className="relative h-64 md:h-80 lg:h-96 "> 
        <Bar data={chartData} options={options} />
      </div>
    </div>
  );
};

export default BarGraph;
