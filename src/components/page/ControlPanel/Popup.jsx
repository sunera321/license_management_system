import React, { useEffect,useState } from 'react';
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

const [moduledata, setmoduledata] = useState([]);
useEffect(() => {
  const fetchData = async (clientId) => {
    try {
      const response = await axios.get(`https://localhost:7295/api/ClintIdByModules/getModulesNamesByClientId/${clientId}`);
      setmoduledata(response.data);
      console.log(response.data);
      if(response.data.length==0){
        setmoduledata(['No Modules']);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  if (client && client.id) {
    fetchData(client.id);
  }
  
}, [client]);
var ClintName=client.name;
  return (
    <div className="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-gray-800 bg-opacity-50">
      <div className="p-8 pb-4 pt-4 pb-10 bg-white rounded-lg w-[70%] h-[80%] overflow-auto">
        <h2 className="mb-4 text-2xl font-semibold text-center text-gray-800">{client.name} Details</h2>
        <div className='mt-5 ml-10'>
          <table className="w-full">
          <tbody>
                  <tr className='h-10'>
                    <td className="flex items-center text-lg text-gray-700 w-[26%]">
                      <FaUser className="mr-2" />
                      <strong>ID</strong>
                    </td>
                    <td className="mb-5 text-lg text-gray-700 w-[74%]"><strong className='pr-5'>:</strong>{client.id}</td>
                  </tr>
                  <tr className='h-10'>
                    <td className="flex items-center text-lg text-gray-700">
                      <FaEnvelope className="mr-2" />
                      <strong>Name</strong>
                    </td>
                    <td className="mb-5 text-lg text-gray-700"><strong className='pr-5'>:</strong>{client.name}</td>
                  </tr>
                  <tr className='h-10'>
                    <td className="flex items-center text-lg text-gray-700">
                      <FaEnvelope className="mr-2" />
                      <strong>Email</strong>
                    </td>
                    <td className="mb-5 text-lg text-gray-700"><strong className='pr-5'>:</strong>{client.email}</td>
                  </tr>
                  <tr className='h-10'>
                    <td className="flex items-center text-lg text-gray-700">
                      <FaPhone className="mr-2" />
                      <strong>Phone Number</strong>
                    </td>
                    <td className="mb-5 text-lg text-gray-700"><strong className='pr-5'>:</strong>{client.phoneNumber}</td>
                  </tr>
                  <tr className='h-10'>
                    <td className="flex items-center text-lg text-gray-700">
                      <FaMapMarkerAlt className="mr-2" />
                      <strong>Contry:</strong>
                    </td>
                    <td className="mb-5 text-lg text-gray-700"><strong className='pr-5'>:</strong>{client.country}</td>
                  </tr>
                  <tr className='h-10'>
                    <td className="flex items-center text-lg text-gray-700">
                      <FaBuilding className="mr-2" />
                      <strong>City:</strong>
                    </td>
                    <td className="mb-5 text-lg text-gray-700"><strong className='pr-5'>:</strong>{client.city}</td>
                  </tr>
                  
                  <tr className='h-10'>
                    <td className="flex items-center text-lg text-gray-700">
                      <FaMapMarkerAlt className="mr-2" />
                      <strong>Postal Code</strong>
                    </td>
                    <td className="mb-5 text-lg text-gray-700"><strong className='pr-5'>:</strong>{client.postalCode}</td>
                  </tr>
                  <tr className='h-10'>
                    <td className="flex items-center text-lg text-gray-700">
                      <FaCalendarAlt className="mr-2" />
                      <strong>Activate</strong>
                    </td>
                    <td className="mb-5 text-lg text-gray-700"><strong className='pr-5'>:</strong>{formatDate(client.activeDate)}</td>
                  </tr>
                  <tr className='h-10'>
                    <td className="flex items-center text-lg text-gray-700">
                      <FaCalendarAlt className="mr-2" />
                      <strong>Due</strong>
                    </td>
                    <td className="mb-5 text-lg text-gray-700"><strong className='pr-5'>:</strong>{formatDate(client.expireDate)}</td>
                  </tr>
                  <tr className='h-10'>
                    <td className="flex items-center text-lg text-gray-700">
                      <FaCalendarAlt className="mr-2" />
                      <strong>Mack Address</strong>
                    </td>
                    <td className="mb-5 text-lg text-gray-700"><strong className='pr-5'>:</strong>{client.macAddress}</td>
                  </tr>
                  <tr className='h-10'>
                    <td className="flex items-center text-lg text-gray-700">
                      <FaCalendarAlt className="mr-2" />
                      <strong>Host URL</strong>
                    </td>
                    <td className="mb-5 text-lg text-gray-700"><strong className='pr-5'>:</strong>{client.hostUrl}</td>
                  </tr>
                  <tr className='h-10'>
                    <td className="flex items-center text-lg text-gray-700">
                      <FaGlobe className="mr-2" />
                      <strong>Website</strong>
                    </td>
                    <td className="mb-5 text-lg text-gray-700"><strong className='pr-5'>:</strong>{client.website}</td>
                  </tr>
                  <tr className='h-10'>
                    <td className="flex items-center text-lg text-gray-700">
                      <FaBuilding className="mr-2" />
                      <strong>Industry</strong>
                    </td>
                    <td className="mb-5 text-lg text-gray-700"><strong className='pr-5'>:</strong>{client.industry}</td>
                  </tr>
                  <tr className='h-10'>
                    <td className="flex items-center text-lg text-gray-700">
                      <strong>Additional Info</strong>
                    </td>
                    <td className="mb-5 text-lg text-gray-700"><strong className='pr-5'>:</strong>{client.additionalInfo}</td>
                  </tr>
                </tbody>
          </table>
          <div className="mt-2">
            <h3 className="mb-2 text-2xl font-semibold text-center text-gray-800">{ClintName} Has Modules</h3>
            <div className="flex flex-wrap">
              <table className="w-full">
                <tbody>
                  {moduledata.map((module, index) => (
                    <tr key={index}>
                      <td className="text-lg text-gray-700">{index + 1}</td>
                      <td className="text-lg text-gray-700">{module}</td>
                    </tr>
                  ))}
                </tbody>
                </table>
            </div>
            </div>
        </div>
        <div className="flex justify-between mt-2">
          <button
            className="mt-3 p-1 text-white bg-[#111158] rounded-md font-medium text-[15px] w-[100px] hover:bg-slate-100 hover:text-black"
            onClick={() => onContactClick(client)}
          >
            Contact
          </button>
          <button
            className="mt-3 p-1 text-white bg-[#111158] rounded-md font-medium text-[15px] w-[100px] hover:bg-slate-100 hover:text-black"
            onClick={onCloseClick}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
