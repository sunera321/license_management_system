import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCubes, faUsers, faCoins } from '@fortawesome/free-solid-svg-icons';
import LineChart from '../components/page/IncomeDashboard/LineChart';
import Chart from '../components/page/IncomeDashboard/Chart';
import BarChart from '../components/page/IncomeDashboard/BarChart';
import DownloadReport from '../components/page/IncomeDashboard/DownloadReport';
import DoughnutChart from '../components/page/IncomeDashboard/DonutChart';
import HTTPService from '../Service/HTTPService'; 

function IncomeDashboard() {
  const [dashboardData, setDashboardData] = useState(null);
  const [lineChartData, setLineChartData] = useState([]);
  const [chartData, setChartData] = useState([]);
  const [barChartData, setBarChartData] = useState([]);
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  const fetchDashboardData = async () => {
    try {
      const response = await HTTPService.get('api/InDashboard/getdashboarddata');
      setDashboardData(response.data);
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
    }
  };

  const fetchLineChartData = async () => {
    try {
      const response = await HTTPService.get('api/InDashboard/module-prices-by-year-month');
      setLineChartData(response.data);
    } catch (error) {
      console.error('Error fetching line chart data:', error);
    }
  };

  const fetchChartData = async () => {
    try {
      const response = await HTTPService.get('api/InDashboard/module-revenue-2024');
      setChartData(response.data);
    } catch (error) {
      console.error('Error fetching chart data:', error);
    }
  };

  const fetchCurrentMonthRevenue = () => {
    if (lineChartData.length === 0) return null;

    const currentMonth = currentDateTime.getMonth() + 1; // getMonth() returns 0-indexed month
    const currentYear = currentDateTime.getFullYear();

    const currentMonthData = lineChartData.find(
      data => data.year === currentYear && data.month === currentMonth
    );

    return currentMonthData ? currentMonthData.totalModulePrice : 0;
  };

  const fetchBarChartData = async () => {
    try {
      const response = await HTTPService.get('api/InDashboard/top-modules');
      const data = response.data.map(module => [
        module.moduleName,
        module.totalRevenue,
        module.numberOfClients
      ]);
      setBarChartData(data);
    } catch (error) {
      console.error('Error fetching bar chart data:', error);
    }
  };

  useEffect(() => {
    fetchDashboardData();
    fetchLineChartData();
    fetchChartData();
    fetchBarChartData();

    // Update current date and time every second
    const interval = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <div className='relative flex flex-col items-start justify-between h-full col-span-2 gap-3 p-2 ml-11'>
      {/* Current Date and Time Container */}
      <div className="absolute top-0 right-0 p-4">
        <div className="items-center p-2 shadow-md lg:w-54 mr-10">
          <p className="text-gray-600">Date: {currentDateTime.toLocaleDateString()}</p>
          <p className="text-gray-600">Time: {currentDateTime.toLocaleTimeString()}</p>
        </div>
      </div>

      <div className="flex items-center justify-between w-full mb-4">
        <div>
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-gray-600">Hi, Welcome to Revenue Dashboard!</p>
        </div>
      </div>

      <div className='grid w-full grid-cols-1 gap-4 mb-4 lg:grid-cols-3'>
        {/* Total Module card */}
        <div className='flex flex-col items-center justify-center w-full gap-5 p-5 transition-transform bg-blue-200 rounded-xl'>
          <div className='flex items-center justify-between w-full'>
            <h1 className='font-semibold text-black text-md'>Total Module</h1>
            <FontAwesomeIcon icon={faCubes} className='text-slate-600 size-12' />
          </div>
          <div className='flex items-center justify-between w-full'>
            <div className='flex flex-col items-start justify-center gap-1'>
              <h1 className='text-3xl font-semibold text-black'>{dashboardData ? dashboardData.totalModules : 'Loading...'}</h1>
            </div>
          </div>
        </div>
        {/* Total Users card */}
        <div className='flex flex-col items-center justify-center w-full gap-5 p-5 transition-transform bg-green-200 rounded-xl'>
          <div className='flex items-center justify-between w-full'>
            <h1 className='font-semibold text-black text-md'>Total Users</h1>
            <FontAwesomeIcon icon={faUsers} className='text-slate-600 size-12' />
          </div>
          <div className='flex items-center justify-between w-full'>
            <div className='flex flex-col items-start justify-center gap-1'>
              <h1 className='text-3xl font-semibold text-black'>{dashboardData ? dashboardData.totalUsers : 'Loading...'}</h1>
              {/* You can add percentage data as needed */}
            </div>
          </div>
        </div>
        {/* Total Revenue card */}
        <div className='flex flex-col items-center justify-between w-full gap-5 p-5 transition-transform bg-yellow-200 rounded-xl'>
          <div className='flex items-center justify-between w-full'>
            <h1 className='font-semibold text-black text-md'>Total Revenue</h1>
            <FontAwesomeIcon icon={faCoins} className='text-slate-600 size-12' />
          </div>
          <div className='flex items-center justify-between w-full'>
            <div className='flex flex-col items-start justify-center gap-1'>
              <h1 className='text-3xl font-semibold text-black'>
                {dashboardData && dashboardData.totalRevenue !== undefined ? `Rs ${dashboardData.totalRevenue}` : 'Loading...'}
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* LineChart and Side Panels */}
      <div className="flex flex-col lg:flex-row gap-4 w-full">
        {/* Left Side: LineChart */}
        <div className="w-full lg:w-2/3 mb-12">
          <LineChart />
        </div>

        {/* Right Side: Panels */}
        <div className="flex flex-col lg:w-1/3 gap-4 mb-4">
          {/* DownloadReport */}
          <div className="shadow-2xl bg-white p-4 rounded-lg min-h-[200px]  lg:mt-0">
            <p className="text-lg font-bold text-gray-800 mb-6">Download Your Earnings Report</p>
            <DownloadReport
              dashboardData={dashboardData}
              lineChartData={lineChartData}
              chartData={chartData}
              barChartData={barChartData}
              currentDateTime={currentDateTime}
            />
            <p className="text-sm text-gray-600 mt-5 ml-10">
              Click the button above to download a pdf report of your earnings.
            </p>
          </div>

          {/* This Month Revenue */}
          <div className="shadow-2xl bg-slate-600 p-4 rounded-lg">
            <div className="flex flex-col items-center justify-center h-full">
              <p className="text-sm font-bold text-white mt-2">
                This Month Revenue:
              </p>
              <p className="text-2xl font-bold text-white mt-2">
                Rs {fetchCurrentMonthRevenue()}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className='grid w-full grid-cols-1 gap-4 mb-4 lg:grid-cols-2'>
        {/* BarChart */}
        <div className="w-full">
          <div className='mb-4'>
            <BarChart />
          </div>
        </div>
        {/* DoughnutChart */}
        <div className="w-full">
          <div className='mb-4'>
            <DoughnutChart />
          </div>
        </div>
      </div>

      <div className="w-full mb-12">
        <Chart />
      </div>
    </div>
  );
}

export default IncomeDashboard;
