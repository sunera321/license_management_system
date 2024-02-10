import React from 'react';

const PageHeader = ({ title }) => {
  return (
    <div>
      <pageHead>
        <div className="text-[#5B5B5B] text-[30px] uppercase font-bold text-center my-5 mb-3.5 font-serif">
          {title}
        </div>
      </pageHead>
    </div>
  );
};

export default PageHeader;
