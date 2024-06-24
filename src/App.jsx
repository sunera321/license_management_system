import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import Home from './page/Home';
import MainHome from './page/MainHome';
import About from './page/About';
import AddModule from './page/AddModule';
import Contact_Us from './page/Contact_Us';
import ControlPanel from './page/ControlPanel';
import KeyGenerate from './page/KeyGenerateForm';
import EditProfilePartner from './page/EditProfilePartner';
import EditProfileUser from './page/EditProfileUser';
import Status from './page/Status';
import PartnerManagerApproval from './page/PartnerManagerApproval';
import FinacialManagerApproval from './page/FinacialManagerApproval';
import Notification from './page/Notification';
import AddClient from './page/AddClient';
import ClientDetials from './page/ClientDetials';
import Dashboard from './page/Dashboard';
import Help from './page/Help';
import KeyGenerateForm from './page/KeyGenerateForm';
import Module from './page/Module';
import PrivacyPolicy from './page/PrivacyPolicy';
import Profile from './page/Profile';
import TermsConditions from './page/TermsConditions';
import StatusOfKey from './page/StatusOfKey';
import Login from './page/Login';
import Register from './page/Register'; 
import ClientRegistration from './page/ClientRegistration';
import ClientMore from './page/ClientMore'; 
import ValidateKey from './page/validatekey';
import { useNavigate } from 'react-router-dom';
import KeyGenerateForm2 from './page/KeyGenerateForm2';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/login" element={<Login />} /> 
        <Route path="/register" element={<Register />} /> 
        <Route path="/" element={<MainLayout />}>
          <Route path="mainhome" element={<MainHome />} />
          <Route path="controlpanel" element={<ControlPanel />} />
          <Route path="about" element={<About />} />
          <Route path="addmodule" element={<AddModule />} />
          <Route path="clientmore" element={<ClientMore />} />
          <Route path="contact_us" element={<Contact_Us />} />
          <Route path="clientregistration" element={<ClientRegistration />} />
          <Route path="keygenerate" element={<KeyGenerate />} />
          <Route path="editprofilepartner" element={<EditProfilePartner />} />
          <Route path="editprofileuser" element={<EditProfileUser />} />
          <Route path="status" element={<Status />} />
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
          <Route path="keyGenerateform2" element={<KeyGenerateForm2 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
