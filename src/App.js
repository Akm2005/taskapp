import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Header from './Components/Header';
import Footer from './Components/Footer';
import './App.css'
import Register from './Components/Register';
import Dashboard from './Components/Dashboard';

const App = () => {
  return (
    <BrowserRouter>
      <div style={{ backgroundColor: '#F3E3F1', height: '100vh', overflow: 'hidden' }}>
        <Header/>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
