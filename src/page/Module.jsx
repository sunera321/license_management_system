
import React from 'react';
import { Link } from 'react-router-dom'; 
import PageHeader from '../components/CommonModal/pageHeader';
import hsenidImage from '../Images/hsenid.png';

const Module = () => {
  const images = [
    hsenidImage, 
    hsenidImage,
    hsenidImage,
    hsenidImage,
    hsenidImage,
    hsenidImage,
    hsenidImage,
    hsenidImage,
    hsenidImage,
  ];

  const imageSize = 'max-w-md'; 

  return (

    <div className="px-10 py-10">
      <div>
        <PageHeader title="Modules" />
      </div>
      <div className="grid grid-cols-3 gap-5">
        {images.map((imageItem, index) => (
          <div key={index} className="relative flex flex-col items-center">
            <Link to={'/moduledetails'} key={index}> 
              <img
                src={imageItem}
                alt={`Module ${index + 1}`}
                className={`w-full h-[300px] rounded-lg ${imageSize}`}
                style={{ maxHeight: '320px' }}
              />
              <div
                className={`absolute bottom-11 left-7 right-7 bg-gray-300 bg-opacity-80 text-black p-1 rounded-b-lg ${imageSize}`}
              style={{ marginTop: '-10px' }}
              >
                
                <div className="text-center">
                  Cloud based HR solution Hsenid
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <div className="flex justify-between mt-6">
        <a href="#" className="text-white hover:underline">
          Previous Page
        </a>{' '}
        
        <a href="#" className="text-white hover:underline">
          Next Page
        </a>{' '}
        
      </div>
      
    
      <div className="py-20" style={{ paddingTop: '50px' }}>
      
      </div>
    </div>
  );

};

export default Module;
