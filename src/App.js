import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from './page/Home';
import About from './page/About';
import Contact_Us from './page/Contact_Us';
import ControlPanel from './page/ControlPanel';
import KeyGenerate from './page/KeyGenerateForm';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>

          <Route index Component={Home} />
          <Route path="controlpanel" Component={ControlPanel} />
          <Route path="about" Component={About} />
          <Route path="contact_us" Component={Contact_Us} />
          <Route path="keygenerate" Component={KeyGenerate} />
          <Route path="editprofilepartner" Component={EditProfilePartner} />
          <Route path="editprofileuser" Component={EditProfileUser} />
          <Route path="status" Component={Status} />
          <Route path="partnermanagerapproval" Component={PartnerManagerApproval} />
          <Route path="finacialmanagerapproval" Component={FinacialManagerApproval} />
          <Route path="notification" Component={Notification} />
          <Route path="addclient" Component={AddClient} />
          <Route path="clientdetials" Component={ClientDetials} />
          <Route path="dashboard" Component={Dashboard} />
          <Route path="help" Component={Help} />
          <Route path="keygenerateform" Component={KeyGenerateForm} />
          <Route path="loging" Component={Loging} />
          <Route path="models" Component={Models} />
          <Route path="privacypolicy" Component={PrivacyPolicy} />
          <Route path="profile" Component={Profile} />
          <Route path="termsconditions" Component={TermsConditions} />
          

        </Route>
      </Routes>
      
    </BrowserRouter>
    
  );
}

export default App;
