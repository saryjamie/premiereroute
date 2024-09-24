// import React, { useState } from 'react';
// import './Form.css';

// const FormSection = () => {
//   const [cart, setCart] = useState([]);

//   const addToCart = (service) => {
//     setCart([...cart, service]);
//   };

//   const removeFromCart = (index) => {
//     const newCart = [...cart];
//     newCart.splice(index, 1);
//     setCart(newCart);
//   };

//   const submitCart = () => {
//     console.log('Services booked:', cart);
//     alert('Your services have been booked!');
//   };

//   return (
//     <div className="form-section">
//       <h2>Select Services</h2>
      
//       <div className="services-buttons">
//         <button onClick={() => addToCart('Airport Transfers')}>Airport Transfers</button>
//         <button onClick={() => addToCart('Wedding Transportation')}>Wedding Transportation</button>
//         <button onClick={() => addToCart('Corporate Events')}>Corporate Events</button>
//         <button onClick={() => addToCart('City Tours')}>City Tours</button>
//       </div>
      
//       <div className="cart">
//         <h3>Your Cart</h3>
//         <ul>
//           {cart.map((item, index) => (
//             <li key={index}>{item} <button onClick={() => removeFromCart(index)}>Remove</button></li>
//           ))}
//         </ul>
//         <button onClick={submitCart} className="btn">Book Now</button>
//       </div>
//     </div>
//   );
// };

// export default FormSection;
