import React from "react";
import PageHeader from "../components/CommonModal/pageHeader";
import ExpiredTable from "./Expiredtable";

const Expiredlicense = () => {
    return (
      <div>
         <PageHeader title="Expired License Key"/>
         <ExpiredTable/>

         
      </div>
    )
  }
export default Expiredlicense;