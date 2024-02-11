import React from "react";
import PageHeader from "../components/CommonModal/pageHeader";

const statusOfKeyData = [
  {
    key: "1",
    ClientID: "01129A",
    ClientName: "Manchee",
    Progress : "Activated",
    IssueDate: "2018-12-03",
    ActivateDate: "2021-12-03"
  },
  {
    key: "2",
    ClientID: "01129A",
    ClientName: "Manchee",
    Progress : "In Progress",
    IssueDate: "2018-12-03",
    ActivateDate: "2021-12-03"
  },
  {
    key: "3",
    ClientID: "01129A",
    ClientName: "Manchee",
    Progress : "Activated",
    IssueDate: "2018-12-03",
    ActivateDate: "2021-12-03"
  },
  {
    key: "4",
    ClientID: "01129A",
    ClientName: "Manchee",
    Progress : "Not Use",
    IssueDate: "2018-12-03",
    ActivateDate: ""
  },
  {
    key: "5",
    ClientID: "01129A",
    ClientName: "Manchee",
    Progress : "In Progress",
    IssueDate: "2018-12-03",
    ActivateDate: "2021-12-03"
  },
  {
    key: "6",
    ClientID: "01129A",
    ClientName: "Manchee",
    Progress : "Not Use",
    IssueDate: "2018-12-03",
    ActivateDate: ""
  },
  {
    key: "7",
    ClientID: "01129A",
    ClientName: "Manchee",
    Progress : "Activated",
    IssueDate: "2018-12-03",
    ActivateDate: "2021-12-03"
  },
  {
    key: "8",
    ClientID: "01129A",
    ClientName: "Manchee",
    Progress : "Not Use",
    IssueDate: "2018-12-03",
    ActivateDate: ""
  },

  
]

const StatusOfKey = () => {
  const modifiedData = statusOfKeyData.map(item => {
    if (item.Progress === "Not Use") {
      return {
        ...item,
        ActivateDate: "Blocked"
      };
    }
    if (item.Progress === "In Progress") {
      return {
        ...item,
        ActivateDate: "Pending"
      };
    }
    return item;
  });
  return (
    <div className="pt-4">
    <PageHeader title="Status Of License Key"/>
    <div className="overflow-x-auto pt-7">
      <div className='md:ml-26 '>
        <table className="content-center w-4/6 mx-auto text-center md: mb-11 border-spacing-2 border-slate-500 caption-top">
          <thead className="bg-gray-200 " >
            <tr className="p-3">
              <th className='px-2 py-1 '>Client ID</th>
              <th className='px-2 py-1 '>Client Name</th> 
              <th className='px-2 py-1 '>Progress</th>
              <th className='px-2 py-1 '>Issue Date</th>
              <th className='px-2 py-1 '>Activate Date</th>
            </tr>
          </thead>
                    <tbody >
                    {modifiedData.map((item) => (
                        <tr key={statusOfKeyData.key}>
                          <td className='px-2 py-2 border-b-2 border-gray-200' >{item.ClientID}</td>
                          <td className='px-2 py-2 border-b-2 border-gray-200'>{item.ClientName}</td>
                          <td className={`px-2 py-2 border-b-2 border-gray-200 ${item.Progress === "Not Use" ? "text-red-500" : ""}`}>{item.Progress}</td>
                          <td className='px-2 py-2 border-b-2 border-gray-200'>{item.IssueDate}</td>
                          <td className={`px-2 py-2 border-b-2 border-gray-200 font-semibold ${item.Progress === "In Progress" ? "text-green-500" : ""}${item.Progress === "Not Use" ? "text-red-500" : ""}`}>{item.ActivateDate}</td>
                        </tr>
                      ))}
                       
                      
                    </tbody>
                    </table>
            </div>
            
        </div>
        </div>
    );
};

export default StatusOfKey; 