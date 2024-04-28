import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Month", "Revenue 2022", "Revenue 2023"],
  ["January", 1000, 1100],
  ["February", 1050, 1150],
  ["March", 660, 400], 
  ["April", 900, 1000],
  ["May", 950, 1050],
  ["June", 1000, 1100],
  ["July", 1050, 800],
  ["August", 1100, 1200],
  ["September", 1200, 1200],
  ["November", 1250, 1000],
  ["December", 1300, 1350],
];

export const options = {
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

function LineChart() {
  return (
    <Chart
      chartType="LineChart"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  )
}

export default LineChart;
