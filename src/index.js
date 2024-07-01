import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot from react-dom/client
import App from './App';
import { PublicClientApplication, EventType } from '@azure/msal-browser'; // Import EventType
import { msalConfig } from './Config';

const msalInstance = new PublicClientApplication(msalConfig);

if (!msalInstance.getActiveAccount() && msalInstance.getAllAccounts().length > 0) {
  msalInstance.setActiveAccount(msalInstance.getAllAccounts()[0]);
}

msalInstance.addEventCallback((event) => {
  if (event.eventType === EventType.LOGIN_SUCCESS && event.payload.account) {
    const account = event.payload.account;
    msalInstance.setActiveAccount(account);
  }
});

const container = document.getElementById('root');
const root = createRoot(container); // Create a root using createRoot

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
