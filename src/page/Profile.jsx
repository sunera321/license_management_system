import React from 'react';
import { Link } from 'react-router-dom';

const Profile = () => {
  const generateKey = () => {
    // Generate your key here
    const key = "YOUR_GENERATED_KEY";
    //hash
    // Navigate to SendKey page with key as parameter
    window.location.href = `/sendkey/${key}`;
  };
  
  return (
    <div>
      <button onClick={generateKey}>Generate Key</button>
    </div>
  );
}

export default Profile;
