import React from 'react';
import microsoftLogo from '../../../../Images/Loging_asserts/media/microsoft.jpg'; 

const MicrosoftSignInButton = () => {
  const handleMicrosoftSignIn = () => {
    // Simulated sign-in logic (Replace this with actual Microsoft authentication logic)
    // For demonstration, here's a simulated async operation (e.g., API call) that simulates authentication
    simulateSignIn().then(() => {
      // On successful sign-in, perform actions like redirecting to a dashboard or updating the UI
      console.log('User signed in with Microsoft.');
    }).catch((error) => {
      console.error('Sign-in failed:', error);
    });
  };

  const simulateSignIn = () => {
    // Simulated async operation (e.g., API call) that returns a promise
    return new Promise((resolve, reject) => {
      // Simulating an API call with a timeout
      setTimeout(() => {
        // Resolve after 2 seconds (simulating successful sign-in)
        resolve();
      }, 2000);
    });
  };

  return (
    <div className="flex items-center justify-center mt-10 microsoft-sign-in-container">
      <div className="flex items-center logo-and-button">
        <img src={microsoftLogo} alt="Microsoft Logo" className="w-10 h-10 mr-4 microsoft-logo" />
        <button className="px-4 py-2 text-black bg-gray-100 rounded-lg btn hover:bg-gray-300 hover:text-gray-800" onClick={handleMicrosoftSignIn}>
  Sign in with Microsoft
</button>

         
      </div>
    </div>
  );
};

export default MicrosoftSignInButton;
