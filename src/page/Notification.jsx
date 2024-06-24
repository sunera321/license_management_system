import React, { useState } from 'react';
import Swal from 'sweetalert2';

const Notification = () => {
  const [showAddNotification, setShowAddNotification] = useState(false);
  const [notificationTitle, setNotificationTitle] = useState('');
  const [notificationText, setNotificationText] = useState('');
  const [notifications, setNotifications] = useState([]);

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

    // Construct new notification object
    const newNotification = {
      title: notificationTitle,
      text: notificationText,
    };

    // Add new notification to the notifications list
    setNotifications([...notifications, newNotification]);

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
  };

  return (
    <div className="container mx-auto p-4">
      <div className="mb-4">
        <h2 className="text-xl font-bold mb-2">Notifications</h2>
        {notifications.length === 0 && <p>No notifications added yet.</p>}
        {notifications.map((notification, index) => (
          <div key={index} className="bg-gray-200 p-2 rounded mb-2">
            <h3 className="text-lg font-semibold">{notification.title}</h3>
            <p>{notification.text}</p>
          </div>
        ))}
      </div>

      {showAddNotification && (
        <div className="mt-4 max-w-md mx-auto">
          <input
            type="text"
            value={notificationTitle}
            onChange={handleNotificationTitleChange}
            className="w-full p-2 border rounded mb-2"
            placeholder="Enter notification title..."
          />
          <textarea
            value={notificationText}
            onChange={handleNotificationTextChange}
            className="w-full p-2 border rounded"
            placeholder="Enter notification text..."
            rows="4"
          />
          <div className="flex justify-end mt-2">
            <button
              onClick={handleSaveNotification}
              className="bg-green-400 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg"
            >
              Save Notification
            </button>
          </div>
        </div>
      )}
      {!showAddNotification && (
        <div className="flex justify-end">
          <button
            onClick={handleAddNotificationClick}
            className="bg-blue-500 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded-lg"
          >
            Add Notification
          </button>
        </div>
      )}
    </div>
  );
};

export default Notification;
