import React from 'react';
import PageHeader from '../components/CommonModal/pageHeader';

const KeyGenerateForm = () => {
    return (
        <div >
            
            <PageHeader title={"LICENSE KEY GENERATE"} />
            <div className='px-40 md:mx-60'>
                <form className='px-5 pt-2 pb-20 bg-gray-100 rounded shadow-lg'>
                    <div className="mb-6 ">
                        <label className='block mb-1 text-lg font-bold text-gray-700 '>Client ID</label><br />
                        <input type="text" required name="clientID" className='w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline' /> <br />
                    </div>
                    <div className='mb-6'>
                        <label className='block mb-1 text-lg font-bold text-gray-700 '>Host URL</label><br />
                        <input type="text" required name="URL" className='w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline' /><br />
                    </div>
                    <div className='mb-8'>
                        <label className='block mb-1 text-lg font-bold text-gray-700 '>Server Mac Address</label><br />
                        <input type="text" required name="SMA" className='w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline' /> <br />
                    </div>
                    <div className='mb-8'>
                        <label className='block mb-1 text-lg font-bold text-gray-700 '>Valid date</label><br />
                        <input type="number" required name="ValidDate" className='w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline' /> <br />

                    </div>
                    <div>
                        <label className='block mb-1 text-lg font-bold text-gray-700 '>Select client required module</label><br />
                        <input class="mr-2 leading-tight" type="checkbox" name='BFI'/><span class="text-base mr-10">Banking, Finance & Insurance</span>
                        <input class="mr-2 leading-tight" type="checkbox" name='MR' /><span class="text-base mr-10">Manufacturing and Retail</span>
                        <input class="mr-2 leading-tight" type="checkbox" name='MR' /><span class="text-base ">Hospitality</span><br/>
                        <input class="mr-2 leading-tight mt-10" type="checkbox" name='PS' /><span class="text-base ">Public Service</span>
                    </div>
                    <div>
                    <input class="mr-2 leading-tight mt-10 size-5" type="checkbox" name='TP' /><span class=" text-lg ">Take Permission Hsenid Finanace</span>
                    </div>
                    <div>
                    <input class="mr-2 leading-tight mt-10 size-5" type="checkbox" name='PM' /><span class=" text-lg ">Take Permission Partner Manager</span>

                    </div>
                    <button id='submit' type='submit' className="w-48 p-2 mt-10 font-bold text-white bg-blue-900 rounded-md shadow-xl hover:bg-indigo-500 ml-96 ">SUBMIT</button>
                </form>
            </div>
        </div>

    );
};

export default KeyGenerateForm;
