import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom'; // Import useLocation to get passed data and useNavigate to go back to Booking
import './Payment.css'; // Import the CSS file for styling

const Payment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Extract the selected service and form data passed from the Booking page
  const { selectedService, formData, startDate } = location.state || {}; 

  // Initialize the cart state with the selected service (if available)
  const [cart, setCart] = useState(selectedService ? [selectedService] : []);

  // Function to handle item removal from the cart
  const handleRemoveItem = () => {
    setCart([]); // Remove all items from the cart
  };

  // Handle form submission for payment
  const handleSubmit = (event) => {
    event.preventDefault();
    if (cart.length === 0) {
      alert("Your cart is empty!");
    } else {
      console.log('Payment processed');
      // Payment logic goes here
    }
  };

  // Function to navigate back to the Booking page
  const goBackToBooking = () => {
    navigate('/booking'); // Redirect to the booking page
  };

  return (
    <div className="payment-container">
      <h1>Checkout</h1>

      {/* If the cart is empty, show "Your cart is empty" and the back button */}
      {cart.length === 0 ? (
        <div className="empty-cart">
          <p>Your cart is empty.</p>
          <button onClick={goBackToBooking} className="back-btn">Back to Booking</button>
        </div>
      ) : (
        <>
          {/* Display selected service(s) in the cart */}
          <div className="cart-summary">
            <h2>Cart Summary</h2>
            {cart.map((service, index) => (
              <div key={index} className="cart-item">
                <p><strong>Service:</strong> {service.name}</p>
                <p><strong>Description:</strong> {service.description}</p>
                <p><strong>Price:</strong> {service.price}</p>
                <button onClick={handleRemoveItem} className="remove-btn">Remove</button>
                <hr />
              </div>
            ))}
            {formData && startDate && (
              <>
                <p><strong>Pick-Up Address:</strong> {formData.pickupAddress}</p>
                <p><strong>Drop-Off Address:</strong> {formData.dropoffAddress}</p>
                <p><strong>Pick-Up Time:</strong> {startDate.toLocaleString()}</p>
              </>
            )}
          </div>

          {/* Payment Form */}
          <form onSubmit={handleSubmit} className="payment-form">
            <h2>Payment Information</h2>
            <div className="form-group">
              <label htmlFor="cardName">Name on Card</label>
              <input type="text" id="cardName" name="cardName" className="form-input" required />
            </div>
            <div className="form-group">
              <label htmlFor="cardNumber">Card Number</label>
              <input
                type="text"
                id="cardNumber"
                name="cardNumber"
                className="form-input"
                maxLength="16"
                required
              />
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="expiryDate">Expiry Date</label>
                <input
                  type="text"
                  id="expiryDate"
                  name="expiryDate"
                  placeholder="MM/YY"
                  className="form-input"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="cvv">CVV</label>
                <input
                  type="text"
                  id="cvv"
                  name="cvv"
                  maxLength="3"
                  className="form-input"
                  required
                />
              </div>
            </div>
            <button type="submit" className="submit-btn">Pay Now</button>
          </form>
        </>
      )}
    </div>
  );
};

export default Payment;
