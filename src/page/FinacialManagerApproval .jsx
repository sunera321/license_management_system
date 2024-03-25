import React, { useState, useEffect } from 'react';
import axios from 'axios';

function FinancialManagerApproval() {
  const [clients, setClients] = useState([]);
  const [showRejectPopup, setShowRejectPopup] = useState(false); 

  useEffect(() => {
    axios.get('http://localhost:5295/api/Client')
      .then(response => {
        setClients(response.data);
      })
      .catch(error => {
        console.error('Error fetching clients:', error);
      });
  }, []);

 
  const handleRejectClick = () => {
    setShowRejectPopup(true);
  };

  
  const handleClosePopup = () => {
    setShowRejectPopup(false);
  };

  return (
    <div>
      <div className='flex flex-wrap justify-center gap-10 mt-10 mb-8 ml-18 mr-18'>
        {clients.map((client, index) => (
          <div key={index} className="h-auto w-[450px] bg-[#f9f6f6] rounded-lg pb-3 shadow-lg pl-7 pr-7 lg:w-1/3 xl:w-1/3">
            <div className="flex gap-6 pt-2 justify-evenly">
              <div className="text-[26px] font-normal">{client.CName}</div>
            </div>
            <div className="mx-auto bg-gray-700 h-0.5 w-7/8 overflow-hidden"></div>
            <table>
              <tbody>
                <tr>
                  <td className='py-1'>Client Name</td>
                  <td>:</td>
                  <td className='pl-5'>{client.CName}</td>
                </tr>
                <tr>
                  <td className='py-1'>Client ID</td>
                  <td>:</td>
                  <td className='pl-5'>{client.CID}</td>
                </tr>
                <tr>
                  <td className='py-1'>Country</td>
                  <td>:</td>
                  <td className='pl-5'>{client.Country}</td>
                </tr>
                <tr>
                  <td className='py-1'>Client Time Period</td>
                  <td>:</td>
                  <td className='pl-5'>{client.TImePeriod}</td>
                </tr>
                <tr>
                  <td className='py-1'>Partner Requested</td>
                  <td>:</td>
                  <td className='pl-5'>{client.PartnerRequested}</td>
                </tr>
                <tr>
                  <td className='py-1'>Requested Module</td>
                  <td>:</td>
                  <td className='pl-5'>{client.Modules}</td>
                </tr>
              </tbody>
            </table>

            <div className='mt-5 ml-0'>Financial manager Approval</div>
            <table>
              <tbody>
                <tr>
                  <td>
                    <button className="w-48 p-2 mt-10 font-bold text-white bg-green-600 rounded-md shadow-xl hover:bg-green-300 ">Accept</button>
                  </td>
                  <td></td>
                  <td>
                    <button onClick={handleRejectClick} className="w-48 p-2 mt-10 font-bold text-white bg-red-700 rounded-md shadow-xl ml-3.5 hover:bg-red-500 ">Reject</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        ))}
      </div>

      {showRejectPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-700 bg-opacity-50">
          <div className="w-3/4 p-8 bg-white rounded-md shadow-md">
            <h2 className="mb-4 text-xl ">Please Provide Reject Reason</h2>
            <textarea className="w-full h-32 p-2 mb-4 border border-gray-300 rounded-md"></textarea>
            <div className="flex justify-end">
              <button onClick={handleClosePopup} className="px-4 py-2 text-white bg-gray-400 rounded-md hover:bg-gray-500">Close</button>
              <button className="px-4 py-2 ml-4 text-white bg-red-600 rounded-md hover:bg-red-700">Submit</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default FinancialManagerApproval;
