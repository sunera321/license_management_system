import React, { useState } from 'react';
import PageHeader from '../components/CommonModal/pageHeader';
import Swal from 'sweetalert2';
import HTTPService from '../Service/HTTPService';
import { storage } from '../firebase'; // Adjust the import path
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const AddModule = () => {
  const [formData, setFormData] = useState({
    moduleName: '',
    createdData: '',
    features: '',
    moduleDescription: '',
    imagePath: '',
    cost: '' // cost field
  });

  const [image, setImage] = useState(null);
  const [uploading, setUploading] = useState(false);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
      setFormData({
        ...formData,
        imagePath: e.target.files[0].name
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.moduleName.trim() === '' || formData.createdData.trim() === '') {
      alert('Module Name and Year of completed are required!');
      return;
    }

    if (image) {
      setUploading(true);
      const storageRef = ref(storage, `images/${image.name}`);
      const uploadTask = uploadBytesResumable(storageRef, image);

      uploadTask.on(
        'state_changed',
       
        error => {
          console.error(error);
          setUploading(false);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (url) => {
            console.log('Firebase Storage URL:', url); // Log the URL to the console
            try {
              const response = await HTTPService.post('api/Module', {
                ...formData,
                imagePath: url,
                modulecost: formData.cost //  modulecost field 
              }, {
                headers: {
                  'Content-Type': 'application/json'
                }
              });
              console.log('Data submitted successfully:', response.data);
              Swal.fire({
                position: "top",
                icon: "success",
                title: "New Module Added Successfully",
                showConfirmButton: false,
                timer: 1500
              });
              setUploading(false);
              window.location.href = 'http://localhost:3000/Module'; // Redirect to modules page
            } catch (error) {
              console.error('Error submitting data:', error);
              Swal.fire({
                position: "top",
                icon: "error",
                title: "Failed to Add Module",
                text: error.response?.data || 'An error occurred while submitting the form.',
                showConfirmButton: true,
              });
              setUploading(false);
            }
          });
        }
      );
    } else {
      alert('Please select an image to upload');
    }
  };

  return (
    <div>
      <PageHeader title={"Add Module Details"} />
      <div className='max-w-6xl px-10 mx-auto md:px-20 lg:px-40'>
        <form className='px-5 pt-2 pb-20 bg-gray-200 rounded shadow-lg' onSubmit={handleSubmit}>
          <div className="mb-1 ">
            <label className='mb-2 text-lg text-gray-700'>Add Module Profile</label><br />
            <div className="relative flex items-center">
              <input
                type="file"
                accept="image/*"
                id="module_image"
                className="hidden"
                onChange={handleImageChange}
              />
              <input
                type="text"
                name="imagePath"
                placeholder="Please add 260*75 image"
                className='w-full px-4 py-2 pr-32 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline'
                onChange={handleChange}
                value={formData.imagePath}
                readOnly
              />
              <label htmlFor="module_image" className="absolute px-4 py-1 text-gray-700 transform -translate-y-1/2 bg-gray-300 border rounded cursor-pointer right-2 top-1/2 hover:bg-gray-400">Browse image</label>
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

          <div className="mb-4">
            <label className='mb-2 text-lg text-gray-700'>Cost of Module (Rs)</label><br />
            <input
              type="number"
              name="cost"
              step="0.01"
              placeholder="Enter cost in Rs"
              className='w-full px-4 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline'
              onChange={handleChange}
              value={formData.cost}
            /><br />
          </div>

          <br />
          <div className='mb-6'>
            <button
              id='submit'
              type='submit'
              className='max-w-xl px-8 py-2 text-white bg-blue-900 rounded-full float-end hover:bg-blue-1000'
              disabled={uploading}
            >{uploading ? 'Uploading...' : 'SUBMIT'}</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddModule;
