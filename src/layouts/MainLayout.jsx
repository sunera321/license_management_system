import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./sidebar";


const MainLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Sidebar />
      <Footer />
    </div>
  );
};

export default MainLayout;
