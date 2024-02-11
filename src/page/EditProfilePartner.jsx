import React from 'react';
import PageHeader from '../components/CommonModal/pageHeader';

const EditProfilePartner = () => {
   

    return (
        <div>
           <PageHeader title={'Account Settings'} />
            <div className=''>
                <form className='w-1/3 px-8 pt-0 pb-4 mx-auto mt-10 mb-10 bg-white rounded shadow-md '>
                <div className="flex gap-0 mb-6 ">
                        <label className='items-start justify-start flex-1 block mb-1 text-lg font-bold text-gray-700 '>ID</label>
                        <p className='flex-1'>ID</p>
                    </div>
                    <div className="mb-6 ">
                        <label className='block mb-1 text-lg font-bold text-gray-700 '>Name</label><br />
                        <input type="text" required name="Name" className='w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline' /> <br />
                    </div>
                    <div className='mb-6'>
                        <label className='block mb-1 text-lg font-bold text-gray-700 '>Email</label><br />
                        <input type="text" required name="Email" className='w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline' /><br />
                    </div>
                    <div className='mb-8'>
                        <label className='block mb-1 text-lg font-bold text-gray-700 '>Phone Number</label><br />
                        <input type="text" required name="PN" className='w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline' /> <br />
                    </div>
                    <div className='mb-8'>
                        <label className='block mb-1 text-lg font-bold text-gray-700 '>Country</label><br />
                        <input type="text" required name="PN" className='w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline' /> <br />
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
