import React from 'react';
import logo from '../../../../Images/Loging_asserts/media/hsenid.png';

function Navbar2() {
    return (
        <div>
        <nav className="flex items-center justify-between h-10 px-4 bg-body-tertiary">
          
            
                <img className='w-40 h-20 ' src={logo} alt="Hsenid" />
            
        </nav>
        </div>
    );
}

export default Navbar2;
