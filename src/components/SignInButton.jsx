import React, { useEffect, useState } from 'react';
import { useMsal } from '@azure/msal-react';
import microsoftLogo from '../components/asserts/Media/microsoft.jpg';
import backgroundImage from '../components/asserts/Media/image1.jpg';
import NavBar2 from '../components/page/loging/inc/NavBar2';
import Footer2 from '../components/page/loging/inc/Footer2';

const SignInButton = ({ setUserRole }) => {
  const { instance, accounts } = useMsal();
  const [userData, setUserData] = useState(null);

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
    const fetchDataFromGraphAPI = async (accessToken) => {
      try {
        const response = await fetch('https://graph.microsoft.com/v1.0/me', {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        if (response.ok) {
          const data = await response.json();
          console.log('User Data from Graph API:', data);
          setUserData(data);
        } else {
          console.error('Failed to fetch user data from Graph API:', response.status, response.statusText);
        }

        const roleResponse = await fetch('https://graph.microsoft.com/v1.0/me/appRoleAssignments', {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        if (roleResponse.ok) {
          const rolesData = await roleResponse.json();
          console.log('User App Roles from Graph API:', rolesData);

          const roles = rolesData.value;

          // Extract appRoleId and save to session storage
          if (roles.length > 0) {
            const roleIds = roles.map(role => role.appRoleId);
            // Filter out any empty or null role IDs
            const filteredRoleIds = roleIds.filter(id => id !== '00000000-0000-0000-0000-000000000000');

            if (filteredRoleIds.length > 0) {
              sessionStorage.setItem('roleIds', filteredRoleIds.join(',')); // Join filtered roleIds into a comma-separated string
              // Pass the first role ID back to the parent component
              setUserRole(filteredRoleIds[0]);
            } else {
              console.log('No valid roles found for the user');
            }
          } else {
            console.log('No roles found for the user');
          }
        } else {
          console.error('Failed to fetch user app roles from Graph API:', roleResponse.status, roleResponse.statusText);
        }
      } catch (error) {
        console.error('Error fetching user data from Graph API:', error);
      }
    };

    const checkAccount = async () => {
      if (accounts.length > 0) {
        try {
          const response = await instance.acquireTokenSilent({
            account: accounts[0],
            scopes: ['User.Read'],
          });
          console.log('Access Token:', response.accessToken);

          fetchDataFromGraphAPI(response.accessToken);

        } catch (error) {
          console.log(error);
        }
      }
    };
    checkAccount();
  }, [accounts, instance, setUserRole]);

  return (
    <>
      <NavBar2 />
      <section className="flex items-center justify-center h-screen" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover' }}>
        <div className="flex items-center justify-center w-1/3 p-8 rounded-l-lg shadow-2xl bg-gradient-to-r from-emerald-950 to-green-100 h-2/3">
          <img src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg" className="w-2/3" alt="Phone image" />
        </div>
        <div className="relative flex flex-col items-center justify-center w-1/3 p-8 rounded-r-lg shadow-2xl h-2/3 bg-green-50">
          <div className="text-center lg:text-left">
            <h2 className="mb-4 -mt-48 text-3xl font-bold text-gray-800 lg:text-4xl">Welcome back!<br /></h2>
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

export default SignInButton;
