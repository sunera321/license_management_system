import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaCalendarAlt, FaGlobe, FaBuilding } from 'react-icons/fa';

const formatDate = (datetimeString) => {
  const date = new Date(datetimeString);
  if (isNaN(date.getTime())) {
    return "Invalid Date";
  }
  return date.toISOString().split('T')[0];
};

const Popup = ({ client, onCloseClick, onContactClick }) => {
  const [moduleData, setModuleData] = useState([]);

  useEffect(() => {
    const fetchData = async (clientId) => {
      try {
        const response = await axios.get(`https://localhost:7295/api/ClintIdByModules/getModulesNamesByClientId/${clientId}`);
        setModuleData(response.data.length > 0 ? response.data : ['No Modules']);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    if (client && client.id) {
      fetchData(client.id);
    }
  }, [client]);

  return (
    <div className="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-gray-800 bg-opacity-50">
    <div className="p-8 pb-4 pt-4 pb-10 bg-white  w-[70%] h-[85%] overflow-auto rounded-lg">
        <button
          className="absolute text-xl font-semibold text-gray-800 top-4 right-4 hover:text-gray-600"
          onClick={onCloseClick}
        >
          &times;
        </button>
        <h2 className="mb-6 text-2xl font-semibold text-center text-gray-800">{client.name} Details</h2>
        <div className="mb-6 ml-6 space-y-4">
          <div className="flex items-center text-lg text-gray-700">
            <FaUser className="mr-4" />
            <strong>ID:</strong>
            <span className="ml-4">{client.id}</span>
          </div>
          <div className="flex items-center text-lg text-gray-700">
            <FaEnvelope className="mr-4" />
            <strong>Name:</strong>
            <span className="ml-4">{client.name}</span>
          </div>
          <div className="flex items-center text-lg text-gray-700">
            <FaEnvelope className="mr-4" />
            <strong>Email:</strong>
            <span className="ml-4">{client.email}</span>
          </div>
          <div className="flex items-center text-lg text-gray-700">
            <FaPhone className="mr-4" />
            <strong>Phone Number:</strong>
            <span className="ml-4">{client.phoneNumber}</span>
          </div>
          <div className="flex items-center text-lg text-gray-700">
            <FaMapMarkerAlt className="mr-4" />
            <strong>Country:</strong>
            <span className="ml-4">{client.country}</span>
          </div>
          <div className="flex items-center text-lg text-gray-700">
            <FaBuilding className="mr-4" />
            <strong>City:</strong>
            <span className="ml-2">{client.city}</span>
          </div>
          <div className="flex items-center text-lg text-gray-700">
            <FaMapMarkerAlt className="mr-4" />
            <strong>Postal Code:</strong>
            <span className="ml-2">{client.postalCode}</span>
          </div>
          <div className="flex items-center text-lg text-gray-700">
            <FaCalendarAlt className="mr-4" />
            <strong>Activate:</strong>
            <span className="ml-2">{formatDate(client.activeDate)}</span>
          </div>
          <div className="flex items-center text-lg text-gray-700">
            <FaCalendarAlt className="mr-4" />
            <strong>Due:</strong>
            <span className="ml-2">{formatDate(client.expireDate)}</span>
          </div>
          <div className="flex items-center text-lg text-gray-700">
            <FaCalendarAlt className="mr-4" />
            <strong>Mac Address:</strong>
            <span className="ml-4">{client.macAddress}</span>
          </div>
          <div className="flex items-center text-lg text-gray-700">
            <FaCalendarAlt className="mr-4" />
            <strong>Host URL:</strong>
            <span className="ml-4">{client.hostUrl}</span>
          </div>
          <div className="flex items-center text-lg text-gray-700">
            <FaGlobe className="mr-4" />
            <strong>Website:</strong>
            <span className="ml-4">{client.website}</span>
          </div>
          <div className="flex items-center text-lg text-gray-700">
            <FaBuilding className="mr-4" />
            <strong>Industry:</strong>
            <span className="ml-4">{client.industry}</span>
          </div>
          <div className="flex items-center text-lg text-gray-700">
            <strong>Additional Info:</strong>
            <span className="ml-4">{client.additionalInfo}</span>
          </div>
        </div>
        <div className="mb-6">
       
          <div className="flex flex-wrap">
            <table className="w-full mb-4 text-left border-collapse">
              <thead>
                <tr>
                  <th className="px-4 py-2 border">No</th>
                  <th className="px-4 py-2 border">Module Name</th>
                </tr>
              </thead>
              <tbody>
                {moduleData.map((module, index) => (
                  <tr key={index}>
                    <td className="px-4 py-2 border">{index + 1}</td>
                    <td className="px-4 py-2 border">{module}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="flex justify-between">
          
          <button onClick={() => onContactClick(client)}
           type="button" class="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800">
             Contact Client
          </button>
         
          <button  onClick={onCloseClick}
           type="button" class="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800">
              Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
