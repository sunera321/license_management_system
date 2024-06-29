import React, { useState, useEffect } from "react";
import { Chart } from "react-google-charts";

// Functional component to render the Line Chart using Google Charts
function LineChart() {
  const [chartData, setChartData] = useState([]);

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const fetchData = async () => {
    try {
      const response = await fetch("https://localhost:7295/api/Dashboard/module-prices-by-year-month");
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();

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
    title: "Company Revenue",
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
    <Chart
      chartType="LineChart"
      width="100%" 
      height="400px" 
      data={chartData} 
      options={options} 
    />
  );
}

export default LineChart;
