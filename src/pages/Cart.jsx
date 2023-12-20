import React, { useEffect, useState } from 'react';

const Cart = ({ cart, setCart, handleChange }) => {
  const [price, setPrice] = useState(0);

  const handleRemove = (id) => {
    const arr = cart.filter((card) => card.id !== id);
    setCart(arr);
  };

  useEffect(() => {
    const handlePrice = () => {
      let ans = 0;
      if (cart && cart.length > 0) {
        cart.forEach((card) => (ans += card.amount * parseFloat(card.price.replace('Ksh ', ''))));
      }
      setPrice(ans);
    };

    handlePrice();
  }, [cart]); // Run when cart changes

  return (
    <article>
      {cart && cart.length > 0 ? (
        cart.map((card) => (
          <div className="cart_box" key={card.id}>
            <div className="cart_img">
              <img src={card.Image} alt={card.name} />
              <p>{card.name}</p>
            </div>
            <div>
              <button onClick={() => handleChange(card, 1)}>+</button>
              <button>{card.amount}</button>
              <button onClick={() => handleChange(card, -1)}>-</button>
            </div>
            <div>
              <span>Ksh {card.price}</span>
              <button onClick={() => handleRemove(card.id)}>Remove</button>
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
