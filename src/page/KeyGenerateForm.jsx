import React, { useState } from 'react';
import PageHeader from '../components/CommonModal/pageHeader';

import "react-toastify/dist/ReactToastify.css";
import Swal from 'sweetalert2';
import generate from '../Images/sidebarpic/generate.svg';







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
    return (
        <div  >

            <PageHeader title='Key Generate' />
            <div className=''>
                <form onSubmit={handleSubmit} className='w-3/5 px-10 pt-10 pb-5 mx-auto mb-10 bg-gray-100 rounded shadow-lg '>
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
                        <label className='block mx-0 mb-0 text-base font-semibold text-gray-700 '>Select client required module</label><br />
                        <div className='flex space-x-32 md:space-x-8'>
                            <div className=''>
                                <input class="mr-2 leading-tight" type="checkbox" onChange={() => handleChange("Banking, Finance & Insurance")} value={BFI} /><span class="text-base mr-2">Banking, Finance & Insurance</span></div>
                            <div className=''><input class="mr-2 leading-tight" type="checkbox" onChange={() => handleChangeMR("Manufacturing and Retail")} value={MR} name='MR' /><span class="text-base mr-2">Manufacturing and Retail</span></div>
                            <div><input class="mr-2 leading-tight" type="checkbox" onChange={() => handleChangeH("Hospitality")} value={H} name='MR' /><span class="text-base ">Hospitality</span><br /></div>

                        </div>
                        <div className='flex mt-5 space-x-32 md:space-x-32'>
                            <div><input class="mr-2 leading-tight" type="checkbox" name='MR' /><span class="text-base ">Hospitality</span><br /></div>
                            <div className=''><input class="mr-2 leading-tight " type="checkbox" name='PS' /><span class="text-base ">Public Service</span></div>
                            <div className=''><input class="mr-2 leading-tight " type="checkbox" name='PS' /><span class="text-base ">Public Service</span></div>
                        </div>

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

                        <input type='submit' value='Submit' className="items-end w-48 p-2 mt-10 font-bold text-white bg-blue-900 rounded-md shadow-xl mb2 hover:bg-indigo-500" />


                    </div>

                </form>

            </div>

        </div>

    );
};


export default KeyGenerateForm;
