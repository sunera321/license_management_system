import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
 
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
         title: {
          display: true,
          text: 'Months',
         }
        },
      },
      y: {
        grid: {
          display: false,
          position: 'bottom'
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
    dataset.pointHoverRadius = 5; // Show point on hover
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









// import React, { useEffect, useState } from 'react';
// import { Line } from 'react-chartjs-2';
// import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement } from 'chart.js';
// 
// ChartJS.register(
  // CategoryScale,
  // LinearScale,
  // PointElement,
  // LineElement,
// );
// 
// const LineGraph = () => {
  // const [chartData, setChartData] = useState({
    // labels: [],
    // datasets: []
  // });
// 
  // useEffect(() => {
    // const fetchData = async () => {
      // try {
        // const response = await fetch('https://localhost:7284/api/client');
        // const data = await response.json();
// 
       /* Group data by month and count total users per month */
        // const groupedData = data.reduce((acc, curr) => {
          // const month = curr.date.split('-')[1];
          // if (!acc[month]) {
            // acc[month] = 0;
          // }
          // acc[month]++;
          // return acc;
        // }, {});
// 
        /* Extract unique months */
        // const months = Object.keys(groupedData);
// 
       /* Generate dataset for monthly users */
        // const dataset = {
          // label: 'Monthly Users',
          // data: Object.values(groupedData),
          // borderColor: 'black',
          // backgroundColor: 'transparent',
          // pointRadius: 0,
          // pointHoverRadius: 5
        // };
// 
        // setChartData({
          // labels: months,
          // datasets: [dataset]
        // });
      // } catch (error) {
        // console.error('Error fetching data:', error);
      // }
    // };
// 
    // fetchData();
  // }, []);
// 
  // const options = {
    // responsive: true,
    // interaction: {
      // intersect: false,
      // mode: 'index',
    // },
    // scales: {
      // x: {
        // title: {
          // display: true,
          // text: 'Months',
        // },
        // grid: {
          // display: false,
        // },
      // },
      // y: {
        // title: {
          // display: true,
          // text: 'User Count',
        // },
        // grid: {
          // display: false,
        // },
      // },
    // },
    // maintainAspectRatio: false,
    // elements: {
      // line: {
        // tension: 0.3,
        // borderWidth: 2,
      // },
      // point: {
        // radius: 0,
      // },
    // }
  // };
// 
  // return (
    // <div className="w-full px-4 md:px-0">
      {/* <div className="relative h-64 md:h-80 lg:h-96 "> */}
        {/* <Line data={chartData} options={options} /> */}
      {/* </div> */}
    {/* </div> */}
  // );
// };
// 
// export default LineGraph;
// 












