import React, { useState } from 'react';
import LineGraph from './../components/page/Dashboard/LineGraph';
import BarGraph from '../components/page/Dashboard/BarGraph';
import { lineChartData, barChartData } from '../components/page/Dashboard/Data';

const Dashboard = () => {
  const [data] = useState({ line: lineChartData, bar: barChartData });
  return (
    
    <div className="mt-10 ml-6 mr-6 ">
      <div className ="flex justify-between">
        <div className="w-3/12 rounded-lg h-[150px] bg-sky-100 p-5">
          <a href='./Availablelicense.jsx'> AVAILABLE LICENSE KEY </a>
        </div>
        <div className="w-3/12 rounded-lg h-[150px] bg-slate-200 p-5 ">
        <a href='#'> EXPIRED LICENSE KEY </a>
        </div>
        <div className="w-3/12 rounded-lg h-[150px] bg-sky-100 p-5">
        <a href='#'>ACTIVE LICENSE KEY </a>
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