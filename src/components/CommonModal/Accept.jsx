import React from 'react';
import PropTypes from 'prop-types';

const Accept = ({ value }) => {
  return (
    <div>
      <div className="items-center visible px-3 py-2 mx-5 text-base text-center text-green-800 bg-green-300 rounded-xl">
        {value}
      </div>
    </div>
  );
}

Accept.propTypes = {
  value: PropTypes.string.isRequired,
};

export default Accept;
