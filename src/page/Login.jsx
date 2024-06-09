import React, { useEffect } from 'react';
import { PublicClientApplication } from '@azure/msal-browser';
import { MsalProvider, AuthenticatedTemplate, UnauthenticatedTemplate, useMsal } from '@azure/msal-react';
import { msalConfig } from '../Config';
import NavBar2 from '../components/page/loging/inc/NavBar2';
import Footer2 from '../components/page/loging/inc/Footer2';
import microsoftLogo from '../components/asserts/Media/microsoft.jpg';
import backgroundImage from '../components/asserts/Media/image1.jpg';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const AuthenticatedContent = () => {
  const { accounts } = useMsal();
  const navigate = useNavigate();

  // Retrieve the access token from the MSAL account object
  const accessToken = accounts[0]?.accessToken;

  // Save the access token to session storage
  sessionStorage.setItem('accessToken', accessToken);

  useEffect(() => {
    // Redirect to the Dashboard component after successful authentication
    navigate('/dashboard');
  }, [navigate]);

  return null; // No content to render
};

const SignInButton = () => {
  const { instance } = useMsal();

  const handleSignIn = async () => {
    try {
      await instance.loginPopup(msalConfig.auth); // Use loginPopup instead of loginRedirect
    } catch (error) {
      console.error('Authentication error:', error);
    }
  };

  return (
    <>
      <NavBar2 />
      <section className="flex items-center justify-center h-screen" style={{backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover'}}>
        <div className="flex items-center justify-center w-1/3 p-8 rounded-l-lg shadow-2xl bg-gradient-to-r from-emerald-950 to-green-100 h-2/3">
          <img src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg" className="w-2/3" alt="Phone image" />
        </div>
        <div className="relative flex flex-col items-center justify-center w-1/3 p-8 rounded-r-lg shadow-2xl h-2/3 bg-green-50">
          <div className="text-center lg:text-left">
            <h2 className="mb-4 -mt-48 text-3xl font-bold text-gray-800 lg:text-4xl">Welcome back !<br/></h2>
            <div>
              <p className="mt-32 mb-4 text-lg text-gray-600">Get started by signing in with Microsoft</p>
              <div className="flex items-center mt-10 logo-and-button">
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