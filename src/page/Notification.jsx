import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import axios from 'axios';
import PageHeader from '../components/CommonModal/pageHeader';
const Notification = () => {
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

  const handleCloseNotification = (index) => {
    const updatedNotifications = [...notifications];
    updatedNotifications.splice(index, 1);
    setNotifications(updatedNotifications);
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
    </div>
  );
};

export default Notification;
