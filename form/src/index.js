import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Login'
import Main from './Main'
import Register from './Register'
import Workflow from './Workflow'
import Tags from './Tags';
import Tasks from './Tasks';
import Setting from './Setting';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    
    <Route path='/' element={<Login />}/>
    <Route path='/login' element={<Login />}/>
    <Route path='/register' element={<Register />}/>
    <Route path='/main' element={<Main />}/>
    <Route path='/Workflow' element={<Workflow />}/>
    <Route path='/Tags' element={<Tags />}/>
    <Route path='/Setting' element={<Setting />}/>
    <Route path='./Tasks' element={<Tasks />}/>
    
   
    
  </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
