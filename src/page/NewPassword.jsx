import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavBar2 from '../components/inc/NavBar2';
import Footer2 from '../components/inc/Footer2';
import backgroundImg from '../components/asserts/Media/background1.jpg';

function NewPassword() {
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleNewPasswordChange = (e) => {
        setNewPassword(e.target.value);
    };

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
    };

    const handleSetNewPassword = () => {
        // Add logic for setting new password
    };

    return (
        <>
            <NavBar2 />
            <div className="flex flex-col justify-center items-center w-full h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${backgroundImg})` }}>
                <div className="w-2/5 h-auto bg-white p-8 rounded-lg relative flex flex-col items-center space-y-6">
                    <h2 className="text-2xl font-bold text-center pb-4"> New Password</h2>
                    <div className="w-full mb-4 pb-4">
                        <label htmlFor="newPassword" className="block text-gray-700 font-bold mb-2">Enter New Password</label>
                        <input 
                            type="password" 
                            id="newPassword" 
                            name="newPassword" 
                            className="border rounded-md px-4 py-2 w-full" 
                            placeholder="Enter your new password" 
                            value={newPassword}
                            onChange={handleNewPasswordChange}
                        />
                    </div>
                    <div className="w-full mb-4 pb-4">
                        <label htmlFor="confirmPassword" className="block text-gray-700 font-bold mb-2">Confirm Password</label>
                        <input 
                            type="password" 
                            id="confirmPassword" 
                            name="confirmPassword" 
                            className="border rounded-md px-4 py-2 w-full" 
                            placeholder="Confirm your new password" 
                            value={confirmPassword}
                            onChange={handleConfirmPasswordChange}
                        />
                    </div>
                
                    <button 
                        className="bg-green-500 w-64 h-10 hover:bg-green-700 text-white font-bold rounded-full transition duration-300 ease-in-out mt-4"
                        onClick={handleSetNewPassword}
                    >
                        Send
                    </button>
                </div>
            </div>
            <Footer2 />
        </>
    );
}

export default NewPassword;
