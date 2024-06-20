import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { PieChart, Pie, Cell, Label } from 'recharts'; 
import LineChart from '../components/LineChart';
import Chart from '../components/Chart';
import BarChart from '../components/BarChart'; 
import AreaCard from '../components/AreaCard';

function IncomeDashboard() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(true); // Initialize loading state

  // Function to handle date range selection
  const handleDateChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  // Function to fetch dashboard data from API
  const fetchDashboardData = async () => {
    try {
      const response = await fetch('https://localhost:7295/api/Dashboard/getdashboarddata');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log('Fetched data:', data); // Log the data received from the API
      setDashboardData(data);
      setLoading(false); // Set loading to false after successful fetch
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false); // Ensure loading state is updated even on error
    }
  };

  useEffect(() => {
    fetchDashboardData();
  }, []); // Fetch data on component mount

  // Render loading state or dashboard content based on 'loading' state
  if (loading) {
    return <p>Loading...</p>; // You can render a loader component here
  }

  // Once loading is done, render the dashboard content
  return (
    <div className='flex flex-col items-start justify-between h-full col-span-2 gap-3 p-2 ml-11'>
      <div className="flex items-center justify-between w-full mb-4">
        <div>
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-ash">Hi, Welcome back to Hsenid Admin!</p>
        </div>
        <div className="items-center p-2 mr-24 shadow-md lg:w-54">
          <label htmlFor="period" className="block mb-2">Period:</label>
          <DatePicker
            selected={startDate}
            onChange={handleDateChange}
            startDate={startDate}
            endDate={endDate}
            selectsRange
            className="relative px-2 py-1 border rounded"
          />
        </div>
      </div>
     
      <div className='grid w-full grid-cols-1 gap-4 mb-4 lg:grid-cols-3'>
        {/* Total Module card */}
        <div className='flex flex-col items-center justify-center w-full gap-5 p-5 transition-transform bg-blue-200 rounded-xl'>
          <div className='flex items-center justify-between w-full'>
            <h1 className='font-semibold text-black text-md -mt-2'>Total Module</h1>
            <h1 className='font-semibold text-green-600'>+75%</h1>
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
            <h1 className='font-semibold text-green-600'>+25%</h1>
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
            <h1 className='font-semibold text-green-600'>+10%</h1>
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
      
      <div className='grid w-full grid-cols-1 gap-4 mb-4 lg:grid-cols-2'>
        <div className='w-full mb- mr-7'>
          <div className='grid grid-cols-1 gap-4 lg:grid-cols-3 relative'>
            <AreaCard colors={["#0088FE", "#00C49F"]} percentFillValue={75} title="Total Module" />
            <AreaCard colors={["#FF8042", "#FFBB28"]} percentFillValue={60} title="User Growth" />
            <AreaCard colors={["#8884d8", "#82ca9d"]} percentFillValue={85} title="Total Revenue" />
          </div>
        </div>
        <div className="w-full">
          <div className='mb-4'>
            <BarChart /> 
          </div>
        </div>
      </div>
      
      <div className="w-full mb-8">
        <div className="w-400 ml-48">
          <LineChart />
        </div>
        <div className="w-full">
          <Chart />
        </div>
      </div>
    </div>
  );
}

export default IncomeDashboard;

