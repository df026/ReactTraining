import './App.css';
import User from './bgcolor'
import React, { Component } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './signup';
import LogIn from './login';
import Home from './home';
import ForgetPassword from './forgetpass';
import EditProfile from './EditProfile';
import General from './General';
import BGColor from './bgcolor';
import Counter from './Counter';
import NameGender from './namegender';
import Sum from './Sum';
import TODO from './TODO';

function App() {
  return (
    <div className="App">
       <Router>
        <Routes>
          <Route path="/" element={<General />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<LogIn />} />
          <Route path='/home' element={<Home />} />
          <Route path='/changePassword' element={<ForgetPassword />} />
          <Route path='/editProfile' element={<EditProfile/>} />
          <Route path='/bgcolor' element={<BGColor/>} />
          <Route path='/counter' element={<Counter/>} />
          <Route path='/namegender' element={<NameGender/>} />
          <Route path='/sum' element={<Sum/>} />
          <Route path='/todo' element={<TODO/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
