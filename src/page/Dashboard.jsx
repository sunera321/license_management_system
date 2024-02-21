import React, { useState } from 'react';
import LineGraph from './../components/page/Dashboard/LineGraph';
import BarGraph from '../components/page/Dashboard/BarGraph';
import { lineChartData, barChartData } from '../components/page/Dashboard/Data';
import { Link } from 'react-router-dom';


const Dashboard = () => {
  const [data] = useState({ line: lineChartData, bar: barChartData });
  const availableLicenseKeys = 32;
  const expiredLicenseKeys = 12;
  const activeLicenseKeys = 20;
  return (

    <div className="mt-10 ml-6 mr-5 ">
      <div className="flex justify-between ">
        <div className="w-1/4 rounded-lg h-[150px] bg-sky-100 p-5 shadow-md ">
          <span className="text-lg font-bold text-gray-600">AVAILABLE LICENSE KEY </span>
          <div className="text-4xl font-bold text-gray-600">{availableLicenseKeys}</div>
          <Link to="/availablelicense" className="mt-2 text-sm text-black-500 hover:text-gray-700 flex flex-col items-center justify-center">
            View More
          </Link>
        </div>
        <div className="w-1/4 rounded-lg h-[150px] bg-slate-200 p-5  shadow-md">
          <Link to='/activelicense' className="text-lg font-bold text-gray-600"> EXPIRED LICENSE KEY </Link>
          <div className="text-4xl font-bold text-gray-600">{expiredLicenseKeys}</div>
        </div>
        <div className="w-1/4 rounded-lg h-[150px] bg-sky-100 p-5 shadow-md">
          <Link to='/expiredlicense' className="text-lg font-bold text-gray-600">ACTIVE LICENSE KEY</Link>
          <div className="text-4xl font-bold text-gray-600">{activeLicenseKeys}</div>
        </div>
      </div>
      <div className="w-[1120px] bg-slate-100 rounded-lg h-[350px] mt-10 mb-10 ml-10 mr-10 p-6">
        <h1>Total users</h1>
        <LineGraph chartData={data.line} />

      </div>
      <div className="w-[1120px] bg-slate-100 rounded-lg  h-[350px] mt-10 mb-10 ml-10 mr-10 p-6">
        <BarGraph chartData={data.bar} />

      </div>
    </div>
  )
}

export default Dashboard