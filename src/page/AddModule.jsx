import React from 'react';

const AddModule = () => {
    return (
        <div>
            <h1 className='my-8 mt-10 mb-8 font-serif text-3xl font-bold text-center text-black md:text-4xl lg:text-4xl fill-gray-400'>Add Module Details</h1>

            <div className='max-w-6xl px-10 mx-auto md:px-20 lg:px-40'>
                <form className='px-5 pt-2 pb-20 bg-gray-100 rounded shadow-lg '>
                    <div className="relative mb-6">
                        <label className='mb-2 text-lg font-bold text-gray-700'>Add Module Profile</label><br />
                        <div className="flex items-center">
                            <input type="file" accept="image/*" id="module_image" className="hidden" />
                            <input type="text" name="description" placeholder="Please add 260*75 image" className='w-full px-4 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline' />
                            <label htmlFor="module_image" className="absolute top-7.5 right-0 px-2 py-1 bg-gray-300 text-gray-700 border rounded cursor-pointer hover:bg-gray-400">Browse image</label>
                        </div>
                    </div>

                    <div className="mb-6 ">
                        <label className='mb-2 text-lg font-bold text-gray-700 '>Module Name</label><br />
                        <input type="text" name="ModuleName" className='w-full px-4 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline' /> <br />
                    </div>

                    {/* New Text Areas */}
                    <div className="mb-6 ">
                        <label className='mb-2 text-lg font-bold text-gray-700 '>Module Description</label><br />
                        <textarea name="module_description" className='w-full h-32 px-4 py-2 leading-tight text-gray-700 border rounded shadow appearance-none resize-y focus:outline-none focus:shadow-outline'></textarea> <br />
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

export default AddModule;