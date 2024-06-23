import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PageHeader from '../components/CommonModal/pageHeader';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const AddClient = () => {
  const [clients, setClients] = useState([]);
  const [toggleState, setToggleState] = useState({});
  const navigate = useNavigate();

  const goToGenerate = (cid,pid) => {
    navigate(`/KeyGenerateForm?client=${cid}&partner=${pid}`);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://localhost:7295/api/EndClient/getEndClient');
        setClients(response.data); // Assuming response.data is an array of clients
      } catch (error) {
        console.error('Error fetching clients:', error);
      }
    };
    fetchData();
  }, []);

  const toggleText = (id) => {
    setToggleState((prevState) => ({
      ...prevState,
      [id]: !prevState[id]
    }));
  };

  return (
    <div className="flex flex-col overflow-x-auto">
      <PageHeader title={"Client Details"} />
      <div className="sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-x-auto">
            <div className="border dark:border-neutral-500">
              <table className="min-w-full text-sm font-light text-left">
                <thead className="font-medium border-b dark:border-neutral-500">
                  <tr>
                    <th scope="col" className="px-6 py-4">Client ID</th>
                    <th scope="col" className="px-6 py-4">Client Name</th>
                    <th scope="col" className="px-6 py-4">Email</th>
                    <th scope="col" className="px-6 py-4">Phone Number</th>
                    <th scope="col" className="px-6 py-4">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {clients.map((client, index) => (
                    <React.Fragment key={index}>
                      <tr className="border-b bg-neutral-100 dark:border-neutral-500">
                        <td className="px-6 py-4 whitespace-nowrap">{client.id}</td>
                        <td className="px-6 py-4 whitespace-nowrap">{client.name}</td>
                        <td className="px-6 py-4 whitespace-nowrap">{client.email}</td>
                        <td className="px-6 py-4 whitespace-nowrap">{client.phoneNumber}</td>
                        <td>
                          <button
                            onClick={() => toggleText(`moreDetails${index + 1}`)}
                            className="px-2 py-1 text-blue-500 transition-colors duration-200 bg-gray-100 border border-blue-500 rounded-md hover:text-indigo-500 focus:outline-none"
                          >
                            View More
                          </button>
                          <button onClick={() => goToGenerate(client.id,client.partnerId)} className="px-2 py-1 text-blue-500 transition-colors duration-200 bg-gray-100 border border-blue-500 rounded-md hover:text-indigo-500 focus:outline-none">
                            Generate License Key
                        </button>

                        </td>
                      </tr>
                      {toggleState[`moreDetails${index + 1}`] && (
                        <tr className="border-b bg-neutral-100 dark:border-neutral-500">
                          <td colSpan="5">
                            <div className="p-4 bg-white border-4 border-blue-100 rounded-md shadow-md">
                              <table className="w-full">
                                <tbody>
                                  <tr>
                                    <td className="font-bold">City:</td>
                                    <td>{client.city}</td>
                                  </tr>
                                  <tr>
                                    <td className="font-bold">Region:</td>
                                    <td>{client.region}</td>
                                  </tr>
                                  <tr>
                                    <td className="font-bold">Postal Code:</td>
                                    <td>{client.postalCode}</td>
                                  </tr>
                                  <tr>
                                    <td className="font-bold">Country:</td>
                                    <td>{client.country}</td>
                                  </tr>
                                  <tr>
                                    <td className="font-bold">Web Site:</td>
                                    <td>{client.website}</td>
                                  </tr>
                                  <tr>
                                    <td className="font-bold">Industry:</td>
                                    <td>{client.industry}</td>
                                  </tr>
                                  <tr>
                                    <td className="font-bold">Additional Info:</td>
                                    <td>{client.additionalInfo}</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </td>
                        </tr>
                      )}
                    </React.Fragment>
                  ))}
                  <tr>
                    <td colSpan="5" className="px-6 py-4">
                      <Link
                        to="/clientregistration"
                        className="px-2 py-1 text-blue-500 transition-colors duration-200 bg-gray-100 border border-blue-500 rounded-md hover:text-indigo-500 focus:outline-none"
                      >
                        Add New Client
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddClient;