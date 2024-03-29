import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import Slidebar from './Slidebar';
import backgroundImg from '../Images/MicrosoftTeams-image.png';


const MainLayout = () => {

  return (
    

       <div className="h-full  ">
      <Header />
      <Slidebar/>
      <div className="min-h-screen ml-12">
      <Outlet/>
      </div>
    </div>
  );
};

export default MainLayout;
