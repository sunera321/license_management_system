import React from 'react';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import PropTypes from 'prop-types'; // Import PropTypes
import logo from '../IncomeDashboard/hsenid.png';
import { DownloadIcon } from '@heroicons/react/outline'; // Assuming you have imported Heroicons DownloadIcon

const DownloadReport = ({ dashboardData, lineChartData, chartData, barChartData, currentDateTime }) => {
  const downloadReport = () => {
    const doc = new jsPDF();
    const logoImg = new Image();
    logoImg.src = logo;

    // Calculate position based on desired margin-left and top margin
    const imgWidth = 40; // Adjust as needed
    const imgHeight = 40; // Adjust as needed
    const imgX = 170; // Margin-left of 500px
    const imgY = 10; // Margin-top of 10px

    doc.addImage(logoImg, 'PNG', imgX, imgY, imgWidth, imgHeight);

    doc.setFontSize(18);
    doc.text('Income Dashboard Report', 14, 22);
    doc.setFontSize(11);
    doc.text(`Date: ${currentDateTime.toLocaleDateString()}`, 14, 30);
    doc.text(`Time: ${currentDateTime.toLocaleTimeString()}`, 14, 36);

    // Table 1: Dashboard Metrics
    doc.setFontSize(14);
    doc.text('Dashboard Metrics', 14, 50);
    doc.autoTable({
      startY: 55,
      head: [['Metric', 'Value']],
      body: [
        ['Total Modules', dashboardData.totalModules],
        ['Total Users', dashboardData.totalUsers],
        ['Total Revenue', `Rs ${dashboardData.totalRevenue}`],
      ],
    });

    // Table 2: Line Chart Data
    doc.setFontSize(14);
    doc.text('Company Revenue in 2023 and 2024', 14, doc.autoTable.previous.finalY + 10);
    const lineChartTableBody = lineChartData.map(item => [
      `${item.year}-${item.month}`, item.totalModulePrice
    ]);
    doc.autoTable({
      startY: doc.autoTable.previous.finalY + 15,
      head: [['Year-Month', 'Total Module Price']],
      body: lineChartTableBody,
    });

    // Table 3: Chart Data
    doc.setFontSize(14);
    doc.text('Revenue by Module', 14, doc.autoTable.previous.finalY + 10);
    const chartTableBody = chartData.map(item => [
      item.moduleName, `Rs ${item.totalRevenue}`
    ]);
    doc.autoTable({
      startY: doc.autoTable.previous.finalY + 15,
      head: [['Module Name', 'Total Revenue']],
      body: chartTableBody,
    });

    // Table 4: Bar Chart Data
    doc.setFontSize(14);
    doc.text('Top 5 Modules in 2024 ', 14, doc.autoTable.previous.finalY + 10);
    const barChartTableBody = barChartData.map(item => [
      item[0], `Rs ${item[1]}`, item[2]
    ]);
    doc.autoTable({
      startY: doc.autoTable.previous.finalY + 15,
      head: [['Module Name', 'Total Revenue', 'Number of Clients']],
      body: barChartTableBody,
    });

    doc.save('IncomeDashboardReport.pdf');
  };

  return (
    <div className="flex items-center justify-center">
      <button onClick={downloadReport} className="flex items-center px-4 py-2 font-bold text-white bg-blue-600 rounded-lg hover:bg-blue-700 hover:text-black ">
        <DownloadIcon className="w-5 h-5 mr-2" /> Download Report
      </button>
    </div>
  );
};

// Define PropTypes
DownloadReport.propTypes = {
  dashboardData: PropTypes.shape({
    totalModules: PropTypes.number.isRequired,
    totalUsers: PropTypes.number.isRequired,
    totalRevenue: PropTypes.number.isRequired,
  }).isRequired,
  lineChartData: PropTypes.arrayOf(PropTypes.shape({
    year: PropTypes.number.isRequired,
    month: PropTypes.string.isRequired,
    totalModulePrice: PropTypes.number.isRequired,
  })).isRequired,
  chartData: PropTypes.arrayOf(PropTypes.shape({
    moduleName: PropTypes.string.isRequired,
    totalRevenue: PropTypes.number.isRequired,
  })).isRequired,
  barChartData: PropTypes.arrayOf(PropTypes.array).isRequired,
  currentDateTime: PropTypes.instanceOf(Date).isRequired,
};

export default DownloadReport;
