import React from 'react';


const Slidebar = () => {
  return (
    <div className="relative justify-center h-auto">
    <div className=" w-14 bg-custom-gray fixed group hover:w-64 transition-all duration-300 ease-in-out overflow-hidden  top-[55%] transform -translate-y-1/2  rounded ">
      <div className="absolute inset-y-0 left-0 w-64 px-2 space-y-6 transition duration-200 ease-in-out transform -translate-x-full bg-custom-gray py-7 md:relative md:translate-x-0">
   

      <a href="/components/page/" className="flex items-center px-4 py-2 transition-colors hover:bg-slate-700">
        <span className="text-2xl font-extrabold"> <img src='/sidebarpic/menu-alt.svg' alt="Menu" className="w-5 h-5 " />  </span>
      </a>
      <hr className="my-4 border-t border-gray-600" />
      </div> 

      <nav className="flex flex-col mt-2">
        <div className="flex items-center px-6 py-2 transition-colors hover:bg-slate-700">
          <div className="icon"> <img src="/sidebarpic/dashboard.svg" alt="Dashboard Icon" className="w-8 h-8 mr-4" />
          </div>
          <span className="flex-1 ml-2 truncate hover:text-purple-600 group-hover:block "><a href="/components/page/Dashboard/Dashboard.jsx" >Dashboard </a>
          </span>
        </div>

        <div className="flex items-center px-6 py-2 transition-colors hover:bg-slate-700 ">
          <div className="icon"> <img src="/sidebarpic/control.svg" alt="control Icon" className="w-6 h-6 mr-4" />
          </div>
          <span className="flex-1 ml-2 truncate hover:text-purple-600 group-hover:block"><a href="/components/page/ControlPanel/ControlPanel.jsx" > Control Panel</a></span>
        </div>

        <div className="flex items-center px-6 py-2 transition-colors hover:bg-slate-700 ">
          <div className="icon"> <img src="/sidebarpic/add-module.svg " alt="module Icon" className="w-6 h-6 mr-4" />
          </div>
          <span className="flex-1 ml-2 truncate hover:text-purple-600 group-hover:block"><a href="/components/page/addModule/addModule.jsx" > Add Modules </a></span>
        </div>

        <div className="flex items-center px-6 py-2 transition-colors hover:bg-slate-700 ">
          <div className="icon"> <img src="/sidebarpic/approval.svg" alt="approval Icon" className="w-6 h-6 mr-4" />
          </div>
          <span className="flex-1 ml-2 truncate hover:text-purple-600 group-hover:block"><a href="/components/page/approvalStatus/approvalStatus.jsx" > Approvals </a></span>
        </div>

        <div className="flex items-center px-6 py-2 transition-colors hover:bg-slate-700 ">
          <div className="icon"> <img src="/sidebarpic/status.svg" alt="status Icon" className="w-6 h-6 mr-4" />
          </div>
          <span className="flex-1 ml-2 truncate hover:text-purple-600 group-hover:block"><a href="/components/page/" >Status</a></span>
        </div>

        <div className="flex items-center px-6 py-2 transition-colors hover:bg-slate-700 ">
          <div className="icon "> <img src="/sidebarpic/license.svg" alt="License Icon" className="w-6 h-6 mr-4" />
          </div>
          <span className="flex-1 ml-2 truncate hover:text-purple-600 group-hover:block"><a href="/components/page/LicenseIssue/LicenseIssue.jsx" > License Key</a></span>
        </div>

        <div className="flex items-center px-6 py-2 transition-colors hover:bg-slate-700 ">
          <div className="icon"> <img src="/sidebarpic/generate.svg" alt="Generate Icon" className="w-6 h-6 mr-4" />
          </div>
          <span className="flex-1 ml-2 truncate hover:text-purple-600 group-hover:block"><a href="/components/page/" >Generate Key</a></span>
        </div>
        <div className="flex items-center px-6 py-2 transition-colors hover:bg-slate-700 ">
          <div className="icon"> <img src="/sidebarpic/add-client.svg" alt="Add client Icon" className="w-6 h-6 mr-4" />
          </div>
          <span className="flex-1 ml-2 truncate hover:text-purple-600 group-hover:block"><a href="/components/page/addClient/addClient.jsx" > Add Client</a></span>
        </div>

        <div className="flex items-center px-6 py-2 transition-colors hover:bg-slate-700 ">
          <div className="icon"> <img src="/sidebarpic/setting.svg" alt="Setting Icon" className="w-6 h-6 mr-4" />
          </div>
          <span className="flex-1 ml-2 truncate hover:text-purple-600 group-hover:block"><a href="#/components/page/" > Settings</a></span>
        </div>
     
        <div className="flex items-center px-6 py-2 mt-10 transition-colors hover:bg-slate-700 ">
          <div className="icon"> <img src="/sidebarpic/help.svg" alt="help Icon" className="w-6 h-6 mr-4" />
          </div>
          <span className="flex-1 ml-2 truncate hover:text-purple-600 group-hover:block"><a href="/components/page/" > Help</a></span>
        </div>

        <div className="flex items-center px-6 py-2 transition-colors hover:bg-slate-700 ">
          <div className="icon"> <img src="/sidebarpic/logout.svg" alt="logout Icon" className="w-6 h-6 mr-4" />
          </div>
          <span className="flex-1 ml-2 text-red-500 truncate group-hover:block"><a href="/components/page/" >Logout</a></span>
        </div>
      </nav>
    </div>
    </div>
  );
}

export default Slidebar;
