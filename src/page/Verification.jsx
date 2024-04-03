import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavBar2 from '../components/inc/NavBar2';
import backgroundImg from '../components/asserts/Media/background1.jpg';
import Footer2 from '../components/inc/Footer2';

function Verification() {
  const [pins, setPins] = useState({
    pin1: '',
    pin2: '',
    pin3: '',
    pin4: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPins((prevPins) => ({
      ...prevPins,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { pin1, pin2, pin3, pin4 } = pins;
    const enteredPin = pin1 + pin2 + pin3 + pin4;
    console.log('Entered PIN:', enteredPin);
    // Add your validation logic here
  };

  const handleForgotPassword = () => {
    // Add logic for handling forgot password functionality
  };

  return (
    <>
      <NavBar2 />
      <div className="flex flex-col justify-center items-center w-full h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${backgroundImg})` }}>
        <div className="w-2/5 h-3/4 bg-white p-8 rounded-lg relative flex flex-col items-center space-y-6">
          <h2 className="text-2xl font-bold text-center pb-6">Verification</h2>
          <p className="mb-4 text-gray-600">Enter Verification Code</p>
          <div className="flex justify-center items-center flex-col">
            <form className="space-y-8" onSubmit={handleSubmit}>
              <div className="flex space-x-4">
                <input
                  type="text"
                  name="pin1"
                  maxLength="1"
                  value={pins.pin1}
                  onChange={handleChange}
                  className="w-12 h-12 border border-gray-600 rounded-full text-center focus:outline-none focus:border-blue-500"
                />
                <input
                  type="text"
                  name="pin2"
                  maxLength="1"
                  value={pins.pin2}
                  onChange={handleChange}
                  className="w-12 h-12 border border-gray-600 rounded-full text-center focus:outline-none focus:border-blue-500"
                />
                <input
                  type="text"
                  name="pin3"
                  maxLength="1"
                  value={pins.pin3}
                  onChange={handleChange}
                  className="w-12 h-12 border border-gray-600 rounded-full text-center focus:outline-none focus:border-blue-500"
                />
                <input
                  type="text"
                  name="pin4"
                  maxLength="1"
                  value={pins.pin4}
                  onChange={handleChange}
                  className="w-12 h-12 border border-gray-600 rounded-full text-center focus:outline-none focus:border-blue-500"
                />
              </div>
              <p className="text-sm text-gray-600 pb-16">If you didn’t receive a code,&nbsp;
                <span className="text-red-600 cursor-pointer" onClick={handleForgotPassword}>Resend</span>
              </p>
              <Link to="/newpassword">
                <button 
                  className="bg-green-500 w-64 h-10 hover:bg-green-700 text-white font-bold rounded-full transition duration-300 ease-in-out"
                  onClick={handleForgotPassword}
                >
                  Send
                </button>
              </Link>
            </form>
          </div>
        </div>
      </div>
      <Footer2/>
    </>
  );
}

export default Verification;













