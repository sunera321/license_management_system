import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCubes, faUsers, faCoins } from '@fortawesome/free-solid-svg-icons';
import AreaCard from '../components/AreaCard';
import LineChart from '../components/LineChart';
import Chart from '../components/Chart';
import BarChart from '../components/BarChart';

function IncomeDashboard() {
  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  const fetchDashboardData = async () => {
    try {
      const response = await fetch('https://localhost:7295/api/Dashboard/getdashboarddata');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log('Fetched data:', data);
      setDashboardData(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDashboardData();

    // Update current date and time every second
    const interval = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className='relative flex flex-col items-start justify-between h-full col-span-2 gap-3 p-2 ml-11'>
      {/* Current Date and Time Container */}
      <div className="absolute top-0 right-0 p-4">
        <div className="items-center p-2 shadow-md lg:w-54 mr-10">
          <p className="text-ash">Date:  {currentDateTime.toLocaleDateString()}</p>
          <p className="text-ash">Time:   {currentDateTime.toLocaleTimeString()}</p>
        </div>
      </div>

      <div className="flex items-center justify-between w-full mb-4">
        <div>
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-ash">Hi, Welcome back to Hsenid Admin!</p>
        </div>
      </div>

      <div className='grid w-full grid-cols-1 gap-4 mb-4 lg:grid-cols-3'>
        {/* Total Module card */}
        <div className='flex flex-col items-center justify-center w-full gap-5 p-5 transition-transform bg-blue-200 rounded-xl'>
          <div className='flex items-center justify-between w-full'>
            <h1 className='font-semibold text-black text-md -mt-2'>Total Module</h1>
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

      

      {/* Larger BarChart */}
      <div className="w-full mb-4 ml-64">
        <div className='mb-4' style={{ width: '1300px' }}>
          <BarChart />
        </div>
      </div>
      
      {/* LineChart and Chart */}
      <div className="w-full mb-12">
        <div className="w-200 ml-32 mb-32 mt-5">
          <LineChart />
        </div>
        <div className="w-full mb-12">
          <Chart />
        </div>
      </div>
    </div>
  );
}

export default IncomeDashboard;
