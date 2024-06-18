import React, { useState } from 'react';
import Search from '../components/page/ControlPanel/Search'; // Import the Search component


// Sample data of clients
const clients = [
  {
    id: "01120A",
    name: "Manchee",
    email: "abh123@gmail.com",
    issueDate: "2018-12-03",
    expireDate: "2021-12-03"
  },

  {
    id: "01121A",
    name: "Sri Lanka Airline",
    email: "abh123@gmail.com",
    issueDate: "2018-12-03",
    expireDate: "2021-12-03"
  },
  {
    id: "01122A",
    name: "Maliban",
    email: "abh123@gmail.com",
    issueDate: "2018-12-03",
    expireDate: "2021-12-03"
  },
  {
    id: "01125A",
    name: "Manchee",
    email: "abh123@gmail.com",
    issueDate: "2018-12-03",
    expireDate: "2021-12-03"
  },

  {
    id: "01126A",
    name: "Manchee",
    email: "abh123@gmail.com",
    issueDate: "2018-12-03",
    expireDate: "2021-12-03"
  },

  {
    id: "01127A",
    name: "Maliban", 
    email: "abh123@gmail.com",
    issueDate: "2018-12-03",
    expireDate: "2024-12-03"
  }, {
    id: "01129A",
    name: "Qatar Airways", 
    email: "abh123@gmail.com",
    issueDate: "2018-12-03",
    expireDate: "2024-12-03"
  }


];


const ActiveTable = () => {
  const [searchInput, setSearchInput] = useState("");

  const filteredClients = clients.filter(client => {
    return client.name.toLowerCase().includes(searchInput.toLowerCase());
  });

  console.log("Search Input:", searchInput); //To check if searchInput is updated

  return (
    <div>
      {/* Render the Search component */}
      <Search searchInput={searchInput} setSearchInput={setSearchInput} />

      <div className="container mx-auto px-2 sm:px-6 lg:px-8 w-3/4">
        <div className="overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left border border-gray-200">
            <thead className="text-xs uppercase bg-emerald-200">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Client ID
                </th>
                <th scope="col" className="px-6 py-3">
                  Client Name
                </th>

                <th scope="col" className="px-6 py-3">
                  Email Address
                </th>
                <th scope="col" className="px-6 py-3">
                  Issue Date
                </th>
                <th scope="col" className="px-6 py-3">
                  Expire Date
                </th>
    
              </tr>
            </thead>
            {/* Mapping through filtered clients data to render table rows */}
            <tbody>
              {filteredClients.map((client, index) => (
                <tr key={index} className="bg-white border-b border-gray-200 hover:bg-gray-100">
                  <td className="px-2 py-2">{client.id}</td>
                  <td className="px-2 py-2">{client.name}</td>
                  <td className="px-2 py-2">{client.email}</td>
                  <td className="px-2 py-2">{client.issueDate}</td>
                  <td className="px-2 py-2">{client.expireDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ActiveTable;