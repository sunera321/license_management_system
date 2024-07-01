import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import axiosInstance from '../components/axiosInstance';

function Contact_Us() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        message: ''
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validateEmail = (email) => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    };

    const validatePhoneNumber = (phoneNumber) => {
        const phonePattern = /^\+?(\d[\d-. ]+)?(\([\d-. ]+\))?[\d-. ]+\d$/;
        return phonePattern.test(phoneNumber);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { firstName, lastName, email, phoneNumber, message } = formData;

        if (
            !firstName.trim() ||
            !lastName.trim() ||
            !email.trim() ||
            !phoneNumber.trim() ||
            !message.trim()
        ) {
            alert('Please fill out all required fields.');
            return;
        }

        if (!validateEmail(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        if (!validatePhoneNumber(phoneNumber)) {
            alert('Please enter a valid phone number.');
            return;
        }

        setLoading(true);

        try {
            await axiosInstance.post('https://localhost:7295/api/ContactUs', formData);
            alert('Email sent successfully!');
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
        </div>
    );
}

export default Contact_Us;
