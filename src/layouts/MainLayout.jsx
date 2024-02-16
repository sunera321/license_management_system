import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import Slidebar from './Slidebar';


const MainLayout = () => {

  return (
    
       <div className="min-h-screen bg-transparent">
      <Header />
      <Slidebar/>
      <div className="ml-12">
      <Outlet/>
      </div>
      
     
      <Footer />
    </div>
  );
};

export default MainLayout;
