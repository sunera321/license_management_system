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
import Plus from '../Images/j.png'

const Status = () => {
    const [modal, setModal] = useState(false);

    const [CID, setEditId] = useState('');
    const [CName, setEditName] = useState('');
    const [Email, setEditEmail] = useState('');

    const [status1, setStatus1] = useState(true);
    const [status2, setStatus2] = useState(true);
     
    const [data, setData] = useState([]);
    const [clients, setClients] = useState([]);
 
    //Navigate Page from Approval to Status
    const location1 = useLocation();
    const location = useLocation();
    const accepted = location.state && location.state.accepted;
    const ass = location1.state && location1.state.accepted;
   const toggleModal = () => {
        setModal(!modal);

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
        axios.get('http://localhost:5295/api/Client')
            .then((result) => {
                setData(result.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }

 
    const handle = (id) => {

        handleShow();
        axios.get(`http://localhost:5295/api/Client/${id}`)
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

   //Show relevant buttons based on the status
    const statusMessage = accepted === true ? <Accept value='Accept' /> :
        accepted === false ? <Reject value='Reject' /> :
            "In progress...";
    const statusMessage1 = ass === true ? <Accept value='Accept' /> :
        accepted === false ? <Reject value='Reject' /> :
            "In progress...";
    return (
        <div><PageHeader title='Approval Status' />

            <div className='mt-10'>

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
                                            <td className='px-20 py-2 text-base text-center border-b-2 border-slate-500' >{item.CID}</td>

                                            <td className='py-2 text-base text-center border-b-2 px-14 mx-45 border-slate-500'>{item.CName}</td>
                                            <td className='py-2 text-base text-center border-b-2 px-14 mx-45 border-slate-500'><button onClick={() => handle(item.CID)} className="block px-10 py-0 mx-auto text-lg mt-100">View
                                                {modal && (
                                                    <div className="fixed inset-0 w-screen h-screen">
                                                        <div className="fixed inset-0 w-screen h-screen"></div>
                                                        <div className= " text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 leading-relaxed hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 py-14 px-28 rounded-md max-w-screen-md min-w-[300px]">

                                                            <tr>
                                                                <td className='py-1'>Client Name</td>
                                                                <td>:</td>
                                                                <td className='pl-5'>{item.CName}</td>
                                                            </tr>
                                                            <tr>
                                                                <td className='py-1'>Client ID</td>
                                                                <td>:</td>
                                                                <td className='pl-5'>{item.CID}</td>
                                                            </tr>
                                                            <tr>
                                                                <td className='py-1'>Email</td>
                                                                <td>:</td>
                                                                <td className='pl-5'>{item.Email}</td>
                                                            </tr>
                                                            <tr>
                                                                <td className='py-1'>Country</td>
                                                                <td>:</td>
                                                                <td className='pl-5'>{item.Country}</td>
                                                            </tr>
                                                            <tr>
                                                                <td className='py-1'>Client Time Period</td>
                                                                <td>:</td>
                                                                <td className='pl-5'>u</td>
                                                            </tr>

                                                            <tr>
                                                                <td className='py-1'>Requested Module</td>
                                                                <td>:</td>
                                                                <td className='pl-5'>q</td>
                                                            </tr>





                                                            <button className="absolute top-0 right-0 p-0 px-2 m-4 text-gray-700 bg-red-600 rounded-full hover:bg-red-400 hover:text-gray-800" onClick={toggleModal}>
                                                                X
                                                            </button>
                                                        </div>
                                                    </div>
                                                )}</button></td>

                                            <td className='py-2 text-base border-b-2 px-14 mx-45 border-slate-500'><div className=''>{statusMessage}</div></td>
                                            <td className='py-2 text-base border-b-2 px-14 mx-45 border-slate-500'><div >{statusMessage1}</div></td>

                                            <td className='align-middle border-b-2 border-slate-500'>{status1 && status2 ? (
                                                <Issue />
                                            ) : (
                                                <Provide />
                                            )}</td>
                                        </tr>
                                    )
                                })
                                :
                                'Loading...'
                        }


                    </tbody>
                </table>

            </div>
            <div className=''>
            <div ><img src={Plus} className='h-10'/>Generate Key</div>
            </div> 
        </div>
    );
};

export default Status;
