import React from "react";
import PageHeader from "../components/CommonModal/pageHeader";
import SearchBar from '../components/page/ControlPanel/searchBar' ; 
import AvailableTable from "./Availabletable";

const Availablelicense = () => {
    return (
      <div>
         <PageHeader title="Available License Key"/>
         <SearchBar/>
         <AvailableTable/>
        
      </div>
    )
  }
export default Availablelicense;