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

  return (
    <div className="w-full px-4 md:px-0"> 
    <div className=" h-64 md:h-80 lg:h-96 "> 
        <Line data={chartData} options={options} />
      </div>
    </div>
  );
};

export default LineGraph;























/*import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Filler } from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler
);

const LineGraph = () => {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: []
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://localhost:7284/api/client');
        const data = await response.json();
        // Group data by month
        const groupedData = data.reduce((acc, curr) => {
          const month = curr.date.split('-')[1];
          if (!acc[month]) {
            acc[month] = {};
          }
          if (!acc[month][curr.module]) {
            acc[month][curr.module] = 0;
          }
          acc[month][curr.module]++;
          return acc;
        }, {});

        // Extract unique modules
        const modules = [...new Set(data.map(item => item.module))];

        // Generate datasets for each module
        const datasets = modules.map(module => ({
          label: module,
          data: Object.values(groupedData).map(monthData => monthData[module] || 0),
          borderColor: 'black',
          backgroundColor: 'transparent',
          pointRadius: 0,
          pointHoverRadius: 5
        }));

        setChartData({
          labels: Object.keys(groupedData),
          datasets: datasets
        });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

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

  return (
    <div className="w-full px-4 md:px-0">
      <div className="relative h-64 md:h-80 lg:h-96 ">
        <Line data={chartData} options={options} />
      </div>
    </div>
  );
};

export default LineGraph;
*/ 