import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PageLoader from '../components/CommonModal/PageLoader';

const ValidateKey = () => {
  const [logDtl, setLogDtl] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [filterValue, setFilterValue] = useState('');
  const [isLoad, setIsLoad] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://localhost:7295/api/LogingValidateInfo/GetAllClientServerInfo');
        const sortedData = response.data.sort((a, b) => new Date(b.logTime) - new Date(a.logTime));
        setLogDtl(sortedData);
        setFilteredData(sortedData);
        setIsLoad(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const handleFilterChange = (event) => {
    const value = event.target.value;
    setFilterValue(value);
    applyFilter(value);
  };

  const applyFilter = (value) => {
    if (value === '') {
      setFilteredData(logDtl);
    } else {
      const filtered = logDtl.filter((item) => item.statusCode === value);
      setFilteredData(filtered);
    }
  };

  return (
    <div className="min-h-screen pb-5 bg-gray-100">
      <div className="container px-4 mx-auto">
        <div className="flex items-center justify-between p-2 mb-3 bg-white rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold">User Logging Informations</h1>
          <div className="w-64">
            <label className="block text-sm font-medium text-gray-700">Select Status</label>
            <select
              value={filterValue}
              onChange={handleFilterChange}
              className="block w-full px-3 py-2 mt-1 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="">All Status</option>
              <option value="Invalid Host URL">Invalid Host URL</option>
              <option value="Invalid Mac Address">Invalid Mac Address</option>
              <option value="Valid_Loging">Valid_Loging</option>
            </select>
          </div>
        </div>

        {isLoad ? (
        <>
          <PageLoader />
        </>
      ) : (
          <div className="overflow-hidden bg-white shadow sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3  font-medium tracking-wider text-left text-blue-500 text-[15px] uppercase">
                    Date
                  </th>
                  <th scope="col" className="px-6 py-3  font-medium tracking-wider text-left text-blue-500 text-[15px] uppercase">
                    Client
                  </th>
                  <th scope="col" className="px-6 py-3  font-medium tracking-wider text-left text-blue-500 text-[15px] uppercase">
                    Partner
                  </th>
                  <th scope="col" className="px-6  font-medium tracking-wider text-left text-blue-500 text-[15px] uppercase">
                    <span className='ml-4 '>Status</span>
                  </th>
                  <th scope="col" className="px-6 py-3  font-medium tracking-wider text-left text-blue-500 text-[15px] uppercase">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredData.map((data) => (
                  <tr key={data.logKey}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{new Date(data.logTime).toLocaleDateString()}</div>
                      <div className="text-sm text-gray-500">{new Date(data.logTime).toLocaleTimeString()}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{data.clintName}</div>
                      <div className="text-sm text-gray-500">{data.clintEmail}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{data.partnerName}</div>
                      <div className="text-sm text-gray-500">{data.partnerEmail}</div>
                    </td>
                    <td className="px-6 py-3 whitespace-nowrap ">
                      <span
                        className={`px-3 py-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          data.statusCode === 'Valid_Loging'
                            ? 'bg-green-100 text-green-800'
                            : data.statusCode === 'Invalid Mac Address'
                            ? 'bg-red-100 text-red-800'
                            : data.statusCode === 'Invalid Host URL'
                            ? 'bg-yellow-100 text-yellow-800'
                            : 'bg-gray-100 text-gray-800'
                        }`}
                      >
                        {data.statusCode === 'Invalid Mac Address'
                          ? 'Invalid Mac'
                          : data.statusCode === 'Invalid Host URL'
                          ? 'Invalid Host'
                          : data.statusCode}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-left whitespace-nowrap">
                      <a href={`/compeardata/${data.logKey}`} className="text-indigo-600 hover:text-indigo-900">
                        View
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default ValidateKey;
