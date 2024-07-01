import React, { useState } from 'react';
import { MsalProvider, AuthenticatedTemplate, UnauthenticatedTemplate } from '@azure/msal-react';
import SignInButton from '../components/SignInButton';
import { PublicClientApplication } from '@azure/msal-browser';
import { msalConfig } from '../Config';
import { Navigate } from 'react-router-dom';

const msalInstance = new PublicClientApplication(msalConfig);

const Login = () => {
  const [ setUserRole] = useState(null);

  return (
    <MsalProvider instance={msalInstance}>
      <div className="login">
        <AuthenticatedTemplate>
          {/* Redirect to authenticated route */}
          <Navigate to="/controlpanel" />
        </AuthenticatedTemplate>
        <UnauthenticatedTemplate>
          {/* Pass setUserRole function to SignInButton */}
          <SignInButton setUserRole={setUserRole} />
        </UnauthenticatedTemplate>
      </div>
    </MsalProvider>
  );
};

export default Login;
