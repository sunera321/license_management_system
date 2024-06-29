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
import addnotification from '../Images/sidebarpic/notification.svg';
import { msalConfig } from '../Config';

const deleteCookie = (name) => {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
};
const handleLogout = async () => {
  const logoutRequest = {

    post_logout_redirect_uri: `${window.location.origin}`,
  };

  // Replace {tenantId} with the actual tenant ID
  const logoutUrl = `https://login.microsoftonline.com/${msalConfig.auth.authority.split('/')[3]}/oauth2/v2.0/logout?${new URLSearchParams(logoutRequest)}`;

  // Clear session storage
  sessionStorage.clear();

  // Clear local storage if needed
  localStorage.clear();

  // Delete the access token cookie
  deleteCookie('userId');
  deleteCookie('userEmail');
  deleteCookie('displayName');
  deleteCookie('roleIds');

  
  
  



  // Redirect the user to Azure AD logout endpoint
  window.location.href = logoutUrl;
};

const Slidebar = () => {
  return (
       <div>

      <div className="w-10 h-screen overflow-hidden transition-all duration-300 ease-in-out rounded bg-slate-900 bg-gray group hover:w-64">

        <div className="absolute inset-y-0 left-0 w-64 px-2 pt-2 pb-2 transition ease-in-out transform -translate-x-full bg-slate-900 bg-black-300 bg-gray md:relative md:translate-x-0">

          <a href="/components/page/" className="flex px-1 transition-colors ">
            <span className="text-2xl font-extrabold"> <img src={menuIcon} alt="Menu" className="w-5 " style={{  fill: 'white' }} />  </span>
          </a>
          <hr className="mt-2 border-t border-gray-600 " />

        </div>

        

          
          <div className="flex items-center justify-center px-6 py-2 transition-colors hover:bg-slate-700 ">
            <div className="icon"> <img src={dash} alt="control Icon" className="w-6 h-6 mr-4" />
            </div>

            <span className="flex-1 ml-2 text-white truncate hover: group-hover:block"><a href="/dashboard" > Dashboard</a></span>

          </div>
          <div className="flex items-center justify-center px-6 py-2 transition-colors hover:bg-slate-700 ">
            <div className="icon"> <img src={control} alt="control Icon" className="w-6 h-6 mr-4" />
            </div>

            <span className="flex-1 ml-2 text-white truncate group-hover:block"><a href="/controlpanel" > Control Panel</a></span>

          </div>

          <div className="flex items-center justify-center px-6 py-2 transition-colors hover:bg-slate-700 ">
            <div className="icon"> <img src={addmodule} alt="module Icon" className="w-6 h-6 mr-4" />
            </div>
            <span className="flex-1 ml-2 text-white truncate group-hover:block"><a href="/addmodule" > Add Modules </a></span>
          </div>

          <div className="flex items-center justify-center px-6 py-2 transition-colors hover:bg-slate-700 ">
            <div className="icon"> <img src={approval} alt="approval Icon" className="w-6 h-6 mr-4" />
            </div>

            <span className="flex-1 ml-2 text-white truncate group-hover:block"><a href='/finacialmanagerapproval' >Finance Approvals </a></span>

          </div>
   
          <div className="flex items-center justify-center px-6 py-2 transition-colors hover:bg-slate-700 ">
            <div className="icon"> <img src={approval} alt="approval Icon" className="w-6 h-6 mr-4" />
            </div>

            <span className="flex-1 ml-2 text-white truncate group-hover:block"><a href='/PartnerManagerApproval' > Partner Approvals </a></span>

          </div>
          <div className="flex items-center justify-center px-6 py-2 transition-colors hover:bg-slate-700 ">
            <div className="icon"> <img src={statusIcon} alt="status Icon" className="w-6 h-6 mr-4" />
            </div>


            <span className="flex-1 ml-2 text-white truncate group-hover:block"><a href="/status" >Status</a></span>


          </div>

          <div className="flex items-center justify-center px-6 py-2 transition-colors hover:bg-slate-700 ">
            <div className="icon "> <img src={license} alt="License Icon" className="w-6 h-6 mr-4" />
            </div>
            <span className="flex-1 ml-2 text-white truncate group-hover:block"><a href="/licensekeyinfo" > Key Activation</a></span>
          </div>
          
          <div className="flex items-center justify-center px-6 py-2 transition-colors hover:bg-slate-700 ">
            <div className="icon"> <img src={setting} alt="Setting Icon" className="w-6 h-6 mr-4" />
            </div>
            <span className="flex-1 ml-2 text-white truncate group-hover:block"><a href="/validatekey" > Validate Key</a></span>
          </div>

          <div className="flex items-center justify-center px-6 py-2 transition-colors hover:bg-slate-700 ">
            <div className="icon"> <img src={generate} alt="Generate Icon" className="w-6 h-6 mr-4" />
            </div>
            <span className="flex-1 ml-2 text-white truncate group-hover:block"><a href='/KeyGenerateForm' >Generate Key</a></span>
          </div>
          <div className="flex items-center justify-center px-6 py-2 transition-colors hover:bg-slate-700 ">
            <div className="icon"> <img src={addClient} alt="Add client Icon" className="w-6 h-6 mr-4" />
            </div>
            <span className="flex-1 ml-2 text-white truncate group-hover:block"><a href="/addclient" >Clients Details</a></span>
          </div>
          <div className="flex items-center justify-center px-6 py-2 transition-colors hover:bg-slate-700 ">
            <div className="icon"> <img src={addClient} alt="Add client Icon" className="w-6 h-6 mr-4" />
            </div>
            <span className="flex-1 ml-2 text-white truncate group-hover:block"><a href="/ClientRegistration" > Client Registration</a></span>
          </div>

          <div className="flex items-center justify-center px-6 py-2 transition-colors hover:bg-slate-700 ">
            <div className="icon"> <img src={addnotification} alt="Notificatiom Icon" className="w-6 h-6 mr-4" />
            </div>
            <span className="flex-1 ml-2 truncate hover:text-purple-600 group-hover:block"><a href="/AddNotification" >Add Notifications</a></span>
          </div>




          <div className="flex items-center justify-center px-6 py-2 transition-colors hover:bg-slate-700 ">
            <div className="icon"> <img src={help} alt="help Icon" className="w-6 h-6 mr-4" />
            </div>
            <span className="flex-1 ml-2 text-white truncate group-hover:block"><a href="/components" > Help</a></span>
          </div>

          <div className="flex items-center justify-center px-6 py-2 transition-colors hover:bg-slate-700 ">
            <div className="icon"><img src={logout} alt="logout Icon" className="w-6 h-6 mr-4" />
            </div>

            <span className="flex-1 ml-2 text-red-500 truncate group-hover:block"><a href="#" onClick={handleLogout}>Logout</a></span>

           

          </div>
      </div>
    </div>
  );
}

export default Slidebar;