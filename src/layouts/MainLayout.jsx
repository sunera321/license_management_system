import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import Slidebar from './Slidebar';


const MainLayout = () => {

  return (
    
       <div className="min-h-screen bg-gradient-to-t from-gray-700 via-transparent to-gray-500">
      <Header />
      <Slidebar/>
     
      <Outlet/>
     
      <Footer />
    </div>
  );
};

export default MainLayout;
