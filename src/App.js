import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Booking from './components/Booking';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Fleet from './components/Fleet';
import Contact from './components/Contact';
import Payment from './components/Payment';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/fleet" element={<Fleet/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/booking" element={<Booking/>} />
        <Route path="/payment" element={<Payment/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
