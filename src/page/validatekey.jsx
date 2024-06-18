import React, { useState, useEffect } from 'react';
import { Button } from '@material-tailwind/react';
import axios from 'axios';

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
  

  const handleFilterChange = (e) => {
    setFilterValue(e.target.value);
  };

  const applyFilter = () => {
    if (filterValue === '') {
      setFilteredData(logDtl);
    } else {
      const filtered = logDtl.filter((item) => item.statusCode === filterValue);
      setFilteredData(filtered);
    }
  };

  return (
    <div className="min-h-screen pb-5 mt-6">

      

      <div className="w-11/12 pl-2 pr-2 mx-auto mb-2 font-bold bg-gray-400 notification-box rounded-xl">
        <div className="p-2 pl-5 pr-5">
          <div className="flex">
            <div className="flex w-2/12">Date
              {/* <input
            type="date"
            className="w-3/5 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          /> */}
            </div>
            <div className="w-3/12">Client</div>
            <div className="w-3/12">Partner</div>
            <div className="w-2/12 ml-3">
              <select className="block w-4/5 bg-gray-400 border border-gray-300 rounded-md focus:outline-none " onClick={applyFilter} onChange={handleFilterChange} value={filterValue}>
                <option value="">Select Status</option>
                <option value="Invalid Host URL">Invalid Host URL</option>
                <option value="Invalid Mac Address">Invalid Mac Address</option>
                <option value="Valid_Loging">Valid_Loging</option>
              </select>
            </div>
            <div>Action</div>
          </div>
        </div>
      </div>

      {filteredData.map((data) => (
        <div  className="w-11/12 pl-2 pr-2 mx-auto mb-2 bg-gray-300 notification-box rounded-xl">
          <div className="p-2 pl-5 pr-5"key={data.logKey}>
            <div className="flex">
              <div className="w-2/12">
                <div className="font-medium">{new Date(data.logTime).toLocaleDateString()}</div>
                <div>{new Date(data.logTime).toLocaleTimeString()}</div>
              </div>
              <div className="w-3/12">
                <div className="font-medium">{data.clintName}</div>
                <div>{data.clintEmail}</div>
              </div>
              <div className="w-3/12">
                <div className="font-medium">{data.partnerName}</div>
                <div>{data.partnerEmail}</div>
              </div>
              <div className="w-2/12 mt-3 ml-3 md:inline">
                <span className={`relative inline-block px-5 py-2 font-semibold leading-tight ${data.statusCode === 'Available' ? 'text-[#ed944a]' :
                    data.statusCode=== 'Valid_Loging' ? 'text-green-900' :
                    data.statusCode === 'Invalid Mac Address' ? 'text-red-900' :
                    data.statusCode === 'Invalid Host URL' ? ' text-yellow-900' :
                    data.statusCode === 'Expired Key' ? ' text-rose-900' :
                          ''
                  }`}>
                  <span aria-hidden className={`absolute inset-0 ${data.statusCode === 'Available' ? 'bg-[#f8d2c1]' :
                      data.statusCode === 'Valid_Loging' ? 'bg-green-400' :
                      data.statusCode === 'Invalid Mac Address' ? 'bg-red-500' :
                        data.statusCode === 'Invalid Host URL' ?  ' bg-yellow-400' :
                        data.statusCode === 'Expired Key' ?  ' bg-rose-400' :
                            ''
                    } rounded-full opacity-50`}></span>
                  <span className="relative"> {data.statusCode === 'Invalid Mac Address' ? 'Invalid Mac' : data.statusCode === 'Invalid Host URL' ? 'Invalid Host' : data.statusCode}</span>
                </span>
              
            </div>
            <Button className="justify-end h-10 mt-1 font-bold border-2 border-sky-500 text-violet-950">
              
              <a href={`/compeardata/${data.logKey}`}>View</a>
            </Button>
          </div>
        </div>
        </div>
  ))
}
    </div >
  );
};

export default ValidateKey;
