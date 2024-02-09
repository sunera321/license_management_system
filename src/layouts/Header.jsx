import React from 'react';
import Logo from '../Images/nav_logo.png';
import { UserCircleIcon } from '@heroicons/react/solid';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Notification from '../Images/NavBar/N.png'
import Profile from '../Images/NavBar/P.jpg';
import SignOut from '../Images/NavBar/L.jpg'



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
              <a href="/Notification" >Contact_Us</a>
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


                  <div className="py-1" role="none">
                    <ul className="absolute hidden w-56 pt-1 mt-0 bg-white rounded-md -right-5 text-black-700 group-hover:block">
                      <li><div className='flex items-center justify-center px-6 py-2 transition-colors hover:bg-slate-700'><span className="flex-1 ml-2 truncate hover:text-white group-hover:block"><a  href="#">User ID  : </a></span></div></li>

                      <li ><div className='flex items-center justify-center px-6 py-2 transition-colors hover:bg-slate-700'><span className="flex-1 ml-2 truncate hover:text-white group-hover:block"><a href="#">Notification </a></span><div className="icon"> <img src={Notification} alt="Generate Icon" className="w-5 h-6 mr-4" />
                      </div></div></li>

                      <li><div className='flex items-center justify-center px-6 py-2 transition-colors hover:bg-slate-700'><span className="flex-1 ml-2 truncate hover:text-white group-hover:block"><a href="#">Profile</a></span><div><img src={Profile} alt="Generate Icon" className="w-6 h-6 mr-4" /></div></div></li>
                      <li><div className='flex items-center justify-center px-6 py-2 transition-colors hover:bg-slate-700'><span className="flex-1 ml-2 truncate hover:text-white group-hover:block"><a href="#">Sign Out</a></span><div><img src={SignOut} alt="Generate Icon" className="w-6 h-6 mr-4" /></div></div></li>

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
