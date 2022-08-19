import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Amplify from 'aws-amplify';
import cognito from './config'
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

Amplify.configure({
  Auth: {
    mandatorySignId: true,
    region: cognito.cognito.REGION,
    userPoolId: cognito.cognito.USER_POOL_ID,
    userPoolWebClientId: cognito.cognito.APP_CLIENT_ID
  }
})


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

