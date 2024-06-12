import React, { useState, useEffect } from 'react';
import { Chart } from 'react-google-charts';
import axios from 'axios';

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

  useEffect(() => {
    axios.get('https://localhost:7295/api/LicenseKey')
      .then(response => {
        const data = response.data;
        const statusData = {};

        // Count occurrences of each key_Status
        data.forEach(item => {
          if (!statusData[item.key_Status]) {
            statusData[item.key_Status] = 0;
          }
          statusData[item.key_Status]++;
        });

        const labels = Object.keys(statusData);
        const counts = Object.values(statusData);


      
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
            title: 'User Count by Status',
            chartArea: { width: '50%' },
            hAxis: {
              title: 'User Count',
              minValue: 0,
            },
            vAxis: {
              title: 'Status',
            },
            legend: { 
              fill:'#6082B6',
              position: 'bottom' },
    
          }}
        />
      </div>
    </div>
  );
};

export default BarGraph;
