import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PageLoader from '../components/CommonModal/PageLoader';
import Popup from '../components/page/ControlPanel/Popup';
import axiosInstance from '../components/axiosInstance';


import ContactForm from '../components/page/ControlPanel/ContactForm';

function LicenseKeyInfo() {

  const [statusFilter, setStatusFilter] = useState('');
  const [activationDateFilter, setActivationDateFilter] = useState('');
  const [expiryDateFilter, setExpiryDateFilter] = useState('');
  const [filteredRows, setFilteredRows] = useState([]);
  const [data, setData] = useState([]);
  const [isLoad, setIsLoad] = useState(true);
  const [clientData, setClientData] = useState({});
  const [popup, setPopup] = useState(false);
  const [selectedClient, setSelectedClient] = useState(null);
  const [ClinetContact, setClinetContact] = useState(false);
  const [Clintmail, setClintmail] = useState(null);

  
  
  const conatctClinetclose = () => {
    setClinetContact(false);
    setClintmail(null);
  };
  const fetchClientData = async (clientId) => {
    try {
      const response = await axiosInstance.get(`https://localhost:7295/api/EndClient/getEndClientById/${clientId}`);
      setClientData(response.data);
    
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  const closepopup = () => {
    setPopup(false);
    setSelectedClient(null);
  };

  const conatctClinet = (client) => {
    setClinetContact(true);
    setClintmail(client);
  };



  const fetchData = async () => {
    try {
      const response = await axiosInstance.get('https://localhost:7295/api/LicenseKey');

      const sortedData = response.data.sort((a, b) => a.clintId - b.clintId);
      setData(sortedData);
      setIsLoad(false);
     
    
      

    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };


  useEffect(() => {
    fetchData();
  }, []);
  var clinetname=clientData.name;
  console.log(clinetname);


  const applyDateFilter = () => {
    const filteredData = data.filter((item) => {
      const activationDate = new Date(item.activationDate);
      const expiryDate = new Date(item.deactivatedDate);

      if (statusFilter && statusFilter !== '') {
        return (
          (activationDateFilter && activationDate >= new Date(activationDateFilter)) ||
          (expiryDateFilter && expiryDate <= new Date(expiryDateFilter)) ||
          (item.key_Status && item.key_Status.toLowerCase() === statusFilter.toLowerCase())
        );
      } else {
        if (activationDateFilter && expiryDateFilter) {
          return (
            activationDate >= new Date(activationDateFilter) &&
            expiryDate <= new Date(expiryDateFilter)
          );
        } else if (activationDateFilter) {
          return activationDate >= new Date(activationDateFilter);
        } else if (expiryDateFilter) {
          return expiryDate <= new Date(expiryDateFilter);
        } else {
          return true;
        }
      }
    });

    setFilteredRows(filteredData);
  };

  const moreData = async (clientId) => {
    console.log(clientId);
    await fetchClientData(clientId);
    setPopup(true);
  };

  useEffect(() => {
    applyDateFilter();
  }, [data, activationDateFilter, expiryDateFilter, statusFilter]);

  const handleStatusFilterChange = (event) => {
    setStatusFilter(event.target.value);
  };

  const handleActivationDateFilterChange = (event) => {
    setActivationDateFilter(event.target.value);
  };

  const handleExpiryDateFilterChange = (event) => {
    setExpiryDateFilter(event.target.value);
  };
  

  return (
    <div className="mt-6 mb-8">
      <div className="inline-block w-[97%] px-8 pt-3 align-middle bg-white rounded-bl-lg rounded-br-lg ml-6">
        <div className="flex items-center mb-4">
          <label className="mr-2 text-gray-700">Activation Date:</label>
          <input
            type="date"
            value={activationDateFilter}
            onChange={handleActivationDateFilterChange}
            className="px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
          <label className="ml-4 mr-2 text-gray-700">Expiry Date:</label>
          <input
            type="date"
            value={expiryDateFilter}
            onChange={handleExpiryDateFilterChange}
            className="px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
          <button
            onClick={applyDateFilter}
            className="px-4 py-2 ml-4 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Apply Filter
          </button>
        </div>
        {isLoad ? (
          <PageLoader />
        ) : (
          <>
            <table className="min-w-full border-b-2">

              <thead className=''>
                <tr className="border-2 border-gray-300 text-blue-500 text-[15px] gap-3  ">
                  <th className="px-5 text-left ">Client ID</th>
                  <th className="text-left">Client Name</th>
                  <th className="text-left">Activation Date</th>
                  <th className="text-left">Request ID</th>

                  <th className="text-left">Expiry Date</th>
                  <th className="flex gap-1 px-2 py-3 text-left tea">
                    Status
                    <select
                      value={statusFilter}
                      onChange={handleStatusFilterChange}
                      inputProps={{ 'aria-label': 'Status Filter' }}
                      className="block w-5 bg-white border border-gray-300 rounded-md focus:outline-none sm:text-sm"
                    >
                      <option value="">All</option>
                      <option className='text-black' value="Available">Available</option>
                      <option className='text-black' value="Activated">Activated</option>
                      <option className='text-black' value="Deactivated">Deactivated</option>
                    </select>
                  </th>
                  <th className="text-left">View More</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {filteredRows.map((data, index) => (

                  <tr key={index} className="border-2 border-gray-300 px-">
                    <td className="px-5 whitespace-no-wrap border-b border-gray-500">
                    {data.clintId}
                    </td>
                    <td className="leading-5 text-blue-900 whitespace-no-wrap border-b border-gray-500">
                    {data.clintName}

                    </td>
                    <td className="leading-5 text-blue-900 whitespace-no-wrap border-b border-gray-500">
                      {new Date(data.activationDate).toLocaleDateString('en-GB')}
                    </td>
                    <td className="leading-5 text-blue-900 whitespace-no-wrap border-b border-gray-500">
                      {data.requestId}
                    </td>
                    <td className="leading-5 text-blue-900 whitespace-no-wrap border-b border-gray-500">
                      {new Date(data.deactivatedDate).toLocaleDateString('en-GB')}
                    </td>
                    <td className="leading-5 text-blue-900 whitespace-no-wrap border-b border-gray-500">
                      <span className={`relative inline-block px-5 py-2 font-semibold leading-tight ${
                        data.key_Status === 'Available' ? 'text-[#ed944a]' :
                        data.key_Status === 'Activated' ? 'text-green-900' :
                        data.key_Status === 'Deactivated' ? 'text-red-900' :
                        data.key_Status === 'Expired' ? 'text-red-700' :
                        ''
                      }`}>
                        <span aria-hidden className={`absolute inset-0 ${
                          data.key_Status === 'Available' ? 'bg-[#f8d2c1]' :
                          data.key_Status === 'Activated' ? 'bg-green-400' :
                          data.key_Status === 'Deactivated' ? 'bg-red-400' :
                          data.key_Status === 'Expired' ? 'bg-red-500' :
                          ''
                        } rounded-full opacity-50`}></span>
                        <span className="relative">{data.key_Status}</span>
                      </span>
                    </td>
                    <td className="py-4 text-sm leading-5 whitespace-no-wrap border-b border-gray-500">
                      <button
                        onClick={() => moreData(data.clintId)}
                        className="px-3 py-1.5 text-blue-500 transition duration-300 border border-blue-500 rounded hover:bg-blue-700 hover:text-white focus:outline-none"
                      >
                        View Details
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        )}
        <div className="mt-4 sm:flex-1 sm:flex sm:items-center sm:justify-between work-sans">
        
          <div>
            <nav className="relative z-0 inline-flex shadow-sm">

              <button >
                Previous
              </button>
              
            
              <button>

                Next
              </button>
            </nav>
          </div>
        </div>
      </div>
      {popup && clientData && (
        <Popup
          client={clientData}
          onCloseClick={closepopup}
          onContactClick={conatctClinet}
          
        />
      )}


      
      {ClinetContact && Clintmail && (
        <ContactForm
          client={Clintmail}
          onCloseClick={conatctClinetclose}
          onSubmit={(data) => {
            // Handle form submission here
            console.log('Form submitted:', data);
          }} 
        />
      )}

    </div>
  );
}

export default LicenseKeyInfo;
