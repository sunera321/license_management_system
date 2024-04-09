import React, { useState } from 'react';
import backgroundImg from '../components/asserts/Media/background1.jpg';
import NavBar2 from '../components/inc/NavBar2';
import Footer2 from '../components/inc/Footer2';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleForgotPassword = () => {
        // Implement logic to trigger the password reset process
        console.log(`Sending password reset email to: ${email}`);
        // You can make an API call here to your backend to send the password reset email
    };

    return (
        <>
            <NavBar2 />
            <div className="flex flex-col justify-center items-center w-full h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${backgroundImg})` }}>
                <div className="w-2/5 h-3/4 bg-white p-8 rounded-lg relative flex flex-col items-center space-y-6">
                    <h2 className="text-2xl font-bold text-center pb-4">Forgot Password</h2>
                    <div className="w-full mb-4 pb-4">
                        <label htmlFor="email" className="block text-gray-700 font-bold mb-2 pb-4">Email Address</label>
                        <input 
                            type="email" 
                            id="email" 
                            name="email" 
                            className="border rounded-md px-4 py-2 w-full pb-4" 
                            placeholder="example@gmail.com" 
                            value={email}
                            onChange={handleEmailChange}
                        />
                    </div>
                    <p className="mb-4 text-blue-600 cursor-pointer pb-4">
    <a href="/login">Back To Sign In</a>
</p>
                    <Link to="/verification">
                <button 
                  className="bg-green-500 w-64 h-10 hover:bg-green-700 text-white font-bold rounded-full transition duration-300 ease-in-out"
                  onClick={handleForgotPassword}
                >
                  Send
                </button>
              </Link>
                </div>
            </div>
            <Footer2/>
        </>
    );
};

export default ForgotPassword;



