import React, { useState, useEffect } from 'react';
import { Chart } from 'react-google-charts';
import DownloadDropdown from './DownloadDropdown';
import HTTPService from '../../../Service/HTTPService';

const StatusBarGraph = () => {
  const [chartData, setChartData] = useState([
    ['Status', 'Count', { role: 'style', type: 'string' }]
  ]);

  useEffect(() => {
    HTTPService.get('api/LicenseKey')
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
        const gradientColor = 'color: #4A90E2; fill-opacity: 0.8'; 
        labels.forEach((label, index) => {
          chartArray.push([label, counts[index], gradientColor]);
        });

        setChartData(chartArray);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="w-full p-6 transition-transform duration-500 transform bg-white rounded-lg shadow-xl hover:scale-105">
      <div className="relative mb-4 md:h-80 lg:h-96">
        <Chart
          width={'100%'}
          height={'400px'}
          chartType="BarChart"
          data={chartData}
          options={{
            title: 'User Count by Product',
            titleTextStyle: {
              color: '#2C3E50',
              fontSize: 20,
              bold: true,
              fontName: 'Arial',
            },
            chartArea: { width: '60%' },
            hAxis: {
              title: 'User Count',
              minValue: 0,
              titleTextStyle: {
                color: '#2C3E50',
                italic: false,
                fontName: 'Arial',
              },
              textStyle: {
                color: '#34495E',
                fontName: 'Arial',
              },
              gridlines: {
                color: '#BDC3C7',
              },
            },
            vAxis: {
              title: 'Product',
              titleTextStyle: {
                color: '#2C3E50',
                italic: false,
                fontName: 'Arial',
              },
              textStyle: {
                color: '#34495E',
                fontName: 'Arial',
              },
              gridlines: {
                color: '#BDC3C7',
              },
            },
            legend: {
              position: 'none',
            },
            tooltip: {
              isHtml: true,
              textStyle: {
                color: '#2C3E50',
              },
              showColorCode: true,
            },
            bar: {
              groupWidth: '75%',
            },
            animation: {
              startup: true,
              duration: 1000,
              easing: 'inAndOut',
            },
            enableInteractivity: true,
          }}
        />
      </div>
      <div className="flex justify-end">
        <DownloadDropdown userData={chartData} />
      </div>
    </div>
  );
};


export default StatusBarGraph;
