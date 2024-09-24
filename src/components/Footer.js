import React from 'react';
import './Footer.css'; // Create a CSS file for styling

const Footer = () => {
  return (
    <footer className="bg-light text-center text-lg-start">
      <div className="container p-4">
        <div className="text-center p-3">
          &copy; {new Date().getFullYear()} Premiere Route. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
