import React from 'react';

const ClientDetailsPopup = ({ client, togglePopup }) => {
  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-4 border border-gray-300 rounded-md shadow-md">
        <button className="absolute top-2 right-2 text-gray-500 hover:text-gray-700" onClick={togglePopup}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <h2 className="text-lg font-semibold mb-4">Client Details</h2>
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
            {/* Add other fields here */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ClientDetailsPopup;
