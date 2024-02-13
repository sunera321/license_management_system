import React  from 'react';
import PageHeader from '../components/CommonModal/pageHeader';

const EditProfileUser = () => {

    

    return (
        <div>
         <PageHeader title={'Edit Account'} />
            <div className=''>
                <form className='w-2/5 px-10 pt-10 pb-20 mx-auto mb-10 bg-gray-100 rounded shadow-lg'>
                <div className="flex gap-0 mb-6 ">
                        <label className='block mx-3 mb-0 text-base font-semibold text-gray-700 '>Emp ID</label>
                        <p className='flex-1'>ID</p>
                    </div>
                    
                    <div className='mb-6'>
                        <label className='block mx-3 mb-0 text-base font-semibold text-gray-700 '>Name</label><br />
                        <input type="text" name="Email" className='w-full px-2 py-1 mx-2 leading-tight text-gray-700 border rounded shadow appearance-none ' /><br />
                    </div>
                    <div className='mb-6'>
                        <label className='block mx-3 mb-0 text-base font-semibold text-gray-700 '>Email</label><br />
                        <input type="text"  name="PN" className='w-full px-2 py-1 mx-2 leading-tight text-gray-700 border rounded shadow appearance-none ' /> <br />
                    </div>
                    <div className='mb-6'>
                        <label className='block mx-3 mb-0 text-base font-semibold text-gray-700 '>Department</label><br />
                        <select className='w-full px-2 py-1 mx-2 leading-tight text-gray-700 border rounded shadow appearance-none '>
                            <option>Finance Department</option>
                            <option>Partner Department</option>

                        </select>
                    </div>
                    <div className='mb-6'>
                        <label className='block mx-3 mb-0 text-base font-semibold text-gray-700 '>Phone Number</label><br />
                        <input type="text" required name="PN" className='w-full px-2 py-1 mx-2 leading-tight text-gray-700 border rounded shadow appearance-none ' /> <br />
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
