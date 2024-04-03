import React, { useState } from 'react';
import LineGraph from './../components/page/Dashboard/LineGraph';
import BarGraph from '../components/page/Dashboard/BarGraph';
import { lineChartData, barChartData } from '../components/page/Dashboard/Data';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const [data] = useState({ line: lineChartData, bar: barChartData });
  const availableLicenseKeys = 32;
  const expiredLicenseKeys = 6;
  const activeLicenseKeys = 26;
  return (
    <div className="mt-10 mx-6">
      <div className="flex flex-wrap justify-between gap-4">
        <div className="flex-auto min-w-[250px] max-w-full md:w-1/4 rounded-lg h-[145px] bg-sky-100 p-5 shadow-md ">
          <span className="text-lg font-bold text-gray-600">ISSUED LICENSE KEY </span>
          <div className="text-4xl font-bold text-gray-600">{availableLicenseKeys}</div>
          <div className="pt-4">
            <hr className="border-t border-blue-300" />
            <Link to="/availablelicense" className="mt-2 text-m font-bold text-gray-500 hover:text-gray-700 flex items-center justify-center">
              View More
            </Link>
          </div>
        </div>
        <div className="flex-auto min-w-[250px] max-w-full md:w-1/4 rounded-lg h-[145px] bg-slate-200 p-5 shadow-md">
          <span className="text-lg font-bold text-gray-600">ACTIVE LICENSE KEY </span>
          <div className="text-4xl font-bold text-gray-600">{activeLicenseKeys}</div>
          <div className="pt-4">
            <hr className="border-t border-slate-300" />
            <Link to='/activelicense' className="mt-2 text-m font-bold text-gray-500 hover:text-gray-700 flex items-center justify-center"> View More </Link>
          </div>
        </div>
        <div className="flex-auto min-w-[250px] max-w-full md:w-1/4 rounded-lg h-[145px] bg-sky-100 p-5 shadow-md">
          <span className="text-lg font-bold text-gray-600">EXPIRED LICENSE KEY</span>
          <div className="text-4xl font-bold text-gray-600">{expiredLicenseKeys}</div>
          <div className="pt-4">
            <hr className="border-t border-blue-300" />
            <Link to='/expiredlicense' className="mt-2 text-m font-bold text-gray-500 hover:text-gray-700 flex items-center justify-center"> View More </Link>
          </div>
        </div>
      </div>
      <div className="bg-slate-100 rounded-lg mt-10 mb-10 p-6 flex flex-col">
        <h1 className='font-bold'>Total users</h1>
        <div className="flex-grow">
          <LineGraph chartData={data.line} />
        </div>
      </div>
      <div className="bg-slate-100 rounded-lg mt-10 mb-10 p-6 flex flex-col">
        <div className="flex-grow">
          <BarGraph chartData={data.bar} />
        </div>
      </div>
    </div>
  )
}

export default Dashboard;
