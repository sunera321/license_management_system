import React, { useState } from 'react';
import Search from '../components/page/ControlPanel/Search'; // Import the Search component



const AvailableTable = () => {
  const [searchInput, setSearchInput] = useState("");


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
      name: "Manchee",
      email: "abh123@gmail.com",
      issueDate: "2018-12-03",
      expireDate: "2024-12-03"
    },
    {
      id: "01122A",
      name: "Manchee",
      email: "abh123@gmail.com",
      issueDate: "2018-12-03",
      expireDate: "2024-12-03"
    },
    {
      id: "01123A",
      name: "Manchee",
      email: "abh123@gmail.com",
      issueDate: "2018-12-03",
      expireDate: "2024-12-03"
    },
    {
      id: "01125A",
      name: "Maliban",
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
  // Filter clients based on search input
  const filteredClients = clients.filter(client => {
    return client.name.toLowerCase().includes(searchInput.toLowerCase());


  });

  //console.log("Search Input:", searchInput); // Add this line to check if searchInput is updated



  return (
    <div>

      {/* Render the Search component */}
      <Search searchInput={searchInput} setSearchInput={setSearchInput} />
      <div className="container mx-auto px-2 sm:px-6 lg:px-8 w-3/4">
        <div className="overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left border border-gray-200">
            <thead className="text-xs uppercase bg-blue-200">
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

export default AvailableTable;



// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Search from '../components/page/ControlPanel/Search'; // Import the Search component

// const AvailableTable = () => {
//   const [clients, setClients] = useState([]);
//   const [searchInput, setSearchInput] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchClients = async () => {
//       setLoading(true);
//       try {
//         const response = await axios.get('https://localhost:7295/api/LicenseKey'); // Fetch all clients
//         // Filter clients for 'available' key status client-side
//         const availableClients = response.data.filter(client => client.key_status === 'Available');
//         console.log('API Response:', response.data); // Check what
//         setClients(availableClients);
//         setError(null);
//       } catch (err) {
//         setError('Failed to fetch data');
//         setClients([]);
//       }
//       setLoading(false);
//     };
  
//     fetchClients();
//   }, []);
  

//   // Filter clients based on search input
//   const filteredClients = clients.filter(client =>
//     client.name.toLowerCase().includes(searchInput.toLowerCase())
//   );

//   return (
//     <div>
//       <Search searchInput={searchInput} setSearchInput={setSearchInput} />
//       <div className="container mx-auto px-2 sm:px-6 lg:px-8 w-3/4">
//         <div className="overflow-x-auto shadow-md sm:rounded-lg">
//           {loading ? (
//             <p>Loading...</p>
//           ) : error ? (
//             <p>Error: {error}</p>
//           ) : (
//             <table className="w-full text-sm text-left border border-gray-200">
//               <thead className="text-xs uppercase bg-blue-200">
//                 <tr>
//                   <th scope="col" className="px-6 py-3">Client ID</th>
//                   <th scope="col" className="px-6 py-3">Client Name</th>
//                   <th scope="col" className="px-6 py-3">Email Address</th>
//                   <th scope="col" className="px-6 py-3">Issue Date</th>
//                   <th scope="col" className="px-6 py-3">Expire Date</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {filteredClients.length > 0 ? filteredClients.map(client => (
//                   <tr key={client.key_name}>
//                     <td className="px-2 py-2">{client.id}</td>
//                     <td className="px-2 py-2">{client.name}</td>
//                     <td className="px-2 py-2">{client.email}</td>
//                     <td className="px-2 py-2">{client.issueDate}</td>
//                     <td className="px-2 py-2">{client.expireDate}</td>
//                   </tr>
//                 )) : <tr><td colSpan="5">No clients found</td></tr>}
//               </tbody>
//             </table>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AvailableTable;