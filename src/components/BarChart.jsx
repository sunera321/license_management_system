import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Chart } from 'react-google-charts';

// Functional component to render the BarChart using Google Charts
function BarChart() {
  const [chartData, setChartData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('https://localhost:7295/api/Dashboard/top-modules')
      .then(response => {
        const data = response.data;

        // Map fetched data to Google Charts format
        const mappedData = data.map(module => [
          module.moduleName,
          module.totalRevenue,
          module.numberOfClients
        ]);

        // Prepare chart data with header
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
    title: 'Top 5 Modules in 2024',
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

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div style={{ background: '#B2B2B2', padding: '20px', borderRadius: '10px' }}>
      {/* Render the Chart component with specified chartType, data, and options */}
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
