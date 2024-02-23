import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import Slidebar from './Slidebar';



const MainLayout = () => {

  return (
    


       <div className="">



    



      <Header />
      <Slidebar/>
      <div className="min-h-screen ml-12">
      <Outlet/>
      </div>
      <Footer />

    </div>
  );
};

export default MainLayout;
