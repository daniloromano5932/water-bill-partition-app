import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LogInPage from './components/LogInPage';
import Interno from './components/Interno';
import Amministratore from './components/Amministratore';
import LogInAdmin from "./components/LogInAdmin";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/LogInPage' element={<LogInPage />} />
      <Route path='/LogInAdmin' element={<LogInAdmin />} />
      
      <Route path="/interno/:personId" element={<Interno />} />
      <Route path="/Amministratore" element={<Amministratore />} />
      <Route path='/' element={<App />} />
    </Routes>
  </BrowserRouter>
);
