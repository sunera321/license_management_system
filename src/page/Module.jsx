import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import axiosInstance from '../components/axiosInstance';


const Module = () => {
  const [modules, setModules] = useState([]);

  useEffect(() => {
    const fetchModules = async () => {
      try {
        const response = await axiosInstance.get('https://localhost:7295/api/Module/getModulesWithId');
        setModules(response.data);
      } catch (error) {
        console.error('Error fetching modules:', error);
      }
    };

    fetchModules();
  }, []);

  return (
    <div className="px-10 py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {/* Existing Modules Cards */}
        {modules.map((module) => (
          <div key={module.modulesId} className="flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden">
            <Link to={`/module/moduledetails/${module.modulesId}`} className="w-full">
              <div className="w-full h-48 overflow-hidden">
                <img
                  src={module.imagePath || 'default-image-path.jpg'}
                  alt={`Module ${module.modulesId}`}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="p-5">
                <p className="text-lg font-bold text-blue-500 hover:underline">{module.modulename}</p>
                <p className="mt-2 text-gray-600">{module.moduleDescription}</p>
              </div>
            </Link>
          </div>
        ))}

        {/* Add Module Card */}
        <div className="flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden">
          <Link to="/addmodule" className="w-full">
            <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-24 w-24 text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
            </div>
            <div className="p-5">
              <p className="text-lg font-bold text-blue-500 hover:underline">Add Module</p>
              <p className="mt-2 text-gray-600">Click here to add a new module</p>
            </div>
          </Link>
        </div>
      </div>
  
    </div>
  );
};

export default Module;
