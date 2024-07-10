import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaCalendarAlt, FaGlobe, FaBuilding,FaInfoCircle,FaLink  } from 'react-icons/fa';
import HTTPService from '../../../Service/HTTPService';

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
        const response = await HTTPService.get(`api/ClintIdByModules/getModulesNamesByClientId/${clientId}`);
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
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75">
      <div className="relative w-11/12 max-w-4xl p-8 bg-white rounded-lg shadow-lg h-[85%] overflow-auto">
        <button
          className="absolute text-xl font-semibold text-gray-800 top-4 right-4 hover:text-gray-600"
          onClick={onCloseClick}
        >
          &times;
        </button>
        <h2 className="mb-6 text-2xl font-semibold text-center text-gray-800">{client.name} Details</h2>
        <div className="grid grid-cols-2 gap-6 mb-6 text-gray-700">
          <div className="flex items-center">
            <FaUser className="mr-4 text-blue-500" />
            <strong>ID:</strong>
            <span className="ml-2">{client.id}</span>
          </div>
          <div className="flex items-center">
            <FaEnvelope className="mr-4 text-blue-500" />
            <strong>Name:</strong>
            <span className="ml-2">{client.name}</span>
          </div>
          <div className="flex items-center">
            <FaEnvelope className="mr-4 text-blue-500" />
            <strong>Email:</strong>
            <span className="ml-2">{client.email}</span>
          </div>
          <div className="flex items-center">
            <FaPhone className="mr-4 text-blue-500" />
            <strong>Phone Number:</strong>
            <span className="ml-2">{client.phoneNumber}</span>
          </div>
          <div className="flex items-center">
            <FaMapMarkerAlt className="mr-4 text-blue-500" />
            <strong>Country:</strong>
            <span className="ml-2">{client.country}</span>
          </div>
          <div className="flex items-center">
            <FaBuilding className="mr-4 text-blue-500" />
            <strong>City:</strong>
            <span className="ml-2">{client.city}</span>
          </div>
          <div className="flex items-center">
            <FaMapMarkerAlt className="mr-4 text-blue-500" />
            <strong>Postal Code:</strong>
            <span className="ml-2">{client.postalCode}</span>
          </div>
          <div className="flex items-center">
            <FaCalendarAlt className="mr-4 text-blue-500" />
            <strong>Activate:</strong>
            <span className="ml-2">{formatDate(client.activeDate)}</span>
          </div>
          <div className="flex items-center">
            <FaCalendarAlt className="mr-4 text-blue-500" />
            <strong>Due:</strong>
            <span className="ml-2">{formatDate(client.expireDate)}</span>
          </div>
          <div className="flex items-center">
          <FaLink className="mr-4 text-blue-500" />
            <strong>Mac Address:</strong>
            <span className="ml-2">{client.macAddress}</span>
          </div>
          <div className="flex items-center">
          <FaLink className="mr-4 text-blue-500" />
            <strong>Host URL:</strong>
            <span className="ml-2">{client.hostUrl}</span>
          </div>
          <div className="flex items-center">
            <FaGlobe className="mr-4 text-blue-500" />
            <strong>Website:</strong>
            <span className="ml-2">{client.website}</span>
          </div>
          <div className="flex items-center">
            <FaBuilding className="mr-4 text-blue-500" />
            <strong>Industry:</strong>
            <span className="ml-2">{client.industry}</span>
          </div>
          <div className="flex items-center col-span-2">
          <FaInfoCircle className="mr-4 text-blue-500" />
            <strong>Additional Info:</strong>
            <span className="ml-2">{client.additionalInfo}</span>
          </div>
        </div>
        <div className="mb-6">
          <table className="w-full mb-4 text-left border-collapse">
            <thead>
              <tr className="bg-gray-100">
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
        <div className="flex justify-between ml-5 mr-5 space-x-4">
          <button
            onClick={() => onContactClick(client)}
            type="button"
            className="px-5 py-2.5 text-sm font-medium text-blue-700 border border-blue-700 rounded-lg hover:text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300"
          >
            Contact Client
          </button>
          <button
            onClick={onCloseClick}
            type="button"
            className="px-5 py-2.5 text-sm font-medium text-gray-700 border border-gray-700 rounded-lg hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-gray-300"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

Popup.propTypes = {
  client: PropTypes.object.isRequired,
  onCloseClick: PropTypes.func.isRequired,
  onContactClick: PropTypes.func.isRequired,
};

export default Popup;
