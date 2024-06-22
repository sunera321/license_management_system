import React, { useState, useEffect } from 'react';
import PageHeader from '../components/CommonModal/pageHeader';
import Accept from '../components/CommonModal/Accept'
import Reject from '../components/CommonModal/Reject';
import Provide from '../components/CommonModal/Provide';
import Issue from '../components/CommonModal/Issue';
import Disable from '../components/CommonModal/Disable';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import BlueButton from '../components/CommonModal/BlueButton';
import InProgress from '../components/CommonModal/InProgress';
import Pending from '../components/CommonModal/Pending';
import Swal from 'sweetalert2';
import PageLoader from '../components/CommonModal/PageLoader';
import IssuedKeys from '../components/CommonModal/IssuedKey';
import del from '../Images/del.png'


const Status = () => {
    const [modal, setModal] = useState(false);
    const [CID, setEditId] = useState('');
    const [CName, setEditName] = useState('');
    const [Email, setEditEmail] = useState('');
    const [Partner, setPartner] = useState('');
    const [Finance, setFinance] = useState('');
    const [selectedClient, setSelectedClient] = useState(null);
    const [status1, setStatus1] = useState(true);
    const [status2, setStatus2] = useState(true);
    const [RejectRequests, setRejectRequests] = useState([]);
    const [PendingResults, setPendingResults] = useState([]);
    const [AvailableRequest, setAvailableRequest] = useState([]);
    const [selectedDataType, setSelectedDataType] = useState('withCommentFinanceMgt'); // Default selected data type
    const [isLoading, setIsLoading] = useState(false);
    const [generatedKey, setGeneratedKey] = useState('');
    const [buttonClicked, setButtonClicked] = useState(false); // State to track if the button is clicked
    const navigate = useNavigate();
    const [requestedModules, setRequestedModules] = useState([]);
    const [KeyIssued,setKeyIssued] = useState([]);
    
    const addpopup = (client) => {
        setModal(!modal);
        setSelectedClient(client);
        fetchModules(client.endClient.id);
    };

    const toggleModal = () => {
        setModal(false);
        setSelectedClient(null); // Reset selected client
        setRequestedModules([]); // Reset requested modules
    };
    const fetchModules = (clientId) => {
        axios.get(`https://localhost:7295/api/ClintIdByModules/getModulesNamesByClientId/${clientId}`)
            .then((response) => {
                setRequestedModules(response.data);
            })
            .catch((error) => {
                console.error('Error fetching modules:', error);
            });
    };

    const getData = () => {
        setIsLoading(true);
        axios.get('https://localhost:7295/api/RequestKey')
        
            .then((result) => {
                // Filter data where CommentFinaceMgt is NULL
                const dataWithComment = result.data.filter(item => item.commentFinaceMgt !== null || item.commentPartnerMgt !== null);
                const dataWithoutComment = result.data.filter(item => item.isFinanceApproval === false || item.isPartnerApproval === false);
                const AvailableRequest = result.data.filter(item => item.isFinanceApproval === true && item.isPartnerApproval === true);
                const IssuedKeys =result.data.filter(item=>item.issued === true && item.isFinanceApproval === true && item.isPartnerApproval === true );
                setRejectRequests(dataWithComment);
                setPendingResults(dataWithoutComment);
                setAvailableRequest(AvailableRequest);
                setKeyIssued(IssuedKeys);
                setIsLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setIsLoading(false);
            });
    };
 
    const handleIssueButtonClick = (endClientId, requestKeyId) => {
        axios.post(`https://localhost:7295/api/LicenseKey/api/license/generate?endClientId=${endClientId}&requestKeyId=${requestKeyId}`)
        .then(response => {
            setGeneratedKey(response.data);
            // Remove the item from PendingResults
            setPendingResults(prevPendingResults => prevPendingResults.filter(item => item.endClient.id !== endClientId));
    
            console.log('Generated license key:', response.data);
            const key = response.data;
    
            // Update the request key to set it as issued
            axios.patch(`https://localhost:7295/api/RequestKey/${requestKeyId}/SetIssueTrue`)
            .then(() => {
                Swal.fire({
                    icon: 'success',
                    title: 'License Key Generated and Request Key Updated!',
                });
                navigate(`/sendkey/${key}`);
            })
            .catch(error => {
                console.error('Error updating request key:', error);
                Swal.fire({
                    icon: 'error',
                    title: 'License Key Generated, but failed to update Request Key!',
                });
            });
        })
        .catch(error => {
            console.error('Error generating license key:', error);
            Swal.fire({
                icon: 'error',
                title: 'Key is Already Available!',
            });
        });
    };
    
    useEffect(() => {
        getData();
    }, []);

    const handleSelectChange = (event) => {
        setSelectedDataType(event.target.value);
    };

    return (
        <div>
            <div className='fixed top-20 right-2'>
                <a href='/KeyGenerateForm'>
                <BlueButton value="Generate Key" />
                </a>
            </div>
            <PageHeader title='Approval Status' />
            {isLoading ? (
                <PageLoader />
            ) : (
                <div className='mt-10 '>
                    <div className="mb-10 text-center">
                        <select className="w-1/4 p-2 border border-gray-300 rounded-md" onChange={handleSelectChange} value={selectedDataType}>
                            <option value="">Select Your Preference</option>
                            <option value="PendingRequests">Pending Requests</option>
                            <option value="RejectRequests">Rejected Requests</option>
                            <option value="AvailableLicense">Available Requests</option>
                            <option value = "KeyIssued">Issued Keys</option>
                            
                           
                        </select>
                    </div>
                    <table className="content-center w-2/4 mx-auto bg-white border-separate table-auto mb-11 border-spacing-2 caption-top">
                        <thead className='text-white bg-indigo-900'>
                            <tr>
                                <th className='px-5 py-2 mx-0 text-lg font-semibold rounded-lg'>Request ID</th>
                                <th className='px-20 mx-0 text-lg font-semibold rounded-lg py-'>Client name</th>
                                <th className='px-10 py-2 mx-0 text-lg font-semibold rounded-lg'>Client Data</th>
                                <th className='px-20 py-0 mx-0 text-lg font-semibold rounded-lg'>Partner Manager</th>
                                <th className='px-20 py-0 mx-0 text-lg font-semibold rounded-lg'>Finance manager</th>
                                <th className='px-2 py-0 mx-0 text-lg font-semibold rounded-lg'>Issue</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                            selectedDataType === 'RejectRequests' && (
                                RejectRequests && RejectRequests.length > 0 ? (
                                    RejectRequests.map((item, index) => (
                                        <tr key={index}>
                                            <td className='px-0 py-2 text-base text-center border-b-2 border-slate-500'>{item.requestID}</td>
                                            <td className='w-1/3 py-2 text-base text-center border-b-2 border-slate-500'>{item.endClient.name}</td>
                                            <td className='py-2 text-base text-center border-b-2 mx-45 border-slate-500'>
                                                <button onClick={() => addpopup(item)} className="px-4 py-2 font-bold text-white bg-gray-500 rounded hover:bg-gray-900">View
                                                    {modal && selectedClient && (
                                                        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-20">
                                                            <div className="fixed inset-0 w-screen h-screen">
                                                                <div className="text-black absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 leading-relaxed bg-white dark:border-gray-700 py-14 px-28 rounded-md max-w-screen-md min-w-[300px]">
                                                                    <table>
                                                                        <tbody>
                                                                            <tr>
                                                                                <td className='py-1'>Client Name</td>
                                                                                <td>:</td>
                                                                                <td className='pl-5'>{selectedClient.endClient.name}</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td className='py-1'>Client ID</td>
                                                                                <td>:</td>
                                                                                <td className='pl-5'>{selectedClient.endClient.id}</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td className='py-1'>Email</td>
                                                                                <td>:</td>
                                                                                <td className='pl-5'>{selectedClient.endClient.email}</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td className='py-1'>Country</td>
                                                                                <td>:</td>
                                                                                <td className='pl-5'>{selectedClient.endClient.country}</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td className='py-1'>Client Time Period</td>
                                                                                <td>:</td>
                                                                                <td className='pl-5'>{selectedClient.numberOfDays}</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td className='py-1'>Requested Module</td>
                                                                                <td>:</td>
                                                                                <td className='pl-5'>{requestedModules.join(', ')}</td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                    <button className="absolute top-0 right-0 p-0 px-2 m-4 text-gray-700 bg-red-600 rounded-full hover:bg-red-400 hover:text-gray-800" onClick={toggleModal}>
                                                                        X
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )}
                                                </button>
                                            </td>
                                            <td className='py-2 text-base border-b-2 px-14 mx-45 border-slate-500'>
                                                {item.commentPartnerMgt}
                                            </td>
                                            <td className='px-1 py-2 text-base border-b-2 mx-45 border-slate-500'>
                                                {item.commentFinaceMgt}
                                            </td>
                                            <td className='px-0 align-middle border-b-2 border-slate-500'>
                                                <Reject value="Rejected" />
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="6" className='py-2 text-base text-center border-b-2 border-slate-500'>No records found.</td>
                                    </tr>
                                )
                            )}

                            {selectedDataType === 'PendingRequests' && (
                                PendingResults && PendingResults.length > 0 ? (
                                    PendingResults.map((item, index) => (
                                        <tr key={index}>
                                            <td className='py-2 text-base text-center border-b-2 border-slate-500'>{item.requestID}</td>
                                            <td className='w-1/3 py-2 text-base text-center border-b-2 border-slate-500'>{item.endClient.name}</td>
                                            <td className='py-2 text-base text-center border-b-2 mx-45 border-slate-500'>
                                                <button onClick={() => addpopup(item)} className="px-4 py-2 font-bold text-white bg-gray-500 rounded hover:bg-gray-900">View
                                                    {modal && selectedClient && (
                                                        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-20">
                                                            <div className="fixed inset-0 w-screen h-screen">
                                                                <div className="text-black absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 leading-relaxed bg-white dark:border-gray-700 py-14 px-28 rounded-md max-w-screen-md min-w-[300px]">
                                                                    <table>
                                                                        <tbody>
                                                                            <tr>
                                                                                <td className='py-1'>Client Name</td>
                                                                                <td>:</td>
                                                                                <td className='pl-5'>{selectedClient.endClient.name}</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td className='py-1'>Client ID</td>
                                                                                <td>:</td>
                                                                                <td className='pl-5'>{selectedClient.endClient.id}</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td className='py-1'>Email</td>
                                                                                <td>:</td>
                                                                                <td className='pl-5'>{selectedClient.endClient.email}</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td className='py-1'>Country</td>
                                                                                <td>:</td>
                                                                                <td className='pl-5'>{selectedClient.endClient.country}</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td className='py-1'>Client No od Days</td>
                                                                                <td>:</td>
                                                                                <td className='pl-5'>{selectedClient.numberOfDays}</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td className='py-1'>Requested Module</td>
                                                                                <td>:</td>
                                                                                <td className='pl-5'>{requestedModules.join(', ')}</td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                    <button className="absolute top-0 right-0 p-0 px-2 m-4 text-gray-700 bg-red-600 rounded-full hover:bg-red-400 hover:text-gray-800" onClick={toggleModal}>
                                                                        X
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )}
                                                </button>
                                            </td>
                                            <td className='py-2 text-base border-b-2 px-14 mx-45 border-slate-500'>
                                                <div className=''>{item.isPartnerApproval ? <Accept value='Accept' /> : <InProgress value='InProgress' /> }</div>
                                            </td>
                                            <td className='py-2 text-base border-b-2 px-14 mx-45 border-slate-500'>
                                                <div >{item.isFinanceApproval ? <Accept value='Accept' /> : <InProgress value='InProgress' />}</div>
                                            </td>
                                            <td className='align-middle border-b-2 border-slate-500'>
                                                <div>
                                                {item.isPartnerApproval && item.isFinanceApproval ?
                                                    <button  className='py-2 mx-12 text-white transition duration-300 ease-in-out delay-150 bg-green-600 rounded-full px-7 hover:bg-green-400' onClick={() => handleIssueButtonClick(item.endClient.id,item.requestID)}>Available</button> : <Pending value="Pending" />}
                                                </div>
                                                
                                            </td>
                                        
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="6" className='py-2 text-base text-center border-b-2 border-slate-500'>No records found.</td>
                                    </tr>
                                )
                            )}

                            {selectedDataType === 'AvailableLicense' && (
                                AvailableRequest && AvailableRequest.length > 0 ? (
                                    AvailableRequest.map((item, index) => (
                                        <tr key={index}>
                                            <td className='py-2 text-base text-center border-b-2 border-slate-500'>{item.requestID}</td>
                                            <td className='w-1/3 py-2 text-base text-center border-b-2 border-slate-500'>{item.endClient.name}</td>
                                            <td className='py-2 text-base text-center border-b-2 mx-45 border-slate-500'>
                                                <button onClick={() => addpopup(item)} className="px-4 py-2 font-bold text-white bg-gray-500 rounded hover:bg-gray-900">View
                                                    {modal && selectedClient && (
                                                        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-20">
                                                            <div className="fixed inset-0 w-screen h-screen">
                                                                <div className="text-black absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 leading-relaxed bg-white dark:border-gray-700 py-14 px-28 rounded-md max-w-screen-md min-w-[300px]">
                                                                    <table>
                                                                        <tbody>
                                                                            <tr>
                                                                                <td className='py-1'>Client Name</td>
                                                                                <td>:</td>
                                                                                <td className='pl-5'>{selectedClient.endClient.name}</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td className='py-1'>Client ID</td>
                                                                                <td>:</td>
                                                                                <td className='pl-5'>{selectedClient.endClient.id}</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td className='py-1'>Email</td>
                                                                                <td>:</td>
                                                                                <td className='pl-5'>{selectedClient.endClient.email}</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td className='py-1'>Country</td>
                                                                                <td>:</td>
                                                                                <td className='pl-5'>{selectedClient.endClient.country}</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td className='py-1'>Client Time Period</td>
                                                                                <td>:</td>
                                                                                <td className='pl-5'>{selectedClient.numberOfDays}</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td className='py-1'>Requested Module</td>
                                                                                <td>:</td>
                                                                                <td className='pl-5'>{requestedModules.join(', ')}</td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                    <button className="absolute top-0 right-0 p-0 px-2 m-4 text-gray-700 bg-red-600 rounded-full hover:bg-red-400 hover:text-gray-800" onClick={toggleModal}>
                                                                        X
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )}
                                                </button>
                                            </td>
                                            <td className='py-2 text-base border-b-2 px-14 mx-45 border-slate-500'>
                                            <div className=''>{item.isPartnerApproval ? <Accept value='Accept' /> : <InProgress value='InProgress' /> }</div>
                                        </td>
                                        <td className='py-2 text-base border-b-2 px-14 mx-45 border-slate-500'>
                                            <div >{item.isFinanceApproval ? <Accept value='Accept' /> : <InProgress value='InProgress' />}</div>
                                        </td>
                                        <td className='align-middle border-b-2 border-slate-500'>
                                            <div>
                                            {item.isPartnerApproval && item.isFinanceApproval ?
                                                <button  className='py-2 mx-12 text-white transition duration-300 ease-in-out delay-150 bg-green-600 rounded-full px-7 hover:bg-green-400' onClick={() => handleIssueButtonClick(item.endClient.id,item.requestID)}>Available</button> : <Pending value="Pending" />}
                                            </div>
                                            
                                        </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="6" className='py-2 text-base text-center border-b-2 border-slate-500'>No records found.</td>
                                    </tr>
                                )
                            )}
                            {selectedDataType === 'KeyIssued' && (
                                KeyIssued && KeyIssued.length > 0 ? (
                                    KeyIssued.map((item, index) => (
                                        <tr key={index}>
                                            <td className='py-2 text-base text-center border-b-2 border-slate-500'>{item.requestID}</td>
                                            <td className='w-1/3 py-2 text-base text-center border-b-2 border-slate-500'>{item.endClient.name}</td>
                                            <td className='py-2 text-base text-center border-b-2 mx-45 border-slate-500'>
                                                <button onClick={() => addpopup(item)} className="px-4 py-2 font-bold text-white bg-gray-500 rounded hover:bg-gray-900">View
                                                    {modal && selectedClient && (
                                                        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-20">
                                                            <div className="fixed inset-0 w-screen h-screen">
                                                                <div className="text-black absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 leading-relaxed bg-white dark:border-gray-700 py-14 px-28 rounded-md max-w-screen-md min-w-[300px]">
                                                                    <table>
                                                                        <tbody>
                                                                            <tr>
                                                                                <td className='py-1'>Client Name</td>
                                                                                <td>:</td>
                                                                                <td className='pl-5'>{selectedClient.endClient.name}</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td className='py-1'>Client ID</td>
                                                                                <td>:</td>
                                                                                <td className='pl-5'>{selectedClient.endClient.id}</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td className='py-1'>Email</td>
                                                                                <td>:</td>
                                                                                <td className='pl-5'>{selectedClient.endClient.email}</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td className='py-1'>Country</td>
                                                                                <td>:</td>
                                                                                <td className='pl-5'>{selectedClient.endClient.country}</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td className='py-1'>Client Time Period</td>
                                                                                <td>:</td>
                                                                                <td className='pl-5'>{selectedClient.numberOfDays}</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td className='py-1'>Requested Module</td>
                                                                                <td>:</td>
                                                                                <td className='pl-5'>{requestedModules.join(', ')}</td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                    <button className="absolute top-0 right-0 p-0 px-2 m-4 text-gray-700 bg-red-600 rounded-full hover:bg-red-400 hover:text-gray-800" onClick={toggleModal}>
                                                                        X
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )}
                                                </button>
                                            </td>
                                            <td className='py-2 text-base border-b-2 px-14 mx-45 border-slate-500'>
                                            <div className=''>{item.isPartnerApproval ? <Accept value='Accept' /> : <InProgress value='InProgress' /> }</div>
                                        </td>
                                        <td className='py-2 text-base border-b-2 px-14 mx-45 border-slate-500'>
                                            <div >{item.isFinanceApproval ? <Accept value='Accept' /> : <InProgress value='InProgress' />}</div>
                                        </td>
                                        <td className='border-b-2 border-slate-500'>
                                            <div className='flex flex-row gap-5'>
                                              <IssuedKeys value="Issued" />
                                              
                                              <img src={del} className='w-10 h-10 mr-10 rounded-3xl hover:bg-red-600'/>
                                              
                                            </div>
                                            
                                        </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="6" className='py-2 text-base text-center border-b-2 border-slate-500'>No records found.</td>
                                    </tr>
                                )
                            )}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default Status;
