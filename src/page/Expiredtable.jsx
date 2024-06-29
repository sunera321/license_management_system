import React, { useState , useEffect } from 'react';
import axios from 'axios';
import Search from '../components/page/ControlPanel/Search'; // Import the Search component
import HTTPService from '../Service/HTTPService';

const ExpiredTable = () => {
  const [clients, setClients] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchClients = async () => {
      setLoading(true);
      try {
        const response = await HTTPService.get('api/LicenseKey/info'); 
        const expiredClients = response.data.filter(client => client.keyStatus === 'Expired'); // Filter clients with 'Expired' status
        console.log('API Response:', response.data); 
        setClients(expiredClients);
        setError(null);
      } catch (err) {
        setError('Failed to fetch data');
        setClients([]);
      }
      setLoading(false);
    };
  
    fetchClients();
  }, []);
  

  // Filter clients based on search input
  const filteredClients = clients.filter(client =>
    client.name.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <div>
      <Search searchInput={searchInput} setSearchInput={setSearchInput} />
      <div className="container w-3/4 px-2 mx-auto sm:px-6 lg:px-8">
        <div className="overflow-x-auto shadow-md sm:rounded-lg">
          {loading ? (
            <p>Loading...</p>
          ) : error ? (
            <p>Error: {error}</p>
          ) : (
            <table className="w-full text-sm text-left border border-gray-200">
              <thead className="text-xs uppercase bg-violet-200">
                <tr>
                  <th scope="col" className="px-6 py-3">Client ID</th>
                  <th scope="col" className="px-6 py-3">Client Name</th>
                  <th scope="col" className="px-6 py-3">Email Address</th>
                  <th scope="col" className="px-6 py-3">Expire Date</th>
                </tr>
              </thead>
              <tbody>
                {filteredClients.length > 0 ? filteredClients.map(client => (
                  <tr key={client.key_name}>
                    <td className="px-2 py-2">{client.id}</td>
                    <td className="px-2 py-2">{client.name}</td>
                    <td className="px-2 py-2">{client.email}</td>
                    <td className="px-2 py-2">{client.expireDate}</td>
                  </tr>
                )) : <tr><td colSpan="5">No clients found</td></tr>}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExpiredTable;