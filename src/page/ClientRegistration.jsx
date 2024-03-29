import React from 'react';
import PageHeader from '../components/CommonModal/pageHeader';

const ClientRegistration = () => {
    return (
        <div>
            <PageHeader title={"Register Client"}/>

            <div className='max-w-6xl px-10 mx-auto md:px-20 lg:px-40'>
                <form className='px-5 pt-2 pb-20 bg-gray-100 rounded shadow-lg '>

                    <div className="mb-6 ">
                        <label className='mb-2 text-lg font-bold text-gray-700 '>Partner ID</label><br />
                        <input type="text" name="partnerid" className='w-full px-4 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline' /> <br />
                    </div>

                    <div className="mb-6 ">
                        <label className='mb-2 text-lg font-bold text-gray-700 '>Client Name</label><br />
                        <input type="text" name="ClientName" className='w-full px-4 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline' /> <br />
                    </div>

                    <div className="mb-6 ">
                        <label className='mb-2 text-lg font-bold text-gray-700 '>Email</label><br />
                        <input type="text" name="Email" className='w-full px-4 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline' /> <br />
                    </div>

                    <div className="mb-6 ">
                        <label className='mb-2 text-lg font-bold text-gray-700 '>Country</label><br />
                        <input type="text" name="Country" className='w-full px-4 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline' /> <br />
                    </div>

                    <div className="mb-6 ">
                        <label className='mb-2 text-lg font-bold text-gray-700 '>Module Features</label><br />
                        <textarea name="module_features" className='w-full h-32 px-4 py-2 leading-tight text-gray-700 border rounded shadow appearance-none resize-y focus:outline-none focus:shadow-outline'></textarea> <br />
                    </div>

                    <br />
                    <div className='mb-5 '>
                        <button id='submit' type='submit' className='max-w-xl px-8 py-2 text-white bg-blue-900 rounded-full float-end hover:bg-blue-1000'>SUBMIT</button>
                    </div>
                </form>
            </div>
            <div className='mt-4 '>

            </div>
        </div>
    );
};

export default ClientRegistration;