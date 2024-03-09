import React from 'react';
import PageHeader from '../components/CommonModal/pageHeader';

const AddClient = ({ client }) => {

  const toggleText = (id) => {
    const element = document.getElementById(id);
    if (element.classList.contains('hidden')) {
      element.classList.remove('hidden');
    } else {
      element.classList.add('hidden');
    }
  };

  return (
    <div className="flex flex-col overflow-x-auto">
      <PageHeader title={"Client Details"} />
      <div className="sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-x-auto">
            <div className="border dark:border-neutral-500">
              <table className="min-w-full text-left text-sm font-light">
                <thead className="border-b font-medium dark:border-neutral-500">
                  <tr>
                    <th scope="col" className="px-6 py-4">#</th>
                    <th scope="col" className="px-6 py-4">Client ID</th>
                    <th scope="col" className="px-6 py-4">Client Name</th>
                    <th scope="col" className="px-6 py-4">Email</th>
                    <th scope="col" className="px-6 py-4">Phone Number</th>
                    <th scope="col" className="px-6 py-4">Address</th>

                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b bg-neutral-100 dark:border-neutral-500 dark:bg-neutral-700">
                    <td className="whitespace-nowrap px-6 py-4 font-medium">1</td>
                    <td className="whitespace-nowrap px-6 py-4">00012</td>
                    <td className="whitespace-nowrap px-6 py-4">Sri Lankan Airlines</td>
                    <td className="whitespace-nowrap px-6 py-4">reservations@srilankan.com</td>
                    <td className="whitespace-nowrap px-6 py-4">+94117 77 1979</td>
                    <td className="whitespace-nowrap px-6 py-4">Katunayake</td>
                    <td>
                      <button
                        onClick={() => toggleText('moreDetails1')}
                        className="text-blue-500 transition-colors duration-200 hover:text-indigo-500 focus:outline-none"
                      >
                        View More
                      </button>
                    </td>
                    <td>
                      <button class="text-blue-500 transition-colors duration-200 hover:text-indigo-500 focus:outline-none">
                        Generate license key
                      </button> </td>
                  </tr>
                  <tr className="border-b bg-neutral-100 dark:border-neutral-500 dark:bg-neutral-700 hidden" id="moreDetails1">
                    <td colSpan="7">
                      <div className="p-4 bg-white border border-gray-200 rounded-md shadow-md">
                        <p>City: Colombo</p>
                        <p>Region: Sri Lanka</p>
                        <p>Postal Code: 560789</p>
                        <p>Country: Sri Lanka</p>
                        <p>Web Site: www.srilankan.com</p>
                        <p>Industry: Tourism</p>
                        <p>Selected Modules: 00001</p>
                        <p>Additional Info: These are the Additional details about Sri Lankan</p>
                        {/* Add other additional details here */}
                      </div>
                    </td>
                  </tr>

                  <tr className="border-b  dark:border-neutral-500 dark:bg-neutral-700">
                    <td className="whitespace-nowrap px-6 py-4 font-medium">2</td>
                    <td className="whitespace-nowrap px-6 py-4">00012</td>
                    <td className="whitespace-nowrap px-6 py-4">Sri Lankan Airlines</td>
                    <td className="whitespace-nowrap px-6 py-4">reservations@srilankan.com</td>
                    <td className="whitespace-nowrap px-6 py-4">+94117 77 1979</td>
                    <td className="whitespace-nowrap px-6 py-4">Katunayake</td>
                    <td>
                      <button
                        onClick={() => toggleText('moreDetails2')}
                        className="text-blue-500 transition-colors duration-200 hover:text-indigo-500 focus:outline-none"
                      >
                        View More
                      </button>
                    </td>
                    <td>
                      <button class="text-blue-500 transition-colors duration-200 hover:text-indigo-500 focus:outline-none">
                        Generate license key
                      </button> </td>
                  </tr>
                  <tr className="border-b bg-neutral-100 dark:border-neutral-500 dark:bg-neutral-700 hidden" id="moreDetails2">
                    <td colSpan="7">
                      <div className="p-4 bg-white border border-gray-200 rounded-md shadow-md">

                        <p>City: Malambe</p>
                        <p>Region: Sri Lanka</p>
                        <p>Postal Code: 560789</p>
                        <p>Country: Sri Lanka</p>
                        <p>Web Site: www.srilankan.com</p>
                        <p>Industry: Tourism</p>
                        <p>Selected Modules: 00001</p>
                        <p>Additional Info: These are the Additional details about Sri Lankan</p>
                        {/* Add other additional details here */}
                      </div>
                    </td>
                  </tr>

                  <tr className="border-b bg-neutral-100 dark:border-neutral-500 dark:bg-neutral-700">
                    <td className="whitespace-nowrap px-6 py-4 font-medium">3</td>
                    <td className="whitespace-nowrap px-6 py-4">00012</td>
                    <td className="whitespace-nowrap px-6 py-4">Sri Lankan Airlines</td>
                    <td className="whitespace-nowrap px-6 py-4">reservations@srilankan.com</td>
                    <td className="whitespace-nowrap px-6 py-4">+94117 77 1979</td>
                    <td className="whitespace-nowrap px-6 py-4">Katunayake</td>
                    <td>
                      <button
                        onClick={() => toggleText('moreDetails3')}
                        className="text-blue-500 transition-colors duration-200 hover:text-indigo-500 focus:outline-none"
                      >
                        View More
                      </button>
                    </td>
                    <td>
                      <button class="text-blue-500 transition-colors duration-200 hover:text-indigo-500 focus:outline-none">
                        Generate license key
                      </button> </td>
                  </tr>
                  <tr className="border-b bg-neutral-100 dark:border-neutral-500 dark:bg-neutral-700 hidden" id="moreDetails3">
                    <td colSpan="7">
                      <div className="p-4 bg-white border border-gray-200 rounded-md shadow-md">

                        <p>City: Colombo</p>
                        <p>Region: Sri Lanka</p>
                        <p>Postal Code: 560789</p>
                        <p>Country: Sri Lanka</p>
                        <p>Web Site: www.srilankan.com</p>
                        <p>Industry: Tourism</p>
                        <p>Selected Modules: 00001</p>
                        <p>Additional Info: These are the Additional details about Sri Lankan</p>
                        {/* Add other additional details here */}
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan="7" className="px-6 py-4">
                      <button class="text-blue-500 transition-colors duration-200 hover:text-indigo-500 focus:outline-none">
                        Add new client
                      </button>
                    </td>
                  </tr>

                  {/* Add other client data rows similarly */}
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