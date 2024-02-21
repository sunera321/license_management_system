import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';


function Contact_Us() {
    return (
        <div>
            <section className="relative p-16 text-gray-700  body-font mt-">
                <h1 className="mb-8 text-3xl font-bold text-center text-black">Contact Us</h1>
                <p className="mb-8 text-lg text-center">Any question or remarks? Just write us a message!</p>
                <div className="container flex px-5 py-24 mx-auto">
                    {/* Left Section */}
                    <div className="w-1/2 p-8 bg-black rounded-l-lg max-w-3/4 text-slate-700">
                        <h2 className="mb-4 text-2xl font-semibold text-white ">Contact Information</h2>
                        <p className='mb-12 text-lg '>Say something to start a live chat!</p>
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


                    {/* Right Section */}
                    <div className="p-8 mx-auto rounded-r-lg lg:w-1/2 md:w-2/3 bg-slate-200">

                        <div className="flex flex-wrap -m-2">
                            <div className="w-1/2 p-2">
                                <div className="relative">
                                    <label htmlFor="firstName" className="text-sm leading-7 text-gray-600">
                                        First Name
                                    </label>
                                    <input
                                        type="text"
                                        id="firstName"
                                        name="firstName"
                                        placeholder="Your first name"
                                        className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-100 border border-gray-300 rounded outline-none focus:border-indigo-500"
                                    />
                                </div>
                            </div>
                            <div className="w-1/2 p-2">
                                <div className="relative">
                                    <label htmlFor="lastName" className="text-sm leading-7 text-gray-600">
                                        Last Name
                                    </label>
                                    <input
                                        type="text"
                                        id="lastName"
                                        name="lastName"
                                        placeholder="Your last name"
                                        className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-100 border border-gray-300 rounded outline-none focus:border-indigo-500"
                                    />
                                </div>
                            </div>
                            <div className="w-1/2 p-2">
                                <div className="relative">
                                    <label htmlFor="email" className="text-sm leading-7 text-gray-600">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="Your email address"
                                        className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-100 border border-gray-300 rounded outline-none focus:border-indigo-500"
                                    />
                                </div>
                            </div>
                            <div className="w-1/2 p-2">
                                <div className="relative">
                                    <label htmlFor="phoneNumber" className="text-sm leading-7 text-gray-600">
                                        Phone Number
                                    </label>
                                    <input
                                        type="tel"
                                        id="phoneNumber"
                                        name="phoneNumber"
                                        placeholder="Your phone number"
                                        className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-100 border border-gray-300 rounded outline-none focus:border-indigo-500"
                                    />
                                </div>
                            </div>
                            <div className="w-full p-2">
                                <div className="relative">

                                    <label htmlFor="message" className="text-sm leading-7 text-gray-600">

                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        placeholder="Your message"
                                        className="w-full h-32 px-3 py-1 text-base leading-6 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-100 border border-gray-300 rounded outline-none resize-none focus:border-indigo-500"
                                    ></textarea>
                                </div>
                            </div>
                            <div className="flex justify-end w-full p-2">
                                <button className="px-8 py-2 text-lg text-white bg-black border-0 rounded focus:outline-none hover:bg-indigo-600">
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