import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import axiosInstance from '../components/axiosInstance';
import axios from 'axios';

function Contact_Us() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        message: ''
    });

    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});
     const [showSuccess, setShowSuccess] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        if (errors[name]) {
            setErrors({ ...errors, [name]: '' });
        }
    };

    const validateEmailFormat = (email) => {
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return emailPattern.test(email);
    };

    const validateEmailWithAPI = async (email) => {
        try {
            const response = await axios.get(`https://api.hunter.io/v2/email-verifier?email=${email}&api_key=8fcc8f81d2ed65d9021a1220d5cf1d97db5cffb6`);
            return response.data.data.result === 'deliverable';
        } catch (error) {
            console.error('Error validating email:', error);
            return false;
        }
    };

    const validatePhoneNumber = (phoneNumber) => {
        const phonePattern = /^\+?(\d[\d-. ]+)?(\([\d-. ]+\))?[\d-. ]+\d$/;
        return phonePattern.test(phoneNumber);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { firstName, lastName, email, phoneNumber, message } = formData;
        let formIsValid = true;
        let errors = {};

        if (!firstName.trim()) {
            formIsValid = false;
            errors.firstName = 'First name is required';
        }
        if (!lastName.trim()) {
            formIsValid = false;
            errors.lastName = 'Last name is required';
        }
        if (!email.trim()) {
            formIsValid = false;
            errors.email = 'Email is required';
        } else if (!validateEmailFormat(email)) {
            formIsValid = false;
            errors.email = 'Please enter a valid email address';
        } else if (!await validateEmailWithAPI(email)) {
            formIsValid = false;
            errors.email = 'Email address is not deliverable';
        }
        if (!phoneNumber.trim()) {
            formIsValid = false;
            errors.phoneNumber = 'Phone number is required';
        } else if (!validatePhoneNumber(phoneNumber)) {
            formIsValid = false;
            errors.phoneNumber = 'Please enter a valid phone number';
        }
        if (!message.trim()) {
            formIsValid = false;
            errors.message = 'Message is required';
        }

        if (!formIsValid) {
            setErrors(errors);
            return;
        }

        setLoading(true);

        try {
            await axiosInstance.post('https://localhost:7295/api/ContactUs', formData);
            setShowSuccess(true);
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                phoneNumber: '',
                message: ''
            });
        } catch (error) {
            alert('There was an error sending the email.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <section className="p-6 text-gray-700 body-font">
                <h1 className="mb-3 text-3xl font-bold text-center text-black">Contact Us</h1>
                <p className="text-lg text-center">Any question or remarks? Just write us a message!</p>
                <div className="container flex px-5 py-10 mx-auto">
                    <div className="w-1/2 p-8 bg-black rounded-l-lg max-w-3/4 text-slate-700">
                        <h2 className="mb-4 text-2xl font-semibold text-white">Contact Information</h2>
                        <p className="mb-12 text-lg">Say something to start a chat!</p>
                        <div className="flex items-center mb-8 text-white">
                            <FaPhone className="mr-2" />
                            <span>+94112824814</span>
                        </div>
                        <div className="flex items-center mb-8 text-white">
                            <FaEnvelope className="mr-2" />
                            <span>example@example.com</span>
                        </div>
                        <div className="flex items-center text-white">
                            <FaMapMarkerAlt className="mr-2" />
                            <span>
                                No.356, Denzil Kobbekaduwa Road,
                                <br />
                                Battaramulla,
                                <br />
                                Sri Lanka
                            </span>
                        </div>
                    </div>
                    <div className="p-8 mx-auto rounded-r-lg lg:w-1/2 md:w-2/3 bg-slate-200">
                        <form onSubmit={handleSubmit} className="flex flex-wrap -m-2">
                            <div className="w-1/2 p-2">
                                <input
                                    type="text"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    placeholder="Your first name"
                                    className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-100 border border-gray-300 rounded outline-none focus:border-indigo-500"
                                    required
                                />
                                {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
                            </div>
                            <div className="w-1/2 p-2">
                                <input
                                    type="text"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    placeholder="Your last name"
                                    className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-100 border border-gray-300 rounded outline-none focus:border-indigo-500"
                                    required
                                />
                                {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
                            </div>
                            <div className="w-1/2 p-2">
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Your email address"
                                    className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-100 border border-gray-300 rounded outline-none focus:border-indigo-500"
                                    required
                                />
                                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                            </div>
                            <div className="w-1/2 p-2">
                                <input
                                    type="tel"
                                    name="phoneNumber"
                                    value={formData.phoneNumber}
                                    onChange={handleChange}
                                    placeholder="Your phone number"
                                    className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-100 border border-gray-300 rounded outline-none focus:border-indigo-500"
                                    required
                                />
                                {errors.phoneNumber && <p className="text-red-500 text-sm">{errors.phoneNumber}</p>}
                            </div>
                            <div className="w-full p-2">
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Your message"
                                    className="w-full h-32 px-3 py-1 text-base leading-6 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-100 border border-gray-300 rounded outline-none resize-none focus:border-indigo-500"
                                    required
                                ></textarea>
                                {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
                            </div>
                            <div className="flex justify-end w-full p-2">
                                <button
                                    type="submit"
                                    className="px-8 py-2 text-lg text-white bg-black border-0 rounded focus:outline-none hover:bg-indigo-600"
                                    disabled={loading}
                                >
                                    {loading ? 'Sending...' : 'Send message'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
            {showSuccess && (
    <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
        <div className="bg-white p-8 rounded-lg max-w-md text-center">
            <svg className="text-green-500 w-12 h-12 mb-4 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <h2 className="text-4xl font-semibold mb-2">Thank you!</h2>
            <p className="text-lg text-gray-800">We have received your message and will reach out to you shortly.</p>
            <button
                onClick={() => setShowSuccess(false)}
                className="mt-4 px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none"
            >
                Close
            </button>
        </div>
    </div>
)}

        </div>
    );
}

export default Contact_Us;
