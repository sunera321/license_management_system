import React, { useState, useEffect } from 'react';
import { Chart } from 'react-google-charts';
import axios from 'axios';
import axiosInstance from '../../axiosInstance';

const  StatusBarGraph = () => {
  const [chartData, setChartData] = useState([
    ['Status', 'Count', { role: 'style', type: 'string' }]
  ]);

  useEffect(() => {
    axiosInstance.get('https://localhost:7295/api/LicenseKey')
      .then(response => {
        const keys = response.data;
        const statusCounts = {};

        // Count occurrences of each status
        keys.forEach(key => {
          if (statusCounts[key.key_Status]) {
            statusCounts[key.key_Status]++;
          } else {
            statusCounts[key.key_Status] = 1;
          }
        });

        const labels = Object.keys(statusCounts);
        const counts = Object.values(statusCounts);

        // Prepare data for react-google-charts with a uniform color
        const chartArray = [['Status', 'Count', { role: 'style', type: 'string' }]];
        const uniformColor = 'color: rgb(96, 130, 182)'; // Uniform color for all bars
        labels.forEach((label, index) => {
          chartArray.push([label, counts[index], uniformColor]);
        });

        setChartData(chartArray);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="w-full">
      <div className='mb-4 relative md:h-80 lg:h-96'>
        <Chart
          width={'100%'}
          height={'400px'}
          chartType="BarChart"
          data={chartData}
          options={{
            title: 'Key Status Count',
            chartArea: { width: '50%' },
            hAxis: {
              title: 'Count',
              minValue: 0,
            },
            vAxis: {
              title: 'Status',
            },
            legend: { position: 'bottom' },
          }}
        />
      </div>
    </div>
  );
};

export default StatusBarGraph;
