import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"

// https://stackoverflow.com/questions/64618392/attempted-import-error-app-is-not-exported-from-firebase-app-imported-as/66708552
import * as firebaseui from 'firebaseui'

const firebaseApp = initializeApp({
  apiKey: "AIzaSyBaHZPAPMoGPR3YF2rOfrbNOkarhlJJ1II",
  authDomain: "maud-ave.firebaseapp.com",
  projectId: "maud-ave",
  appId: "1:321373670910:web:cfeae88fb5cf3fc5dc84af",
});

const auth = getAuth(firebaseApp);
var ui = new firebaseui.auth.AuthUI(auth);


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
