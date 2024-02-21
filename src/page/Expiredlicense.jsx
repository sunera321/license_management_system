import React from "react";
import PageHeader from "../components/CommonModal/pageHeader";
import SearchBar from '../components/page/ControlPanel/searchBar' ;
import ExpiredTable from "./Expiredtable";

const Expiredlicense = () => {
    return (
      <div>
         <PageHeader title="Expired License Key"/>
         <SearchBar/>
          <ExpiredTable/>

         
      </div>
    )
  }
export default Expiredlicense;