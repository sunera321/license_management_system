import React from 'react';
import Logo from '../Images/nav_logo.png';
import { UserCircleIcon } from '@heroicons/react/solid';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Navbar = () => {
  return (
    <nav className="p-4 border-b-2 border-black-300">
      <div className="container mx-auto ">
        <div className="flex items-center justify-between -ml-16">
          <div className="font-bold text-white ml-14 "><img src={Logo} alt="Logo" className="w-40"/></div>
          <ul className="flex space-x-4 ml-[100px] gap-8  text-black bg-white-200 font-mono text-[18px]" >
            <li>
              <a href="/" >Home</a>
            </li>
            <li>
              <a href="/controlpanel" >Control_Panel</a>
            </li>
            <li>
              <a href="/about" >About</a>
            </li>
            <li>
              <a href="/contact_us" >Contact_Us</a>
            </li>
            <li>
              <a href="/expired" >Expired</a>
            </li>
          </ul>
          <div className="flex justify-center text-black align-middle items pl-14">
            <UserCircleIcon className="w-10"/>
            <div className="m-1.5 ml-1 align-middle">user name</div>
            <button> <FontAwesomeIcon icon={faChevronDown} className="pl-5 mt-2.0" /></button>
           
          </div>
        </div>
       
      </div>
    </nav>
  );
};

export default Navbar;
