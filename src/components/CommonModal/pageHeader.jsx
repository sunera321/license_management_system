import React from 'react';
import PropTypes from 'prop-types';
const PageHeader = ({ title }) => {
  return (
    <div>
      <pageHead>
        <div className="text-[#5B5B5B] text-[30px] uppercase font-bold text-center mt-3.5 mb-3.5">
          {title}
        </div>
      </pageHead>
    </div>
  );
};

Reject.propTypes = {
  title: PropTypes.string.isRequired,
};

export default PageHeader;
