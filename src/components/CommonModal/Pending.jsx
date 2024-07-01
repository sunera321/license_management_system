import React from 'react';
import PropTypes from 'prop-types';

const Pending = ({ value }) => {
  return (
    <div>
      <div className="px-4 py-2 mx-12 text-white transition duration-300 ease-in-out delay-150 bg-orange-600 rounded-full ">
        {value}
      </div>
    </div>
  );
};

Pending.propTypes = {
  value: PropTypes.string.isRequired,
};

export default Pending;
