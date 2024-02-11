import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

function Contact_Us() {
    return (
        <div>
            <section className="text-gray-700 body-font relative p-16 mt-">
                <h1 className="text-3xl font-bold text-center mb-8 text-black">Contact Us</h1>
                <p className="text-lg text-center mb-8">Any question or remarks? Just write us a message!</p>
                <div className="container px-5 py-24 mx-auto flex">
                    {/* Left Section */}
                    <div className="w-1/2 max-w-3/4 bg-black text-slate-700 p-8 rounded-l-lg">
                        <h2 className="text-2xl font-semibold mb-4 text-white ">Contact Information</h2>
                        <p className='text-lg mb-12 '>Say something to start a live chat!</p>
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
                            <span>No.356, Denzil Kobbekaduwa Road,<br/>
Battaramulla,<br/>
 Sri Lanka</span>
                        </div>
                    </div>

                    <div className="lg:w-1/2 md:w-2/3 mx-auto p-8 bg-slate-200 rounded-r-lg">
                        <div className="flex flex-wrap -m-2">
                            <div className="p-2 w-1/2">
                                <div className="relative">
                                    <label htmlFor="firstName" className="leading-7 text-sm text-gray-600">
                                        First Name
                                    </label>
                                    <input
                                        type="text"
                                        id="firstName"
                                        name="firstName"
                                        placeholder="Your first name"
                                        className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                    />
                                </div>
                            </div>
                            <div className="p-2 w-1/2">
                                <div className="relative">
                                    <label htmlFor="lastName" className="leading-7 text-sm text-gray-600">
                                        Last Name
                                    </label>
                                    <input
                                        type="text"
                                        id="lastName"
                                        name="lastName"
                                        placeholder="Your last name"
                                        className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                    />
                                </div>
                            </div>
                            <div className="p-2 w-1/2">
                                <div className="relative">
                                    <label htmlFor="email" className="leading-7 text-sm text-gray-600">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="Your email address"
                                        className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                    />
                                </div>
                            </div>
                            <div className="p-2 w-1/2">
                                <div className="relative">
                                    <label htmlFor="phoneNumber" className="leading-7 text-sm text-gray-600">
                                        Phone Number
                                    </label>
                                    <input
                                        type="tel"
                                        id="phoneNumber"
                                        name="phoneNumber"
                                        placeholder="Your phone number"
                                        className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                    />
                                </div>
                            </div>
                            <div className="p-2 w-full">
                                <div className="relative">
                                 -+
                                    <label htmlFor="message" className="leading-7 text-sm text-gray-600">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        placeholder="Your message"
                                        className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                                    ></textarea>
                                </div>
                            </div>
                            <div className="p-2 w-full flex justify-end">
                                <button className="text-white bg-black border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                                    Send message
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Contact_Us;