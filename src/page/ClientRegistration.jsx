import React, { useState } from 'react';
import PageHeader from '../components/CommonModal/pageHeader';
import axios from 'axios';
import Swal from 'sweetalert2';
import { countries } from 'countries-list';
import { ChevronDownIcon } from '@heroicons/react/solid'; // Import ChevronDownIcon from Heroicons

const countryData = Object.values(countries);

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

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (
            formData.name === '' ||
            formData.email === '' ||
            formData.phoneNumber === ''
        ) {
            alert('Client Name, Email, and Phone Number are required!');
            return;
        }

        try {
            const response = await axios.post('https://localhost:7295/api/EndClient/addEndClient', formData, {
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
                            <label className='mb-2 text-lg text-gray-700'>Partner ID</label><br />
                            <input
                                type="text"
                                name="partnerId"
                                className='w-full px-4 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline'
                                onChange={handleInputChange}
                                value={formData.partnerId}
                            /><br />
                        </div>
                        <div className="w-1/2">
                            <label className='mb-2 text-lg text-gray-700'>Client Name</label><br />
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
                            <label className='mb-2 text-lg text-gray-700'>Email</label><br />
                            <input
                                type="email"
                                name="email"
                                className='w-full px-4 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline'
                                onChange={handleInputChange}
                                value={formData.email}
                                required
                            /><br />
                        </div>
                        <div className="relative w-1/2">
                            <label className='mb-2 text-lg text-gray-700'>Country</label><br />
                            <div className="flex items-center relative">
                                <select
                                    name="country"
                                    className='w-full px-4 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline'
                                    onChange={handleInputChange}
                                    value={formData.country}
                                    required
                                >
                                    <option value="">Select Country</option>
                                    {countryData.map((country, index) => (
                                        <option key={index} value={country.name}>{country.name}</option>
                                    ))}
                                </select>
                                <ChevronDownIcon className="h-5 w-5 text-gray-500 absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none" />
                            </div>
                        </div>
                    </div>

                    <div className="flex mb-4">
                        <div className="w-1/2 mr-5">
                            <label className='mb-2 text-lg text-gray-700'>Phone Number</label><br />
                            <input
                                type="text"
                                name="phoneNumber"
                                className='w-full px-4 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline'
                                onChange={handleInputChange}
                                value={formData.phoneNumber}
                                required
                            /><br />
                        </div>
                        <div className="w-1/2">
                            <label className='mb-2 text-lg text-gray-700'>City</label><br />
                            <input
                                type="text"
                                name="city"
                                className='w-full px-4 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline'
                                onChange={handleInputChange}
                                value={formData.city}
                            /><br />
                        </div>
                    </div>

                    <div className="flex mb-4">
                        <div className="w-1/2 mr-5">
                            <label className='mb-2 text-lg text-gray-700'>Region</label><br />
                            <input
                                type="text"
                                name="region"
                                className='w-full px-4 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline'
                                onChange={handleInputChange}
                                value={formData.region}
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

                    <div className='text-right mb-4'>
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
