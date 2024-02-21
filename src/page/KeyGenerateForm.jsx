import React, { useState } from 'react';
import PageHeader from '../components/CommonModal/pageHeader';

import "react-toastify/dist/ReactToastify.css";
import Swal from 'sweetalert2';
import generate from '../Images/sidebarpic/generate.svg';
import axios from 'axios';

import { ToastContainer, toast } from "react-toastify";






const KeyGenerateForm = () => {
    const [ClientID, setClinetID] = useState('');
    const [URL, setURL] = useState('');
    const [SMA, setSMA] = useState('');
    const [VD, setVD] = useState('');
    const [BFI, setBFI] = useState(true);
    const [MR, setMR] = useState(true);
    const [H, setH] = useState(true);
    const [show, setShow] = useState(false);
    const [isChecked1, setIsChecked1] = useState(false);
    const [isChecked2, setIsChecked2] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



    const handleSubmit = (e) => {
        e.preventDefault();
        Swal.fire({

            position: "top-center",
            icon: "success",
            title: "Generate Key Succesfully",
            showConfirmButton: false,
            timer: 1500

        })
    }
    /* const handleActiveChange = (e) => {
      if(e.target.checked){
          setBFI(1);
      }else{
          setBFI(0);
      }
     }*/

    const handleChange = (data) => {
        if (BFI == true) {
            console.log(data);
            setBFI(1);
        }

    }
    const handleChangeMR = (data) => {
        if (MR == true) {
            console.log(data);
            setMR(1);
        }

    }
    const handleChangeH = (data) => {
        if (MR == true) {
            console.log(data);
            setH();
        }
    }
    const handleCheckboxChange = (event, checkboxNumber) => {
        const isChecked = event.target.checked;
        switch (checkboxNumber) {
            case 1:
                setIsChecked1(isChecked);
                break;
            case 2:
                setIsChecked2(isChecked);
                break;
            default:
                break;
        }
    };

    const handleSave = () => {
        const url = `http://localhost:5295/api/License`;
        const data = {

            "hostURL": URL,
            "serverMacAddress": SMA,
            "validDateUntil": VD,
            "modules": BFI,
            "hsenidUser": isChecked1,
            "hsenidPartner": isChecked2
        }

        axios.post(url, data)
            .then((result) => {
                console.log("DD")
                Swal.fire({

                    position: "top-center",
                    icon: "success",
                    title: "Generate Key Succesfully",
                    showConfirmButton: false,
                    timer: 1500

                })
            }).catch((error) => {
                toast.error(error);
                console.log(error);
            })
    }
    return (
        <div  >

            <PageHeader title='Key Generate' />
            <div className=''>
                <form onSubmit={handleSave} className='w-3/5 px-10 pt-10 pb-5 mx-auto mb-10 bg-gray-100 rounded shadow-lg '>
                    <img className='w-12 pb-3 mx-auto' src={generate} />
                    <p className='pb-5 text-green-500'>Please provide follwing details for Generate a key</p>
                    <div className="mb-6 ">
                        <label className='block mx-3 mb-0 text-base font-semibold text-gray-700 '>Client ID</label><br />
                        <select className='w-full px-2 py-1 mx-2 leading-tight text-gray-700 border rounded shadow appearance-none ' value={ClientID} onChange={(e) => setClinetID(e.target.value)}>
                            <option>Select Client ID</option>
                            <option>ClientID</option>
                            <option>ClinetID2</option>
                        </select>

                    </div>

                    <div className='mb-6'>
                        <label className='block mx-3 mb-0 text-base font-semibold text-gray-700 '>Host URL</label><br />
                        <input onChange={(e) => setURL(e.target.value)} value={URL} type="text" required name="URL" className='w-full px-2 py-1 mx-2 leading-tight text-gray-700 border rounded shadow appearance-none' /><br />

                    </div>
                    <div className='mb-8'>
                        <label className='block mx-3 mb-0 text-base font-semibold text-gray-700 '>Server Mac Address</label><br />
                        <input onChange={(e) => setSMA(e.target.value)} value={SMA} type="text" required className='w-full px-2 py-1 mx-2 leading-tight text-gray-700 border rounded shadow appearance-none' /> <br />
                    </div>
                    <div className='mb-8'>
                        <label className='block mx-3 mb-0 text-base font-semibold text-gray-700 '>Valid date Until</label><br />
                        <input onChange={(e) => setVD(e.target.value)} value={VD} type="date" required name="ValidDate" className='w-full px-2 py-1 mx-2 leading-tight text-gray-700 border rounded shadow appearance-none' /> <br />

                    </div>
                    <div className='ml-5 '>
                        
                       
                        <ul class="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex  ">
                            <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
                                <div class="flex items-center ps-3 bg-white">
                                    <input id="module1-checkbox-list" onChange={() => handleChange("Banking, Finance & Insurance")} value={BFI} type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600  focus:ring-2" />
                                    <label for="module1-checkbox-list" class="w-full py-3 ms-2 text-sm font-medium text-black">Banking, Finance & Insurance</label>
                                </div>
                            </li>
                            <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
                                <div class="flex items-center ps-3 bg-white">
                                    <input id="module2-checkbox-list" type="checkbox" onChange={() => handleChangeMR("Manufacturing and Retail")} value={MR} class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2  " />
                                    <label for="module2-checkbox-list" class="w-full py-3 ms-2 text-sm font-medium text-black">Manufacturing and Retail</label>
                                </div>
                            </li>
                            <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r ">
                                <div class="flex items-center ps-3 bg-white">
                                    <input id="module3-checkbox-list" type="checkbox" onChange={() => handleChangeH("Hospitality")} value={H} class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 " />
                                    <label for="module3-checkbox-list" class="w-full py-3 ms-2 text-sm font-medium text-black ">Hospitality</label>
                                </div>
                            </li>

                        </ul>


                        <ul class="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700  dark:text-white">
                            <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r ">
                                <div class="flex items-center ps-3 bg-white">
                                    <input id="module4-checkbox-list" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                    <label for="module4-checkbox-list" class="w-full py-3 ms-2 text-sm font-medium text-black ">Module Name</label>
                                </div>
                            </li>
                            <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r ">
                                <div class="flex items-center ps-3 bg-white">
                                    <input id="module5-checkbox-list" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                    <label for="module5-checkbox-list" class="w-full py-3 ms-2 text-sm font-medium text-black ">Module Name</label>
                                </div>
                            </li>
                            <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r ">
                                <div class="flex items-center ps-3 bg-white">
                                    <input id="module6-checkbox-list" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                    <label for="module6-checkbox-list" class="w-full py-3 ms-2 text-sm font-medium text-black ">Module Name</label>
                                </div>
                            </li>

                        </ul>
                        <br />

                        <div>
                            <input class="mr-5 leading-tight mt-10 size-5" type="checkbox" checked={isChecked1}
                                onChange={(event) => handleCheckboxChange(event, 1)} name='TP' /><span class=" text-lg ">Take Permission Hsenid Finanace</span>

                        </div>


                        <div>
                            <input class="mr-2 leading-tight mt-10 size-5" type="checkbox" checked={isChecked2}
                                onChange={(event) => handleCheckboxChange(event, 2)} name='PM' /><span class=" text-lg ">Take Permission Partner Manager</span>

                        </div>

                    </div>
                    <div className='items-end content-end self-end justify-end pb-5 mx-auto mb-5 place-content-end place-items-end'>

                        <input onClick={handleSave} type='submit' value='Submit' className="items-end w-48 p-2 mt-10 font-bold text-white bg-blue-900 rounded-md shadow-xl mb2 hover:bg-indigo-500" />


                    </div>

                </form>

            </div>

        </div>

    );
};


export default KeyGenerateForm;
