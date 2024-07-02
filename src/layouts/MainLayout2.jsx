import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import Slidebar2 from './Slidebar2';

const MainLayout2 = () => {
  return (


<div className="h-full ">


    <Header />
    <div className="flex flex-1">
      <div className="mr-6">
        <Slidebar2 />  
      </div>
        <div className="flex-1 pl-5">
          <Outlet />
        </div>
   </div>
   <Footer />
</div>

  );
};

export default MainLayout2;