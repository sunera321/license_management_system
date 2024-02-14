import React, { useState } from 'react';
import Logo from '../Images/nav_logo.png';
import { UserCircleIcon } from '@heroicons/react/solid';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Notification from '../Images/NavBarPic/N.png'
import Profile from '../Images/NavBarPic/p.png';
import SignOut from '../Images/NavBarPic/l.png'





const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="p-4 border-b-2 border-black-300">
      <div className="container mx-auto ">
        <div className="flex items-center justify-between -ml-16">
          <div className="font-bold text-white ml-14 "><img src={Logo} alt="Logo" className="w-40" /></div>
          <ul className="flex space-x-4 ml-[100px] gap-8  text-black bg-white-200 font-serif text-[18px]" >
            <li>
              <a href="/" >Home</a>
            </li>
            <li>

              <a href="/Module" >Modules</a>
            </li>
            <li>

              <a href="/about" >About</a>
            </li>
            <li>
              <a href="/contact_us" >Contact Us</a>
            </li>
           
          </ul>
          <div className="flex justify-center text-black align-middle items pl-14">
            <UserCircleIcon className="w-10" />
            <div className="m-1.5 ml-1 align-middle font-serif">user name</div>
            <div className="">
              <div className="flex items-center ml-4 md:ml-6">
                <div className="relative ml-3 group">
                  <button  > <FontAwesomeIcon icon={faChevronDown} className="pl-0 mt-3" />
                  </button>


                  <div className="py-1 transition-all duration-75 scroll-smooth md:scroll-auto" role="none">
                    <ul className="absolute hidden w-56 pt-1 mt-0 duration-300 bg-white shadow-lg rounded-2xl border-3 -right-3 text-black-700 group-hover:block">
                      <li><div className='flex items-center justify-center px-6 py-2 transition-colors hover:bg-slate-700'><span className="flex-1 ml-2 truncate hover:text-white group-hover:block">User ID  : </span></div></li>


                      <li ><div className='flex items-center justify-center px-6 py-2 transition-colors hover:bg-slate-700'><span className="flex-1 ml-2 truncate hover:text-white group-hover:block"><a href="/notification">Notification </a></span><div className="icon"><a href="/notification"> <img src={Notification} alt="Generate Icon" className="w-5 h-6 mr-4" /></a>

                      </div></div></li>

                      <li><div className='flex items-center justify-center px-6 py-2 transition-colors hover:bg-slate-700'><span className="flex-1 ml-2 truncate hover:text-white group-hover:block"><a href='EditProfileUser'>Profile</a></span><div><a href='EditProfileUser'><img src={Profile} alt="Generate Icon" className="w-6 h-6 mr-4" /></a></div></div></li>
                      <li><div className='flex items-center justify-center px-6 py-2 transition-colors hover:bg-slate-700'><span className="flex-1 ml-2 truncate hover:text-white group-hover:block"><a href="/login">Sign Out</a></span><div><a href="/login"><img src={SignOut} alt="Generate Icon" className="w-6 h-6 mr-4" /></a></div></div></li>

                    </ul>
                  </div>

                </div></div>
            </div>
          </div>
        </div>

      </div>

    </nav>
  );
};

export default Navbar;

