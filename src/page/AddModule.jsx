import React, { useState } from 'react';
import PageHeader from '../components/CommonModal/pageHeader';
import Swal from 'sweetalert2';
import axios from 'axios';

const AddModule = () => {
   const [formData, setFormData] = useState({
    modulename: '',
    createdData: '',
    features: '',
    moduleDescription: '',
    imagePath: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

    const handleSubmit = async (e) => {
        e.preventDefault();
      
        try {
            const response = await axios.post('https://localhost:7295/api/Module', formData, {
              headers: {
                'Content-Type': 'application/json'
              }
            });
            console.log('Data submitted successfully:', response.data);
            Swal.fire({

                position: "top-center",
                icon: "success",
                title: "New Module Add Successfully",
                showConfirmButton: false,
                timer: 1500
        
              })
          } catch (error) {
            console.error('Error submitting data:', error);
          }
        
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
                       
                                value={formData.moduleImage}
                            />
                            <label htmlFor="module_image" className="absolute top-7.5 right-0 px-2 py-1 bg-gray-300 text-gray-700 border rounded cursor-pointer hover:bg-gray-400">Browse image</label>
                        </div>
                    </div>

                    <div className="flex mb-3">
                        <div className="w-1/2 mr-5">
                            <label className='mb-2 text-lg text-gray-700'>Module Name</label><br />
                            <input
                                type="text"
                                name="moduleName"
                                className='w-full px-4 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline'
                                onChange={handleChange}
                                value={formData.moduleName}
                                required
                            /><br />
                        </div>
                        <div className="w-1/2">
                            <label className='mb-2 text-lg text-gray-700'>Year of completed</label><br />
                            <input
                                type="date"
                                name="createdData"
                                className='w-full px-4 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline'
                                onChange={handleChange}
                                value={formData.createdData}
                                required
                            /><br />
                        </div>
                    </div>

                  
                    <div className="mb-4">
                        <label className='mb-2 text-lg text-gray-700'>Module Description</label><br />
                        <textarea
                            name="moduleDescription"
                            className='w-full h-32 px-4 py-2 leading-tight text-gray-700 border rounded shadow appearance-none resize-y focus:outline-none focus:shadow-outline'
                            onChange={handleChange}
                            value={formData.moduleDescription}
                        ></textarea> <br />
                    </div>

                    <div className="mb-5">
                        <label className='mb-2 text-lg text-gray-700'>Module Features</label><br />
                        <textarea
                            name="features"
                            className='w-full h-32 px-4 py-2 leading-tight text-gray-700 border rounded shadow appearance-none resize-y focus:outline-none focus:shadow-outline'
                            onChange={handleChange}
                            value={formData.features}
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
