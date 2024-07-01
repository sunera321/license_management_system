import React from 'react';

const PageHeader = ({ title }) => {
  return (
    <div>
  
        <div className="text-[#5B5B5B] text-[30px] uppercase font-bold text-center mt-3.5 mb-3.5">
          {title}
        </div>
    
    </div>
  );
};

<<<<<<< HEAD
=======
PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
};
>>>>>>> 19395d82e9b6e7af835329b3d01a383324b4b8cf

export default PageHeader;
