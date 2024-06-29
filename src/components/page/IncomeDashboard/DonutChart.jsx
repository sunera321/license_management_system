import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Chart } from 'react-google-charts';

const DonutChart = () => {
  const [moduleData, setModuleData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://localhost:7295/api/InDashboard/module-revenue-2024');
        setModuleData(response.data);
      } catch (error) {
        console.error('Error fetching module revenue data:', error);
      }
    };

    fetchData();
  }, []);

  const chartData = [['Module Name', 'Total Revenue']];
  
  moduleData.forEach(module => {
    chartData.push([module.moduleName, module.totalRevenue]);
  });

  return (
    <div className="bg-white shadow-2xl rounded-lg p-6 mb-6">
      <h2 className="text-center text-lg font-bold mb-4 pb-2 border-b-2 border-gray-300">Revenue by Module</h2>
      <Chart
        width={'100%'}
        height={'400px'}
        chartType="PieChart"
        loader={<div>Loading Chart</div>}
        data={chartData}
        options={{
       
          pieHole: 0.4,
        }}
      />
    </div>
  );
};

export default DonutChart;