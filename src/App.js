import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PublicClientApplication } from '@azure/msal-browser';
import { msalConfig } from './Config';

// Import local components
import MainLayout from './layouts/MainLayout';
import Home from './page/Home';
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
import Help from './page/Help';
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
const msalInstance = new PublicClientApplication(msalConfig);
// import Availablelicense from './page/Availablelicense';

// Create instance of PublicClientApplication
const msalInstance = new PublicClientApplication(msalConfig);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/login" element={<Login msalInstance={msalInstance} />} />

        <Route path="/" element={<MainLayout  />}>

          <Route path="mainhome" element={<Dashboard />} />
          <Route path="controlpanel" element={<ControlPanel />} />
          <Route path="about" element={<About />} />
          <Route path="availablelicense" element={<Availablelicense />} />    
          <Route path="activelicense" element={<Activelicense />} />
          <Route path="expiredlicense" element={<Expiredlicense />} />
          <Route path="addmodule" element={<AddModule />} />
          <Route path="clientmore" element={<ClientMore />} />
          <Route path="contact_us" element={<Contact_Us />} />
          <Route path="clientregistration" element={<ClientRegistration />} />
          <Route path="keygenerate" element={<KeyGenerate />} />
          <Route path="editprofilepartner" element={<EditProfilePartner />} />
          <Route path="editprofileuser" element={<EditProfileUser />} />
          <Route path="status" element={<Status />} />
          <Route path="compeardata" element={<CompearData />} />
          <Route path="statusofkey" element={<StatusOfKey />} />
          <Route path="validatekey" element={<ValidateKey />} />
          <Route path="partnermanagerapproval" element={<PartnerManagerApproval />} />
          <Route path="finacialmanagerapproval" element={<FinacialManagerApproval />} />
          <Route path="notification" element={<Notification />} />
          <Route path="addclient" element={<AddClient />} />
          <Route path="clientdetials" element={<ClientDetials />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="help" element={<Help />} />
          <Route path="keygenerateform" element={<KeyGenerateForm />} />
          <Route path="module" element={<Module />} />
          <Route path="privacypolicy" element={<PrivacyPolicy />} />
          <Route path="profile" element={<Profile />} />
          <Route path="termsconditions" element={<TermsConditions />} />
          <Route path="moduledetails" element={<ModuleDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
