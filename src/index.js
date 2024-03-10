import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Counter from './Counter';
import BGColor from './bgcolor';
import SignUp from './signup';
import LogIn from './login';
import Home from './home';
import ForgetPassword from './forgetpass';
import EditProfile from './EditProfile';
import Sum from './Sum';
import TODO from './TODO';
import NameGender from './namegender';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
