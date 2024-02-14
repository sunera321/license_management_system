import React from 'react';
import PageHeader from '../components/CommonModal/pageHeader';
import  {ToastContainer,toast} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

import generate from '../Images/sidebarpic/generate.svg';

  

const KeyGenerateForm = () => {
    return (
        <div >
           <PageHeader title='Key Generate' />
            <div className=''>
                <form className='w-3/5 px-10 pt-10 pb-20 mx-auto mb-10 bg-gray-100 rounded shadow-lg '>
                    <img className='w-12 pb-3 mx-auto' src={generate}/>
                    <p className='pb-5 text-green-500'>Please provide follwing details for Generate a key</p>
                    <div className="mb-6 ">
                        <label className='block mx-3 mb-0 text-base font-semibold text-gray-700 '>Client ID</label><br />
                        <input type="text" required name="clientID" className='w-full px-2 py-1 mx-2 leading-tight text-gray-700 border rounded shadow appearance-none ' /> <br />
                    </div>
                    <div className='mb-6'>
                        <label className='block mx-3 mb-0 text-base font-semibold text-gray-700 '>Host URL</label><br />
                        <input type="text" required name="URL" className= 'w-full px-2 py-1 mx-2 leading-tight text-gray-700 border rounded shadow appearance-none' /><br />
                    </div>
                    <div className='mb-8'>
                        <label className='block mx-3 mb-0 text-base font-semibold text-gray-700 '>Server Mac Address</label><br />
                        <input type="text" required name="SMA" className='w-full px-2 py-1 mx-2 leading-tight text-gray-700 border rounded shadow appearance-none' /> <br />
                    </div>
                    <div className='mb-8'>
                        <label className='block mx-3 mb-0 text-base font-semibold text-gray-700 '>Valid date</label><br />
                        <input type="number" required name="ValidDate" className='w-full px-2 py-1 mx-2 leading-tight text-gray-700 border rounded shadow appearance-none' /> <br />

                    </div>
                    <div className='ml-5 '>
                        <label className='block mx-0 mb-0 text-base font-semibold text-gray-700 '>Select client required module</label><br />
                        <div className='flex space-x-32 md:space-x-8'>
                            <div className=''>
                        <input class="mr-2 leading-tight" type="checkbox" name='BFI'/><span class="text-base mr-10">Banking, Finance & Insurance</span></div>
                        <div className=''><input class="mr-2 leading-tight" type="checkbox" name='MR' /><span class="text-base mr-10">Manufacturing and Retail</span></div>
                        </div>
                        <div className='flex mt-5 space-x-52 md:space-x-52'>
                        <div><input class="mr-2 leading-tight" type="checkbox" name='MR' /><span class="text-base ">Hospitality</span><br/></div>
                        <div className=''><input class="mr-2 leading-tight " type="checkbox" name='PS' /><span class="text-base ">Public Service</span></div>
                        </div>
                    
                    <div>
                    <input class="mr-5 leading-tight mt-10 size-5" type="checkbox" name='TP' /><span class=" text-lg ">Take Permission Hsenid Finanace</span>
                    </div>
                    <div>
                    <input class="mr-2 leading-tight mt-10 size-5" type="checkbox" name='PM' /><span class=" text-lg ">Take Permission Partner Manager</span>

                    </div>
                    </div>
                    <div className='float-right pb-5 mb-5'>
                    <button id='submit' type='submit' onClick={toast.success("succes")}   className="items-end w-48 p-2 mt-10 font-bold text-white bg-blue-900 rounded-md shadow-xl mb-28 hover:bg-indigo-500">SUBMIT</button>
                    
                    </div>
                </form>
            </div>
        </div>

    );
};

export default KeyGenerateForm;