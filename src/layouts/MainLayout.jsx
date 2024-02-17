import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import Slidebar from './Slidebar';


const MainLayout = () => {

  return (
    
       <div className="h-full bg-gradient-to-b from-cyan-400 via-blue-500 to-indigo-900 ">
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
