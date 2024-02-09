import React from 'react';
import menuIcon from '../Images/sidebarpic/menu-alt.svg';
import dash from '../Images/sidebarpic/dashboard.svg';
import control from '../Images/sidebarpic/control.svg';
import addmodule from '../Images/sidebarpic/add-module.svg';
import approval from '../Images/sidebarpic/approval.svg';
import statusIcon from '../Images/sidebarpic/stat.svg'; 
import license from '../Images/sidebarpic/license.svg';
import generate from '../Images/sidebarpic/generate.svg';
import addClient from '../Images/sidebarpic/add-client.svg';
import setting from '../Images/sidebarpic/setting.svg';
import logout from '../Images/sidebarpic/logout.svg';
import help from '../Images/sidebarpic/help.svg';



const Slidebar = () => {
  return (
       <div>
      <div className=" bg-slate-900 w-10 bg-gray fixed group hover:w-64 transition-all duration-300 ease-in-out overflow-hidden  top-[55%] transform -translate-y-1/2  rounded">
        <div className="absolute inset-y-0 left-0 w-64 px-2 space-y-6 transition duration-200 ease-in-out transform -translate-x-full bg-slate-900 bg-black-300 bg-gray py-7 md:relative md:translate-x-0">

          <a href="/components/page/" className="flex px-1 py-2 transition-colors ">
            <span className="text-2xl font-extrabold"> <img src={menuIcon} alt="Menu" className="w-5 h-5" style={{  fill: 'white' }} />  </span>
          </a>
          <hr className="my-4 border-t border-gray-600" />

        </div>

        <nav className="flex flex-col mt-2 text-slate-400">

          <div className="flex items-center justify-center px-6 py-2 transition-colors hover:bg-slate-700 ">
            <div className="icon"> <img src={dash} alt="control Icon" className="w-6 h-6 mr-4" />
            </div>
            <span className="flex-1 ml-2 truncate hover:text-purple-600 group-hover:block"><a href="/components/page/ControlPanel/ControlPanel.jsx" > Dashboard</a></span>
          </div>
          <div className="flex items-center justify-center px-6 py-2 transition-colors hover:bg-slate-700 ">
            <div className="icon"> <img src={control} alt="control Icon" className="w-6 h-6 mr-4" />
            </div>
            <span className="flex-1 ml-2 truncate hover:text-purple-600 group-hover:block"><a href="/components/page/ControlPanel/ControlPanel.jsx" > Control Panel</a></span>
          </div>

          <div className="flex items-center justify-center px-6 py-2 transition-colors hover:bg-slate-700 ">
            <div className="icon"> <img src={addmodule} alt="module Icon" className="w-6 h-6 mr-4" />
            </div>
            <span className="flex-1 ml-2 truncate hover:text-purple-600 group-hover:block"><a href="/components/page/addModule/addModule.jsx" > Add Modules </a></span>
          </div>

          <div className="flex items-center justify-center px-6 py-2 transition-colors hover:bg-slate-700 ">
            <div className="icon"> <img src={approval} alt="approval Icon" className="w-6 h-6 mr-4" />
            </div>
            <span className="flex-1 ml-2 truncate hover:text-purple-600 group-hover:block"><a href="/components/page/approvalStatus/approvalStatus.jsx" > Approvals </a></span>
          </div>

          <div className="flex items-center justify-center px-6 py-2 transition-colors hover:bg-slate-700 ">
            <div className="icon"> <img src={statusIcon} alt="status Icon" className="w-6 h-6 mr-4" />
            </div>
            <span className="flex-1 ml-2 truncate hover:text-purple-600 group-hover:block"><a href="/components/page/" >Status</a></span>
          </div>

          <div className="flex items-center justify-center px-6 py-2 transition-colors hover:bg-slate-700 ">
            <div className="icon "> <img src={license} alt="License Icon" className="w-6 h-6 mr-4" />
            </div>
            <span className="flex-1 ml-2 truncate hover:text-purple-600 group-hover:block"><a href="/components/page/LicenseIssue/LicenseIssue.jsx" > License Key</a></span>
          </div>

          <div className="flex items-center justify-center px-6 py-2 transition-colors hover:bg-slate-700 ">
            <div className="icon"> <img src={generate} alt="Generate Icon" className="w-6 h-6 mr-4" />
            </div>
            <span className="flex-1 ml-2 truncate hover:text-purple-600 group-hover:block"><a href="/components/page/" >Generate Key</a></span>
          </div>
          <div className="flex items-center justify-center px-6 py-2 transition-colors hover:bg-slate-700 ">
            <div className="icon"> <img src={addClient} alt="Add client Icon" className="w-6 h-6 mr-4" />
            </div>
            <span className="flex-1 ml-2 truncate hover:text-purple-600 group-hover:block"><a href="/addclient" > Add Client</a></span>
          </div>

          <div className="flex items-center justify-center px-6 py-2 transition-colors hover:bg-slate-700 ">
            <div className="icon"> <img src={setting} alt="Setting Icon" className="w-6 h-6 mr-4" />
            </div>
            <span className="flex-1 ml-2 truncate hover:text-purple-600 group-hover:block"><a href="#/components/page/" > Settings</a></span>
          </div>

          <div className="flex items-center justify-center px-6 py-2 mt-10 transition-colors hover:bg-slate-700 ">
            <div className="icon"> <img src={help} alt="help Icon" className="w-6 h-6 mr-4" />
            </div>
            <span className="flex-1 ml-2 truncate hover:text-purple-600 group-hover:block"><a href="/components/page/" > Help</a></span>
          </div>

          <div className="flex items-center justify-center px-6 py-2 transition-colors hover:bg-slate-700 ">
            <div className="icon"> <img src={logout} alt="logout Icon" className="w-6 h-6 mr-4" />
            </div>
            <span className="flex-1 ml-2 text-red-500 truncate group-hover:block"><a href="/components/page/" >Logout</a></span>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Slidebar;
