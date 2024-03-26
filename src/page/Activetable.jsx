import React from "react";


const clients = [
  { 
    id: "01129A", 
    name: "Manchee", 
    email: "abh123@gmail.com", 
    issueDate: "2018-12-03", 
    expireDate: "2021-12-03"
  },
  { 
    id: "01129A", 
    name: "Manchee", 
    email: "abh123@gmail.com", 
    issueDate: "2018-12-03", 
    expireDate: "2021-12-03"
  },
  { 
    id: "01129A", 
    name: "Manchee", 
    email: "abh123@gmail.com", 
    issueDate: "2018-12-03", 
    expireDate: "2021-12-03"
  },
  { 
    id: "01129A", 
    name: "Manchee", 
    email: "abh123@gmail.com", 
    issueDate: "2018-12-03", 
    expireDate: "2021-12-03"
  },
  { 
    id: "01129A", 
    name: "Manchee", 
    email: "abh123@gmail.com", 
    issueDate: "2018-12-03", 
    expireDate: "2021-12-03"
  }

];

const ActiveTable = () => {
  return (
    <div className="overflow-x-auto">
      <div className="md:ml-26">
        <table className="mx-auto text-center content-center md:w-auto w-full mb-11 border-spacing-2 border-slate-500 caption-top">
          <thead className="bg-gray-200">
            <tr>
              <th className="py-3 px-4 md:px-6 text-l md:text-base">Client ID</th>
              <th className="px-4 md:px-6 py-3 text-xl md:text-base">Client Name</th>
              <th className="px-4 md:px-6 py-3 text-xl md:text-base">Email Address</th>
              <th className="px-4 md:px-6 py-3 text-xl md:text-base">Issue Date</th>
              <th className="px-4 md:px-6 py-3 text-xl md:text-base">Expire Date</th>
            </tr>
          </thead>
          <tbody>
            {clients.map((client, index) => (
              <tr key={index}>
                <td className="py-3 text-lg px-4">{client.id}</td>
                <td className="py-3 text-lg px-4">{client.name}</td>
                <td className="py-3 text-lg px-4">{client.email}</td>
                <td className="py-3 text-lg px-4">{client.issueDate}</td>
                <td className="py-3 text-lg px-4">{client.expireDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default  ActiveTable;
