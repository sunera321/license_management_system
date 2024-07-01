import { LogLevel } from '@azure/msal-browser';

export const msalConfig = {
  auth: {
    clientId: 'ee426632-2cf8-46c5-879c-a04c67b32021',
    authority: 'https://login.microsoftonline.com/77f15a54-9e6b-4132-901c-9ceba83a9269',
    redirectUri:'https://lmshsenid.netlify.app/controlpanel',
    postLogoutRedirectUri: 'https://lmshsenid.netlify.app',
    navigateToLoginRequestUrl: false,
  },
  cache: {
    cacheLocation: 'sessionStorage',
    storeAuthStateInCookie: true,
  },
  system: {
    loggerOptions: {
      loggerCallback: (level, message, containsPii) => {
        if (containsPii) {
          return;
        }
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

export const loginRequest = {
  scopes: ['openid', 'profile', 'User.Read'],
};

export const graphConfig = {
  GraphMeEndpoint: 'https://graph.microsoft.com/v1.0/me',
};
