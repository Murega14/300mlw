import React, { useState } from 'react';
import { CartContext } from '../context/cart.jsx';

const Checkout = () => {
  const [location, setLocation] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const { getCartTotal } = React.useContext(CartContext);

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle the submission logic here, such as sending data to the server
    console.log('Location:', location);
    console.log('Payment Method:', paymentMethod);
  };

  return (
    <div>
      <header className="flex flex-colspace-around">
      <h2 className="text-black">Checkout</h2>
      <p className="text-yellow-600"> Ksh{getCartTotal()}</p>
      </header>
      
    </div>
  );
};

export default Checkout;
