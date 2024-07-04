import React, { useState, useEffect } from "react";
import Search from "../components/page/ControlPanel/Search";
import HTTPService from "../Service/HTTPService";

const AvailableTable = () => {
  const [clients, setClients] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchClients = async () => {
      setLoading(true);
      try {
        const response = await HTTPService.get("api/LicenseKey/info");
        const sortedData = response.data.sort(
          (a, b) => new Date(b.activationDate) - new Date(a.activationDate)
        );
        setClients(sortedData);
        setError(null);
      } catch (err) {
        setError("Failed to fetch data");
        setClients([]);
      }
      setLoading(false);
    };

    fetchClients();
  }, []);

  // Filter clients based on search input
  const filteredClients = clients.filter((client) =>
    client.name.toLowerCase().includes(searchInput.toLowerCase())
  );

  // Function to determine the color class for key status
  const getStatusClass = (status) => {
    switch (status) {
      case "Available":
        return "text-blue-500";
      case "Activated":
        return "text-green-500";
      case "Expired":
        return "text-red-500";
      default:
        return "";
    }
  };
  return (
    <div>
      <Search searchInput={searchInput} setSearchInput={setSearchInput} />
      <div className="container w-full px-2 mx-auto sm:px-6 lg:px-8">
        <div className="overflow-hidden shadow-md sm:rounded-lg">
          {loading ? (
            <p>Loading...</p>
          ) : error ? (
            <p className="text-red-500">{error}</p>
          ) : (
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-blue-200">
                <tr>
                  <th scope="col" className="px-6 py-3 text-xs font-medium tracking-wider text-left uppercase">Client ID</th>
                  <th scope="col" className="px-6 py-3 text-xs font-medium tracking-wider text-left uppercase">Client Name</th>
                  <th scope="col" className="px-6 py-3 text-xs font-medium tracking-wider text-left uppercase">Email Address</th>
                  <th scope="col" className="px-6 py-3 text-xs font-medium tracking-wider text-left uppercase">Issue Date</th>
                  <th scope="col" className="px-6 py-3 text-xs font-medium tracking-wider text-left uppercase">Expire Date</th>
                  <th scope="col" className="px-6 py-3 text-xs font-medium tracking-wider text-left uppercase">Key Status</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredClients.length > 0 ? filteredClients.map(client => (
                  <tr key={client.id} className="hover:bg-gray-100">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap">{client.id}</td>
                    <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">{client.name}</td>
                    <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">{client.email}</td>
                    <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">{new Date(client.activationDate).toLocaleDateString()}</td>
                    <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">{new Date(client.deactivatedDate).toLocaleDateString()}</td>
                    <td className={`px-2 py-2 ${getStatusClass(client.keyStatus)}`} > {client.keyStatus} </td>
                  </tr>
                )) : <tr><td colSpan="5" className="px-6 py-4 text-sm text-center text-gray-500">No clients found</td></tr>}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};


                     
export default AvailableTable;