import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement } from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
);

const LineGraph = () => {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: []
  });


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://localhost:7295/api/LicenseKey/statistics');
        const data = await response.json();

        // Filter data to include only 'Available' status
        const activateData = data.filter(item => item.key_Status === 'Available');

        // Group available data by month and count total users per month
        const groupedData = activateData.reduce((acc, curr) => {
          // Extract the month from the activationDate field
          const month = new Date(curr.activationDate).getMonth() + 1; // JavaScript months are 0-indexed
          if (!acc[month]) {
            acc[month] = 0;
          }
          acc[month]++;
          return acc;
        }, {});

        // Create labels for months
        const months = Object.keys(groupedData).map(month =>
          new Date(0, month - 1).toLocaleString('default', { month: 'long' })
        );

        // Round counts to full values
        const roundedData = Object.keys(groupedData).reduce((acc, key) => {
          acc[key] = Math.round(groupedData[key]);
          return acc;
        }, {});


        // Generate dataset for monthly users
        const dataset = {
          label: 'Monthly Available Users',
          data: Object.values(roundedData),
          borderColor: 'rgba(0, 123, 255, 0.8)',
          backgroundColor: 'rgba(0, 123, 255, 0.5)',
          pointRadius: 3,
          pointHoverRadius: 5,
          fill: true
        };

        setChartData({
          labels: months,
          datasets: [dataset]
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
        title: {
          display: true,
          text: 'Months',
        },
        grid: {
          display: false,
        },
      },
      y: {
        title: {
          display: true,
          text: 'User Count',
        },
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
    }
  };

  return (
    <div className="w-full px-4 md:px-0">
      <div className="relative h-64 md:h-80 lg:h-96">
        <Line data={chartData} options={options} />
      </div>
    </div>
  );
};

export default LineGraph;



//////////////////////////////Hard coded data/////////////////////////////////////

// import React from 'react';
// import { Line } from 'react-chartjs-2';
// import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement } from 'chart.js';

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
// );

// const LineGraph = () => {
//   // Set hardcoded chart data
//   const chartData = {
//     labels: ['January', 'February', 'March', 'April', 'May'],
//     datasets: [
//       {
//         label: 'Monthly Available Users',
//         data: [20, 25, 15, 30, 10],
//         borderColor: 'rgba(0, 123, 255, 0.8)',
//         backgroundColor: 'rgba(0, 123, 255, 0.5)',
//         pointRadius: 3,
//         pointHoverRadius: 5,
//         fill: true
//       }
//     ]
//   };

//   const options = {
//     responsive: true,
//     interaction: {
//       intersect: false,
//       mode: 'index',
//     },
//     scales: {
//       x: {
//         title: {
//           display: true,
//           text: 'Months',
//         },
//         grid: {
//           display: false,
//         },
//       },
//       y: {
//         title: {
//           display: true,
//           text: 'User Count',
//         },
//         grid: {
//           display: false,
//         },
//       },
//     },
//     maintainAspectRatio: false,
//     elements: {
//       line: {
//         tension: 0.3,
//         borderWidth: 2,
//       },
//       point: {
//         radius: 0,
//       },
//     }
//   };

//   return (
//     <div className="w-full px-4 md:px-0">
//       <div className="relative h-64 md:h-80 lg:h-96">
//         <Line data={chartData} options={options} />
//       </div>
//     </div>
//   );
// };

// export default LineGraph;




