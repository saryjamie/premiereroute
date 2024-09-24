

import React from 'react';
import './Services.css'; // Ensure this CSS file is correctly linked

const Services = () => {
  return (
    <div className="services">
      <h1>Our Services</h1>

      <div className="services-grid">
        <div className="service-card">
          <h4>Airport Transfers</h4>
          <img src="/img/airport.jpg" alt="Airport Transfers" />
        </div>

        <div className="service-card">
          <h4>Wedding Transportation</h4>
          <img src="/img/wedding.jpg" alt="Wedding Transportation" />
        </div>

        <div className="service-card">
          <h4>Corporate Events</h4>
          <img src="/img/corporate.jpg" alt="Corporate Events" />
        </div>

        <div className="service-card">
          <h4>City Tours</h4>
          <img src="/img/city.jpg" alt="City Tours" />
        </div>
      </div>
    </div>
  );
};

export default Services;
