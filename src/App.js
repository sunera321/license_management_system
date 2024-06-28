import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { MsalProvider } from '@azure/msal-react';
import MainLayout from "./layouts/MainLayout";
import MainLayout1 from "./layouts/MainLayout1";
import Cookies from 'js-cookie';
import Home from './page/Home';
import IncomeDashboard from './page/IncomeDashboard';
import About from './page/About';
import AddModule from './page/AddModule';
import Contact_Us from './page/Contact_Us';
import ControlPanel from './page/ControlPanel';
import KeyGenerate from './page/KeyGenerateForm';
import EditProfilePartner from './page/EditProfilePartner';
import EditProfileUser from './page/EditProfileUser';
import Status from './page/Status';
import PartnerManagerApproval from './page/PartnerManagerApproval';
import FinacialManagerApproval from './page/FinacialManagerApproval ';
import Notification from './page/Notification';
import AddClient from './page/AddClient';
import ClientDetials from './page/ClientDetials';
import Dashboard from './page/Dashboard';
import SendKey from './page/SendKey';
import LicenseKeyInfo from './page/LicenseKeyInfo';
import KeyGenerateForm from './page/KeyGenerateForm';
import Module from './page/Module';
import PrivacyPolicy from './page/PrivacyPolicy';
import Profile from './page/Profile';
import TermsConditions from './page/TermsConditions';
import StatusOfKey from './page/StatusOfKey';
import Login from './page/Login';
import ClientRegistration from './page/ClientRegistration';
import ClientMore from './page/ClientMore';
import ValidateKey from './page/validatekey';
import Expiredlicense from './page/Expiredlicense';
import Activelicense from './page/Activelicense';
import CompearData from './page/CompearData';
import ModuleDetails from './page/ModuleDetails';
import { PublicClientApplication } from '@azure/msal-browser';
import { msalConfig } from './Config';
import Availablelicense from './page/Availablelicense';
import axios from 'axios';
const msalInstance = new PublicClientApplication(msalConfig);

const App = () => {
  const [userRole, setUserRole] = useState(null);

  useEffect(() => {
    // Get user role from session storage
    const role = sessionStorage.getItem('roleIds');
    setUserRole(role);
  
  }, []);
  const axiosInstance = axios.create();


  axiosInstance.interceptors.request.use(config => {
    const roleIds = sessionStorage.getItem('roleIds');
    if (roleIds) {
      config.headers['X-Roles'] = roleIds;
    }
    return config;
  }, error => {
    return Promise.reject(error);
  });

  const userId = Cookies.get('userId');
  const email = Cookies.get('userEmail');
  const name= Cookies.get('displayName');
  const renderRoutes = () => {
    if (userRole === 'b6fb7992-75fe-4d51-81e9-a62e2b8bd6ff') {
      axios.post('https://localhost:7295/api/Partner/addPartner', {
      userId,
      email,
      name,
    })
      .then(response => {
        console.log('User data saved to database:', response.data);
      })
      .catch(error => {
        console.error('Failed to save user data to database:', error);
      });
      return (
        <Route path="/" element={<MainLayout1 />}>
          <Route path="controlpanel" element={<ControlPanel />} />
          <Route path="about" element={<About />} />
          <Route path="availablelicense" element={<Availablelicense />} />
          <Route path="activelicense" element={<Activelicense />} />
          <Route path="expiredlicense" element={<Expiredlicense />} />
          <Route path="licensekeyinfo" element={<LicenseKeyInfo />} />
          <Route path="clientmore" element={<ClientMore />} />
          <Route path="contact_us" element={<Contact_Us />} />
          <Route path="clientregistration" element={<ClientRegistration />} />
          <Route path="notification" element={<Notification />} />
          <Route path="addclient" element={<AddClient />} />
          <Route path="clientdetials" element={<ClientDetials />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="sendkey/:key" element={<SendKey />} />
          <Route path="keygenerateform" element={<KeyGenerateForm />} />
          <Route path="module" element={<Module />} />
          <Route path="privacypolicy" element={<PrivacyPolicy />} />
          <Route path="profile" element={<Profile />} />
          <Route path="termsconditions" element={<TermsConditions />} />
          <Route path="moduledetails" element={<ModuleDetails />} />
          <Route path="keygenerate" element={<KeyGenerate />} />
          <Route path="editprofilepartner" element={<EditProfilePartner />} />
          <Route path="editprofileuser" element={<EditProfileUser />} />
          <Route path="status" element={<Status />} />
          <Route path="compeardata/:logkey" element={<CompearData />} />
          <Route path="statusofkey" element={<StatusOfKey />} />
          <Route path="validatekey" element={<ValidateKey />} />
        </Route>
      );
    }

    if (['7b449069-9d8e-4101-9b60-997be537120b', '3c5f0eea-412e-4d0a-9fde-849b9d3e5838', '97111ac5-093b-41df-98ae-75ab8956e0d2'].includes(userRole)) {
      return (
        <Route path="/" element={<MainLayout />}>
          <Route path="activelicense" element={<Activelicense />} />
          <Route path="expiredlicense" element={<Expiredlicense />} />
          <Route path="licensekeyinfo" element={<LicenseKeyInfo />} />
          <Route path="addmodule" element={<AddModule />} />
          <Route path="contact_us" element={<Contact_Us />} />
          <Route path="/module/moduledetails/:moduleId" element={<ModuleDetails/>}/>
          <Route path="mainhome" element={<Dashboard />} />
          <Route path="controlpanel" element={<ControlPanel />} />
          <Route path="incomedashboard" element={<IncomeDashboard />} />
          <Route path="keygenerate" element={<KeyGenerate />} />
          <Route path="editprofilepartner" element={<EditProfilePartner />} />
          <Route path="editprofileuser" element={<EditProfileUser />} />
          <Route path="status" element={<Status />} />
          <Route path="clientmore" element={<ClientMore />} />
          <Route path="compeardata/:logkey" element={<CompearData />} />
          <Route path="statusofkey" element={<StatusOfKey />} />
          <Route path="validatekey" element={<ValidateKey />} />
          <Route path="partnermanagerapproval" element={<PartnerManagerApproval />} />
          <Route path="finacialmanagerapproval" element={<FinacialManagerApproval />} />
          <Route path="notification" element={<Notification />} />
          <Route path="addclient" element={<AddClient />} />
          <Route path="clientdetials" element={<ClientDetials />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="sendkey/:key" element={<SendKey />} />
          <Route path="keygenerateform" element={<KeyGenerateForm />} />
          <Route path="module" element={<Module />} />
          <Route path="privacypolicy" element={<PrivacyPolicy />} />
          <Route path="profile" element={<Profile />} />
          <Route path="termsconditions" element={<TermsConditions />} />
          <Route path="clientregistration" element={<ClientRegistration />} />
        </Route>
      );
    }

  };

  return (
    <MsalProvider instance={msalInstance}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login msalInstance={msalInstance} />} />
          {renderRoutes()}
        </Routes>
      </BrowserRouter>
    </MsalProvider>
  );
}

export default App;