import React, { useEffect, useState } from 'react';

const Cart = ({ cart, setCart, handleChange }) => {
  const [price, setPrice] = useState(0);

  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
  };

  useEffect(() => {
    const calculatePrice = () => {
      let totalPrice = 0;
      if (cart && cart.length > 0) {
        cart.forEach((item) => {
          totalPrice += item.quantity * parseFloat(item.price.replace('Ksh ', ''));
        });
      }
      setPrice(totalPrice);
    };

    calculatePrice();
  }, [cart]);

  return (
    <article>
      {cart && cart.length > 0 ? (
        cart.map((item) => (
          <div className="cart_box" key={item.id}>
            <div className="cart_img">
              <img src={item.Image} alt={item.name} />
              <p>{item.name}</p>
            </div>
            <div>
              <button onClick={() => handleChange(item, 1)}>+</button>
              <button>{item.quantity}</button>
              <button onClick={() => handleChange(item, -1)}>-</button>
            </div>
            <div>
              <span>Ksh {parseFloat(item.price.replace('Ksh ', '')) * item.quantity}</span>
              <button onClick={() => handleRemove(item.id)}>Remove</button>
            </div>
          </div>
        ))
      ) : (
        <p>Your cart is empty.</p>
      )}
      <div className="cart_total">
        <p>Total: Ksh {price}</p>
      </div>
    </article>
  );
};

export default Cart;
