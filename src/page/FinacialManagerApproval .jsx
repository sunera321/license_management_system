import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import PageLoader from '../components/CommonModal/PageLoader';
import PageHeader from '../components/CommonModal/pageHeader';
import HTTPService from '../Service/HTTPService';

function FinancialManagerApproval() {
  const [clients, setClients] = useState([]);
  const [rejectionReason, setRejectionReason] = useState('');
  const [selectedRequestId, setSelectedRequestId] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [requestedModules, setRequestedModules] = useState({});

  useEffect(() => {
    setIsLoading(true); 
    HTTPService.get('api/RequestKey')
      .then(response => {
        setClients(response.data);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error fetching clients:', error);
        setIsLoading(false);
      });
  }, []);

 
  const fetchModules = async (clientId) => {
    try {
      const response = await HTTPService.get(`api/ClintIdByModules/getModulesNamesByClientId/${clientId}`);
      setRequestedModules(prevModules => ({
        ...prevModules,
        [clientId]: response.data
      }));
    } catch (error) {
      console.error('Error fetching modules:', error);
    }
  };

 
  const handleUpdate = (request_id) => {
    

    HTTPService.patch(`api/RequestKey/${request_id}/SetFinanceTrue`)
      .then(() => {
        console.log('Data Updated Successfully');
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Accepted Successfully",
          showConfirmButton: false,
          timer: 1500
        })
      })
      .catch((error) => {
        console.log('Error updating data:', error);
      })
  }

  const handleReject = (request_id) => {
    setSelectedRequestId(request_id);
  }

  const handleSubmitRejection = () => {
    
    
    HTTPService.patch(`api/RequestKey/${selectedRequestId}/RejectFianceMgt`, JSON.stringify(rejectionReason), {
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(() => {
      
        const updatedClients = clients.map(client => {
          if (client.requestID === selectedRequestId) {
            client.isFinanceApproval = false;
            client.CommentFinaceMgt = rejectionReason;
          }
          return client;
        });
        setClients(updatedClients);
        setRejectionReason('');
        setSelectedRequestId('');
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Rejected Successfully",
          showConfirmButton: false,
          timer: 1500
        })
      })
      .catch((error) => {
        console.log('Error rejecting request:', error);
      });
  }

  const handleCloseRejectForm = () => {
    setRejectionReason('');
    setSelectedRequestId('');
  }

  const handleClientClick = (clientId) => {
    if (!requestedModules[clientId]) {
      fetchModules(clientId);
    }
  };

  return (
    <div>
       <PageHeader title='Finance Manager Approval' />
      {isLoading ? (
                <PageLoader />
            ) : (
      <div className='flex flex-wrap justify-center h-screen gap-10 mt-10 mb-8 ml-18 mr-18'>
        {clients.filter(client => client.isFinanceApproval=== false && client.commentFinaceMgt === null).map((client, index) => (
          <div key={index} className="h-auto w-[450px]  bg-[#fafafa] rounded-lg pb-3 shadow-lg pl-7 pr-7   lg:w-1/3 xl:w-1/3"
          onClick={() => handleClientClick(client.endClient.id)}>
            <div className="flex gap-6 pt-2 justify-evenly">
              <div className="text-[26px] font-normal">{client.endClient.name}</div>
              <div>RequestID : {client.requestID}</div>
            </div>
            <div className="mx-auto bg-gray-700 h-0.5 w-7/8 overflow-hidden"></div>
            <tr className='ml-10 text-center '>
              <td className='py-1 ml-10 text-center '>Client Name</td>
              <td>:</td>
              <td className='pl-5 text-center'>{client.endClient.name}</td>
            </tr>
            <tr className='text-center '>
              <td className='py-1'>Client ID</td>
              <td>:</td>
              <td className='pl-5'>{client.endClient.id}</td>
            </tr >
            <tr className='mx-auto text-center '>
              <td className='py-1'>Country</td>
              <td>:</td>
              <td className='pl-5'>{client.endClient.country}</td>
            </tr>
            <tr className='mx-auto text-center '>
              <td className='py-1'>Client Time Period</td>
              <td>:</td>
              <td className='pl-5'>{client.numberOfDays}</td>
            </tr>
            <tr className='mx-auto text-center '>
              <td className='py-1'>Partner ID</td>
              <td>:</td>
              <td className='pl-5'>{client.partnerId}</td>
            </tr>
            <tr className='mx-auto text-center '>
              <td className='py-1'>Requested Module</td>
              <td>:</td>
              <td className='pl-5'>  {requestedModules[client.endClient.id] ? requestedModules[client.endClient.id].join(', ') : 'Click here...'}</td>
            </tr>
            <div className='mt-5 ml-0'>Finance manager Approval</div>
            <tr className='flex flex-row justify-center gap-3 mt-10 '>
              <td className='py-1'> <button onClick={() => handleUpdate(client.requestID)} className="p-2 font-bold text-white bg-green-600 rounded-md shadow-xl sm:w-10 md:w-24 lg:w-40 hover:bg-green-300">   Accept</button></td>
              <td></td>
              <td className='pl-5'><button onClick={() => handleReject(client.requestID)} className="p-2 font-bold text-white bg-red-700 rounded-md shadow-xl sm:w-10 md:w-24 lg:w-40 hover:bg-red-500 ">Reject</button></td>
            </tr>
          </div>
        ))}
      </div>
            )}
      {selectedRequestId && (
        <div className="fixed inset-0 z-10 flex items-center justify-center overflow-y-auto bg-gray-500 bg-opacity-50">
          <div className="w-2/3 p-8 bg-white rounded-lg ">
            <h2 className="mb-4 text-xl font-semibold">Reject Reason</h2>
            <textarea
              className="w-full p-2 mb-4 border border-gray-300 rounded-lg"
              placeholder="Enter reason for rejection..."
              value={rejectionReason}
              onChange={(e) => setRejectionReason(e.target.value)}
            />
            <div className="flex justify-end mr-5">
              <button
                className="px-4 py-2 mr-5 text-white bg-red-500 rounded-lg hover:bg-red-600"
                onClick={handleSubmitRejection}
              >
                Submit
              </button>
              <button
                className="px-4 py-2 text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300"
                onClick={handleCloseRejectForm}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default FinancialManagerApproval;
