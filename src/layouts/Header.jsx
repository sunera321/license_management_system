import React, { useState } from 'react';
import Logo from '../Images/nav_logo.png';
import SignOut from '../Images/NavBarPic/l.png'
import Notification from '../Images/NavBarPic/N.png'
import Path from '../components/CommonModal/Path';
import { msalConfig } from '../Config';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const handleLogout = async () => {
    const logoutRequest = {
      // Specify the post_logout_redirect_uri where Azure AD should redirect after logout
      post_logout_redirect_uri: `${window.location.origin}`,
    };

    // Replace {tenantId} with the actual tenant ID
    const logoutUrl = `https://login.microsoftonline.com/${msalConfig.auth.authority.split('/')[3]}/oauth2/v2.0/logout?${new URLSearchParams(logoutRequest)}`;

    // Redirect the user to Azure AD logout endpoint
    window.location.href = logoutUrl;
  };

  return (
    <nav className="bg-blue-500">
      <div className="flex items-center justify-between px-3 py-3 bg-slate-200">
        <a className="text-3xl font-bold leading-none" href="#">
          <div className="font-bold text-white ml-14 "><img src={Logo} alt="Logo" className="w-40" /></div>
        </a>
        <div className="lg:hidden">
          <button className="flex items-center p-3 text-blue-600 navbar-burger" onClick={toggleMenu}>
            <svg className="block w-4 h-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Mobile menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </button>
        </div>
        <ul className={`lg:flex lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6 ${isOpen ? 'block' : 'hidden'}`}>
          <li><a className="text-[16px] text-gray-600 hover:text-gray-500" href="/mainhome">Home</a></li>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" class="w-4 h-4 current-fill" viewBox="0 0 24 24">

            
          </svg>
          <li><a className="text-[16px]  text-gray-600 hover:text-gray-500 " href="/Module">Modules</a></li>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" class="w-4 h-4 current-fill" viewBox="0 0 24 24">
           
          </svg>
          <li><a className="text-[16px] text-gray-600 hover:text-gray-500" href="incomedashboard">Revenue</a></li>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" class="w-4 h-4 current-fill" viewBox="0 0 24 24">
          

          </svg>
          <li><a className="text-[16px] text-gray-600 hover:text-gray-500" href="/contact_us">Contact</a></li>
        </ul>


        <div className={`lg:flex  ${isOpen ? 'block' : 'hidden'}`}>
          <div className='flex '>
            <a href='/notification'><img src={Notification} alt="Notificatione Icon" className="w-5 h-6 mt-1.5 mr-4"></img></a>
            <a href="/Login" className=' flex items-center justify-center px-4 py-1.5 text-sm font-bold text-white transition duration-200 bg-blue-500 hover:bg-blue-600 rounded-xl '>
              <span className="flex-1 truncate hover:text-black group-hover:block">
              <a href="#" onClick={handleLogout}><div className='onclick{handlelogout}'>Sign Out</div></a></span>
              <div>
                <div>
                <a href="#" onClick={handleLogout}><img src={SignOut} alt="Generate Icon" className="w-6 h-6 " /></a>
                </div>
              </div>
            </a>

          </div>
        </div>


      </div>
    </nav>
  );
}

export default Navbar;
