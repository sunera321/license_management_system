import React, { useState, useEffect } from 'react';
import PageHeader from '../components/CommonModal/pageHeader';
import Accept from '../components/CommonModal/Accept'
import Reject from '../components/CommonModal/Reject';
import Provide from '../components/CommonModal/Provide';
import Issue from '../components/CommonModal/Issue';
import Disable from '../components/CommonModal/Disable';
import axios from 'axios';
import Popup from '../components/CommonModal/Popup';
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

    const addpopup = (client) => {
        setModal(!modal);
        setSelectedClient(client);
    }
    const [data, setData] = useState([]);
    const [clients, setClients] = useState([]);


    const toggleModal = () => {
        setModal(false);
        setSelectedClient(null); // Reset selected client
    };

    if (modal) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const getData = () => {


        axios.get('https://localhost:7295/api/ClientST')
            .then((result) => {
                setData(result.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }

    const handle = (id) => {

        handleShow();
        axios.get(`https://localhost:7295/api/ClientST/${id}`)
            .then((result) => {
                setModal(!modal);
                setEditName(CName);
                setEditEmail(Email);
                setEditId(CID);

            })
            .catch((error) => {
                console.log(error);
            })
    }




    useEffect(() => {

        getData();


    }, [])




    //Take Relavant Table
    const [tables, setTables] = useState([]);
    const [selectedTable, setSelectedTable] = useState('');
    const [tableData, setTableData] = useState([]);

    // Function to handle dropdown change
    const handleTableChange = (event) => {
        setSelectedTable(event.target.value);
    };

    useEffect(() => {
        if (selectedTable) {
            axios.get(`https://localhost:7295/api/${selectedTable}`)
                .then((result) => {
                    setTableData(result.data);
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }, [selectedTable]);



    return (
        <div><PageHeader title='Approval Status' />

            <div className='mt-10'>
                <div className='max-w-lg mx-auto mb-10 '>
                    <select onChange={handleTableChange} value={selectedTable} className='block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-gray-500 ' >
                        <option value="" className="">Select a table   </option>
                        <option value="ClientSTs">Client</option>
                        <option value="Activate">Activate</option>

                    </select>
                </div>
                {selectedTable == "ClientSTs" && (
                    <table className="content-center w-2/4 mx-auto bg-white border border-separate table-auto mb-11 border-spacing-2 border-slate-500 caption-top">
                        <thead className='bg-indigo-100 ' ><th className='px-0 py-3 mx-0 text-lg font-semibold'>Client ID</th>
                            <th className='px-0 py-0 mx-0 text-lg font-semibold '>Client name</th>
                            <th className='px-0 py-0 mx-0 text-lg font-semibold '>Client Data</th>
                            <th className='px-0 py-0 mx-0 text-lg font-semibold '>Partner Manager</th>
                            <th className='px-0 py-0 mx-0 text-lg font-semibold '>Finance manager</th>
                            <th className='px-0 py-0 mx-0 text-lg font-semibold '>Issue</th></thead>
                        <tbody  >
                            {
                                data && data.length > 0 ?
                                    data.map((item, index) => {
                                        return (
                                            <tr key={index}>
                                                <td className='px-20 py-2 text-base text-center border-b-2 border-slate-500' >{item.cid}</td>

                                                <td className='py-2 text-base text-center border-b-2 px-14 mx-45 border-slate-500'>{item.cName}</td>
                                                <td className='py-2 text-base text-center border-b-2 px-14 mx-45 border-slate-500'><button onClick={() => addpopup(item)} className="px-4 py-2 font-bold text-white bg-gray-500 rounded hover:bg-gray-900">View
                                                    {modal && selectedClient && (
                                                        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-20">
                                                            <div className="fixed inset-0 w-screen h-screen ">
                                                                
                                                                <div className=" text-black absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 leading-relaxed bg-white dark:border-gray-700  py-14 px-28 rounded-md max-w-screen-md min-w-[300px]">

                                                                    <tr>
                                                                        <td className='py-1'>Client Name</td>
                                                                        <td>:</td>
                                                                        <td className='pl-5'>{selectedClient.cName}</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className='py-1'>Client ID</td>
                                                                        <td>:</td>
                                                                        <td className='pl-5'>{selectedClient.cid}</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className='py-1'>Email</td>
                                                                        <td>:</td>
                                                                        <td className='pl-5'>{selectedClient.email}</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className='py-1'>Country</td>
                                                                        <td>:</td>
                                                                        <td className='pl-5'>{selectedClient.country}</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className='py-1'>Client Time Period</td>
                                                                        <td>:</td>
                                                                        <td className='pl-5'>{selectedClient.tImePeriod}</td>
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
                                                    )}</button></td>

                                                <td className='py-2 text-base border-b-2 px-14 mx-45 border-slate-500'><div className=''>{item.partner ? <Accept value='Accept' /> : <InProgress value='InProgress' />}</div></td>
                                                <td className='py-2 text-base border-b-2 px-14 mx-45 border-slate-500'><div >{item.finance ? <Accept value='Accept' /> : <InProgress value='InProgress' />}</div></td>

                                                <td className='align-middle border-b-2 border-slate-500'><div>
                                                    {item.partner && item.finance ? <Issue /> : <Pending value="Pending" />}</div></td>
                                            </tr>
                                        )
                                    })
                                    :
                                    'Loading...'
                            }


                        </tbody>
                    </table>
                )}
                {selectedTable == 'Activate' && (
                    <table>
                        <thead>
                            <th>LID</th>
                            <th>HsenidUser</th>
                        </thead>
                        <tbody>
                            {
                                data && data.length > 0 ?
                                    data.map((item, index) => {

                                        return (
                                            <tr key={index}>
                                                <td>{item.ID}</td>
                                                <td>{item.Name}</td>
                                            </tr>
                                        )
                                    }) : 'Loading...'
                            }

                        </tbody>
                    </table>
                )}
            </div>

            <div className='fixed top-20 right-10 '><BlueButton className="" value={"Generate Key"} href={"/keygenerate"} /> </div>

        </div>
    );
};

export default Status;
