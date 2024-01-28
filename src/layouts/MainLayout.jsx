import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import Slidebar from './Slidebar';


const MainLayout = () => {

  return (
    <div>
      <Header />
      <Slidebar/> 
      <Outlet/>
      <Footer />
    </div>
  );
};

export default MainLayout;