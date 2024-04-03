import React from "react";
import Swal from 'sweetalert2';

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
const handleViewMore = (id) => {
  //console.log(id);
  Swal.fire("SweetAlert2 is working!");
};

const ExpiredTable = () => {
  return (
    <div class="overflow-x-auto shadow-md sm:rounded-lg md:ml-26">
      <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="px-6 py-3">
              Client ID
            </th>
            <th scope="col" class="px-6 py-3">
              Client Name
            </th>
            <th scope="col" class="px-6 py-3">

            </th>
            <th scope="col" class="px-6 py-3">
              Email Address
            </th>
            <th scope="col" class="px-6 py-3">
              Issue Date
            </th>
            <th scope="col" class="px-6 py-3">
              Expire Date
            </th>
          </tr>
        </thead>
        <tbody>
          {clients.map((client, index) => (
            <tr key={index} class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {client.id}
              </th>
              <td class="px-6 py-4">
                {client.name}
              </td>
              <td class="px-6 py-4">
                <button class="bg-gray-600 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded" onClick={() => handleViewMore(client.id)}>
                  View more
                </button>
              </td>
              <td class="px-6 py-4">
                {client.email}
              </td>
              <td class="px-6 py-4">
                {client.issueDate}
              </td>
              <td class="px-6 py-4">
                {client.expireDate}
              </td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExpiredTable;