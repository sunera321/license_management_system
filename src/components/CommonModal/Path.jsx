import React from 'react';

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

export default Path;
