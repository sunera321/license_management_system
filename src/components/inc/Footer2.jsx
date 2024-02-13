import React from 'react';
import { MediaData } from '../data/MediaData'; 

const Footer = () => {
  return (
    <footer className="footer bg-gray-200 p-5 flex justify-between items-center">
      <p className="mr-auto">Copyright © 2022 hSenidBiz.com. All rights reserved.</p>
      <div className="social-icons flex items-center">
        {MediaData.map((item, index) => (
          <a href={item.href} key={index} target="_blank" rel="noopener noreferrer">
            <img src={item.img} alt={item.title} className="social-icon mr-4 h-8 w-8" />
          </a>
        ))}
      </div>
    </footer>
  );
}

export default Footer;


