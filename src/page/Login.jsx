import React, { useEffect } from 'react';
import { PublicClientApplication } from '@azure/msal-browser';
import { MsalProvider, AuthenticatedTemplate, UnauthenticatedTemplate, useMsal } from '@azure/msal-react';
import { msalConfig } from '../Config';
import NavBar2 from '../components/page/loging/inc/NavBar2';
import Footer2 from '../components/page/loging/inc/Footer2';
import microsoftLogo from '../components/asserts/Media/microsoft.jpg';
import backgroundImage from '../components/asserts/Media/image1.jpg';
import { Navigate } from 'react-router-dom';

// Helper function to set a cookie
const setCookie = (name, value, days) => {
  const date = new Date();
  date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
  const expires = `expires=${date.toUTCString()}`;
  document.cookie = `${name}=${value};${expires};path=/`;
};

const SignInButton = () => {
  const { instance, accounts } = useMsal();

  const handleRedirect = async () => {
    try {
      await instance.loginPopup({
        scopes: ['openid', 'profile', 'User.Read'],
        prompt: 'select_account',
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const checkAccount = async () => {
      if (accounts.length > 0) {
        try {
          const response = await instance.acquireTokenSilent({
            account: accounts[0],
            scopes: ['User.Read'],
          });
          setCookie('accessToken', response.accessToken, 1); // Store token as a cookie for 1 day
          console.log('Access Token:', response.accessToken);
        } catch (error) {
          console.log(error);
        }
      }
    };
    checkAccount();
  }, [accounts, instance]);

  return (
    <>
      <NavBar2 />
      <section className="flex items-center justify-center h-screen" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover' }}>
        <div className="flex items-center justify-center w-1/3 p-8 rounded-l-lg shadow-2xl bg-gradient-to-r from-emerald-950 to-green-100 h-2/3">
          <img src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg" className="w-2/3" alt="Phone image" />
        </div>
        <div className="relative flex flex-col items-center justify-center w-1/3 p-8 rounded-r-lg shadow-2xl h-2/3 bg-green-50">
          <div className="text-center lg:text-left">
            <h2 className="mb-4 -mt-48 text-3xl font-bold text-gray-800 lg:text-4xl">Welcome back !<br /></h2>
            <div>
              <p className="mt-32 mb-4 text-lg text-gray-600">Get started by signing in with Microsoft</p>
              <div className="flex items-center mt-10 logo-and-button">
                <img src={microsoftLogo} alt="Microsoft Logo" className="w-10 h-10 mr-4" />
                <button className="btn py-2 px-4 rounded-lg bg-gray-100 text-black hover:bg-gray-300 hover:text-gray-800" onClick={handleRedirect}>Sign in with Microsoft</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer2 />
    </>
  );
};

const msalInstance = new PublicClientApplication(msalConfig);

const Login = () => {
  return (
    <MsalProvider instance={msalInstance}>
      <div className="login">
        <AuthenticatedTemplate>
          <Navigate to="/mainhome" />
        </AuthenticatedTemplate>
        <UnauthenticatedTemplate>
          <SignInButton />
        </UnauthenticatedTemplate>
      </div>
    </MsalProvider>
  );
};

export default Login;
