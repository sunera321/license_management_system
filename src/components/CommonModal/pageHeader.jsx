import React from 'react';

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

export default PageHeader;
