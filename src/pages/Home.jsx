import React, { useState } from 'react';
import './Home.css';
import Hero from '../components/Hero/Hero';
import Ginsellers from './Ginsellers';
import Whiskeysellers from './Whiskeysellers';

const Home = () => {
  const [cart, setCart] = useState([]);

  
  const handleClick = (card) => {
    if (cart.findIndex((cartItem) => cartItem.id === card.id) === -1) {
      setCart([...cart, { ...card, amount: 1 }]);
    }
  };

  const handleChange = (card, d) => {
    const updatedCart = cart.map((cartItem) =>
      cartItem.id === card.id ? { ...cartItem, amount: cartItem.amount + d } : cartItem
    );
    setCart(updatedCart.filter((cartItem) => cartItem.amount > 0));
  };

  return (
    <div className='home'>
      <div className="cube-container">
      <div className="cube"></div>
      <div className="cube"></div>
      <div className="cube"></div>
      <div className="cube"></div>
      <div className="cube"></div>
      <div className="cube"></div>
      <div className="cube"></div>
      <div className="cube"></div>
      <div className="cube"></div>
      <div className="cube"></div>
      <div className='header'>
       
    </div>
    </div>
    </div>
    
  );
};

export default Home;
