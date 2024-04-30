

import { LogLevel } from '@azure/msal-browser';


export const msalConfig = {
  // Authentication parameters
  auth: {
    
    clientId: 'ee426632-2cf8-46c5-879c-a04c67b32021', 
    // Authority endpoint for authentication (tenant ID)
    authority: 'https://login.microsoftonline.com/77f15a54-9e6b-4132-901c-9ceba83a9269', 
    // Redirect URI after successful authentication
    redirectUri: 'http://localhost:3000/mainhome', 

    postLogoutRedirectUri: 'http://localhost:3000', 
    // Setting to prevent automatic redirect to login page
    navigateToLoginRequestUrl: false,
  },
  // Cache configuration for MSAL tokens
  cache: {
    // Storage location for tokens (sessionStorage or localStorage)
    cacheLocation: 'sessionStorage',
    // Option to store authentication state in cookies
    storeAuthStateInCookie: true,
  },
  // System configuration for logging
  system: {
    loggerOptions: {
      // Custom logger callback function to handle different log levels
      loggerCallback: (level, message, containsPii) => {
        // Ignore logging if contains personal identifiable information (PII)
        if (containsPii) {
          return;
        }
        // Switch case to handle different log levels
        switch (level) {
          case LogLevel.Error:
            console.error(message);
            return;
          case LogLevel.Info:
            console.info(message);
            return;
          case LogLevel.Verbose:
            console.debug(message);
            return;
          default:
            console.log(message);
            return;
        }
      },
    },
  },
};

// Authentication request parameters for login
export const loginRequest = {
  // Scopes required for accessing user data
  scopes: ['user.read'],
};
