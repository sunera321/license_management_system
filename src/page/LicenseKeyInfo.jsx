import React, { useState, useEffect } from 'react';
import axios from 'axios';

function LicenseKeyInfo() {
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const [statusFilter, setStatusFilter] = useState('');
  const [activationDateFilter, setActivationDateFilter] = useState('');
  const [expiryDateFilter, setExpiryDateFilter] = useState('');
  const [filteredRows, setFilteredRows] = useState([]);
  const [data, setData] = useState([]);

  // Logic to calculate the indexes for the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredRows.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const nextPage = () => {
    if (currentPage < Math.ceil(filteredRows.length / itemsPerPage)) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const fetchData = async () => {
    try {
      const response = await axios.get('https://localhost:7295/api/LicenseKey');
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const applyDateFilter = () => {
    const filteredData = data.filter((item) => {
      const activationDate = new Date(item.activationDate);
      const expiryDate = new Date(item.deactivatedDate);

      // Check if the status filter is applied
      if (statusFilter && statusFilter !== '') {
        return (
          (activationDateFilter && activationDate >= new Date(activationDateFilter)) ||
          (expiryDateFilter && expiryDate <= new Date(expiryDateFilter)) ||
          (item.key_Status && item.key_Status.toLowerCase() === statusFilter.toLowerCase())
        );
      } else {
        // If no status filter, apply only date filters
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

        <table className="min-w-full border-b-2">
          <thead>
            <tr className="border-2 border-gray-300 text-blue-500 text-[15px] gap-5">
              <th className="w-[280px] px-2 py-3 text-left">License key</th>
              <th className="text-left">Client ID</th>
              <th className="text-left">Activation Date</th>
              <th className="text-left">Request Key</th>
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
              <tr key={index} className="px-2 border-2 border-gray-300">
                <td className="px-2 whitespace-no-wrap border-b border-gray-500">{data.key_name.length > 20 ? data.key_name.substring(0, 20) + '...' : data.key_name}</td>
                <td className="leading-5 text-blue-900 whitespace-no-wrap border-b border-gray-500">{data.clintId}</td>
                <td className="leading-5 text-blue-900 whitespace-no-wrap border-b border-gray-500">{new Date(data.activationDate).toLocaleDateString('en-GB')}</td>
                <td className="leading-5 text-blue-900 whitespace-no-wrap border-b border-gray-500">{data.requestId}</td>
                <td className="leading-5 text-blue-900 whitespace-no-wrap border-b border-gray-500">{new Date(data.deactivatedDate).toLocaleDateString('en-GB')}</td>
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
                  <button className="px-3 py-1.5 text-blue-500 transition duration-300 border border-blue-500 rounded hover:bg-blue-700 hover:text-white focus:outline-none">
                    <a href='/controlpanel'>View Details</a>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="mt-4 sm:flex-1 sm:flex sm:items-center sm:justify-between work-sans">
          <div>
            <span className="mr-2 text-gray-600">Page {currentPage} of {Math.ceil(data.length / itemsPerPage)}</span>
          </div>
          <div>
            <nav className="relative z-0 inline-flex shadow-sm">
              <button
                onClick={prevPage}
                disabled={currentPage === 1}
                className={`relative inline-flex items-center px-2 py-2 text-sm font-medium leading-5 ${currentPage === 1 ? 'text-gray-500' : 'text-blue-700'
                  } transition duration-150 ease-in-out bg-white border border-gray-300 rounded-l-md hover:text-gray-400 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-tertiary active:text-gray-700 hover:bg-tertiary`}>
                Previous
              </button>
              {Array.from({ length: Math.ceil(data.length / itemsPerPage) }, (_, i) => (
                <button
                  key={i}
                  onClick={() => paginate(i + 1)}
                  className={`relative inline-flex items-center px-4 py-2 -ml-px text-sm font-medium leading-5 ${currentPage === i + 1 ? 'text-blue-700' : 'text-gray-500'
                    } transition duration-150 ease-in-out bg-white border border-gray-300 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-tertiary active:text-gray-700 hover:bg-tertiary`}>
                  {i + 1}
                </button>
              ))}
              <button
                onClick={nextPage}
                disabled={currentPage === Math.ceil(data.length / itemsPerPage)}
                className={`relative inline-flex items-center px-2 py-2 -ml-px text-sm font-medium leading-5 ${currentPage === Math.ceil(data.length / itemsPerPage) ? 'text-gray-500' : 'text-blue-700'
                  } transition duration-150 ease-in-out bg-white border border-gray-300 rounded-r-md hover:text-gray-400 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-tertiary active:text-gray-700 hover:bg-tertiary`}>
                Next
              </button>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LicenseKeyInfo;
