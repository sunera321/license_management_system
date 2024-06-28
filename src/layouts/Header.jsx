import React, { useState } from 'react';
import { useMsal } from '@azure/msal-react';
import Logo from '../Images/nav_logo.png';
import Notification from '../Images/NavBarPic/N.png';
import { msalConfig } from '../Config';
import SignOut from '../Images/NavBarPic/l.png';
import Path from '../components/CommonModal/Path';

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
      <div className="container flex items-center justify-between px-6 py-3 mx-auto">
        <div className="flex items-center">
          <img src={Logo} alt="Logo" className="h-10" />
        </div>
        <div className="flex items-center lg:hidden">
          <button onClick={toggleMenu} className="text-gray-500 focus:outline-none">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
        <div className={`lg:flex flex-grow justify-end items-center ${isOpen ? 'flex' : 'hidden'}`}>
          <ul className="lg:flex lg:space-x-6">
            <li className="relative group">
              <a href="/mainhome" className="px-4 py-2 text-sm font-medium text-gray-700 transition duration-300 rounded-md group-hover:text-blue-500">Home</a>
              <div className="absolute bottom-0 left-0 right-0 h-1 transition-transform duration-300 origin-left transform scale-x-0 translate-y-2 bg-blue-500 group-hover:scale-x-100"></div>
            </li>
            <li className="relative group">
              <a href="/Module" className="px-4 py-2 text-sm font-medium text-gray-700 transition duration-300 rounded-md group-hover:text-blue-500">Modules</a>
              <div className="absolute bottom-0 left-0 right-0 h-1 transition-transform duration-300 origin-left transform scale-x-0 translate-y-2 bg-blue-500 group-hover:scale-x-100"></div>
            </li>
            <li className="relative group">
              <a href="/incomedashboard" className="px-4 py-2 text-sm font-medium text-gray-700 transition duration-300 rounded-md group-hover:text-blue-500">Revenue</a>
              <div className="absolute bottom-0 left-0 right-0 h-1 transition-transform duration-300 origin-left transform scale-x-0 translate-y-2 bg-blue-500 group-hover:scale-x-100"></div>
            </li>
            <li className="relative group">
              <a href="/contact_us" className="px-4 py-2 text-sm font-medium text-gray-700 transition duration-300 rounded-md group-hover:text-blue-500">Contact</a>
              <div className="absolute bottom-0 left-0 right-0 h-1 transition-transform duration-300 origin-left transform scale-x-0 translate-y-2 bg-blue-500 group-hover:scale-x-100"></div>
            </li>
          </ul>
          <div className="flex items-center ml-8"> 
            <a href='/notification' className="pr-4 text-gray-700 hover:text-blue-500">
              <img src={Notification} alt="Notification Icon" className="w-6 h-6" />
            </a>
            <button onClick={handleLogout} className="px-6 py-2 text-sm font-medium text-white transition duration-300 bg-blue-500 rounded-md hover:bg-blue-700">
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
