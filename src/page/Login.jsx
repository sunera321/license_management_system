import React, { useState } from 'react';
<<<<<<< HEAD
import MicrosoftSignInButton from '../components/page/loging/hoocks/MicrosoftSignInButton';
import { faTimes, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import NavBar2 from '../components/page/loging/inc/NavBar2';
import Footer2 from '../components/page/loging/inc/Footer2';
import backgroundImg from '../Images/Loging_asserts/media/background1.jpg';
=======
import MicrosoftSignInButton from '../components/hooks/MicrosoftSignInButton';
import { faTimes, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import NavBar2 from '../components/inc/NavBar2';
import Footer2 from '../components/inc/Footer2';
import backgroundImg from '../components/asserts/Media/background1.jpg';
>>>>>>> da9c9a5a18c9d3a70ae16de84a6374622576bedf

const Login = () => {
    const [showLoginForm, setShowLoginForm] = useState(true);
    const [passwordVisible, setPasswordVisible] = useState(false);
<<<<<<< HEAD

    const handleCloseForm = () => {
        setShowLoginForm(false);
    };

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    return (
        showLoginForm && (
            <>
                <NavBar2 />
                <div className="flex items-center justify-center w-full h-screen bg-center bg-no-repeat bg-cover" style={{ backgroundImage: `url(${backgroundImg})` }}>
                    <div className="relative w-2/5 p-5 bg-white rounded-lg h-300">
                        <button
                            className="absolute text-lg text-gray-600 border-none cursor-pointer top-5 right-5 bg-none"
                            onClick={handleCloseForm}
                        >
                            <FontAwesomeIcon icon={faTimes} />
                        </button>
                        <h3 className="mb-5 text-2xl font-semibold text-center">Welcome back!</h3>
                        <form>
                            <div className="mb-5">
                                <label htmlFor="email">Email</label>
                                <br />
                                <input type="email" placeholder="Enter email" className="w-full px-4 py-2 border rounded-md" />
                            </div>
                            <div className="relative mb-5">
                                <label htmlFor="password">Password</label>
                                <br />
                                <div className="relative">
                                    <input
                                        type={passwordVisible ? "text" : "password"}
                                        placeholder="Enter password"
                                        className="w-full px-4 py-2 border rounded-md"
                                    />
                                    <button
                                        type="button"
                                        className="absolute text-gray-500 top-3 right-3 focus:outline-none"
                                        onClick={togglePasswordVisibility}
                                    >
                                        <FontAwesomeIcon icon={passwordVisible ? faEye : faEyeSlash} />
                                    </button>
                                </div>
                            </div>
                            <p className="mb-5 text-right text-blue-600 ">
                                <a href="/fogotp">Forgot Password?</a>
                            </p>
                            <div className="flex items-center mb-5">
                                <input type="checkbox" id="check" className="mr-2" />
                                <label htmlFor="check" className="text-sm">Remember me</label>
                            </div>
                            <div className="flex items-center justify-center mb-5">
                                <div className="flex-1 h-px bg-gray-300"></div>
                                <div className="mx-2 text-sm">or</div>
                                <div className="flex-1 h-px bg-gray-300"></div>
                            </div>
                            <div className="mb-8">
                                <MicrosoftSignInButton />
                            </div>
                            <div className="flex justify-center">
                                <button className="w-full py-2 text-white bg-green-700 rounded-lg btn hover:bg-green-950">
                                    <a href='/mainhome'>
                                    Login
                                    </a>
                                   
                                </button>
                            </div>
                            <p className="mt-5">
                                Don't have an account? <a href="/choose" className="text-blue-500 underline hover:text-blue-700 hover:underline">Sign up</a>
                            </p>
                        </form>
                    </div>
                </div>
                <Footer2 />
            </>
        )
    );
};

export default Login;




=======

    const handleCloseForm = () => {
        setShowLoginForm(false);
    };

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    return (
        showLoginForm && (
            <>
                <NavBar2 />
                <div className="flex justify-center items-center w-full h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${backgroundImg})` }}>
                    <div className="w-2/5 h-300 bg-white p-5 rounded-lg relative">
                        <button
                            className="absolute top-5 right-5 bg-none border-none cursor-pointer text-gray-600 text-lg"
                            onClick={handleCloseForm}
                        >
                            <FontAwesomeIcon icon={faTimes} />
                        </button>
                        <h3 className="text-center mb-5 text-2xl font-semibold">Welcome back!</h3>
                        <form>
                            <div className="mb-5">
                                <label htmlFor="email">Email</label>
                                <br />
                                <input type="email" placeholder="Enter email" className="w-full px-4 py-2 border rounded-md" />
                            </div>
                            <div className="mb-5 relative">
                                <label htmlFor="password">Password</label>
                                <br />
                                <div className="relative">
                                    <input
                                        type={passwordVisible ? "text" : "password"}
                                        placeholder="Enter password"
                                        className="w-full px-4 py-2 border rounded-md"
                                    />
                                    <button
                                        type="button"
                                        className="absolute top-3 right-3 text-gray-500 focus:outline-none"
                                        onClick={togglePasswordVisibility}
                                    >
                                        <FontAwesomeIcon icon={passwordVisible ? faEye : faEyeSlash} />
                                    </button>
                                </div>
                            </div>
                            <p className="text-right mb-5 text-blue-600 ">
                                <a href="/fogotp">Forgot Password?</a>
                            </p>
                            <div className="flex items-center mb-5">
                                <input type="checkbox" id="check" className="mr-2" />
                                <label htmlFor="check" className="text-sm">Remember me</label>
                            </div>
                            <div className="flex items-center justify-center mb-5">
                                <div className="flex-1 h-px bg-gray-300"></div>
                                <div className="mx-2 text-sm">or</div>
                                <div className="flex-1 h-px bg-gray-300"></div>
                            </div>
                            <div className="mb-8">
                                <MicrosoftSignInButton />
                            </div>
                            <div className="flex justify-center">
                                <button className="btn py-2 w-full rounded-lg bg-green-700 text-white hover:bg-green-950">
                                    Login
                                </button>
                            </div>
                            <p className="mt-5">
                                Don't have an account? <a href="/choose" className="text-blue-500 underline hover:text-blue-700 hover:underline">Sign up</a>
                            </p>
                        </form>
                    </div>
                </div>
                <Footer2 />
            </>
        )
    );
};

export default Login;
>>>>>>> da9c9a5a18c9d3a70ae16de84a6374622576bedf
