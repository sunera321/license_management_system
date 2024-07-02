import React, { useState, useEffect } from 'react';
import { MsalProvider, AuthenticatedTemplate, UnauthenticatedTemplate, useMsal } from '@azure/msal-react';
import SignInButton from '../components/SignInButton';
import { PublicClientApplication } from '@azure/msal-browser';
import { msalConfig } from '../Config';
import { useNavigate ,Navigate} from 'react-router-dom';

const msalInstance = new PublicClientApplication(msalConfig);

const Login = () => {
  const [userRole, setUserRole] = useState(null);
  const navigate = useNavigate();
  const { accounts } = useMsal();

  useEffect(() => {
    const roleIds = sessionStorage.getItem('roleIds');
    if (!roleIds && accounts.length > 0) {
      navigate('/login');
    } else if (roleIds) {
      setUserRole(roleIds);  // Set the user role when found
    }
  }, [accounts, navigate]);

  // Redirect to control panel once userRole is set and refresh the page
  useEffect(() => {
    if (userRole) {
      window.location.replace('/controlpanel');
    }
  }, [userRole]);

  return (
    <MsalProvider instance={msalInstance}>
      <div className="login">
        <AuthenticatedTemplate>
          {/* Redirect to control panel if user role is set */}
          {userRole && <Navigate to="/controlpanel" />}
        </AuthenticatedTemplate>
        <UnauthenticatedTemplate>
          <SignInButton setUserRole={setUserRole} />
        </UnauthenticatedTemplate>
      </div>
    </MsalProvider>
  );
};

export default Login;
