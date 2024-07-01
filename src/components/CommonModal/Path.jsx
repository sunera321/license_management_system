import React from 'react';
import PropTypes from 'prop-types';

function Path({ d, strokeWidth, stroke, fill }) {
  return (
    <path
      d={d}
      strokeWidth={strokeWidth}
      stroke={stroke}
      fill={fill}
    />
  );
}

Path.propTypes = {
  d: PropTypes.string.isRequired,
  strokeWidth: PropTypes.number,
  stroke: PropTypes.string,
  fill: PropTypes.string,
};

Path.defaultProps = {
  strokeWidth: 1,
  stroke: 'none',
  fill: 'none',
};

export default Path;
