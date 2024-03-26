import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function PartnerManagerApproval() {
  const [clients, setClients] = useState([]);
  
  const [isApproved, setIsApproved] = useState(false);
  const [CID, setCID] = useState('');
  useEffect(() => {
    axios.get('http://localhost:5295/api/Client')
      .then(response => {
        setClients(response.data);
      })
      .catch(error => {
        console.error('Error fetching clients:', error);
      });
  }, []);
  const navigate = useNavigate();

  

  const hanleUpdate = (CID) => {
    const url = `http://localhost:5295/api/Client/${CID}`;
    const data = {
      "CID": CID,
      
      "Partner": true,
      
      
        
    }
    axios.put(url, data)
      .then((result) => {
        console.log('Data Updated Successfully');
        // After updating the database, you can optionally redirect to another page
       
      })
      .catch((error) => {
        console.log('Error updating data:', error);	
      })
  }
  return (
    <div >
        <div className='flex flex-wrap justify-center gap-10 mt-10 mb-8 ml-18 mr-18'>
      {clients.map((client, index) => (
        <div key={index} className="h-auto w-[450px]  bg-[#f9f6f6] rounded-lg pb-3 shadow-lg pl-7 pr-7   lg:w-1/3 xl:w-1/3">
            <div className="flex gap-6 pt-2 justify-evenly">
                                <div className="text-[26px] font-normal">{client.CName}</div>

                            </div>
                            <div className="mx-auto bg-gray-700 h-0.5 w-7/8 overflow-hidden"></div>
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
                                <td  className='pl-5'>{client.Country}</td>
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
          
                                <div className='mt-5 ml-0'>Partner manager Approval</div>
                                    <tr>
                                        <td className='py-1'> <button onClick={() => hanleUpdate(client.CID)} className="w-48 p-2 mt-10 font-bold text-white bg-green-600 rounded-md shadow-xl hover:bg-green-300 ">   Accept</button></td>
                                        <td></td>
                                        <td className='pl-5'><button  className="w-48 p-2 mt-10 font-bold text-white bg-red-700 rounded-md shadow-xl hover:bg-red-500 ">Reject</button></td>
                                    </tr>
        </div>
      ))}
      </div>
    </div>
  );
}

export default PartnerManagerApproval;
