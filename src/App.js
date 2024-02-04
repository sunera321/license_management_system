import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from './page/Home';
// //import About from './page/About';
// import Contact_Us from './page/Contact_Us';
import ControlPanel from './page/ControlPanel';
//import KeyGenerate from './page/KeyGenerateForm';
//import EditProfilePartner from './page/EditProfilePartner';
//import EditProfileUser from './page/EditProfileUser';
import Status from './page/Status';
//import PartnerManagerApproval from './page/PartnerManagerApproval';
//import FinacialManagerApproval from './page/FinacialManagerApproval ';
import Notification from './page/Notification';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index Component={Home} />
          <Route path="controlpanel" Component={ControlPanel} />
          <Route path="about" Component={Status} />
          <Route path="contact_us" Component={Notification} />
        </Route>
      </Routes>
      
    </BrowserRouter>
    
  );
}

export default App;
