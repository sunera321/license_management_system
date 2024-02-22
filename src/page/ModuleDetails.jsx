import React from 'react';
import peopleHR from '../Images/people HR.png';


const ModuleDetails = () => {
    return (
     
        <div className="py-20" style={{ paddingTop: '50px' }}> {/* Add border to the container */}
          <div className="bg-green-500 py-20 w-full relative mt-0"> {/* Adjust mt-0 for the green tape to be at the very top */}
                {/* Blue circle with image */}
                <div className="bg-blue-950 rounded-full w-60 h-60 absolute top-2/4 transform -translate-y-1/2 right-20 mr-5 flex justify-center items-center">
                    <img src={peopleHR} alt="People HR" className="w-40 h-40" />
                </div>
                {/* Module name */}
                <div className="absolute top-1/3 transform -translate-y-1/2 right-1/2 translate-x-1/6 text-black font-bold" style={{ textAlign: 'center', marginTop: '30px', fontSize: '25px', right: '40%' }}>
                    Module Name
                </div>
                {/* Completed in 2021 */}
                <div className="absolute top-1/3 transform -translate-y-1/2 right-1/2 translate-x-1/6 text-black font-bold" style={{ textAlign: 'center', marginTop: '60px', fontSize: '15px', right: '40%' }}>
                    Completed in 2021
                </div>
                {/* Powered by Hsenid */}
                <div className="absolute top-1/3 transform -translate-y-1/2 right-1/2 translate-x-1/6 text-black" style={{ textAlign: 'center', marginTop: '90px', fontSize: '10px', right: '40%' }}>
                    Powered by Hsenid
                </div>
            </div>
        
            <div><h1 style={{ color: '#084c88', marginBottom: '20px', textAlign: 'left', marginLeft: '100px',marginTop:'40px' }}>Module Details </h1></div>
            <div><p style={{ marginBottom: '20px', textAlign: 'left', marginLeft: '100px' }}>A cloud-based HR solution that will engage and empower employees to build competitive organizations that are constantly achieving desired goals.</p></div>
            <div><h1 style={{ color: '#084c88', marginBottom: '20px', textAlign: 'left', marginLeft: '100px' }}>Module Feature </h1></div>
            <div><p style={{ marginBottom: '20px', textAlign: 'left', marginLeft: '100px' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div>
            <div>
                <ul className="list-disc" style={{ textAlign: 'left', marginLeft: '100px' }}>
                    <li style={{ marginBottom: '10px' }}>Lorem ipsum vivamus fermentum metus at pharetra suspendisse class habitant vitae aliquam, nunc iaculis auctor sodales</li>
                    <li style={{ marginBottom: '10px' }}>Lorem ipsum vivamus fermentum metus at pharetra suspendisse class habitant vitae aliquam, nunc iaculis auctor sodales</li>
                    <li style={{ marginBottom: '10px' }}>Lorem ipsum vivamus fermentum metus at pharetra suspendisse class habitant vitae aliquam, nunc iaculis auctor sodales</li>
                </ul>
              </div>
             </div>
        
    );
};

export default ModuleDetails;