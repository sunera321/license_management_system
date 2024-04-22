import React from 'react';
import { MediaData } from '../data/MediaData'; 

const Footer = () => {
  return (
    <footer className="flex items-center justify-between p-5 bg-gray-200 footer">
      <p className="mr-auto">Copyright © 2022 hSenidBiz.com. All rights reserved.</p>
      <div className="flex items-center social-icons">
        {MediaData.map((item, index) => (
          <a href={item.href} key={index} target="_blank" rel="noopener noreferrer">
            <img src={item.img} alt={item.title} className="w-8 h-8 mr-4 social-icon" />
          </a>
        ))}
      </div>
    </footer>
  );
}

export default Footer;


