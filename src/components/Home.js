import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';


const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="home">
      <div className="hero">
        <div className="overlay"></div> {/* Add an overlay for better text contrast */}
        <div className="hero-text">
          <h1>Welcome to DFW Transportation</h1>
          <h3>By Premiere Route</h3>
          <p>Luxury for Business, Comfort for Families.</p>
          {/* <a href="/booking" class="btn">BOOK A TRIP</a> */}
          <button onClick={() => navigate('/booking')} class="btn" id="bookTripBtn">BOOK A TRIP</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
