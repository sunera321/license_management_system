import React, { useState } from 'react';
import Search from '../components/page/ControlPanel/Search'; // Import the Search component
import Swal from 'sweetalert2';


const AvailableTable = () => {
  const [searchInput, setSearchInput] = useState("");

  // Sample data of clients
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
      name: "Maliban",
      email: "abh123@gmail.com",
      issueDate: "2018-12-03",
      expireDate: "2021-12-03"
    }
  ];
  // Filter clients based on search input
  const filteredClients = clients.filter(client => {
    return client.name.toLowerCase().includes(searchInput.toLowerCase());

    
  });
  
  const availableLicenseKeys = filteredClients.length; // Count of rows
  console.log("Available License Keys:", availableLicenseKeys); // Add this line to check if availableLicenseKeys is updated
  
  
  //console.log("Search Input:", searchInput); // Add this line to check if searchInput is updated

  // To handle the "View more" button click 
  const handleViewMore = (id) => {
    Swal.fire("This module is Available!");
  };

  

  return (
    <div>
      
      {/* Render the Search component */}
      <Search searchInput={searchInput} setSearchInput={setSearchInput} />
      <div className="container mx-auto px-2 sm:px-6 lg:px-8 w-3/4">
        <div className="overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left border border-gray-200">
            <thead className="text-xs uppercase bg-gray-50">
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
                <tr key={index} className="bg-white border-b border-gray-200 hover:bg-gray-50">
                  <td className="px-2 py-2">{client.id}</td>
                  <td className="px-2 py-2">{client.name}</td>
                  <td className="px-2 py-2">{client.email}</td>
                  <td className="px-2 py-2">{client.issueDate}</td>
                  <td className="px-2 py-2">{client.expireDate}</td>
                  <td className="px-2 py-2">
                    <button className="bg-gray-300 hover:bg-gray-500 text-black  py-2 px-3 rounded" onClick={() => handleViewMore(client.id)}>
                      View more
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    
  );
};

export default AvailableTable;
