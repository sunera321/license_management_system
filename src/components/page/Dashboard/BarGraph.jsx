import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement } from 'chart.js';


ChartJS.register(CategoryScale, LinearScale, BarElement);

const BarGraph = ({ chartData }) => {
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
      },
    },
   
    maintainAspectRatio: false, 
    layout: {
      padding: {
        top: 10,
        right: 50,
        bottom: 10,
        left: 50
      }
    }
  };

  return <Bar data={chartData} options={options} />;
};

export default BarGraph;
