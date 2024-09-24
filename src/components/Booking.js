
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import './Booking.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Booking = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [startDate, setStartDate] = useState(null); // Default to null for empty state
  const [formData, setFormData] = useState({
    pickupAddress: '',
    dropoffAddress: '',
  });
  const [formSubmitted, setFormSubmitted] = useState(false); // Track if the form was submitted
  const [validationErrors, setValidationErrors] = useState({}); // Track which fields are invalid
  const navigate = useNavigate(); // Initialize useNavigate for redirection

  const handleFormSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    const formData = new FormData(event.target);
    const pickupAddress = formData.get('pickupAddress');
    const dropoffAddress = formData.get('dropoffAddress');

    // Validate required fields
    const errors = {};
    if (!pickupAddress) errors.pickupAddress = true;
    if (!dropoffAddress) errors.dropoffAddress = true;
    if (!startDate) errors.startDate = true;

    setValidationErrors(errors);

    if (Object.keys(errors).length > 0) {
      return; // Don't submit if there are errors
    }

    // Store the form data and set formSubmitted to true to display the summary within the form
    setFormData({
      pickupAddress,
      dropoffAddress,
    });
    setFormSubmitted(true); // Indicate form has been submitted

    console.log('Pick-Up Address:', pickupAddress);
    console.log('Drop-Off Address:', dropoffAddress);
    console.log('Pick-Up Time:', startDate);
  };

  const services = [
    { name: 'One Way Reservation', description: 'Book a one-way trip to your destination.', price: '$120' },
    { name: 'Hourly Booking', description: 'Choose flexible hourly rates.', price: '' },
    { name: 'Full Day Booking', description: 'Enjoy 8 hours of service.', price: '$600' },
  ];

  const handleServiceSelect = (service) => {
    if (service.name === 'Hourly Booking') {
      setShowModal(true);
      setSelectedService({ name: service.name, description: '', price: '' });  // Prepare for modal selection
    } else {
      setSelectedService({ name: service.name, description: '', price: service.price });
      setShowModal(false);
    }
  };

  const handleModalOptionSelect = (option) => {
    const [hours, price] = option.split(': '); // Split the selected option into hours and price
    setSelectedService({
      ...selectedService,
      description: hours,
      price: price
    });
    setShowModal(false);
  };

  const closeModal = () => {
    if (!selectedService.price) {
      setSelectedService(null);
    }
    setShowModal(false);
  };

  const submitBooking = () => {
    if (!formData.pickupAddress || !formData.dropoffAddress || !startDate) {
      setValidationErrors({
        pickupAddress: !formData.pickupAddress,
        dropoffAddress: !formData.dropoffAddress,
        startDate: !startDate,
      });
      return;
    }

    console.log(`Service selected: ${selectedService.name} - ${selectedService.description} at ${selectedService.price}`);
    
    // Redirect to the payment page
    navigate('/payment', {
      state: {
        selectedService, // Pass the selected service details
        formData,        // Pass the form data like pickup and dropoff address
        startDate,       // Pass the selected date
      }
    });
  };

  return (
    <div className="booking-container">
      <div className="booking-content">
        <h1>Book Your Trip</h1>
        
        <p>Choose the address and time then select the service that best fits your needs and book now for a luxury travel experience.</p>

        {/* Form for Pickup, Dropoff, and Time */}
        <form onSubmit={handleFormSubmit} noValidate>
          <label htmlFor="pickup-address" className="form-label">Pick-Up Address</label>
          <input
            type="text"
            id="pickup-address"
            name="pickupAddress"
            className={`form-input ${validationErrors.pickupAddress ? 'error' : ''}`} // Add error class
            placeholder='Select Pick-Up Address'
            required
          />
          {validationErrors.pickupAddress && <span className="error-popup">Please fill out this field</span>}
          
          <label htmlFor="dropoff-address" className="form-label">Drop-Off Address</label>
          <input
            type="text"
            id="dropoff-address"
            name="dropoffAddress"
            className={`form-input ${validationErrors.dropoffAddress ? 'error' : ''}`} // Add error class
            placeholder='Select Drop-Off Address'
            required
          />
          {validationErrors.dropoffAddress && <span className="error-popup">Please fill out this field</span>}
          
          <label htmlFor="pickup-time" className="form-label">Pick-Up Time</label>
          <DatePicker
            selected={startDate}
            onChange={date => setStartDate(date)}
            showTimeSelect
            dateFormat="MMMM d, yyyy h:mm aa"
            timeFormat="h:mm aa"
            timeIntervals={15}
            className={`form-input ${validationErrors.startDate ? 'error' : ''}`} // Add error class
            placeholderText="Select a date and time"
            required
          />
          {validationErrors.startDate && <span className="error-popup">Please select a date and time</span>}
          <button type="submit" className="form-submit">Submit</button>

          {/* Booking Summary will be shown after the form is submitted */}
          {formSubmitted && (
            <div className="booking-summary">
              <h2>Booking Summary</h2>
              <p><strong>Pick-Up Address:</strong> {formData.pickupAddress}</p>
              <p><strong>Drop-Off Address:</strong> {formData.dropoffAddress}</p>
              <p><strong>Pick-Up Time:</strong> {startDate.toLocaleString()}</p>
              {selectedService && (
                <p><strong>Service:</strong> {selectedService.name} - {selectedService.price}</p>
              )}
            </div>
          )}
        </form>

        {/* Services List */}
        <ul className="services-list">
          {services.map((service, index) => (
            <li key={index} className="service-item">
              <div className="service-description">
                <h3>{service.name}</h3>
                <p>{service.description}</p>
              </div>
              <button onClick={() => handleServiceSelect(service)} className="select-button">Select</button>
            </li>
          ))}
        </ul>

        {/* Service Booking Summary */}
        {selectedService && selectedService.price && (
          <div className="booking-summary">
            <p>You have selected <span className="service-name">{selectedService.name}</span> <span className="service-name">{selectedService.description}</span><span className="price"> {selectedService.price}</span></p>
            <button onClick={submitBooking} className="btnbk">Confirm Booking</button>
          </div>
        )}

        {/* Modal for Hourly Options */}
        {showModal && (
          <div className="modal-overlay">
            <div className="modal-content">
              <h2>Select Hourly Option</h2>
              <ul>
                <li onClick={() => handleModalOptionSelect('1 hour: $112')}>1 hour: $112</li>
                <li onClick={() => handleModalOptionSelect('2 hours: $204')}>2 hours: $204</li>
                <li onClick={() => handleModalOptionSelect('3 hours: $290')}>3 hours: $290</li>
                <li onClick={() => handleModalOptionSelect('4 hours: $340')}>4 hours: $340</li>
                <li onClick={() => handleModalOptionSelect('5 hours: $400')}>5 hours: $400</li>
                <li onClick={() => handleModalOptionSelect('6 hours: $480')}>6 hours: $480</li>
                <li onClick={() => handleModalOptionSelect('7 hours: $560')}>7 hours: $560</li>
              </ul>
              <button onClick={closeModal} className="btn-close">Close</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Booking;