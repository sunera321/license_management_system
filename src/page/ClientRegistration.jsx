import React, { useState } from 'react';
import PageHeader from '../components/CommonModal/pageHeader';
import Swal from 'sweetalert2';
<<<<<<< HEAD
=======

>>>>>>> 19395d82e9b6e7af835329b3d01a383324b4b8cf
import { ChevronDownIcon } from '@heroicons/react/solid';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import HTTPService from '../Service/HTTPService';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';






const ClientRegistration = () => {
    const initialFormData = {
        partnerId: '',
        name: '',
        email: '',
        phoneNumber: '',
        city: '',
        region: '',
        postalCode: '',
        country: '',
        website: '',
        industry: '',
        additionalInfo: ''
    };

    const [formData, setFormData] = useState(initialFormData);
    const [cityPlaceholder, setCityPlaceholder] = useState('City');
    const [regionPlaceholder, setRegionPlaceholder] = useState('Region');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleCountryChange = (val) => {
        setFormData({
            ...formData,
            country: val
        });
        setCityPlaceholder(`City in ${val}`);
        setRegionPlaceholder(`Region in ${val}`);
    };

    const handleRegionChange = (val) => {
        setFormData({
            ...formData,
            region: val
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (
            formData.name === '' ||
            formData.email === '' ||
            formData.phoneNumber === ''
        ) {
            alert('Partner ID,Client Name, Email, and Phone Number are required!');
            return;
        }


        try{
            const response = await HTTPService.post('api/EndClient/addEndClient', formData, {
              headers: {
                'Content-Type': 'application/json'
              }

            });
            console.log('Data submitted successfully:', response.data);
            Swal.fire({
                position: "center",
                icon: "success",
                title: "New Client Added Successfully",
                showConfirmButton: false,
                timer: 1500
            });
            setFormData(initialFormData); // Clear the form after submission
            window.location.href = 'http://localhost:3000/addclient';
        } catch (error) {
            console.error('Error submitting data:', error);
        }
    };

    return (
        <div>
            <PageHeader title={"Register Client"} />

            <div className='max-w-6xl px-10 mx-auto md:px-20 lg:px-40'>
                <form className='px-5 pt-2 pb-20 bg-gray-200 rounded shadow-lg' onSubmit={handleSubmit}>
                    <div className="flex mb-4">
                        <div className="w-1/2 mr-5">
                            <label className='mb-2 text-lg text-gray-700'>Partner ID <span className="text-red-600">*</span></label><br />
                            <input
                                type="text"
                                name="partnerId"
                                className='w-full px-4 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline'
                                onChange={handleInputChange}
                                value={formData.partnerId}
                                required
                            /><br />
                        </div>
                        <div className="w-1/2">
                            <label className='mb-2 text-lg text-gray-700'>Client Name <span className="text-red-600">*</span></label><br />
                            <input
                                type="text"
                                name="name"
                                className='w-full px-4 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline'
                                onChange={handleInputChange}
                                value={formData.name}
                                required
                            /><br />
                        </div>
                    </div>

                    <div className="flex mb-4">
                        <div className="w-1/2 mr-5">
                            <label className='mb-2 text-lg text-gray-700'>Email <span className="text-red-600">*</span></label><br />
                            <input
                                type="email"
                                name="email"
                                className='w-full px-4 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline'
                                onChange={handleInputChange}
                                value={formData.email}
                                placeholder=" example@example.com"
                                required
                            /><br />
                        </div>
                        <div className="relative w-1/2">
                            <label className='mb-2 text-lg text-gray-700'>Country</label><br />
                            <div className="relative flex items-center">
                                <CountryDropdown
                                    value={formData.country}
                                    onChange={handleCountryChange}
                                    className='w-full px-4 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline'
                                    required
                                />
                                <ChevronDownIcon className="absolute w-5 h-5 text-gray-500 transform -translate-y-1/2 pointer-events-none right-3 top-1/2" />
                            </div>
                        </div>
                    </div>

                    <div className="flex mb-4">
                        <div className="w-1/2 mr-5">
                            <label className='mb-2 text-lg text-gray-700'>Phone Number <span className="text-red-600">*</span></label><br />
                            <PhoneInput
                                country={formData.country.toLowerCase()}
                                value={formData.phoneNumber}
                                onChange={phone => setFormData({ ...formData, phoneNumber: phone })}
                                inputClass='w-full px-4 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline'
                                specialLabel=''
                                required
                            /><br />
                        </div>
                        <div className="relative w-1/2">
                            <label className='mb-2 text-lg text-gray-700'>Region</label><br />
                            <div className="relative flex items-center">
                                <RegionDropdown
                                    country={formData.country}
                                    value={formData.region}
                                    onChange={handleRegionChange}
                                    className='w-full px-4 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline'
                                    placeholder={regionPlaceholder}
                                    required
                                />
                                <ChevronDownIcon className="absolute w-5 h-5 text-gray-500 transform -translate-y-1/2 pointer-events-none right-3 top-1/2" />
                            </div>
                        </div>
                    </div>

                    <div className="flex mb-4">
                        <div className="w-1/2 mr-5">
                            <label className='mb-2 text-lg text-gray-700'>City</label><br />
                            <input
                                type="text"
                                name="city"
                                placeholder={cityPlaceholder}
                                className='w-full px-4 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline'
                                onChange={handleInputChange}
                                value={formData.city}
                            /><br />
                        </div>
                        <div className="w-1/2">
                            <label className='mb-2 text-lg text-gray-700'>Postal Code</label><br />
                            <input
                                type="text"
                                name="postalCode"
                                className='w-full px-4 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline'
                                onChange={handleInputChange}
                                value={formData.postalCode}
                            /><br />
                        </div>
                    </div>

                    <div className="flex mb-4">
                        <div className="w-1/2 mr-5">
                            <label className='mb-2 text-lg text-gray-700'>Website</label><br />
                            <input
                                type="text"
                                name="website"
                                className='w-full px-4 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline'
                                onChange={handleInputChange}
                                value={formData.website}
                                placeholder="https://example.com"
                            /><br />
                        </div>
                        <div className="w-1/2">
                            <label className='mb-2 text-lg text-gray-700'>Industry</label><br />
                            <input
                                type="text"
                                name="industry"
                                className='w-full px-4 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline'
                                onChange={handleInputChange}
                                value={formData.industry}
                            /><br />
                        </div>
                    </div>

                    <div className="mb-13">
                        <label className='mb-2 text-lg text-gray-700'>Additional Info:</label><br />
                        <textarea
                            name="additionalInfo"
                            className='w-full h-32 px-4 py-2 leading-tight text-gray-700 border rounded shadow appearance-none resize-y focus:outline-none focus:shadow-outline'
                            onChange={handleInputChange}
                            value={formData.additionalInfo}
                        ></textarea><br />
                    </div>

                    <div className='mt-10 mb-4 text-right'>
                        <button
                            id='submit'
                            type='submit'
                            className='px-8 py-2 text-white bg-blue-900 rounded-full hover:bg-blue-800 focus:outline-none focus:shadow-outline'
                        >SUBMIT</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ClientRegistration;