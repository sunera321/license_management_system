import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom for navigation
import PageHeader from '../components/CommonModal/pageHeader';
import hsenidImage from '../Images/hsenid.png';

const Module = () => {
  const images = [
    hsenidImage, // Use the imported image variable
    hsenidImage,
    hsenidImage,
    hsenidImage,
    hsenidImage,
    hsenidImage,
    hsenidImage,
    hsenidImage,
    hsenidImage,
  ];

  const imageSize = 'max-w-md'; // Adjust the size of the image and description here

  return (

    <div className="px-10 py-10">
      <div>
        <PageHeader title="Modules" />
      </div>
      <div className="grid grid-cols-3 gap-10">
        {images.map((imageItem, index) => (
          <div key={index} className="relative flex flex-col items-center">
            <Link to={`/moduledetails/${index + 1}`} key={index}> {/* Link to ModuleDescription page */}
              <img
                src={imageItem}
                alt={`Module ${index + 1}`}
                className={`w-full h-full rounded-lg ${imageSize}`}
                style={{ maxHeight: '320px' }}
              />
              <div
                className={`absolute bottom-3 left-7 right-7 bg-gray-300 bg-opacity-80 text-black p-1 rounded-b-lg ${imageSize}`}
              style={{ marginTop: '-10px' }}
              >
                {/* Adjusted padding and opacity */}
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
        {/* Added link for previous page */}
        <a href="#" className="text-white hover:underline">
          Next Page
        </a>{' '}
        {/* Added link for next page */}
      </div>
      
      {/* Content below the slider bar */}
      <div className="py-20" style={{ paddingTop: '50px' }}>
        {/* Add your content here */}
      </div>
    </div>
  );

};

export default Module;
