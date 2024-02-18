import React, {useState} from 'react';
import PageHeader from '../components/CommonModal/pageHeader';

import "react-toastify/dist/ReactToastify.css";
import Swal from 'sweetalert2';
import generate from '../Images/sidebarpic/generate.svg';
import BlueButton from '../components/CommonModal/BlueButton';






const KeyGenerateForm = () => {
     const [ClientID,setClinetID] = useState('');
    const [URL, setURL] = useState('');
    const [SMA,setSMA] = useState('');
    const [VD, setVD] = useState('');
    const [BFI, setBFI] = useState(0);

  
    const handleSubmit= (e) => {
        e.preventDefault();
        
        
        Swal.fire({
    
            position: "top-center",
            icon: "success",
            title: "Generate Key Succesfully",
            showConfirmButton: false,
            timer: 1500
       
          })
    }

    return (
        <div  >

            <PageHeader title='Key Generate' />
            <div className=''>
                <form  onSubmit={handleSubmit}    className='w-4/6 pt-10 mx-auto mb-5 bg-gray-200 rounded shadow-lg '>
                    <img className='w-12 pb-3 mx-auto' src={generate} />
                    <p className='pb-5 text-green-500'>Please provide follwing details for Generate a key</p>
                    <div className="mb-6">
                        <label  className='block mx-3 mb-0 text-base font-semibold text-gray-700 '>Client ID</label><br />
                        <select className='w-full px-2 py-1 mx-2 leading-tight text-gray-700 border rounded shadow appearance-none '  value={ClientID} onChange={(e) =>setClinetID(e.target.value)}>
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
                        <input onChange={(e) =>setSMA(e.target.value)} value={SMA}  type="text" required  className='w-full px-2 py-1 mx-2 leading-tight text-gray-700 border rounded shadow appearance-none' /> <br />
                    </div>
                    <div className='mb-8'>
                        <label className='block mx-3 mb-0 text-base font-semibold text-gray-700 '>Valid date</label><br />
                        <input onChange={(e)=>setVD(e.target.value)} value={VD} type="number"  required name="ValidDate" className='w-full px-2 py-1 mx-2 leading-tight text-gray-700 border rounded shadow appearance-none' /> <br />

                    </div>
                    <div className='ml-5 '>
                        <label className='block mx-0 mb-0 text-base font-semibold text-gray-700 '>Select client required module</label><br />
                        <div className='flex space-x-32 md:space-x-8'>
                            <div className=''>
                                <input class="mr-2 leading-tight" type="checkbox" checked={BFI === 1 ? true :false} onChange={(e) =>setBFI(e)} value={BFI}  name='BFI' /><span class="text-base mr-2">Banking, Finance & Insurance</span></div>
                            <div className=''><input class="mr-2 leading-tight" type="checkbox" name='MR' /><span class="text-base mr-2">Manufacturing and Retail</span></div>
                            <div><input class="mr-2 leading-tight" type="checkbox" name='MR' /><span class="text-base ">Hospitality</span><br /></div>
                        </div>
                        <div className='flex mt-5 space-x-32 md:space-x-32'>
                            <div><input class="mr-2 leading-tight" type="checkbox" name='MR' /><span class="text-base ">Hospitality</span><br /></div>
                            <div className=''><input class="mr-2 leading-tight " type="checkbox" name='PS' /><span class="text-base ">Public Service</span></div>
                            <div className=''><input class="mr-2 leading-tight " type="checkbox" name='PS' /><span class="text-base ">Public Service</span></div>
                        </div>

                        <div>
                            <input class="mr-5 leading-tight mt-10 size-5" type="checkbox" name='TP' /><span class=" text-lg ">Take Permission Hsenid Finanace</span>
                        </div>
                        <div>
                            <input class="mr-2 leading-tight mt-10 size-5" type="checkbox" name='PM' /><span class=" text-lg ">Take Permission Partner Manager</span>

                        </div>
                    </div>
                    <div className='items-end content-end self-end justify-end pb-5 mx-auto mb-5 place-content-end place-items-end'>
                        
                        <input  type='submit'    value='Submit' className="items-end w-48 p-2 mt-10 font-bold text-white bg-blue-900 rounded-md shadow-xl mb-28 hover:bg-indigo-500" />
                        
                       
                    </div>

                </form>
               
            </div>

        </div>

    );
};


export default KeyGenerateForm;
