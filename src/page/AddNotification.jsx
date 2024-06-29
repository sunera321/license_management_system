import React, { useState } from 'react';
import axios from 'axios';
import PageHeader from '../components/CommonModal/pageHeader';
import Swal from 'sweetalert2';

const AddNotification = () => {
  const [notificationTitle, setNotificationTitle] = useState('');
  const [notificationText, setNotificationText] = useState('');

  const handleSaveNotification = async (e) => {
    e.preventDefault(); // Prevents the default form submission

    try {
      const newNotification = {
        title: notificationTitle,
        text: notificationText,
        date: new Date().toISOString(),
      };

      //API call to save notification
      const response = await axios.post('https://localhost:7295/api/Notifications/addNotification', newNotification);
      console.log('Notification saved:', response.data);

      // Reset form fields after successful submission
      setNotificationTitle('');
      setNotificationText('');

      // Show alert message using SweetAlert2
      Swal.fire({
        icon: 'success',
        title: 'Success!',
        text: 'New notification added successfully.',
        showConfirmButton: true,
        confirmButtonText: 'OK',
      }).then((result) => {
        if (result.isConfirmed || result.dismiss === Swal.DismissReason.timer) {
          // Close the alert automatically after clicking OK or after 3 seconds
          Swal.close();
        }
      });
    } catch (error) {
      console.error('Error adding notification:', error);
      alert('Failed to add notification. Please try again.');
    }
  };

  const handleCancel = () => {
    setNotificationTitle('');
    setNotificationText('');
  };

  return (
    <div>
      <PageHeader title={"Add Notifications"} />
      <div className="container mx-auto p-4">
        
        <form onSubmit={handleSaveNotification} className="bg-white shadow-md rounded-lg p-6">
          <div className="mb-4">
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">Notification Title</label>
            <input
              id="title"
              type="text"
              value={notificationTitle}
              onChange={(e) => setNotificationTitle(e.target.value)}
              placeholder="Enter notification title"
              required
              className="w-full p-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="text" className="block text-sm font-medium text-gray-700">Notification Text</label>
            <textarea
              id="text"
              value={notificationText}
              onChange={(e) => setNotificationText(e.target.value)}
              placeholder="Enter notification text"
              rows={4}
              required
              className="w-full p-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg mr-2 focus:outline-none"
            >
              Save Notification
            </button>
            <button
              type="button"
              onClick={handleCancel}
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddNotification;
