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

  return (
    <div className="w-full px-4 md:px-0"> 
    <div className="relative h-64 md:h-80 lg:h-96 "> 
      <Bar data={chartData} options={options} />
    </div>
  </div>
  );
};

export default BarGraph;
