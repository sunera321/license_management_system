import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaCalendarAlt, FaGlobe, FaBuilding, FaUser } from 'react-icons/fa';
import BlueButton from '../../CommonModal/BlueButton';

const Clients = [
  {
    key: 1,
    name: 'Sri Lanka Air Line',
    client_id: '0213',
    Activate: '2020-12-05',
    Due: '2020-12-05',
    modules: ['Cloud-based HR solution Hsenid', 'Cloud-based HR solution Hsenid', 'Cloud-based HR solution Hsenid'],
  },


];
const formatDate = (datetimeString) => {
  const date = new Date(datetimeString);
  // Check if it's a valid date object
  if (isNaN(date.getTime())) {
    return "Invalid Date";
  }
  // Format the date to display as YYYY-MM-DD
  return date.toISOString().split('T')[0];
};

const ControlPanel = () => {
  const [popup, setPopup] = useState(false);
  const [clients, setClients] = useState([]);
  const [selectedClient, setSelectedClient] = useState(null);
  const [ClinetContact, setClinetContact] = useState(false);
  const [Clintmail, setClintmail] = useState(null);
  const [searchInput, setSearchInput] = useState('');

  const addpopup = (client) => {
    setPopup(true);
    setSelectedClient(client);  
  }
  const closepopup = () => {
    setPopup(false);
    setSelectedClient(null);
  }
  const conatctClinet = (client) => {
    setClinetContact(true);
    setClintmail(client);

  }
  const conatctClinetclose = () => {
    setClinetContact(false);
    setClintmail(null);

  }
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://localhost:7295/api/ClientPanal');
        setClients(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  const line = Clients.reduce((resultArray, item, index) => {
    const rowIndex = 3;
    if (!resultArray[rowIndex]) {
      resultArray[rowIndex] = [];
    }
    resultArray[rowIndex].push(item);
    return resultArray;
  }, []);
  
  const filteredClients = clients.filter(client =>
    client.name.toLowerCase().includes(searchInput.toLowerCase())
  );


  return (
    <div>
         <div class="mb-3 ml-8">
        <div class="relative mb-7 flex w-3/6 flex-wrap items-stretch mx-auto mt-7 ">
          <input
            type="search"
            class="relative m-0 block min-w-0 flex-auto rounded border border-solid border-neutral-500 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-400 dark:placeholder:text-neutral-400 dark:focus:border-primary"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="button-addon2"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <span
            class="input-group-text flex items-center whitespace-nowrap rounded px-3 py-1.5 text-center text-base font-normal text-neutral-700 dark:text-neutral-500"
            id="basic-addon2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              class="h-5 w-5">
              <path
                fill-rule="evenodd"
                d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                clip-rule="evenodd" />
            </svg>
          </span>
        </div>
      </div>
    
      {line.map((row, rowIndex) => (
        
        <div key={rowIndex} className="flex flex-wrap justify-center gap-10 mt-5 mb-8 ml-18 mr-18 ">
            {filteredClients.map(client => (
            <div
              key={client.id}
              className="h-auto w-[450px]  bg-[#CCC7C7] rounded-lg pb-3 shadow-lg pl-7 pr-7   lg:w-1/3 xl:w-1/3 ">
              <div className="flex gap-6 pt-2 justify-evenly">
                <div className="text-[26px] font-normal">{client.name}</div>
                <div className="pt-3 text-[16px]">ID-{client.id}</div>
              </div>
              <div className="mx-auto bg-white h-0.5 w-7/8 mt-"></div>
              <div className="flex justify-evenly pt-3   gap-2.5">
                <div className="text-[16px] gap-1.5 flex">
                  <div className="w-4 h-4 mt-1.5 bg-[#19F000] border border-black rounded-full"></div>
                  <div className="text-[16px]">Activate:{formatDate(client.activetDta)}</div>
                </div>
                <div className="text-[16px] gap-1.5 flex">
                  <div className="w-4 h-4 mt-1.5 bg-[#F10000] border border-black rounded-full"></div>
                  <div className="text-[16px]">Due:{formatDate(client.deactivatedDta)}</div>
                </div>
              </div>
              <div className="text-[22px] text-center mt-2 ">Registered Modules </div>
              <div className="flex flex-col items-center justify-center -mt-0.5">
                <div className='p-3 mt-0.5 w-5/6 h-auto bg-[#EBECEC] mx-auto  text-[16px] rounded-lg text-center'>
                  {/* {client.modules.map((module, index) => (                    
                      <div key={index}>{module}</div>
                    ))} */}
                  {client.module}
                </div>
                <div>
                  <button value="View More" onClick={() => addpopup(client)} className="mt-3 p-1 text-white bg-[#111158] rounded-md font-medium text-[15px] w-[100px] hover:bg-slate-100 hover:text-black">
                    View More
                  </button>

                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
      {popup && selectedClient && (
        <div className="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-gray-800 bg-opacity-50">
          <div className="p-8 pb-4 pt-4 pb-10 bg-white rounded-lg w-[70%] h-[80%] overflow-auto">
            <h2 className="mb-4 text-2xl font-semibold text-center text-gray-800">{selectedClient.name} Details</h2>
            <div className='mt-5 ml-10'>
              <table className="w-full">
                <tbody>
                  <tr className='h-10'>
                    <td className="flex items-center text-lg text-gray-700 w-[26%]">
                      <FaUser className="mr-2" />
                      <strong>ID</strong>
                    </td>
                    <td className="mb-5 text-lg text-gray-700 w-[74%]"><strong className='pr-5'>:</strong>{selectedClient.id}</td>
                  </tr>
                  <tr className='h-10'>
                    <td className="flex items-center text-lg text-gray-700">
                      <FaEnvelope className="mr-2" />
                      <strong>Email</strong>
                    </td>
                    <td className="mb-5 text-lg text-gray-700"><strong className='pr-5'>:</strong>{selectedClient.email}</td>
                  </tr>
                  <tr className='h-10'>
                    <td className="flex items-center text-lg text-gray-700">
                      <FaPhone className="mr-2" />
                      <strong>Phone Number</strong>
                    </td>
                    <td className="mb-5 text-lg text-gray-700"><strong className='pr-5'>:</strong>{selectedClient.phoneNumber}</td>
                  </tr>
                  <tr className='h-10'>
                    <td className="flex items-center text-lg text-gray-700">
                      <FaMapMarkerAlt className="mr-2" />
                      <strong>Address:</strong>
                    </td>
                    <td className="mb-5 text-lg text-gray-700"><strong className='pr-5'>:</strong>{selectedClient.address}</td>
                  </tr>
                  <tr className='h-10'>
                    <td className="flex items-center text-lg text-gray-700">
                      <FaBuilding className="mr-2" />
                      <strong>City:</strong>
                    </td>
                    <td className="mb-5 text-lg text-gray-700"><strong className='pr-5'>:</strong>{selectedClient.city}</td>
                  </tr>
                  <tr className='h-10'>
                    <td className="flex items-center text-lg text-gray-700">
                      <FaBuilding className="mr-2" />
                      <strong>Region:</strong>
                    </td>
                    <td className="mb-5 text-lg text-gray-700"><strong className='pr-5'>:</strong>{selectedClient.region}</td>
                  </tr>
                  <tr className='h-10'>
                    <td className="flex items-center text-lg text-gray-700">
                      <FaMapMarkerAlt className="mr-2" />
                      <strong>Postal Code</strong>
                    </td>
                    <td className="mb-5 text-lg text-gray-700"><strong className='pr-5'>:</strong>{selectedClient.postalCode}</td>
                  </tr>
                  <tr className='h-10'>
                    <td className="flex items-center text-lg text-gray-700">
                      <FaCalendarAlt className="mr-2" />
                      <strong>Activate</strong>
                    </td>
                    <td className="mb-5 text-lg text-gray-700"><strong className='pr-5'>:</strong>{formatDate(selectedClient.activetDta)}</td>
                  </tr>
                  <tr className='h-10'>
                    <td className="flex items-center text-lg text-gray-700">
                      <FaCalendarAlt className="mr-2" />
                      <strong>Due</strong>
                    </td>
                    <td className="mb-5 text-lg text-gray-700"><strong className='pr-5'>:</strong>{formatDate(selectedClient.deactivatedDta)}</td>
                  </tr>
                  <tr className='h-10'>
                    <td className="flex items-center text-lg text-gray-700">
                      <FaCalendarAlt className="mr-2" />
                      <strong>Registration Date</strong>
                    </td>
                    <td className="mb-5 text-lg text-gray-700"><strong className='pr-5'>:</strong>{selectedClient.registrationDate}</td>
                  </tr>
                  <tr className='h-10'>
                    <td className="flex items-center text-lg text-gray-700">
                      <FaGlobe className="mr-2" />
                      <strong>Website</strong>
                    </td>
                    <td className="mb-5 text-lg text-gray-700"><strong className='pr-5'>:</strong>{selectedClient.website}</td>
                  </tr>
                  <tr className='h-10'>
                    <td className="flex items-center text-lg text-gray-700">
                      <FaBuilding className="mr-2" />
                      <strong>Industry</strong>
                    </td>
                    <td className="mb-5 text-lg text-gray-700"><strong className='pr-5'>:</strong>{selectedClient.industry}</td>
                  </tr>
                  <tr className='h-10'>
                    <td className="flex items-center text-lg text-gray-700">
                      <strong>Additional Info</strong>
                    </td>
                    <td className="mb-5 text-lg text-gray-700"><strong className='pr-5'>:</strong>{selectedClient.additionalInfo}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="flex justify-between">
              <button
                className="mt-3 p-1 text-white bg-[#111158] rounded-md font-medium text-[15px] w-[100px] hover:bg-slate-100 hover:text-black"
                onClick={conatctClinet}
              >
                Contact
              </button>
              <button
                className="mt-3 p-1 text-white bg-[#111158] rounded-md font-medium text-[15px] w-[100px] hover:bg-slate-100 hover:text-black"
                onClick={closepopup}
              >
                Close
              </button>
            </div>
          </div>


        </div>

      )}
      <div>
        {ClinetContact && Clintmail && (
          <div className="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-gray-800 bg-opacity-50">
            <div className="p-8 pb-4 pt-1 pb-10  bg-slate-300 rounded-lg w-[50%] h-[60%] overflow-auto">
              <div >
                <button
                  className=" text-black  font-medium text-[15px]  pl-[540px]"
                  onClick={conatctClinetclose}>
                  x
                </button>
                <div className='text-[20px] font-semibold text-center mb-3'>Send e-mail from {Clintmail.name} <div />
                </div>
              </div>
              <form className='pt-5 '>  
                <table>
                  <tbody>
                    <tr className='h-[50px]'>
                      <td className='font-semibold '>Email:</td>
                      <td className='pl-4 '>
                        <input
                        className='w-[300px] h-[30px] border-1 border-black rounded-md pl-2'
                          placeholder={Clintmail.email}
                          type="email"
                          id="email"
                          name="email"
                        />
                      </td>
                    </tr>
                    <tr className='h-[50px]'>
                    <td className='font-semibold '>Subject:</td>
                    <td className='pl-4 '>
                        <input
                        className='w-[300px] h-[30px] border-1 border-black rounded-md pl-2'
                          type="text"
                          id="subject"
                          name="subject"
                        />
                      </td>
                    </tr>
                    <tr className='h-[50px]'>
                    <td className='font-semibold '>Description:</td>
                    <td className='pl-4 '>
                        <textarea
                        className='w-[300px] border-1 border-black rounded-md pl-2'
                          id="description"
                          name="description"
                          rows="4"
                          cols="50"
                          required
                        ></textarea>
                      </td>
                    </tr>
                    <tr className='h-[50px]'>
                      <td></td>
                      <td className=' pl-52'>
                        <input
                          type="submit"
                          value="Send"
                          className="mt-3 p-1 text-white bg-[#111158] rounded-md font-medium text-[15px] w-[100px] hover:bg-slate-100 hover:text-black"
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </form>


            </div>
          </div>

        )}
      </div>
    </div>
    
  );
};

export default ControlPanel;
