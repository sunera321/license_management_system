import React from 'react';

const Issue = ({value}) => {
  return (
    <div>
      <button className='py-2 mx-12 text-white transition duration-300 ease-in-out delay-150 bg-green-600 rounded-full px-7 hover:-translate-y-1 hover:scale-110 hover:bg-green-400'>
            
            {value}
            
            
        </button>
    </div>
  );
};

export default Issue;
