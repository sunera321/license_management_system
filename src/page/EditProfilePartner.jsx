import React from 'react';
import PageHeader from '../components/CommonModal/pageHeader';

const EditProfilePartner = () => {
   

    return (
        <div>
           <PageHeader title={'Account Settings'} />
            <div className=''>
                <form className='w-2/5 px-10 pt-10 pb-20 mx-auto mb-10 bg-gray-100 rounded shadow-lg '>
                <div className="flex gap-0 mb-6 ">
                        <label className='block mx-3 mb-0 text-base font-semibold text-gray-700'>ID</label>
                        <p className='flex-1'>ID</p>
                    </div>
                    <div className="mb-6 ">
                        <label className='block mx-3 mb-0 text-base font-semibold text-gray-700 '>Name</label><br />
                        <input type="text" required name="Name" className='w-full px-2 py-1 mx-2 leading-tight text-gray-700 border rounded shadow appearance-none' /> <br />
                    </div>
                    <div className='mb-6'>
                        <label className='block mx-3 mb-0 text-base font-semibold text-gray-700 '>Email</label><br />
                        <input type="text" required name="Email" className='w-full px-2 py-1 mx-2 leading-tight text-gray-700 border rounded shadow appearance-none' /><br />
                    </div>
                    <div className='mb-8'>
                        <label className='block mx-3 mb-0 text-base font-semibold text-gray-700 '>Phone Number</label><br />
                        <input type="text" required name="PN" className='w-full px-2 py-1 mx-2 leading-tight text-gray-700 border rounded shadow appearance-none' /> <br />
                    </div>
                    <div className='mb-8'>
                        <label className='block mx-3 mb-0 text-base font-semibold text-gray-700'>Country</label><br />
                        <input type="text" required name="PN" className='w-full px-2 py-1 mx-2 leading-tight text-gray-700 border rounded shadow appearance-none' /> <br />
                    </div>
                    <button id='submit' type='submit' className="w-48 p-2 mt-10 font-bold text-white bg-blue-900 rounded-md shadow-xl ml-60 hover:bg-indigo-500 ">SUBMIT</button>
                </form>
            </div>
            <div className='mt-4 '>
            
            </div>
        </div>
    );
};

export default EditProfilePartner;
