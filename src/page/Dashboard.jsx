import React, { useState } from 'react';
import LineGraph from './../components/page/Dashboard/LineGraph';
import BarGraph from '../components/page/Dashboard/BarGraph';
import { Link } from 'react-router-dom';


const Dashboard = () => {
  const availableLicenseKeys = 7;
  const expiredLicenseKeys = 2;
  const activeLicenseKeys = 5;

  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };


  return (
    <div className="mt-10 mx-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div className="rounded-lg h-[145px] bg-blue-200 p-5 shadow-md">
          <span className="text-lg font-bold text-gray-600">ISSUED LICENSE KEY</span>
          <div className="text-4xl font-bold text-gray-600">{availableLicenseKeys}</div>
          <div className="pt-4">
            <hr className="border-t border-blue-400" />

            <Link to="/availablelicense" className="mt-2 text-m font-bold text-gray-500 hover:text-gray-700 flex items-center justify-center">
              View More
            </Link>           
          </div>
        </div>
        <div className="rounded-lg h-[145px] bg-emerald-200 p-5 shadow-md">
          <span className="text-lg font-bold text-gray-600">ACTIVE LICENSE KEY</span>
          <div className="text-4xl font-bold text-gray-600">{activeLicenseKeys}</div>
          <div className="pt-4">
            <hr className="border-t border-emerald-400" />
            <Link to='/activelicense' className="mt-2 text-m font-bold text-gray-500 hover:text-gray-700 flex items-center justify-center"> View More </Link>
          </div>
        </div>
        <div className="rounded-lg h-[145px] bg-violet-200 p-5 shadow-md">
          <span className="text-lg font-bold text-gray-600">EXPIRED LICENSE KEY</span>
          <div className="text-4xl font-bold text-gray-600">{expiredLicenseKeys}</div>
          <div className="pt-4">
            <hr className="border-t border-violet-400" />
            <Link to='/expiredlicense' className="mt-2 text-m font-bold text-gray-500 hover:text-gray-700 flex items-center justify-center"> View More </Link>
          </div>
        </div>
      </div>

      <div className="bg-slate-100 rounded-lg mt-10 mb-10 p-2 sm:p-6 flex flex-col">
        <h1 className='font-bold'>Total users</h1>
        <div className="flex-grow">
          <LineGraph />
        </div>
      </div>
      <div className="bg-slate-100 rounded-lg mt-10 mb-10 p-2 sm:p-6 flex flex-col">
        <div className="flex-grow">
          <BarGraph />
        </div>
      </div>
    </div>
  )
}

export default Dashboard;
