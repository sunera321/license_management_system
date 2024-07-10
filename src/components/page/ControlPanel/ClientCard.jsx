import React from 'react';
import PropTypes from 'prop-types';

const formatDate = (datetimeString) => {
  const date = new Date(datetimeString);
  if (isNaN(date.getTime())) {
    return "Invalid Date";
  }
  
  return date.toISOString().split('T')[0];
};

const ClientCard = ({ client, onMoreInfoClick }) => {
  return (
    <div className="w-[25%] h-auto max-w-sm p-6 bg-white border border-gray-300 rounded-lg shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">{client.name}</h2>
        <span className="text-gray-500">ID-{client.id}</span>
      </div>
      <div className="mb-4 border-b border-gray-200"></div>
      <div className="mb-4">
        <div className="text-sm font-medium text-gray-700">Partner ID: {client.partnerId}</div>
        <div className="flex items-center mt-2 text-sm text-gray-700">
          <div className="w-3 h-3 mr-2 bg-green-500 rounded-full"></div>
          <span>Active Date: {formatDate(client.activeDate)}</span>
        </div>
        <div className="flex items-center mt-2 text-sm text-gray-700">
          <div className="w-3 h-3 mr-2 bg-red-500 rounded-full"></div>
          <span>Deactivation Date: {formatDate(client.expireDate)}</span>
        </div>
      </div>

      <div className="flex justify-center">
        <button
          onClick={() => onMoreInfoClick(client)}
          className="w-[30%] py-2 text-[13px] font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          View More
        </button>
      </div>
    </div>
  );
};

ClientCard.propTypes = {
  client: PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    partnerId: PropTypes.string.isRequired,
    activeDate: PropTypes.string.isRequired,
    expireDate: PropTypes.string.isRequired,
  }).isRequired,
  onMoreInfoClick: PropTypes.func.isRequired,
};

export default ClientCard;
