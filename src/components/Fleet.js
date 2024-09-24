import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Fleet.css';

const Fleet = () => {
  const navigate = useNavigate();
  return (
    <section className="fleet">
      <h2>Our Fleet</h2>
      <p>Explore our luxury fleet and find the perfect vehicle for your special occasion. From elegant sedans to spacious SUVs, we have the ideal ride to suit your needs and style.</p>

      <div className="fleet-grid">
        <div className="fleet-card">
          <h3>Sedans</h3>
          <img src="/img/bmw1.jpg" alt="BMW 5 Series" />
          <h4>BMW 5 Series</h4>
          <p>Seats up to 3 passengers</p>
          <p>Features: Luxurious leather interior, climate control, advanced sound system, complimentary bottled water</p>
          <p>Ideal for: Business travel, airport transfers, and special occasions</p>
        </div>

        <div className="fleet-card">
          <h3>SUVs</h3>
          <img src="/img/expedition1.jpg" alt="Ford Expedition" />
          <h4>Ford Expedition</h4>
          <p>Seats up to 6 passengers</p>
          <p>Features: Spacious interior, premium sound system, tinted windows, complimentary bottled water and more</p>
          <p>Ideal for: Family trips, small groups, and business events</p>
        </div>
      </div>

      <div className='fleet-call'>
        <h5>Ready to ride in style? Contact us today to book your luxury vehicle and experience first-class travel. (858)888-1577</h5>
        <div className='fleet-book'>
          <button onClick={() => navigate('/booking')} class="btn">BOOK NOW</button>
        </div>
      </div>

    </section>
  );
};

export default Fleet;
