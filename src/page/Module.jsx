import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/CommonModal/pageHeader';
import hsenidImage from '../Images/hsenid.png';
import hsenidImage2 from '../Images/hb.jpeg';
import hsenidImage3 from '../Images/HR.jpeg';
import hsenidImage5 from '../Images/New hr.jpg';

const Module = () => {
  const [isVisible, setIsVisible] = useState(true);

  const images = [
    { src: hsenidImage, topic: 'Cloud-based HR Solution', description: 'This module provides a cloud-based solution for managing HR tasks efficiently.', link: '/moduledetails/1' },
    { src: hsenidImage2, topic: 'Employee Management System', description: 'Manage your employees effectively with this comprehensive management system.', link: '/moduledetails/2' },
    { src: hsenidImage3, topic: 'Human Resource Management', description: 'Optimize your HR processes with this robust management system.', link: '/moduledetails/3' },
    { src: hsenidImage5, topic: 'People Management Software', description: 'Enhance your people management capabilities with this software solution.', link: '/moduledetails/4' },
    { src: hsenidImage, topic: 'Cloud-based HR Solution', description: 'This module provides a cloud-based solution for managing HR tasks efficiently.', link: '/moduledetails/5' },
    { src: hsenidImage2, topic: 'Employee Management System', description: 'Manage your employees effectively with this comprehensive management system.', link: '/moduledetails/6' },
    { src: hsenidImage, topic: 'Cloud-based HR Solution', description: 'This module provides a cloud-based solution for managing HR tasks efficiently.', link: '/moduledetails/7' },
    { src: hsenidImage3, topic: 'Human Resource Management', description: 'Optimize your HR processes with this robust management system.', link: '/moduledetails/8' },
    { src: hsenidImage5, topic: 'People Management Software', description: 'Enhance your people management capabilities with this software solution.', link: '/moduledetails/9' },
  ];

  const imageSize = 'max-w-md';

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className={`px-10 py-10 border-gray-500 border-solid border-4 ${isVisible ? '' : 'hidden'}`}>
      <div>
        <PageHeader title="Modules" />
      </div>
      <div className="grid grid-cols-3 gap-5">
        {images.map((imageItem, index) => (
          <div key={index} className="flex flex-col items-center">
            <Link to={`/ModuleDetails/`} className="flex flex-col items-center">
              <img
                src={imageItem.src}
                alt={`Module ${index + 1}`}
                className={`w-full h-[300px] rounded-lg border border-gray-300 border-1 ${imageSize} mb-4`}
                style={{ maxHeight: '320px' }}
              />
              <p className="text-left -mt-24 text-blue-500 hover:text-blue-700  underline hover:no-underline">{imageItem.topic}</p>
              <p className="text-center text-gray-600 mt-1 ">{imageItem.description}</p>
            </Link>
          </div>
        ))}
      </div>
      <div className="flex justify-between mt-6">
        <a href="#" className="text-white hover:underline" onClick={toggleVisibility}>
          Hide Page
        </a>{' '}
      </div>
      <div className="py-20" style={{ paddingTop: '50px' }}></div>
    </div>
  );
};

export default Module;
