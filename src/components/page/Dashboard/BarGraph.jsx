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
    axios.get('https://localhost:7295/api/Module/statistics')
      .then(response => {
        const modules = response.data;
        const moduleData = {};

        // Count occurrences of each module
        modules.forEach(item => {
          moduleData[item.name] = item.total;
        });

        const labels = Object.keys(moduleData);
        const counts = Object.values(moduleData);

        // Prepare data for react-google-charts with a uniform color
        const chartArray = [['Module', 'User Count', { role: 'style', type: 'string' }]];
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
            title: 'User Count by Product',
            chartArea: { width: '50%' },
            hAxis: {
              title: 'User Count',
              minValue: 0,
            },
            vAxis: {
              title: 'Product',
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
