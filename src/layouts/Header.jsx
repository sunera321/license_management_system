import React, { useState } from 'react';
import { useMsal } from '@azure/msal-react';
import Logo from '../Images/nav_logo.png';
import Notification from '../Images/NavBarPic/N.png';
import { msalConfig } from '../Config';


const deleteCookie = (name) => {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
};
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { instance } = useMsal();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };


  const handleLogout = async () => {
    const logoutRequest = {
      post_logout_redirect_uri: `${window.location.origin}`,
    };

    const logoutUrl = `https://login.microsoftonline.com/${msalConfig.auth.authority.split('/')[3]}/oauth2/v2.0/logout?${new URLSearchParams(logoutRequest)}`;

    // Clear session storage
    sessionStorage.clear();

    // Clear local storage if needed
    localStorage.clear();

    // Delete the access token cookie
    deleteCookie('userId');
    deleteCookie('userEmail');
    deleteCookie('userProfile');
    deleteCookie('displayName');
    deleteCookie('roleIds');
    
    
    



    // Redirect the user to Azure AD logout endpoint
    window.location.href = logoutUrl;
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-6 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <img src={Logo} alt="Logo" className="h-7" />
        </div>
        <div className="flex items-center lg:hidden">
          <button onClick={toggleMenu} className="text-gray-500 focus:outline-none">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
        <div className={`lg:flex flex-grow justify-end items-center ${isOpen ? 'flex' : 'hidden'}`}>
          <ul className="lg:flex lg:space-x-6">
            <li className="relative group">
              <a href="/mainhome" className="text-gray-700 px-4 py-2 rounded-md text-sm font-medium transition duration-300 group-hover:text-blue-500">Home</a>
              <div className="absolute left-0 right-0 bottom-0 transform translate-y-2 h-1 bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </li>
            <li className="relative group">
              <a href="/Module" className="text-gray-700 px-4 py-2 rounded-md text-sm font-medium transition duration-300 group-hover:text-blue-500">Modules</a>
              <div className="absolute left-0 right-0 bottom-0 transform translate-y-2 h-1 bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </li>
            <li className="relative group">
              <a href="/incomedashboard" className="text-gray-700 px-4 py-2 rounded-md text-sm font-medium transition duration-300 group-hover:text-blue-500">Revenue</a>
              <div className="absolute left-0 right-0 bottom-0 transform translate-y-2 h-1 bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </li>
            <li className="relative group">
              <a href="/contact_us" className="text-gray-700 px-4 py-2 rounded-md text-sm font-medium transition duration-300 group-hover:text-blue-500">Contact</a>
              <div className="absolute left-0 right-0 bottom-0 transform translate-y-2 h-1 bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </li>
          </ul>
          <div className="flex items-center ml-8"> 
            <a href='/notification' className="text-gray-700 hover:text-blue-500 pr-4">
              <img src={Notification} alt="Notification Icon" className="h-6 w-6" />
            </a>
            <button onClick={handleLogout} className="bg-blue-500 hover:bg-blue-700 text-white px-6 py-2 rounded-md text-sm font-medium transition duration-300">
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
