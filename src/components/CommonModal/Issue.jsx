import React, { useState } from 'react';
import Provide from './Provide';

const Issue = () => {
    // Define state variable for button status
    const [buttonClicked, setButtonClicked] = useState(false); // Initialize to false to show "Issue" button by default

    // Function to handle button click
    const handleButtonClick = () => {
        // Toggle the buttonClicked state when the button is clicked
        setButtonClicked(!buttonClicked);
    };

    return (
        <div>
            {buttonClicked ? (
                <button className='px-5 py-2 mx-12 text-white transition duration-300 ease-in-out delay-150 bg-gray-600 rounded-full '>
                    Provide
                </button>
            ) : (
                <button onClick={handleButtonClick} className='py-2 mx-12 text-white transition duration-300 ease-in-out delay-150 bg-green-600 rounded-full px-7 hover:-translate-y-1 hover:scale-110 hover:bg-green-400'>
                    Available
                </button>
            )}
        </div>
    );
};

export default Issue;
