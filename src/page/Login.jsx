import React, { useState } from 'react';
import { PublicClientApplication } from '@azure/msal-browser';
import { MsalProvider, AuthenticatedTemplate, UnauthenticatedTemplate, useMsal } from '@azure/msal-react';
import { msalConfig } from '../Config';
import NavBar2 from '../components/page/loging/inc/NavBar2';
import Footer2 from '../components/page/loging/inc/Footer2';
import microsoftLogo from '../components/asserts/Media/microsoft.jpg';
import backgroundImage from '../components/asserts/Media/image1.jpg';


const AuthenticatedContent = () => {
  const { instance } = useMsal();

  const handleLogout = () => {
    instance.logout();
    window.location.href = '/';
  };

  return (
    <div>
      <h2>Welcome, you are authenticated!</h2>
      <button className="btn py-2 px-4 rounded-lg bg-gray-100 text-black hover:bg-gray-300 hover:text-gray-800" onClick={handleLogout}>Sign out</button>
    </div>
  );
};

const SignInButton = () => {
  const { instance } = useMsal();

  const handleSignIn = async () => {
    try {
      await instance.loginRedirect(msalConfig.auth);
    } catch (error) {
      console.error('Authentication error:', error);
    }
  };

  return (
    <>
      <NavBar2 />
      <section className="h-screen flex justify-center items-center" style={{backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover'}}>
        <div className="bg-gradient-to-r from-emerald-950 to-green-100 w-1/3 h-2/3 p-8 flex justify-center items-center shadow-2xl rounded-l-lg">
          <img src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg" className="w-2/3" alt="Phone image" />
        </div>
        <div className="w-1/3 h-2/3 p-8 flex flex-col items-center justify-center relative shadow-2xl bg-green-50 rounded-r-lg">
          <div className="text-center lg:text-left">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-800 -mt-48">Welcome back !<br/></h2>
            <div>
              <p className="text-lg text-gray-600 mb-4 mt-32">Get started by signing in with Microsoft</p>
              <div className="logo-and-button flex items-center mt-10">
                <img src={microsoftLogo} alt="Microsoft Logo" className="w-10 h-10 mr-4" />
                <button className="btn py-2 px-4 rounded-lg bg-gray-100 text-black hover:bg-gray-300 hover:text-gray-800" onClick={handleSignIn}>Sign in with Microsoft</button>
               
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer2 />
    </>
  );
};

const msalInstance = new PublicClientApplication(msalConfig); // Initialize MSAL instance

const Login = () => {
  return (
    <MsalProvider instance={msalInstance}>
      <div className="login">
        <AuthenticatedTemplate>
          <AuthenticatedContent />
        </AuthenticatedTemplate>
        <UnauthenticatedTemplate>
          <SignInButton />
        </UnauthenticatedTemplate>
      </div>
    </MsalProvider>
  );
};

export default Login;


