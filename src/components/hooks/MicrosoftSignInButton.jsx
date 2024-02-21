import React from 'react';
import microsoftLogo from '../asserts/Media/microsoft.jpg'; 

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
    <div className="microsoft-sign-in-container flex items-center justify-center mt-10">
      <div className="logo-and-button flex items-center">
        <img src={microsoftLogo} alt="Microsoft Logo" className="microsoft-logo w-10 h-10 mr-4" />
        <button className="btn py-2 px-4 rounded-lg bg-gray-100 text-black hover:bg-gray-300 hover:text-gray-800" onClick={handleMicrosoftSignIn}>
  Sign in with Microsoft
</button>

         
      </div>
    </div>
  );
};

export default MicrosoftSignInButton;
