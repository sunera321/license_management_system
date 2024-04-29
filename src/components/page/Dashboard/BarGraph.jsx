import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement } from 'chart.js';
import axios from 'axios';


ChartJS.register(CategoryScale, LinearScale, BarElement);

const generateColorShades = (color, count) => {
  const colors = [];
  const minShade = 0.3; // Minimum opacity for the darkest shade
  const maxShade = 0.9; // Maximum opacity for the lightest shade
  const shadeStep = (maxShade - minShade) / (count - 1);

  for (let i = 0; i < count; i++) {
    const shade = minShade + i * shadeStep;
    colors.push(`rgba(${color[0]}, ${color[1]}, ${color[2]}, ${shade})`);
  }
  return colors;
};

const BarGraph = () => {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: 'User Count',
        data: [],
        backgroundColor: [],
        borderColor: [],
        borderWidth: 1
      }
    ]
  });

  const options = {
    indexAxis: 'y', // To display bars horizontally
    elements: {
      bar: {
        borderWidth: 1, // To increase the border width of bars
      }
    },
    layout: {
      padding: {
        left: 50,
        right: 50
      }
    },
    plugins: {
      legend: {
        display: true,
        position: 'bottom',
      }
    },

    responsive: true,
    scales: {
      x: {
        ticks: {
          beginAtZero: true,
          precision: 0
        }
      },
      y: {
        title: {
          display: true,
          text: 'Product', // Title for the left side (y-axis) of the bar graph
          padding: {

            bottom: 20,
            
          }
        }
      },
    },
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
        // Generate different shades of blue for backgroundColor
        const colorShades = generateColorShades([54, 78, 103], labels.length); 

        setChartData({
          labels: labels,
          datasets: [{
            label: 'User Count',
            data: userData,
            backgroundColor: colorShades,
            borderColor: colorShades,
            borderWidth: 1
          }]
        });
      })
      // Catch any errors that occur during the data fetching process and log them to the console
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (

    <div className="w-full">
      <div className='mb-4 relative md:h-80 lg:h-96'>
        <Bar data={chartData} options={options} />
      </div>
    </div>
  );
};

export default BarGraph;
