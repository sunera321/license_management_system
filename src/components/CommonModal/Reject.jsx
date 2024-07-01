import React from 'react';
import PropTypes from 'prop-types';

const Reject = ({ value }) => {
  return (
    <div>
      <div className="items-center visible px-4 py-2 text-base text-center text-red-600 bg-red-300 rounded-xl">
        {value}
      </div>
    </div>
  );
};

Reject.propTypes = {
  value: PropTypes.string.isRequired,
};

export default Reject;
