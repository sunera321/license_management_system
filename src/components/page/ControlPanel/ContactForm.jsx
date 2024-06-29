import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import backgroundImage from '../../asserts/Media/background1.jpg';
import HTTPService from '../../../Service/HTTPService';
const ContactForm = ({ client, onCloseClick }) => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, subject, description, contactInfo } = e.target.elements;
    setLoading(true);
    try {
      const response = await HTTPService.post('api/ContactMail', {
        to: email.value,
        name: client.name,
        subject: subject.value,
        description: description.value,
        contactInfo: contactInfo.value
      });

      console.log('Email sent:', response.data);
      setLoading(false);
      Swal.fire({
        position: "top-center",
        icon: "success",
        title: "Form Submitted",
        showConfirmButton: false,
        timer: 1500
      });

      onCloseClick();
    } catch (error) {
      console.error('Error sending email:', error);
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-70">
      <div className="relative w-full max-w-md p-8 bg-white rounded-lg shadow-lg md:max-w-lg" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover' }}>
        <button
          className="absolute text-xl font-semibold text-gray-800 top-4 right-4 hover:text-gray-600"
          onClick={onCloseClick}
        >
          &times;
        </button>
        <h2 className="mb-6 text-2xl font-semibold text-center text-gray-800">Send E-mail from {client.name}</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
            <input
              className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              type="email"
              id="email"
              name="email"
              placeholder={client.email}
              required
            />
          </div>
          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject:</label>
            <input
              className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              type="text"
              id="subject"
              name="subject"
              required
            />
          </div>
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description:</label>
            <textarea
              className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              id="description"
              name="description"
              rows="4"
              required
            ></textarea>
          </div>
          <div>
            <label htmlFor="contactInfo" className="block text-sm font-medium text-gray-700">Contact Info:</label>
            <input
              className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              type="text"
              id="contactInfo"
              name="contactInfo"
              placeholder="Optional"
            />
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center px-5 py-2 font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-500"
            >
              {loading ? (
                <>
                  <svg className="w-4 h-4 mr-2 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
                  </svg>
                  Sending...
                </>
              ) : (
                <>
                  <svg className="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                    <path d="M10.036 8.278l9.258-7.79A1.979 1.979 0 0018 0H2A1.987 1.987 0 00.641.541l9.395 7.737zM11.241 9.817a2.113 2.113 0 01-1.255.427 2.112 2.112 0 01-1.187-.395L0 2.6V14a2 2 0 002 2h16a2 2 0 002-2V2.5l-8.759 7.317z"></path>
                  </svg>
                  Send Email
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
