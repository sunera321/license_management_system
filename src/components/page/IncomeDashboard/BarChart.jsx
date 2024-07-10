import React, { useState, useEffect } from 'react';
import HTTPService from '../../../Service/HTTPService';
import { Chart } from 'react-google-charts';


function BarChart() {
  const [chartData, setChartData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    HTTPService.get('api/InDashboard/top-modules')
      .then(response => {
        const data = response.data;

        const mappedData = data.map(module => [
          module.moduleName,
          module.totalRevenue,
          module.numberOfClients
        ]);

        const chartData = [
          ['Module', 'Revenue', 'Users'],
          ...mappedData
        ];

        setChartData(chartData);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  const options = {
    chartArea: { width: '50%', height: '70%' },
    hAxis: {
      title: 'Modules',
    },
    vAxes: {
      0: { title: 'Revenue' },
      1: { title: 'Users' }
    },
    seriesType: 'bars',
    series: {
      0: { targetAxisIndex: 0 },
      1: { targetAxisIndex: 1 }
    },
    colors: ['#6252bc', '#280cc9'],
    width: '100%',
    legend: { position: 'top' },
  };

  const chartContainerStyle = 'bg-white shadow-2xl rounded-lg p-6 mb-6';
  const titleStyle = 'text-center text-lg font-bold mb-4 border-b-2 border-gray-300 pb-2 text-red-600';

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className={chartContainerStyle}>
      <h2 className={titleStyle}>Top 5 Modules in 2024</h2>
      <Chart
        chartType="ComboChart"
        width="100%"
        height="400px"
        data={chartData}
        options={options}
      />
    </div>
  );
}

export default BarChart;
