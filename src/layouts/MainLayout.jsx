import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import Slidebar from './Slidebar';



const MainLayout = () => {

  return (
    

      <><Header /> 
      <Slidebar />
      <div className="min-h-screen ml-12">
      <Outlet />
      </div>
      <Footer /></>
  );
};

export default MainLayout;
