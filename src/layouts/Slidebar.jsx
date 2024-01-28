import React from 'react';


const Slidebar = () => {
  return (
    <div className="relative justify-center h-auto">
    <div className=" w-14 bg-custom-gray fixed group hover:w-64 transition-all duration-300 ease-in-out overflow-hidden  top-[55%] transform -translate-y-1/2  rounded">
      <div className="bg-custom-gray w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 
      transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">
      {/* Sidebarlogo */}
      <a href="#" className=" flex items-center space-x-2 px-4 mr-4">
        <span className="text-2xl font-extrabold"> <img src='/sidebarpic/menu-alt.svg' alt="Menu" className="h-5 w-5 " />  </span>
      </a>
      <hr className="border-t border-gray-600 my-4" />
      </div> 

      <nav className="flex flex-col mt-2">
        <div className="flex items-center hover:bg-slate-700 transition-colors py-2 px-6">
          <div className="icon"> <img src="/sidebarpic/dashboard.svg" alt="Dashboard Icon" className="h-8 w-8 mr-4" />
          </div>
          <span className="ml-2 hover:text-purple-600 flex-1 truncate group-hover:block "><a href="/components/page/Dashboard/Dashboard.jsx" >Dashboard </a>
          </span>
        </div>

        <div className="flex items-center  hover:bg-slate-700 transition-colors py-2 px-6 ">
          <div className="icon"> <img src="/sidebarpic/control.svg" alt="control Icon" className="h-6 w-6 mr-4" />
          </div>
          <span className="ml-2 hover:text-purple-600 flex-1 truncate group-hover:block"><a href="/components/page/ControlPanel/ControlPanel.jsx" > Control Panel</a></span>
        </div>

        <div className="flex items-center hover:bg-slate-700 transition-colors py-2 px-6 ">
          <div className="icon"> <img src="/sidebarpic/add-module.svg " alt="module Icon" className="h-6 w-6 mr-4" />
          </div>
          <span className="ml-2 hover:text-purple-600 flex-1 truncate group-hover:block"><a href="/components/page/addModule/addModule.jsx" > Add Modules </a></span>
        </div>

        <div className="flex items-center hover:bg-slate-700 transition-colors py-2 px-6 ">
          <div className="icon"> <img src="/sidebarpic/approval.svg" alt="approval Icon" className="h-6 w-6 mr-4" />
          </div>
          <span className="ml-2 hover:text-purple-600 flex-1 truncate group-hover:block"><a href="/components/page/approvalStatus/approvalStatus.jsx" > Approvals </a></span>
        </div>

        <div className="flex items-center  hover:bg-slate-700 transition-colors py-2 px-6 ">
          <div className="icon"> <img src="/sidebarpic/status.svg" alt="status Icon" className="h-6 w-6 mr-4" />
          </div>
          <span className="ml-2 hover:text-purple-600 flex-1 truncate group-hover:block"><a href="/components/page/" >Status</a></span>
        </div>

        <div className="flex items-center  hover:bg-slate-700 transition-colors py-2 px-6 ">
          <div className="icon "> <img src="/sidebarpic/license.svg" alt="License Icon" className="h-6 w-6 mr-4" />
          </div>
          <span className="ml-2 hover:text-purple-600 flex-1 truncate group-hover:block"><a href="/components/page/LicenseIssue/LicenseIssue.jsx" > License Key</a></span>
        </div>

        <div className="flex items-center hover:bg-slate-700 transition-colors py-2 px-6 ">
          <div className="icon"> <img src="/sidebarpic/generate.svg" alt="Generate Icon" className="h-6 w-6 mr-4" />
          </div>
          <span className="ml-2 hover:text-purple-600 flex-1 truncate group-hover:block"><a href="/components/page/" >Generate Key</a></span>
        </div>
        <div className="flex items-center  hover:bg-slate-700 transition-colors py-2 px-6 ">
          <div className="icon"> <img src="/sidebarpic/add-client.svg" alt="Add client Icon" className="h-6 w-6 mr-4" />
          </div>
          <span className="ml-2 hover:text-purple-600 flex-1 truncate group-hover:block"><a href="/components/page/addClient/addClient.jsx" > Add Client</a></span>
        </div>

        <div className="flex items-center  hover:bg-slate-700 transition-colors py-2 px-6 ">
          <div className="icon"> <img src="/sidebarpic/setting.svg" alt="Setting Icon" className="h-6 w-6 mr-4" />
          </div>
          <span className="ml-2 hover:text-purple-600 flex-1 truncate group-hover:block"><a href="#/components/page/" > Settings</a></span>
        </div>
     
        <div className="flex items-center  mt-10 hover:bg-slate-700 transition-colors py-2 px-6 ">
          <div className="icon"> <img src="/sidebarpic/help.svg" alt="help Icon" className="h-6 w-6 mr-4" />
          </div>
          <span className="ml-2 hover:text-purple-600 flex-1 truncate group-hover:block"><a href="/components/page/" > Help</a></span>
        </div>

        <div className="flex items-center  hover:bg-slate-700 transition-colors py-2 px-6  ">
          <div className="icon"> <img src="/sidebarpic/logout.svg" alt="logout Icon" className="h-6 w-6 mr-4" />
          </div>
          <span className="ml-2 text-red-500 flex-1 truncate group-hover:block"><a href="/components/page/" >Logout</a></span>
        </div>
      </nav>
    </div>
    </div>
  );
}

export default Slidebar;