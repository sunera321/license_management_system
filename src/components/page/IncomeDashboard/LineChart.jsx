import React, { useState, useEffect } from "react";
import { Chart } from "react-google-charts";
import HTTPService from '../../../Service/HTTPService'

// Functional component to render the Line Chart using Google Charts
function LineChart() {
  const [chartData, setChartData] = useState([]);

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const fetchData = async () => {
    try {
      const response = await HTTPService.get("api/InDashboard/module-prices-by-year-month");
      const data = response.data;

      // Process the data to aggregate totals for each month across both years
      const aggregatedData = {};
      data.forEach(item => {
        const monthKey = `${item.month}`; // Assuming month is a number (1 for January, 2 for February, etc.)
        if (!aggregatedData[monthKey]) {
          aggregatedData[monthKey] = {
            month: monthNames[item.month - 1], // Convert numeric month to month name
            revenue2023: 0,
            revenue2024: 0
          };
        }
        if (item.year === 2023) {
          aggregatedData[monthKey].revenue2023 += item.totalModulePrice;
        } else if (item.year === 2024) {
          aggregatedData[monthKey].revenue2024 += item.totalModulePrice;
        }
      });

      // Prepare the chart data
      const chartDataFormatted = [
        ["Month", "Revenue 2023", "Revenue 2024"],
        ...Object.keys(aggregatedData).map(key => [
          aggregatedData[key].month, // Month name label
          aggregatedData[key].revenue2023,
          aggregatedData[key].revenue2024
        ])
      ];
      setChartData(chartDataFormatted);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []); // Fetch data only once on component mount

  const options = {
    curveType: "function",
    legend: { position: "bottom" },
    hAxis: {
      title: 'Month',
    },
    vAxis: {
      title: 'Revenue',
    },
  };

  return (
    <div className="bg-white shadow-2xl rounded-lg p-6 mb-6">
      <h2 className="text-center text-lg font-bold mb-4 pb-2 border-b-2 border-gray-300">Company Revenue</h2>
      <Chart
        chartType="LineChart"
        width="100%" 
        height="400px" 
        data={chartData} 
        options={options} 
      />
    </div>
  );
}

export default LineChart;
