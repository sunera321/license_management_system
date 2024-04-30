import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
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
const msalInstance = new PublicClientApplication(msalConfig);
// import Availablelicense from './page/Availablelicense';



function App() {
  return (
    
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} /> 
        <Route path="/login" element={<Login msalInstance={msalInstance} />} />
        <Route path="/" element={<MainLayout  />}>

          <Route path="mainhome" Component={Dashboard} />
          <Route path="controlpanel" Component={ControlPanel} />
          <Route path="about" Component={About} />

          <Route path="availablelicense" element={<Availablelicense/>} />    
          <Route path='activelicense' element={<Activelicense/>} />
          <Route path='expiredlicense' element={<Expiredlicense/>} />
          <Route path='licensekeyinfo' element={<LicenseKeyInfo/>} />
          <Route path="addmodule" Component={AddModule} />
          <Route path="clientmore" Component={ClientMore} />
          <Route path="incomedashboard" Component={IncomeDashboard} />
          <Route path="contact_us" Component={Contact_Us} />
          <Route path="clientregistration" Component={ClientRegistration} />
          <Route path="keygenerate" Component={KeyGenerate} />
          <Route path="editprofilepartner" Component={EditProfilePartner} />
          <Route path="editprofileuser" Component={EditProfileUser} />
          <Route path="status" Component={Status} />
          <Route path="compeardata" Component={CompearData} />
          <Route path="statusofkey" Component={StatusOfKey} />
          <Route path="validatekey" Component={ValidateKey}/>
          <Route path="partnermanagerapproval" Component={PartnerManagerApproval} />
          <Route path="finacialmanagerapproval" Component={FinacialManagerApproval} />
          <Route path="notification" Component={Notification} />
          <Route path="addclient" Component={AddClient} />
          <Route path="clientdetials" Component={ClientDetials} />
          <Route path="dashboard" Component={Dashboard} />
          <Route path="sendkey" Component={SendKey} />
          <Route path="keygenerateform" Component={KeyGenerateForm} />
          <Route path="module" Component={Module} />
          <Route path="privacypolicy" Component={PrivacyPolicy} />
          <Route path="profile" Component={Profile} />
          <Route path="termsconditions" Component={TermsConditions} />

          <Route path="moduledetails" Component ={ModuleDetails}/>
          

        </Route>
      </Routes>
    
    </BrowserRouter>

  );
}

export default App;
