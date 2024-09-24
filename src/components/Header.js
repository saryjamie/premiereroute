import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav className="navbar">
        <Link to="/" className="navbar-brand">
          <img src="/img/logob.png" alt="Premiere Route Limo" className="logo" />
          <span className="brand-name">PREMIERE ROUTE</span>
        </Link>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">About</Link>
          </li>
          <li className="nav-item">
            <Link to="/services" className="nav-link">Services</Link>
          </li>
          <li className="nav-item">
            <Link to="/fleet" className="nav-link">Fleet</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
