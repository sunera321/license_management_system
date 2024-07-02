import React from 'react';
import PropTypes from 'prop-types';

const InProgress = ({ value }) => {
  return (
    <div>
      <div className="items-center visible px-0 py-2 text-base text-center text-green-800 bg-yellow-200 rounded-xl">
        {value}
      </div>
    </div>
  );
}

InProgress.propTypes = {
  value: PropTypes.string.isRequired,
};

export default InProgress;
