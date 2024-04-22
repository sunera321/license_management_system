import React, { useState } from 'react';
import PageHeader from '../components/CommonModal/pageHeader';

const ClientRegistration = () => {
    const [formData, setFormData] = useState({
        partnerid: '',
        ClientName: '',
        Email: '',
        Phone_number: '',
        Address: '',
        City: '',
        Region: '',
        Postal_Code: '',
        Country: '',
        Web_site: '',
        Industry: '',
        Selected_Modules: '',
        Additional_information: ''
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
        // Perform form submission/validation logic here
        // For example, you can check if required fields are filled and validate email format
        if (
            formData.ClientName.trim() === '' ||
            formData.Email.trim() === '' ||
            formData.Phone_number.trim() === ''
        ) {
            alert('Client Name, Email, and Phone Number are required!');
            return;
        }

        if (!validateEmail(formData.Email)) {
            alert('Please enter a valid email address!');
            return;
        }

        // If validation passes, continue with form submission logic
        console.log('Form submitted:', formData);
    };

    // Email validation function
    const validateEmail = (email) => {
        // Basic email format validation
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    };

    return (
        <div>
            <PageHeader title={"Register Client"} />

            <div className='max-w-6xl px-10 mx-auto md:px-20 lg:px-40'>
                <form className='px-5 pt-2 pb-20 bg-gray-100 rounded shadow-lg' onSubmit={handleSubmit}>
                    <div className="mb-1 flex">
                        <div className="mr-5 w-1/2">
                            <label className='mb-2 text-lg text-gray-700'>Partner ID</label><br />
                            <input
                                type="text"
                                name="partnerid"
                                className='w-full px-4 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline'
                                onChange={handleInputChange}
                                value={formData.partnerid}
                            /><br />
                        </div>
                        <div className="w-1/2">
                            <label className='mb-2 text-lg text-gray-700'>Client Name</label><br />
                            <input
                                type="text"
                                name="ClientName"
                                className='w-full px-4 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline'
                                onChange={handleInputChange}
                                value={formData.ClientName}
                                required
                            /><br />
                        </div>
                    </div>

                    <div className="mb-2 flex">
                        <div className="mr-5 w-1/2">
                            <label className='mb-2 text-lg text-gray-700'>Email</label><br />
                            <input
                                type="email"
                                name="Email"
                                className='w-full px-4 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline'
                                onChange={handleInputChange}
                                value={formData.Email}
                                required
                            /><br />
                        </div>
                        <div className="w-1/2">
                            <label className='mb-2 text-lg text-gray-700'>Phone Number</label><br />
                            <input
                                type="text"
                                name="Phone_number"
                                className='w-full px-4 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline'
                                onChange={handleInputChange}
                                value={formData.Phone_number}
                                required
                            /><br />
                        </div>
                    </div>

                    <div className="mb-5">
                        <label className='mb-2 text-lg text-gray-700'>Address</label><br />
                        <input
                            type="text"
                            name="Address"
                            className='w-full px-4 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline'
                            onChange={handleInputChange}
                            value={formData.Address}
                        /> <br />
                    </div>

                    <div className="mb-3 flex">
                        <div className="mr-5 w-1/2">
                            <label className='mb-2 text-lg text-gray-700'>City</label><br />
                            <input
                                type="text"
                                name="City"
                                className='w-full px-4 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline'
                                onChange={handleInputChange}
                                value={formData.City}
                            /><br />
                        </div>
                        <div className="w-1/2">
                            <label className='mb-2 text-lg text-gray-700'>Region</label><br />
                            <input
                                type="text"
                                name="Region"
                                className='w-full px-4 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline'
                                onChange={handleInputChange}
                                value={formData.Region}
                            /><br />
                        </div>
                    </div>

                    <div className="mb-4 flex">
                        <div className="mr-5 w-1/2">
                            <label className='mb-2 text-lg text-gray-700'>Postal Code</label><br />
                            <input
                                type="text"
                                name="Postal_Code"
                                className='w-full px-4 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline'
                                onChange={handleInputChange}
                                value={formData.Postal_Code}
                            /><br />
                        </div>
                        <div className="w-1/2">
                            <label className='mb-2 text-lg text-gray-700'>Country</label><br />
                            <input
                                type="text"
                                name="Country"
                                className='w-full px-4 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline'
                                onChange={handleInputChange}
                                value={formData.Country}
                            /><br />
                        </div>
                    </div>

                    <div className="mb-4 flex">
                        <div className="mr-5 w-1/2">
                            <label className='mb-2 text-lg text-gray-700'>Web site</label><br />
                            <input
                                type="text"
                                name="Web_site"
                                className='w-full px-4 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline'
                                onChange={handleInputChange}
                                value={formData.Web_site}
                            /><br />
                        </div>
                        <div className="w-1/2">
                            <label className='mb-2 text-lg text-gray-700'>Industry</label><br />
                            <input
                                type="text"
                                name="Industry"
                                className='w-full px-4 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline'
                                onChange={handleInputChange}
                                value={formData.Industry}
                            /><br />
                        </div>
                    </div>

                    <div className="mb-12">
                        <label className='mb-2 text-lg text-gray-700'>Selected Modules</label><br />
                        <input
                            type="text"
                            name="Selected_Modules"
                            className='w-full px-4 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline'
                            onChange={handleInputChange}
                            value={formData.Selected_Modules}
                        /> <br />
                    </div>

                    <div className="mb-13">
                        <label className='mb-2 text-lg text-gray-700'>Additional Info:</label><br />
                        <textarea
                            name="Additional_information"
                            className='w-full h-32 px-4 py-2 leading-tight text-gray-700 border rounded shadow appearance-none resize-y focus:outline-none focus:shadow-outline'
                            onChange={handleInputChange}
                            value={formData.Additional_information}
                        ></textarea> <br />
                    </div>

                    <br />
                    <div className='mb-14'>
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

export default ClientRegistration;
