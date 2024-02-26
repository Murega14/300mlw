import React from 'react';
import { CartContext } from '../context/cart.jsx';

const Checkout = () => {
  const { getCartTotal } = React.useContext(CartContext);

  return (
    <div>
      <header className="flex flex-colspace-around">
      <h2 className="text-black">Checkout</h2>
      <p className="text-yellow-600"> Ksh{getCartTotal()}</p>
      </header>
      <section className="text-black font-sans">

      </section>
    </div>
  );
};

export default Checkout;
