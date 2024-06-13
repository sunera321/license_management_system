import React from 'react';
import PageHeader from '../components/CommonModal/pageHeader';
import { Link } from 'react-router-dom';


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
              <table className="min-w-full text-sm font-light text-left">
                <thead className="font-medium border-b dark:border-neutral-500">
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
                    <td className="px-6 py-4 font-medium whitespace-nowrap">1</td>
                    <td className="px-6 py-4 whitespace-nowrap">00012</td>
                    <td className="px-6 py-4 whitespace-nowrap">Sri Lankan Airlines</td>
                    <td className="px-6 py-4 whitespace-nowrap">reservations@srilankan.com</td>
                    <td className="px-6 py-4 whitespace-nowrap">+94117 77 1979</td>
                    <td className="px-6 py-4 whitespace-nowrap">Katunayake</td>
                    <td>
                      <button
                        onClick={() => toggleText('moreDetails1')}
                        className="px-2 py-1 text-blue-500 transition-colors duration-200 bg-gray-100 border border-blue-500 rounded-md hover:text-indigo-500 focus:outline-none"
                      >
                        View More
                      </button>
                    </td>
                    <td>
                      <button class="text-blue-500 transition-colors duration-200 hover:text-indigo-500 focus:outline-none border border-blue-500 rounded-md px-2 py-1 bg-gray-100">

                        Generate license key
                      </button> </td>
                  </tr>
                  <tr className="hidden border-b bg-neutral-100 dark:border-neutral-500 dark:bg-neutral-700" id="moreDetails1">
                    <td colSpan="7">
                      <div className="p-4 bg-white border border-gray-300 rounded-md shadow-md">
                        <table className="w-full">
                          <tbody>
                            <tr>
                              <td className="font-bold">City:</td>
                              <td>Colombo</td>
                            </tr>
                            <tr>
                              <td className="font-bold">Region:</td>
                              <td>Sri Lanka</td>
                            </tr>
                            <tr>
                              <td className="font-bold">Postal Code:</td>
                              <td>560789</td>
                            </tr>
                            <tr>
                              <td className="font-bold">Country:</td>
                              <td>Sri Lanka</td>
                            </tr>
                            <tr>
                              <td className="font-bold">Web Site:</td>
                              <td>www.srilankan.com</td>
                            </tr>
                            <tr>
                              <td className="font-bold">Industry:</td>
                              <td>Tourism</td>
                            </tr>
                            <tr>
                              <td className="font-bold">Selected Modules:</td>
                              <td>00001</td>
                            </tr>
                            <tr>
                              <td className="font-bold">Additional Info:</td>
                              <td>These are the Additional details about Sri Lankan</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </td>
                  </tr>

                  <tr className="border-b dark:border-neutral-500 dark:bg-neutral-700">
                    <td className="px-6 py-4 font-medium whitespace-nowrap">2</td>
                    <td className="px-6 py-4 whitespace-nowrap">00013</td>
                    <td className="px-6 py-4 whitespace-nowrap">Sri Lankan Airlines</td>
                    <td className="px-6 py-4 whitespace-nowrap">reservations@srilankan.com</td>
                    <td className="px-6 py-4 whitespace-nowrap">+94117 77 1979</td>
                    <td className="px-6 py-4 whitespace-nowrap">Katunayake</td>
                    <td>
                      <button
                        onClick={() => toggleText('moreDetails2')}
                        className="px-2 py-1 text-blue-500 transition-colors duration-200 border border-blue-500 rounded-md hover:text-indigo-500 focus:outline-none bg-gray-50"
                      >
                        View More
                      </button>
                    </td>
                    <td>
                      <button class="text-blue-500 transition-colors duration-200 hover:text-indigo-500 focus:outline-none border border-blue-500 rounded-md px-2 py-1 bg-gray-50">

                        Generate license key
                      </button> </td>
                  </tr>
                  <tr className="hidden border-b bg-neutral-100 dark:border-neutral-500 dark:bg-neutral-700" id="moreDetails2">
                    <td colSpan="7">
                      <div className="p-4 bg-white border border-gray-300 rounded-md shadow-md">
                        <table className="w-full">
                          <tbody>
                            <tr>
                              <td className="font-bold">City:</td>
                              <td>Colombo</td>
                            </tr>
                            <tr>
                              <td className="font-bold">Region:</td>
                              <td>Sri Lanka</td>
                            </tr>
                            <tr>
                              <td className="font-bold">Postal Code:</td>
                              <td>560789</td>
                            </tr>
                            <tr>
                              <td className="font-bold">Country:</td>
                              <td>Sri Lanka</td>
                            </tr>
                            <tr>
                              <td className="font-bold">Web Site:</td>
                              <td>www.srilankan.com</td>
                            </tr>
                            <tr>
                              <td className="font-bold">Industry:</td>
                              <td>Tourism</td>
                            </tr>
                            <tr>
                              <td className="font-bold">Selected Modules:</td>
                              <td>00001,00005</td>
                            </tr>
                            <tr>
                              <td className="font-bold">Additional Info:</td>
                              <td>These are the Additional details about Sri Lankan</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </td>
                  </tr>

                  <tr className="border-b bg-neutral-100 dark:border-neutral-500 dark:bg-neutral-700">
                    <td className="px-6 py-4 font-medium whitespace-nowrap">3</td>
                    <td className="px-6 py-4 whitespace-nowrap">00014</td>
                    <td className="px-6 py-4 whitespace-nowrap">Sri Lankan Airlines</td>
                    <td className="px-6 py-4 whitespace-nowrap">reservations@srilankan.com</td>
                    <td className="px-6 py-4 whitespace-nowrap">+94117 77 1979</td>
                    <td className="px-6 py-4 whitespace-nowrap">Katunayake</td>
                    <td>
                      <button
                        onClick={() => toggleText('moreDetails3')}
                        className="px-2 py-1 text-blue-500 transition-colors duration-200 bg-gray-100 border border-blue-500 rounded-md hover:text-indigo-500 focus:outline-none"
                      >
                        View More
                      </button>
                    </td>
                    <td>
                      <button class="text-blue-500 transition-colors duration-200 hover:text-indigo-500 focus:outline-none border border-blue-500 rounded-md px-2 py-1 bg-gray-100">

                        Generate license key
                      </button> </td>
                  </tr>
                  <tr className="hidden border-b bg-neutral-100 dark:border-neutral-500 dark:bg-neutral-700" id="moreDetails3">
                    <td colSpan="7">
                      <div className="p-4 bg-white border border-gray-300 rounded-md shadow-md">
                        <table className="w-full">
                          <tbody>
                            <tr>
                              <td className="font-bold">City:</td>
                              <td>Colombo</td>
                            </tr>
                            <tr>
                              <td className="font-bold">Region:</td>
                              <td>Sri Lanka</td>
                            </tr>
                            <tr>
                              <td className="font-bold">Postal Code:</td>
                              <td>560789</td>
                            </tr>
                            <tr>
                              <td className="font-bold">Country:</td>
                              <td>Sri Lanka</td>
                            </tr>
                            <tr>
                              <td className="font-bold">Web Site:</td>
                              <td>www.srilankan.com</td>
                            </tr>
                            <tr>
                              <td className="font-bold">Industry:</td>
                              <td>Tourism</td>
                            </tr>
                            <tr>
                              <td className="font-bold">Selected Modules:</td>
                              <td>00001</td>
                            </tr>
                            <tr>
                              <td className="font-bold">Additional Info:</td>
                              <td>These are the Additional details about Sri Lankan</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </td>
                  </tr>


                  <tr className="border-b dark:border-neutral-500 dark:bg-neutral-700">
                    <td className="px-6 py-4 font-medium whitespace-nowrap">4</td>
                    <td className="px-6 py-4 whitespace-nowrap">00015</td>
                    <td className="px-6 py-4 whitespace-nowrap">Sri Lankan Airlines</td>
                    <td className="px-6 py-4 whitespace-nowrap">reservations@srilankan.com</td>
                    <td className="px-6 py-4 whitespace-nowrap">+94117 77 1979</td>
                    <td className="px-6 py-4 whitespace-nowrap">Katunayake</td>
                    <td>
                      <button
                        onClick={() => toggleText('moreDetails4')}
                        className="px-2 py-1 text-blue-500 transition-colors duration-200 border border-blue-500 rounded-md hover:text-indigo-500 focus:outline-none bg-gray-50"
                      >
                        View More
                      </button>
                    </td>
                    <td>
                      <button class="text-blue-500 transition-colors duration-200 hover:text-indigo-500 focus:outline-none border border-blue-500 rounded-md px-2 py-1 bg-gray-100">

                        Generate license key
                      </button> </td>
                  </tr>
                  <tr className="hidden border-b bg-neutral-100 dark:border-neutral-500 dark:bg-neutral-700" id="moreDetails4">
                    <td colSpan="7">
                      <div className="p-4 bg-white border border-gray-300 rounded-md shadow-md">
                        <table className="w-full">
                          <tbody>
                            <tr>
                              <td className="font-bold">City:</td>
                              <td>Colombo</td>
                            </tr>
                            <tr>
                              <td className="font-bold">Region:</td>
                              <td>Sri Lanka</td>
                            </tr>
                            <tr>
                              <td className="font-bold">Postal Code:</td>
                              <td>560789</td>
                            </tr>
                            <tr>
                              <td className="font-bold">Country:</td>
                              <td>Sri Lanka</td>
                            </tr>
                            <tr>
                              <td className="font-bold">Web Site:</td>
                              <td>www.srilankan.com</td>
                            </tr>
                            <tr>
                              <td className="font-bold">Industry:</td>
                              <td>Tourism</td>
                            </tr>
                            <tr>
                              <td className="font-bold">Selected Modules:</td>
                              <td>00001</td>
                            </tr>
                            <tr>
                              <td className="font-bold">Additional Info:</td>
                              <td>These are the Additional details about Sri Lankan</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </td>
                  </tr>



                  <tr className="border-b bg-neutral-100 dark:border-neutral-500 dark:bg-neutral-700">
                    <td className="px-6 py-4 font-medium whitespace-nowrap">5</td>
                    <td className="px-6 py-4 whitespace-nowrap">00016</td>
                    <td className="px-6 py-4 whitespace-nowrap">Sri Lankan Airlines</td>
                    <td className="px-6 py-4 whitespace-nowrap">reservations@srilankan.com</td>
                    <td className="px-6 py-4 whitespace-nowrap">+94117 77 1979</td>
                    <td className="px-6 py-4 whitespace-nowrap">Katunayake</td>
                    <td>
                      <button
                        onClick={() => toggleText('moreDetails5')}
                        className="px-2 py-1 text-blue-500 transition-colors duration-200 bg-gray-100 border border-blue-500 rounded-md hover:text-indigo-500 focus:outline-none"
                      >
                        View More
                      </button>
                    </td>
                    <td>
                      <button class="text-blue-500 transition-colors duration-200 hover:text-indigo-500 focus:outline-none border border-blue-500 rounded-md px-2 py-1 bg-gray-100">

                        Generate license key
                      </button> </td>
                  </tr>
                  <tr className="hidden border-b bg-neutral-100 dark:border-neutral-500 dark:bg-neutral-700" id="moreDetails5">
                    <td colSpan="7">
                      <div className="p-4 bg-white border border-gray-300 rounded-md shadow-md">
                        <table className="w-full">
                          <tbody>
                            <tr>
                              <td className="font-bold">City:</td>
                              <td>Colombo</td>
                            </tr>
                            <tr>
                              <td className="font-bold">Region:</td>
                              <td>Sri Lanka</td>
                            </tr>
                            <tr>
                              <td className="font-bold">Postal Code:</td>
                              <td>560789</td>
                            </tr>
                            <tr>
                              <td className="font-bold">Country:</td>
                              <td>Sri Lanka</td>
                            </tr>
                            <tr>
                              <td className="font-bold">Web Site:</td>
                              <td>www.srilankan.com</td>
                            </tr>
                            <tr>
                              <td className="font-bold">Industry:</td>
                              <td>Tourism</td>
                            </tr>
                            <tr>
                              <td className="font-bold">Selected Modules:</td>
                              <td>00001</td>
                            </tr>
                            <tr>
                              <td className="font-bold">Additional Info:</td>
                              <td>These are the Additional details about Sri Lankan</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </td>
                  </tr>


                  <tr className="border-b dark:border-neutral-500 dark:bg-neutral-700">
                    <td className="px-6 py-4 font-medium whitespace-nowrap">6</td>
                    <td className="px-6 py-4 whitespace-nowrap">00017</td>
                    <td className="px-6 py-4 whitespace-nowrap">Sri Lankan Airlines</td>
                    <td className="px-6 py-4 whitespace-nowrap">reservations@srilankan.com</td>
                    <td className="px-6 py-4 whitespace-nowrap">+94117 77 1979</td>
                    <td className="px-6 py-4 whitespace-nowrap">Katunayake</td>
                    <td>
                      <button
                        onClick={() => toggleText('moreDetails6')}
                        className="px-2 py-1 text-blue-500 transition-colors duration-200 border border-blue-500 rounded-md hover:text-indigo-500 focus:outline-none bg-gray-50"
                      >
                        View More
                      </button>
                    </td>
                    <td>
                      <button class="text-blue-500 transition-colors duration-200 hover:text-indigo-500 focus:outline-none border border-blue-500 rounded-md px-2 py-1 bg-gray-100">

                        Generate license key
                      </button> </td>
                  </tr>
                  <tr className="hidden border-b bg-neutral-100 dark:border-neutral-500 dark:bg-neutral-700" id="moreDetails6">
                    <td colSpan="7">
                      <div className="p-4 bg-white border border-gray-300 rounded-md shadow-md">
                        <table className="w-full">
                          <tbody>
                            <tr>
                              <td className="font-bold">City:</td>
                              <td>Colombo</td>
                            </tr>
                            <tr>
                              <td className="font-bold">Region:</td>
                              <td>Sri Lanka</td>
                            </tr>
                            <tr>
                              <td className="font-bold">Postal Code:</td>
                              <td>560789</td>
                            </tr>
                            <tr>
                              <td className="font-bold">Country:</td>
                              <td>Sri Lanka</td>
                            </tr>
                            <tr>
                              <td className="font-bold">Web Site:</td>
                              <td>www.srilankan.com</td>
                            </tr>
                            <tr>
                              <td className="font-bold">Industry:</td>
                              <td>Tourism</td>
                            </tr>
                            <tr>
                              <td className="font-bold">Selected Modules:</td>
                              <td>00001</td>
                            </tr>
                            <tr>
                              <td className="font-bold">Additional Info:</td>
                              <td>These are the Additional details about Sri Lankan</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </td>
                  </tr>



                  <tr>
                    <td colSpan="7" className="px-6 py-4">
                      <Link to="/clientregistration" className="px-2 py-1 text-blue-500 transition-colors duration-200 bg-gray-100 border border-blue-500 rounded-md hover:text-indigo-500 focus:outline-none">
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
