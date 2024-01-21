import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from './page/Home';
import About from './page/About';
import Contact_Us from './page/Contact_Us';
import ControlPanel from './page/ControlPanel';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index Component={Home} />
          <Route path="controlpanel" Component={ControlPanel} />
          <Route path="about" Component={About} />
          <Route path="contact_us" Component={Contact_Us} />


        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
