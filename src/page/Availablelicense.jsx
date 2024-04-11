import React from "react";
import PageHeader from "../components/CommonModal/pageHeader";
import SearchBar from '../components/page/ControlPanel/Search' ; 
import AvailableTable from "./Availabletable";


const Availablelicense = () => {
    return (
      <div>
         <PageHeader title="Issued License Keys"/>
         <SearchBar/>
         <AvailableTable/>
        
      </div>
    )
  }
export default Availablelicense;