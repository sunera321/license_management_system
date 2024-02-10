import React from "react";
import PageHeader from "../components/CommonModal/pageHeader";
import ExpiredTable from "./Expiredtable";
import SearchBar from '../components/page/ControlPanel/searchBar' ; 

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