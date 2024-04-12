import React, { useState, useEffect } from 'react';
import PageHeader from '../components/CommonModal/pageHeader';
import Accept from '../components/CommonModal/Accept'
import Reject from '../components/CommonModal/Reject';
import Provide from '../components/CommonModal/Provide';
import Issue from '../components/CommonModal/Issue';
import Disable from '../components/CommonModal/Disable';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import Plus from '../Images/j.png';
import BlueButton from '../components/CommonModal/BlueButton';
import InProgress from '../components/CommonModal/InProgress';
import Pending from '../components/CommonModal/Pending';


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
    const [dataWithCommentFinanceMgt, setDataWithCommentFinanceMgt] = useState([]);
    const [dataWithoutCommentFinanceMgt, setDataWithoutCommentFinanceMgt] = useState([]);
    const [selectedDataType, setSelectedDataType] = useState('withCommentFinanceMgt'); // Default selected data type

    const addpopup = (client) => {
        setModal(!modal);
        setSelectedClient(client);
    };

    const toggleModal = () => {
        setModal(false);
        setSelectedClient(null); // Reset selected client
    };

    if (modal) {
        document.body.classList.add('active-modal');
    } else {
        document.body.classList.remove('active-modal');
    }

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const getData = () => {
        axios.get('https://localhost:7295/api/RequestKey')
            .then((result) => {
                // Filter data where CommentFinaceMgt is NULL
                const dataWithComment = result.data.filter(item => item.commentFinaceMgt !== null);
                const dataWithoutComment = result.data.filter(item => item.commentFinaceMgt === null);
                setDataWithCommentFinanceMgt(dataWithComment);
                setDataWithoutCommentFinanceMgt(dataWithoutComment);
            })
            .catch((error) => {
                console.log(error);
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
            <PageHeader title='Approval Status' />
            <div className='mt-10'>
                <select className="my-3 mx-4 p-2 border border-gray-300 rounded-md" onChange={handleSelectChange} value={selectedDataType}>
                    <option value="withCommentFinanceMgt">Records with CommentFinaceMgt</option>
                    <option value="withoutCommentFinanceMgt">Records without CommentFinaceMgt</option>
                </select>
                <table className="content-center w-2/4 mx-auto bg-white border border-separate table-auto mb-11 border-spacing-2 border-slate-500 caption-top">
                    <thead className='bg-indigo-100 ' >
                        <th className='px-0 py-3 mx-0 text-lg font-semibold'>Client ID</th>
                        <th className='px-0 py-0 mx-0 text-lg font-semibold '>Client name</th>
                        <th className='px-0 py-0 mx-0 text-lg font-semibold '>Client Data</th>
                        <th className='px-0 py-0 mx-0 text-lg font-semibold '>Partner Manager</th>
                        <th className='px-0 py-0 mx-0 text-lg font-semibold '>Finance manager</th>
                        <th className='px-0 py-0 mx-0 text-lg font-semibold '>Issue</th>
                    </thead>
                    <tbody>
                        {
                            selectedDataType === 'withCommentFinanceMgt' ?
                                dataWithCommentFinanceMgt && dataWithCommentFinanceMgt.length > 0 ?
                                    dataWithCommentFinanceMgt.map((item, index) => {
                                        return (
                                            <tr key={index}>
                                                <td className='px-20 py-2 text-base text-center border-b-2 border-slate-500' >{item.endClientId}</td>
                                                <td className='py-2 text-base text-center border-b-2 px-14 mx-45 border-slate-500'>{item.endClient.name}</td>
                                                <td className='py-2 text-base text-center border-b-2 px-14 mx-45 border-slate-500'>
                                                    <button onClick={() => addpopup(item)} className="px-4 py-2 font-bold text-white bg-gray-500 rounded hover:bg-gray-900">View
                                                        {modal && selectedClient && (
                                                            <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-20">
                                                                <div className="fixed inset-0 w-screen h-screen ">
                                                                    <div className=" text-black absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 leading-relaxed bg-white dark:border-gray-700  py-14 px-28 rounded-md max-w-screen-md min-w-[300px]">
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
                                                                            <td className='pl-5'>{selectedClient.endClient.numberOfDays}</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td className='py-1'>Requested Module</td>
                                                                            <td>:</td>
                                                                            <td className='pl-5'>{selectedClient.modules}</td>
                                                                        </tr>
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
                                                <td className='py-2 text-base border-b-2 px-14 mx-45 border-slate-500'>
                                                    {item.commentFinaceMgt}
                                                </td>
                                                <td className='align-middle border-b-2 border-slate-500 px-5'>
                                                    <Reject value="Rejected"/>
                                                </td>
                                            </tr>
                                        )
                                    })
                                :
                                'No records found.'
                            :
                            dataWithoutCommentFinanceMgt && dataWithoutCommentFinanceMgt.length > 0 ?
                                dataWithoutCommentFinanceMgt.map((item, index) => {
                                    return (
                                        <tr key={index}>
                                            <td className='px-20 py-2 text-base text-center border-b-2 border-slate-500' >{item.endClientId}</td>
                                            <td className='py-2 text-base text-center border-b-2 px-14 mx-45 border-slate-500'>{item.endClient.name}</td>
                                            <td className='py-2 text-base text-center border-b-2 px-14 mx-45 border-slate-500'>
                                                <button onClick={() => addpopup(item)} className="px-4 py-2 font-bold text-white bg-gray-500 rounded hover:bg-gray-900">View
                                                    {modal && selectedClient && (
                                                        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-20">
                                                            <div className="fixed inset-0 w-screen h-screen ">
                                                                <div className=" text-black absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 leading-relaxed bg-white dark:border-gray-700  py-14 px-28 rounded-md max-w-screen-md min-w-[300px]">
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
                                                                        <td className='pl-5'>{selectedClient.endClient.numberOfDays}</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className='py-1'>Requested Module</td>
                                                                        <td>:</td>
                                                                        <td className='pl-5'>{selectedClient.modules}</td>
                                                                    </tr>
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
                                                <div>{item.isPartnerApproval && item.isFinanceApproval ? <Issue /> : <Pending value="Pending" />}</div>
                                            </td>
                                        </tr>
                                    )
                                })
                            :
                            'No records found.'
                        }
                    </tbody>
                </table>
            </div>
            <div className='fixed top-20 right-10 '><BlueButton className="" value={"Generate Key"} href={"/keygenerate"} /> </div>
        </div>
    );
};

export default Status;
