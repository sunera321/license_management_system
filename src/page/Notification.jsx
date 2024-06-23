import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import axios from 'axios';
import PageHeader from '../components/CommonModal/pageHeader';

const Notification = () => {
  const [showAddNotification, setShowAddNotification] = useState(false);
  const [notificationTitle, setNotificationTitle] = useState('');
  const [notificationText, setNotificationText] = useState('');
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    fetchNotifications();
  }, []);

  const fetchNotifications = () => {
    axios.get('https://localhost:7295/api/Notifications/getAllNotifications')
      .then(response => {
        const newNotifications = response.data.reverse();
        // Display alert if there are new notifications
        if (newNotifications.length > 0) {
          const newNotification = newNotifications[0];
          Swal.fire({
            position: 'center',
            icon: 'info',
            title: 'New Notification',
            text: `${newNotification.title}: ${newNotification.text}\nAdded on: ${new Date(newNotification.date).toLocaleString()}`,
            showConfirmButton: true,
          });
        }
        setNotifications(newNotifications);
      })
      .catch(error => {
        console.error('There was an error fetching the notifications!', error);
      });
  };

  const handleAddNotificationClick = () => {
    setShowAddNotification(true);
  };

  const handleNotificationTitleChange = (e) => {
    setNotificationTitle(e.target.value);
  };

  const handleNotificationTextChange = (e) => {
    setNotificationText(e.target.value);
  };

  const handleSaveNotification = () => {
    if (notificationTitle.trim() === '' || notificationText.trim() === '') {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Notification title and text cannot be empty!',
      });
      return;
    }

    const newNotification = {
      title: notificationTitle,
      text: notificationText,
      date: new Date().toISOString(), // Add current date
    };

    axios.post('https://localhost:7295/api/Notifications/addNotification', newNotification)
      .then(response => {
        // Update notifications state with the new notification at the beginning
        setNotifications([response.data, ...notifications]);

        // Clear input fields and reset state
        setNotificationTitle('');
        setNotificationText('');
        setShowAddNotification(false);

        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Notification added successfully',
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch(error => {
        console.error('There was an error adding the notification!', error);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong! Please try again.',
        });
      });
  };

  const handleCloseNotification = (index) => {
    const updatedNotifications = [...notifications];
    updatedNotifications.splice(index, 1);
    setNotifications(updatedNotifications);
  };

  const handleCancelAddNotification = () => {
    setShowAddNotification(false);
    setNotificationTitle('');
    setNotificationText('');
  };

  return (
    <div className="container mx-auto p-4">
      <PageHeader title={"Notifications"} />
      <div className="mb-4">
        {notifications.length === 0 && <p className="text-gray-600">No notifications added yet.</p>}
        {notifications.map((notification, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-4 mb-4 relative">
            <button className="absolute top-0 right-0 mt-1 mr-2 text-gray-600" onClick={() => handleCloseNotification(index)}>×</button>
            <h3 className="text-xl font-semibold text-blue-700">{notification.title}</h3>
            <p className="text-gray-700">{notification.text}</p>
            <p className="text-gray-500 text-sm">Added on: {new Date(notification.date).toLocaleString()}</p>
          </div>
        ))}
      </div>

      {showAddNotification && (
        <div className="mt-4 max-w-md mx-auto bg-white shadow-md rounded-lg p-4">
          <input
            type="text"
            value={notificationTitle}
            onChange={handleNotificationTitleChange}
            className="w-full p-2 border rounded mb-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter notification title..."
          />
          <textarea
            value={notificationText}
            onChange={handleNotificationTextChange}
            className="w-full p-2 border rounded mb-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter notification text..."
            rows="4"
          />
          <div className="flex justify-end space-x-4">
            <button
              onClick={handleSaveNotification}
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none"
            >
              Save Notification
            </button>
            <button
              onClick={handleCancelAddNotification}
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
      {!showAddNotification && (
        <div className="flex justify-end">
          <button
            onClick={handleAddNotificationClick}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none"
          >
            Add Notification
          </button>
        </div>
      )}
    </div>
  );
};

export default Notification;
