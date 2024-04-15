import React from "react";
import PageHeader from "../components/CommonModal/pageHeader";
import SearchBar from '../components/page/ControlPanel/Search' ; 
import ActiveTable from "./Activetable";


const Activelicense = () => {
    return (
      <div>
         <PageHeader title="Active License Key"/>
         <SearchBar/>
         <ActiveTable/>
      </div>
    )
  }
export default Activelicense;