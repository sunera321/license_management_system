import React from "react";
import PageHeader from "../components/CommonModal/pageHeader";
import PageFooter from "../components/CommonModal/pageFooter";
import Page  from "../src/page/Expiredtable.jsx";


const Expiredlicense = () => {
    return (
      <div>
         
         <PageHeader title="Expired License Key"/>
         <Slidebar/>
         <Page/>
         <PageFooter/>
        
      </div>
    )
  }
export default Expiredlicense; 