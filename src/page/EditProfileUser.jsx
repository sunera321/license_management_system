import React  from 'react';
import PageHeader from '../components/CommonModal/pageHeader';

const EditProfileUser = () => {

    

    return (
        <div>
         
            
            <PageHeader title={"EDIT PROFILE"} />
            <div className='px-40 md:mx-96'>
                <form className='px-5 pt-2 pb-20 bg-gray-100 rounded shadow-lg '>
                <div className="flex gap-0 mb-6 ">
                        <label className='items-start justify-start flex-1 block mb-1 text-lg font-bold text-gray-700 '>Emp ID</label>
                        <p className='flex-1'>ID</p>
                    </div>
                    
                    <div className='mb-6'>
                        <label className='mb-2 text-lg font-bold text-gray-700'>Name</label><br />
                        <input type="text" name="Email" className='w-full px-3 py-2 mt-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline' /><br />
                    </div>
                    <div className='mb-6'>
                        <label className='mb-3 text-lg font-bold text-gray-700'>Email</label><br />
                        <input type="text"  name="PN" className='w-full px-3 py-2 mt-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline' /> <br />
                    </div>
                    <div className='mb-6'>
                        <label className='mb-1 text-lg font-bold text-gray-700'>Department</label><br />
                        <select className='w-full px-3 py-2 mt-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline' id="grid-state">
                            <option>Finance Department</option>
                            <option>Partner Department</option>

                        </select>
                    </div>
                    <div className='mb-6'>
                        <label className='mb-2 text-lg font-bold text-gray-700'>Phone Number</label><br />
                        <input type="text" required name="PN" className='w-full px-3 py-2 mt-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline' /> <br />
                    </div>
                    <div className='mb-5 '>
                        <button id='submit' type='submit' className='max-w-xl px-4 py-2 text-white bg-blue-900 rounded float-end hover:bg-blue-700'>SUBMIT</button>
                    </div>

                </form>
            </div>
            <div className='mt-4 '>

            </div>
        </div>
    );
};

export default EditProfileUser;
