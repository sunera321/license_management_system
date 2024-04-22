import React, { useState } from 'react';
import PageHeader from '../components/CommonModal/pageHeader';

const AddModule = () => {
    const [formData, setFormData] = useState({
        moduleImage: '',
        moduleName: '',
        yearCompleted: '',
        moduleDescription: '',
        moduleFeatures: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.moduleName.trim() === '' || formData.yearCompleted.trim() === '') {
            alert('Module Name and Year of completed are required!');
            return;
        }
      
        console.log('Form submitted:', formData);
    };

    return (
        <div>
            <PageHeader title={"Add Module Details"}/>
            <div className='max-w-6xl px-10 mx-auto md:px-20 lg:px-40'>
                <form className='px-5 pt-2 pb-20 bg-gray-200 rounded shadow-lg' onSubmit={handleSubmit}>
                    <div className="relative mb-1">
                        <label className='mb-2 text-lg text-gray-700'>Add Module Profile</label><br />
                        <div className="flex items-center">
                            <input type="file" accept="image/*" id="module_image" className="hidden" />
                            <input
                                type="text"
                                name="moduleImage"
                                placeholder="Please add 260*75 image"
                                className='w-full px-4 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline'
                                onChange={handleInputChange}
                                value={formData.moduleImage}
                            />
                            <label htmlFor="module_image" className="absolute top-7.5 right-0 px-2 py-1 bg-gray-300 text-gray-700 border rounded cursor-pointer hover:bg-gray-400">Browse image</label>
                        </div>
                    </div>

                    <div className="mb-3 flex">
                        <div className="mr-5 w-1/2">
                            <label className='mb-2 text-lg text-gray-700'>Module Name</label><br />
                            <input
                                type="text"
                                name="moduleName"
                                className='w-full px-4 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline'
                                onChange={handleInputChange}
                                value={formData.moduleName}
                                required
                            /><br />
                        </div>
                        <div className="w-1/2">
                            <label className='mb-2 text-lg text-gray-700'>Year of completed</label><br />
                            <input
                                type="text"
                                name="yearCompleted"
                                className='w-full px-4 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline'
                                onChange={handleInputChange}
                                value={formData.yearCompleted}
                                required
                            /><br />
                        </div>
                    </div>

                  
                    <div className="mb-4">
                        <label className='mb-2 text-lg text-gray-700'>Module Description</label><br />
                        <textarea
                            name="moduleDescription"
                            className='w-full h-32 px-4 py-2 leading-tight text-gray-700 border rounded shadow appearance-none resize-y focus:outline-none focus:shadow-outline'
                            onChange={handleInputChange}
                            value={formData.moduleDescription}
                        ></textarea> <br />
                    </div>

                    <div className="mb-5">
                        <label className='mb-2 text-lg text-gray-700'>Module Features</label><br />
                        <textarea
                            name="moduleFeatures"
                            className='w-full h-32 px-4 py-2 leading-tight text-gray-700 border rounded shadow appearance-none resize-y focus:outline-none focus:shadow-outline'
                            onChange={handleInputChange}
                            value={formData.moduleFeatures}
                        ></textarea> <br />
                    </div>

                    <br />
                    <div className='mb-6'>
                        <button
                            id='submit'
                            type='submit'
                            className='max-w-xl px-8 py-2 text-white bg-blue-900 rounded-full float-end hover:bg-blue-1000'
                        >SUBMIT</button>
                    </div>
                </form>
            </div>
            <div className='mt-4'>

            </div>
        </div>
    );
};

export default AddModule;
