import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header1 from "./Header1";
import Slidebar1 from './Slidebar1';

const MainLayout1 = () => {
  return (


<div className="h-full ">


    <Header1 />
    <div className="flex flex-1">
      <div className="mr-6">
        <Slidebar1 />  
      </div>
        <div className="flex-1 pl-5">
          <Outlet />
        </div>
   </div>
   <Footer />
</div>

  );
};

export default MainLayout1;